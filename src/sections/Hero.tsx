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

// import { useLayoutEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

const Hero = () => {

  // useLayoutEffect(() => {

  //   gsap.registerPlugin(ScrollTrigger);

  //   const h1 = document.querySelector("#mainLogo");


  //   const h1CurrentPos = h1!.getBoundingClientRect();

  //   const h1X = h1CurrentPos.x;
  //   const h1Y = h1CurrentPos.y * -1;

  //   const width = document.documentElement.clientWidth;


  //   const toTopCornerx = (width / 2 - h1X);

  //   console.log(h1Y)


  //   gsap.to(h1, {

  //     x: toTopCornerx * -1,
  //     y: h1Y + 64,
  //     scale: 0.25,
  //     position: "fixed",

  //     duration: 1,
  //     ease: "power2.inOut",
  //     scrollTrigger: {
  //       trigger: "#heroSection",
  //       start: "top top",
  //       end: "bottom top",

  //       scrub: true,

  //     },
  //   });
  // }, []);

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