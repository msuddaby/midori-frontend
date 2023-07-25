// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useLayoutEffect } from "react";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {

//   useLayoutEffect(() => {
//     // gsap.to("#companyName", {
//     //   scrollTrigger: {
//     //     trigger: "#companyName",
//     //     start: "top top",
//     //     end: "bottom 100px",
//     //     scrub: true,
//     //     pin: true,
//     //     pinType: "transform",
//     //     markers: true,
//     //   },
//     //   y: 0,
//     //   x: "-30%",
//     //   opacity: 1,
//     //   duration: 2,
//     //   position: "sticky",
//     //   top: 0,

//     //   ease: "power2.inOut",
//     //   onComplete: () => {
//     //     console.log("done");
//     //   },
//     // });
//     // var action = gsap.set("#companyName", {
//     //   position: "fixed",
//     //   color: 'red',
//     //   top: 0,
//     //   left: 0,
//     //   paused: true,
//     //   duration: 1,
//     //   ease: "power2.inOut",
//     // });





//     ScrollTrigger.create({
//       trigger: "#heroSection",
//       start: "25% top",
//       end: "bottom 100px",
//       markers: true,
//       //onEnter: () => action.play(),
//     });


//   }, []);

//   return (
//     <>
//       <section id="heroSection" className="bg-black text-white min-h-screen min-w-screen p-0 relative m-auto text-center">
//       <h1 id="companyName"  className="text-6xl font-bold m-auto w-full top-1/2 text-center absolute inline-block text-white">Midori Creative</h1>
        
//         <div  className="w-full m-auto inline-block origin-top-left">
          
//         </div>
//       </section>
//     </>
//   );
// }

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const h1 = document.querySelector("#mainLogo");
    const app = document.querySelector("html");

    const h1CurrentPos = h1!.getBoundingClientRect();

    const h1X = h1CurrentPos.x;
    const h1Y = h1CurrentPos.y * -1;

    // const h1width = h1!.clientWidth;
    // const h1height = h1!.clientHeight;
    const width = window.innerWidth;
    const height = window.innerHeight;
    // const width = app!.clientWidth;
    // const height = app!.clientHeight;

    console.log(height);
    console.log(h1Y);
    const toTopCornerx = (width / 2 - h1X);
    const toTopCornery = (height / 2 - h1Y);

    // const toTopCornerx = (width / 2 - h1width / 2) - 24;
    // const toTopCornery = (height / 2 - h1height / 2) - 115;

    console.log("topCornerY " + toTopCornery);
    console.log(toTopCornery - height);

    gsap.to(h1, {
      // x: "-40vw",
      // y: "-40vh",
      x: toTopCornerx * -1,
      y: h1Y + 24,
      scale: 0.25,
      position: "fixed",
      // top: "50%",
      // left: "50%",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top top",
        end: "bottom top",

        scrub: true,
        // onUpdate: (self) => {
        //   if (self.direction === -1) {
        //     gsap.to(h1, {
        //       x: 0,
        //       y: 0,
        //       position: "relative",
        //       top: "auto",
        //       left: "auto",
        //       duration: 1,
        //       ease: "power2.inOut",
        //     });
        //   }
        // },
      },
    });
  }, []);

  return (
    <>
      <section id="heroSection" className="w-screen h-screen bg-black text-white flex items-center justify-center">
        {/* <h1 className="text-4xl origin-top-left">My Hero Section</h1> */}
        <img id="mainLogo" src="./logo.png" alt="Midori Creative Logo" className="w-1/2 origin-top-left" />
      </section>
    </>
  );
};


export default Hero;