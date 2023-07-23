export default function BestOf() {
  return (
    <>
      <section className="green-bg min-h-screen min-w-screen text-white flex p-12">
        <div className="h-full container m-auto">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-7xl font-bold mb-4">The Best of Midori</h1>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
                <div className="mb-3">
                  <img
                    className="rounded"
                    src="https://via.placeholder.com/500x300"
                    alt="Web Design"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
                <div className="mb-3">
                  <img
                    className="rounded"
                    src="https://via.placeholder.com/500x300"
                    alt="Web Design"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
                <div className="mb-3">
                  <img
                    className="rounded"
                    src="https://via.placeholder.com/500x300"
                    alt="Web Design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
