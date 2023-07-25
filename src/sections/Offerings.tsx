import { Box, Typography } from "@mui/joy";
import WDSDCard from "../components/WDSDCard";

export default function Offerings() {
  return (
    <>
      <section className="bg-black min-h-screen min-w-screen text-white">
        {/* <div className="h-full container m-auto">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-7xl font-bold text-white mb-6">
              What Does She Do?
            </h1>
            <div className="overflow-x-auto md:overflow-x-hidden">
              <div className="flex flex-row flex-nowrap gap-4 min-h-0">
                <div className="flex flex-col items-center justify-center w-80 p-4 border-2 min-h-0 border-white rounded-xl">
                  <div className="mb-3">
                    <img
                      className="rounded-full"
                      src="https://via.placeholder.com/150"
                      alt="Web Design"
                    />
                  </div>
                  <p className="text-lg text-center text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem eveniet illum similique harum repellendus qui
                    doloribus? Iusto officiis sapiente est facilis saepe eaque
                    accusantium blanditiis quod, velit doloribus suscipit
                    commodi?
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-80 p-4 border-2 min-h-0 border-white rounded-xl">
                  <div className="mb-3">
                    <img
                      className="rounded-full"
                      src="https://via.placeholder.com/150"
                      alt="Web Design"
                    />
                  </div>
                  <p className="text-lg text-center text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque nobis quidem numquam cum aspernatur dolorem rem,
                    molestias id omnis architecto. Nisi doloribus voluptate
                    explicabo maxime, impedit sed eaque? Vel, provident?
                    Repellendus esse voluptatem
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-80 p-4 border-2 min-h-0 border-white rounded-xl">
                  <div className="mb-3">
                    <img
                      className="rounded-full"
                      src="https://via.placeholder.com/150"
                      alt="Web Design"
                    />
                  </div>
                  <p className="text-lg text-center text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis atque voluptatibus laudantium dicta aliquam
                    dolores vero officia dolor quibusdam ad iste provident
                    quisquam blanditiis ipsum quasi, delectus eligendi dolorem
                    numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="container mx-auto py-8 px-4">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-7xl font-bold text-white mb-6">
              What Does She Do?
            </h1>
            <div className="flex overflow-x-auto md:justify-center md:items-center">
              <div className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-3">
                <div className="px-2 shadow-md border-2 border-white rounded-xl">
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="mb-3">
                      <img
                        className="rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="Web Design"
                      />
                    </div>
                    <p className="text-lg text-center text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis atque voluptatibus laudantium dicta aliquam
                      dolores vero officia dolor quibusdam ad iste provident
                      quisquam blanditiis ipsum quasi, delectus eligendi dolorem
                      numquam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-3">
                <div className="px-2 shadow-md border-2 border-white rounded-xl">
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="mb-3">
                      <img
                        className="rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="Web Design"
                      />
                    </div>
                    <p className="text-lg text-center text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis atque voluptatibus laudantium dicta aliquam
                      dolores vero officia dolor quibusdam ad iste provident
                      quisquam blanditiis ipsum quasi, delectus eligendi dolorem
                      numquam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-3">
                <div className="px-2 shadow-md border-2 border-white rounded-xl">
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="mb-3">
                      <img
                        className="rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="Web Design"
                      />
                    </div>
                    <p className="text-lg text-center text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis atque voluptatibus laudantium dicta aliquam
                      dolores vero officia dolor quibusdam ad iste provident
                      quisquam blanditiis ipsum quasi, delectus eligendi dolorem
                      numquam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Box sx={{
          display: {
            md: "flex",
          },
          flexDirection: "column",
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}>
          <Typography level="h1" textColor={"common.white"}>What Does She Do?</Typography>
          <Box sx={{
            display: "flex",
            overflowX: "auto",
            gap: "1rem",
          }}>
            <WDSDCard />
            <WDSDCard />
            <WDSDCard />
          </Box>

        </Box>

      </section>
    </>
  );
}
