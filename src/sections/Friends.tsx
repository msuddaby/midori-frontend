import Friend from "../components/Friend";

export default function Friends() {
  return (
    <>
      <section className="bg-black min-h-screen min-w-screen text-white flex p-12">
        <div className="h-full container m-auto">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-7xl font-bold  mb-6">Friends of Midori</h1>
            <div className="flex flex-col gap-12">
              <Friend />
              <Friend />
              <Friend />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
