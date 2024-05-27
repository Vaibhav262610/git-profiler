import React from "react";

const User = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-700  min-h-screen">
        <main className="relative h-screen w-full flex justify-center items-center flex-col">
          <div className="w-full flex justify-center items-center flex-col">
            <img src="https://dev-profiler.vercel.app/github.svg" alt="" height={200} width={200} />
            <h1 className="my-6 text-white font-bold text-2xl">Find your DEV Profile</h1>
            <input
              type="text"
              placeholder="github username"
              className="input text-white rounded-md  p-4 w-72"
            />
          </div>
          <footer className="flex text-white flex-col justify-center items-center absolute bottom-0 my-6">
            <p>Built using Nextjs, GitHub REST Api and tailwindCSS</p>
            <h1>
              Give it a ⭐{" "}
              <a
                target="_blank"
                className="underline text-blue-500"
                href="https://github.com/mukulrajpoot262610/github_profiler"
              >
                here
              </a>
            </h1>
          </footer>
        </main>
      </div>
    </>
  );
};

export default User;
