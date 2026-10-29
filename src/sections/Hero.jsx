import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/Button";
import eirageImg from "../assets/eirage-rmbg.png";
import { words } from "../constants";
const Hero = () => {
  useGSAP(() => {
    // Respect users who prefer reduced motion
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Immediately set final states without animation
      gsap.set(".hero-text h1", { y: 0, opacity: 1 });
      gsap.set(".hero-visual .visual-outer", { y: 0, opacity: 1, scale: 1 });
      gsap.set(".hero-visual .badge", { y: 0, opacity: 1, scale: 1 });
      return;
    }

    const tl = gsap.timeline();

    // hero heading entrance (staggered lines)
    tl.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.18, duration: 0.9, ease: "power2.out" },
      0
    );

    // subtle visual box pop-in (small lift & scale)
    tl.fromTo(
      ".hero-visual .visual-outer",
      { y: 18, opacity: 0, scale: 0.995 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
      "-=" + 0.45
    );

    // badges: minimal pop with a short stagger
    tl.fromTo(
      ".hero-visual .badge",
      { y: 8, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.5, ease: "power2.out" },
      "-=" + 0.35
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">

        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide"> 
                  <span className="wrapper"> 
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Solutions</h1>
              <h1>that holds Purpose</h1>
            </div>

            <p className="text-black-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Eirage, a developer who loves learning, building, and contributing where I can.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>
  <figure className="hero-visual hidden md:flex items-center justify-center">
          <div className="visual-outer">
            <div className="visual-inner  transition">
              <img src={eirageImg} alt="Eirage" className="visual-image overflow-hidden" />
            </div>
          </div>

          <div className="badge badge-top-left">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="12" rx="1" fill="currentColor" />
              <rect x="9" y="17" width="6" height="1.5" rx="0.3" fill="currentColor" />
            </svg>
            <span>Mobile App Developer</span>
          </div>

          <div className="badge badge-right-center">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <text x="50%" y="62%" textAnchor="middle" fontFamily="Mona Sans, Arial, sans-serif" fontWeight="700" fontSize="9" fill="currentColor">JS</text>
            </svg>
            <span>Web Developer</span>
          </div>

          <div className="badge badge-bottom-left">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 7L4 12l5.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M14.5 7L20 12l-5.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span>Software Engineer</span>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;