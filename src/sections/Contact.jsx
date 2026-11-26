import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { contactInfo, contactInterests } from "../constants";

gsap.registerPlugin(ScrollTrigger);

/* ---------- Small inline icons (inherit currentColor) ---------- */
const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6 8.5 7 8.5-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.25 7a1.97 1.97 0 0 0 0-3.94ZM20.44 13.3c0-3.1-1.66-4.55-3.87-4.55a3.34 3.34 0 0 0-3.02 1.66V8.5h-3.38V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.39v-6.7Z" />
  </svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const contactRows = [
  contactInfo.email && {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: <MailIcon />,
  },
  contactInfo.linkedin && {
    label: "LinkedIn",
    value: "Connect with me",
    href: contactInfo.linkedin,
    icon: <LinkedInIcon />,
  },
  contactInfo.github && {
    label: "GitHub",
    value: contactInfo.github.replace(/^https?:\/\/(www\.)?/, ""),
    href: contactInfo.github,
    icon: <GitHubIcon />,
  },
  contactInfo.location && {
    label: "Based in",
    value: contactInfo.location,
    icon: <PinIcon />,
  },
].filter(Boolean);

/* Underlined field styles (utilities override the global `form input` styles) */
const labelClass =
  "!mb-0 block text-xs font-semibold uppercase tracking-[0.2em] !text-black-50";
const fieldClass =
  "mt-3 w-full !rounded-none border-0 border-b-2 border-black/15 !bg-transparent !px-0 !py-3 text-base text-black placeholder:!text-black/35 transition-colors duration-300 focus:border-[#52aeff] focus:outline-none";

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [interests, setInterests] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useGSAP(
    () => {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".contact-card", start: "top 75%" },
      });
      tl.from(".contact-card", { y: 60, opacity: 0, duration: 0.9, ease: "power3.out" })
        .from(".contact-reveal", { y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power2.out" }, "-=0.5")
        .from(".contact-field", { y: 20, opacity: 0, stagger: 0.08, duration: 0.6, ease: "power2.out" }, "<0.1");
    },
    { scope: sectionRef }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleInterest = (item) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
      setInterests([]);
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="flex-center section-padding">
      <div className="site-container">
        <TitleHeader title="Let's Connect" />

        <div className="contact-card mt-16 grid w-full overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] xl:grid-cols-12">
          {/* ---------- Left: dark intro panel ---------- */}
          <div className="relative overflow-hidden bg-black-100 p-8 text-white md:p-14 xl:col-span-5">
            {/* Giant watermark word */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -left-4 select-none text-[9rem] font-black leading-none tracking-tighter text-white/[0.04] md:text-[14rem]">
              HELLO
            </span>
            {/* Floating gradient glow (same blues as the experience timeline) */}
            <div aria-hidden="true" className="contact-glow pointer-events-none absolute -bottom-32 -right-24 size-96 rounded-full bg-[radial-gradient(circle,#62e0ff_0%,#52aeff_35%,transparent_70%)] opacity-30 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col">
              <p className="contact-reveal text-xs font-semibold uppercase tracking-[0.35em] text-blue-50">
                Get in touch
              </p>

              <h3 className="contact-reveal mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
                Let&apos;s build
                <br />
                something that{" "}
                <span className="bg-linear-to-r from-[#62e0ff] to-[#52aeff] bg-clip-text text-transparent">
                  matters.
                </span>
              </h3>

              <p className="contact-reveal mt-6 max-w-md text-base leading-relaxed text-white-50/70 md:text-lg">
                Have an app idea, a role in mind, or just want to say hi? Drop me a
                message and I&apos;ll get back to you soon.
              </p>

              <ul className="mt-10 flex flex-col gap-5">
                {contactRows.map(({ label, value, href, icon }) => {
                  const content = (
                    <>
                      <span className="flex size-12 flex-none items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 group-hover:border-[#52aeff]/60 group-hover:text-[#62e0ff]">
                        {icon}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs uppercase tracking-[0.2em] text-blue-50">{label}</span>
                        <span className="text-base text-white transition-colors duration-300 group-hover:text-[#62e0ff]">
                          {value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={label} className="contact-reveal">
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("mailto:") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="group flex items-center gap-4">
                          {content}
                        </a>
                      ) : (
                        <div className="group flex items-center gap-4">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="contact-reveal mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white-50 xl:mt-auto">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
                </span>
                Open to new opportunities
              </div>
            </div>
          </div>

          {/* ---------- Right: form ---------- */}
          <div className="p-8 md:p-14 xl:col-span-7">
            <h4 className="contact-reveal text-2xl font-bold text-black md:text-3xl">
              Send me a message
            </h4>
            <p className="contact-reveal mt-2 text-black-50/70">
              I usually reply within a day or two.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 md:grid-cols-2">
              <div className="contact-field">
                <label htmlFor="name" className={labelClass}>Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What should I call you?"
                  className={fieldClass}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email" className={labelClass}>Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Where can I reach you?"
                  className={fieldClass}
                  required
                />
              </div>

              <fieldset className="contact-field md:col-span-2">
                <legend className={labelClass}>I&apos;m interested in</legend>
                <div className="mt-4 flex flex-wrap gap-3">
                  {contactInterests.map((item) => {
                    const active = interests.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggleInterest(item)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          active
                            ? "border-black bg-black text-white"
                            : "border-black/15 text-black-50 hover:border-black/40"
                        }`}>
                        {item}
                      </button>
                    );
                  })}
                </div>
                {/* Sent to EmailJS as {{interests}} */}
                <input type="hidden" name="interests" value={interests.join(", ")} />
              </fieldset>

              <div className="contact-field md:col-span-2">
                <label htmlFor="message" className={labelClass}>Your message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your idea or role..."
                  rows="4"
                  className={`${fieldClass} resize-none`}
                  required
                />
              </div>

              <div className="contact-field flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:gap-5 hover:bg-black-200 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto">
                  {loading ? "Sending..." : "Send Message"}
                  <span className="flex size-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:-rotate-45">
                    <ArrowIcon />
                  </span>
                </button>

                <p role="status" aria-live="polite" className="text-sm">
                  {status === "success" && (
                    <span className="text-emerald-600">Thanks! Your message is on its way.</span>
                  )}
                  {status === "error" && (
                    <span className="text-red-600">Something went wrong. Please try again.</span>
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
