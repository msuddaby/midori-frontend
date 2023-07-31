import gsap from "gsap";
import { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function burnIn() {
  //let e = new SplitText(".burn-in", { type: "chars" });
  // let p = document.querySelector(".burn-in");
  //e = shuffle(e.chars);
  const tl = gsap.timeline();
  tl.addLabel("frame1")
    .from(
      ".burn-in",
      {
        duration: 0.5,
        stagger: 0.01,
        autoAlpha: 0,
        y: 5,
        textShadow: "0px 0px 16px rgb(255, 255, 255)",
        color: "transparent",
      },
      "frame1"
    )

    .addLabel("frame2")
    .to(".burn-in", {
      duration: 1.5,
      stagger: 0.02,
      autoAlpha: 1,
      y: 0,
      textShadow: "0px 0px 0px rgb(255, 255, 255)",
      color: "fff",
    });
}

export default function WhoIs() {
  //   lines.lines!.map((line) => {
  //     const div = document.createElement("div");
  //     div.classList.add("relative");
  //     const sp = document.createElement("span");
  //     sp.classList.add("whois-mask");
  //     div.appendChild(sp);
  //     div.appendChild(line);
  //     line.parentElement?.replaceWith(div);
  //   });

  useLayoutEffect(() => {
    const lines = new SplitType(".whois-content");

    lines.lines!.map((line) => {
      const wrapper = document.createElement("div");
      const sp = document.createElement("span");
      sp.classList.add("whois-mask");
      line.parentElement!.insertBefore(wrapper, line);
      wrapper.appendChild(line);
      wrapper.classList.add("relative");
      wrapper.appendChild(sp);
    });

    ScrollTrigger.create({
      trigger: "#whoIsContainer",
      start: "top 60%",
      end: "bottom 50%",
      markers: true,
      onEnter: () => burnIn(),
    });

    gsap.utils.toArray(".whois-green-highlight").forEach((mask: any) => {
      gsap.to(mask, {
        scrollTrigger: {
          trigger: mask,
          start: "top 70%",
          end: "bottom 60%",
          markers: true,
          scrub: true,
          once: false,
        },

        color: "#00ff00",

      })

    });

    gsap.to(".whois-mask", {
      scrollTrigger: {
        trigger: ".whois-mask-container",
        start: "top 70%",
        end: "bottom 60%",
        markers: true,
        scrub: true,
      },
      //   scrollTrigger: ".whois-mask-container",
      x: "+100%",
      stagger: 0.6,
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <>
      <section
        id="whoIsContainer"
        className="min-h-screen min-w-screen text-white flex p-12 bg-black"
      >
        <div className="h-full container m-auto">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-7xl font-bold text-white mb-4 burn-in">
              Who Is Midori?
            </h1>

            <span className="whois-mask-container">
              <span
                className="text-7xl font-bold leading-normal text-white whois-content"
                data-speed="auto"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                nobis quidem numquam cum aspernatur dolorem rem, molestias id
                omnis <span className="whois-green-highlight">architecto.</span> Nisi doloribus voluptate explicabo maxime,
                impedit sed eaque? Vel, provident? Repellendus esse voluptatem
                quae debitis ipsum veniam harum numquam quidem delectus. Aliquam
                corporis quidem unde. Unde, iure, alias similique dolorum
                voluptas culpa, eveniet velit harum commodi aliquid quam
                voluptatem nobis. Voluptates recusandae <span className="whois-green-highlight">voluptatum</span> facilis
                delectus laudantium qui animi exercitationem at ipsum est.
                Voluptatum sed, rerum hic ducimus, doloremque, eaque inventore
                illo aliquid aperiam illum blanditiis sequi exercitationem
                pariatur numquam fugiat. Similique, itaque facere et dolor
                laborum voluptates eveniet? Id quod saepe cum, rem neque, quam
                ipsam nihil quidem, nostrum harum accusantium quo nam quasi ex
                cumque omnis consectetur deserunt laudantium!
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
