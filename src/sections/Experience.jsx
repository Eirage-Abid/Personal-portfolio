import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

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

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

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
  }, []);

  return (
    <section
      id="experience"
      className="flex-center px-5 md:px-10 xl:px-0 md:mt-16 mt-10"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="My Experience" />

        <div className="md:mt-24 mt-16 flex flex-col xl:flex-row xl:gap-20 gap-14">
          {/* Left: hero-style summary of my experience */}
          <div className="xl:w-2/6">
            <div className="exp-intro">
              <h1>2+ Years of</h1>
              <h1>Building for</h1>
              <h1>Web &amp; Mobile</h1>
              <p>
                From an Android internship to a Flutter role and now an
                Associate Software Engineer, I&apos;ve grown by shipping real
                products, keeping systems stable, and learning on every team.
              </p>
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
                    <div className="timeline-logo">
                      <img src={card.logoPath} alt="logo" />
                    </div>
                    <div>
                      <h1 className="font-semibold text-3xl">{card.title}</h1>
                      <p className="my-5 text-black-50">🗓️&nbsp;{card.date}</p>
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
