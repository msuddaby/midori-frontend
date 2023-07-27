import { Avatar } from "@mui/joy";

export default function Friends() {
  return (
    <>
      <section className="bg-black min-h-screen min-w-screen text-white flex p-12">
        <div className="h-full container m-auto">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-7xl font-bold  mb-6">Friends of Midori</h1>
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-center w-full gap-2">
                <Avatar
                  sx={{
                    width: "72px",
                    height: "72px",
                  }}
                />
                <Avatar
                  sx={{
                    width: "72px",
                    height: "72px",
                  }}
                />
                <Avatar
                  sx={{
                    width: "72px",
                    height: "72px",
                  }}
                />
              </div>
              <div className="flex flex-row items-center justify-center w-full gap-2">
                <Avatar
                  sx={{
                    width: "72px",
                    height: "72px",
                  }}
                />
                <Avatar
                  sx={{
                    width: "72px",
                    height: "72px",
                  }}
                />
                <Avatar
                  sx={{
                    width: "72px",
                    height: "72px",
                  }}
                />
                <Avatar
                  sx={{
                    width: "72px",
                    height: "72px",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full gap-2">
              <Avatar
                sx={{
                  width: "72px",
                  height: "72px",
                }}
              />
              <Avatar
                sx={{
                  width: "72px",
                  height: "72px",
                }}
              />
              <Avatar
                sx={{
                  width: "72px",
                  height: "72px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
