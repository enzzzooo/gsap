"use client";
// used this videonhttps://www.youtube.com/watch?v=78Ieuw_kvWI
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const scroller = useRef();
  const skills = useRef();
  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),
        end: () => "+=" + window.innerWidth,
      },
    });
    return () => {
      to.kill();
    };
  }, []);
  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden">
        <div
          id="skills"
          ref={scroller}
          className="flex overflow-x-hidden text-white w-[400vw] m-0 bg-gray-900 relative h-screen"
        >
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="https://images.pexels.com/photos/19405551/pexels-photo-19405551/free-photo-of-sunset-in-olympic-national-park-wa-us.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="1st Image"
              fill
              style={{ objectFit: "contain" }}
              className="max-w-[70vw] max-h-[60vh] m-auto"
            ></Image>
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-black"
          >
            <Image
              src="https://images.pexels.com/photos/17668734/pexels-photo-17668734/free-photo-of-builders-at-facade-of-modern-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2nd Image"
              fill
              style={{ objectFit: "contain" }}
              className="max-w-[70vw] max-h-[60vh] m-auto"
            ></Image>
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="https://images.pexels.com/photos/19405546/pexels-photo-19405546/free-photo-of-a-pink-line-is-drawn-on-the-ground-in-front-of-a-rock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              fill
              style={{ objectFit: "contain" }}
              className="max-w-[70vw] max-h-[60vh] m-auto"
            ></Image>
          </section>
        </div>
      </div>
    </div>
  );
}
