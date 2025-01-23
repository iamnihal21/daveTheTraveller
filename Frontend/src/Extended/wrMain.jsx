import React from "react";
import Trophy from "../assets/WorldRecords.jpg";

export default function WrMain() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row items-center justify-center gap-12">
        <img
          src={Trophy}
          alt="World Record Holder"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-center lg:text-left">
            Fastest Car Ride Record
          </h1>
          <p className="py-6 text-lg text-center lg:text-left">
            Experience the thrilling achievement of <strong>Maulik Mahendrakumar Dave</strong>, a passionate car rider from <strong>Ahmedabad, Gujarat, India</strong>. Driving a <strong>KIA SONET Manual Car</strong>, Maulik achieved the fastest ride from the <strong>highest altitude motorable road</strong> to the <strong>lowest altitude motorable road</strong> in India, covering 1729 km in just 34 hours and 20 minutes.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <button className="btn btn-primary">Learn More</button>
            <button className="btn btn-secondary">Explore Photos</button>
          </div>
        </div>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg mt-12 w-full lg:w-3/4 mx-auto">
        <div className="stat">
          <div className="stat-title">Starting Point</div>
          <div className="stat-value">Spiti Valley, Kaza</div>
          <div className="stat-desc">14,000 ft above sea level</div>
        </div>
        <div className="stat">
          <div className="stat-title">Distance Covered</div>
          <div className="stat-value">1729 km</div>
          <div className="stat-desc">Non-stop drive</div>
        </div>
        <div className="stat">
          <div className="stat-title">Time Taken</div>
          <div className="stat-value">34 hrs 20 mins</div>
          <div className="stat-desc">Completed on Nov 4, 2024</div>
        </div>
      </div>
    </div>
  );
}
