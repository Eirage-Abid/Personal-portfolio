import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards, expWords } from "../constants";
import TitleHeader from "../components/TitleHeader";
import { monthsInRange, formatDuration } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

// Durations are worked out from each role's date range, so they stay current
const totalMonths = expCards.reduce((sum, card) => sum + monthsInRange(card.date), 0);
const totalYears = Math.floor(totalMonths / 12);

const Experience = () => {
  useGSAP(() => {
    // Respect users who prefer reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // No animation: remove the white cover so the full timeline line is visible
      gsap.set(".timeline", { scaleY: 0 });
      return;
    }

    // Intro text: heading lines rise in one after another (like the hero),
    // then the paragraph fades in
    gsap.from(".exp-intro h1, .exp-intro p", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".exp-intro",
        start: "top 80%",
      },
    });

    // Reveal the gradient timeline line as the user scrolls: the white
    // .timeline cover shrinks from the top, tied directly to scroll position
    // (scrub), so it always matches where you are in the section.
    gsap.fromTo(
      ".timeline",
      { scaleY: 1 },
      {
        scaleY: 0,
        ease: "none",
        transformOrigin: "bottom center",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      }
    );

    // Fonts and images can change the page height after this runs, which would
    // leave the scroll positions stale. Re-measure once everything has loaded.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Fade the text in over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });

    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <section
      id="experience"
      className="flex-center px-5 md:px-10 md:mt-16 mt-10"
    >
      <div className="site-container">
        <TitleHeader title="My Experience" />

        <div className="md:mt-24 mt-16 flex flex-col xl:flex-row xl:gap-20 gap-14">
          {/* Left: hero-style summary of my experience */}
          <div className="xl:w-2/6 xl:self-center">
            <div className="exp-intro">
              <h1>{totalYears}+ Years of</h1>
              <h1>Building for</h1>
              <h1>
                {/* Rotating word, like the hero's word slider */}
                <span className="exp-slide">
                  <span className="exp-slide-track">
                    {[...expWords, expWords[0]].map((word, index) => (
                      <span key={index} className="exp-slide-word">
                        {word}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <p>
                From an Android internship to a Flutter role and now a
                Software Engineer, I&apos;ve grown by shipping real
                products, keeping systems stable, and learning on every team.
              </p>
              <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-2.5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.4)]">
                <span className="text-sm uppercase tracking-[0.2em] text-blue-50">Total experience</span>
                <span className="text-base font-semibold text-black">{formatDuration(totalMonths)}</span>
              </div>
            </div>
          </div>

          {/* Right: timeline of roles */}
          <div className="xl:w-4/6 relative z-50">
            {/* One shared timeline line for all roles. The white .timeline bar hides the
                line and is scaled away on scroll; logos sit above it (z-40 > z-30). */}
            <div className="timeline-wrapper">
              <div className="timeline" />
              <div className="gradient-line w-1 h-full" />
            </div>
            <div className="xl:space-y-16 md:space-y-14 space-y-10">
              {expCards.map((card) => (
                <div key={card.title} className="flex items-start">
                  <div className="expText flex md:gap-10 gap-5 relative z-40">
                    {card.linkedinUrl ? (
                      <a
                        href={card.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${card.company} on LinkedIn`}
                        className="timeline-logo group/logo relative transition hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        <img
                          src={card.logoPath}
                          alt={`${card.company} logo`}
                          className="size-full rounded-full object-contain p-1"
                        />
                        {/* Bubble with the company name, shown on hover / keyboard focus */}
                        <span
                          aria-hidden="true"
                          className="company-bubble pointer-events-none absolute left-1/2 top-full z-50 mt-3 flex -translate-x-1/2 translate-y-1 items-center gap-2 whitespace-nowrap rounded-full bg-black px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover/logo:translate-y-0 group-hover/logo:opacity-100 group-focus-visible/logo:translate-y-0 group-focus-visible/logo:opacity-100"
                        >
                          {card.company}
                          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium text-white/90">
                            LinkedIn
                          </span>
                        </span>
                      </a>
                    ) : (
                      <div className="timeline-logo">
                        <img
                          src={card.logoPath}
                          alt={`${card.company} logo`}
                          className="size-full rounded-full object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h1 className="font-semibold text-3xl">{card.title}</h1>
                      <p className="my-5 text-black-50">
                        🗓️&nbsp;{card.date}
                        <span className="mx-2 text-black-50/40">·</span>
                        <span className="font-medium">{formatDuration(monthsInRange(card.date))}</span>
                      </p>
                      <p className="text-[#839CB5] italic">Responsibilities</p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                        {card.responsibilities.map((responsibility, index) => (
                          <li key={index} className="text-lg">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
