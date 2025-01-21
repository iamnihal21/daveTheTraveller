import React from "react";
import Advertise from "../assets/Advertising.png";
import Design from "../assets/Design.png";
import Film from "../assets/Film.png";

export default function Categories() {
  return (
    <div className="bg-[#F9E1BE] min-h-screen flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl font-bold text-black mb-8">
        Popular Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl">
        {/* Design Card */}
        <div className="card w-[350px] bg-base-100 shadow-xl">
          <figure>
            <img
              src={Design}
              alt="Design"
              className="w-full h-[300px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Design</h2>
          </div>
        </div>

        {/* Advertising Card */}
        <div className="card w-[350px] bg-base-100 shadow-xl">
          <figure>
            <img
              src={Advertise}
              alt="Advertising"
              className="w-full h-[300px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Advertising</h2>
          </div>
        </div>

        {/* Film Card */}
        <div className="card w-[350px] bg-base-100 shadow-xl">
          <figure>
            <img
              src={Film}
              alt="Film"
              className="w-full h-[300px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Film</h2>
          </div>
        </div>
      </div>

      <button className="btn mt-10 bg-black text-white hover:text-black hover:bg-white">
        Explore More
      </button>
    </div>
  );
}
