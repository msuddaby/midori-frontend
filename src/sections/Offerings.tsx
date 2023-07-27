import { Box, Typography } from "@mui/joy";
import WDSDCard from "../components/WDSDCard";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Offerings() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".blurBox", {
      scrollTrigger: {
        trigger: ".blurBox",
        start: "top 60%",
        end: "50% 50%",
        scrub: true,
        markers: true,
      },
      filter: "blur(0px)",
      opacity: 1,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <>
      <section className="bg-black h-screen w-screen text-white">
        <Box
          sx={{
            display: {
              md: "flex",
            },
            flexDirection: "column",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            level="h1"
            sx={{
              mb: "2rem",
              px: "3rem",
            }}
          >
            What Does She Do?
          </Typography>
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: "1rem",
            }}
          >
            <div className="blurBox">
              <WDSDCard />
            </div>
            <div className="blurBox">
              <WDSDCard />
            </div>
            <div className="blurBox">
              <WDSDCard />
            </div>
          </Box>
        </Box>
      </section>
    </>
  );
}
