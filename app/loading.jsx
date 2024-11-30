import React from "react";

const LandingPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 brightness-75"
      >
        <source src="/loading.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-5xl mb-4">Welcome to the Landing Page</h1>
        <p className="text-xl">Your engaging tagline goes here.</p>
      </div>
    </div>
  );
};

export default LandingPage;
