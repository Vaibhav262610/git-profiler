import React from "react";

const User = () => {
  const inData = () => {
    let val = document.getElementById("input");
    if (val.value == "") {
      alert("Please enter your Username");
    } else {
      console.log(val.value);
      val.value = "";
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-700  min-h-screen">
        <main className="relative h-screen w-full flex justify-center items-center flex-col">
          <div className="w-full flex justify-center items-center flex-col">
            <img
              src="https://dev-profiler.vercel.app/github.svg"
              alt=""
              height={200}
              width={200}
            />
            <h1 className="my-6 text-white font-bold text-2xl">
              Find your DEV Profile
            </h1>
            <div className="flex">
              <input
                type="text"
                id="input"
                placeholder="github username"
                className="input text-white   p-4 "
              />
              <button
                onClick={inData}
                className="text-white font-semibold p-4 btn"
              >
                Proceed
              </button>
            </div>
          </div>
          {/* <footer className="flex text-white flex-col justify-center items-center absolute bottom-0 my-6">
            <p>Built using Reactjs, GitHub REST Api and tailwindCSS</p>
            <h1>
              Give it a ⭐{" "}
              <a
                target="_blank"
                className="underline text-blue-500"
                href="https://github.com/Vaibhav262610/git-profiler"
              >
                here
              </a>
            </h1>
          </footer> */}
        </main>
      </div>
    </>
  );
};

export default User;
