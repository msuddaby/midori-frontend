import { CssVarsProvider } from "@mui/joy";
import "./App.css";
import BestOf from "./sections/BestOf";
import Friends from "./sections/Friends";
import Hero from "./sections/Hero";
import WhoIs from "./sections/WhoIs";
import Contact from "./sections/Contact";
import Lenis from "@studio-freight/lenis";
import { useLayoutEffect } from "react";
import NewOfferings from "./sections/NewOfferings";
// import { useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap-trial/all";
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const theme = extendTheme({
//   colorSchemes: {
//     light: {
//       palette: {

//       }
//     }
//   }
// })

function App() {
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     ScrollSmoother.create({
  //       smooth: 2,
  //       effects: true,
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  // useLayoutEffect(() => {
  //   gsap.to(".big-text.anim", {
  //     webkitTextStroke: "8px black",
  //     color: "white",
  //     delay: 1,
  //     duration: 1,
  //     ease: "power2.inOut",
  //   });
  // }, []);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      // infinite: true,
      lerp: 0.05,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  });

  return (
    <>
      <CssVarsProvider defaultMode="dark">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {/* <p className="big-text anim">Testing testing</p>
            <p className="big-text secondary">Testing testing</p> */}

            <Hero />
            <WhoIs />
            <NewOfferings />
            <BestOf />
            <Friends />
            <Contact />
          </div>
        </div>
      </CssVarsProvider>
    </>
  );
}

export default App;
