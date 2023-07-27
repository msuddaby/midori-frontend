import { CssVarsProvider } from "@mui/joy";
import "./App.css";
import BestOf from "./sections/BestOf";
import Friends from "./sections/Friends";
import Hero from "./sections/Hero";
import Offerings from "./sections/Offerings";
import WhoIs from "./sections/WhoIs";
import Contact from "./sections/Contact";
import { useLayoutEffect } from "react";
import gsap from "gsap";
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

  useLayoutEffect(() => {
    gsap.to(".big-text.anim", {
      webkitTextStroke: "8px black",
      color: "white",
      delay: 1,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <>
      <CssVarsProvider defaultMode="dark">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <p className="big-text anim">Testing testing</p>
            <p className="big-text secondary">Testing testing</p>

            {/* <Hero />
            <WhoIs />
            <Offerings />
            <BestOf />
            <Friends />
            <Contact /> */}
          </div>
        </div>
      </CssVarsProvider>
    </>
  );
}

export default App;
