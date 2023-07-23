export default function Offerings() {
  return (
    <>
      <section className="dark-bg h-screen w-screen">
        <div className="h-full container m-auto">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-7xl font-bold text-white mb-6">
              What Does She Do?
            </h1>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
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
                  accusantium blanditiis quod, velit doloribus suscipit commodi?
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
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
              <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
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
      </section>
    </>
  );
}
