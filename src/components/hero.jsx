// import React from "react";
// import Heroimg from "../assets/heroImg.png"; // Car image
// // import Heroimg2 from "../assets/hero2.png"; // Dotted image

// export default function Hero() {
//   return (
//     <>
//       <div
//         className="hero min-h-screen mt-0.5 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             `url(${Heroimg})`,
//             backgroundColor: "#E4D7C3"
//         }}
//       >
//         <div className="hero-overlay bg-opacity-60"></div>
//         <div className="hero-content text-neutral-content text-center">
//           <div className="max-w-md">
//             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//             <p className="mb-5">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import Heroimg from "../assets/heroImg.png"; // Car image
// import Heroimg2 from "../assets/hero2.png"; // Dotted image

export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen bg-[#E4D7C3]">
        <div className="hero-content flex-col lg:flex-row gap-10">
          {/* Left Section - Text Content */}
          <div className="lg:w-1/2">
            <h4 className="text-sm font-semibold text-gray-600 mb-2">
              Help and support the creative community
            </h4>
            <h1 className="text-6xl font-bold text-black mb-4">
              We are Creative80
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn bg-black text-white hover:text-black hover:bg-white">
              Read More
            </button>
          </div>

          {/* Right Section - Car Image with Dotted Pattern */}
          <div className="lg:w-1/2 relative">
            {/* Car Image */}
            <img
              src={Heroimg}
              alt="Car"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#E7CDA7] h-[180px]">
        <div className="flex flex-wrap  bg-[#F9E1BE] gap-6 p-6 rounded-[15px] mt-3 mb-3 ">
          {/* Left Section: Heading and Subheading */}
          <div>
            <h2 className="text-xl font-bold text-black mb-1">
              Subscribe to our newsletter...
            </h2>
            <p className="text-gray-600 text-sm">
              Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Right Section: Input and Button */}
          <div className="flex items-center w-auto ml-5">
            <div className="join">
              <input
                className="input bg-base-200 join-item rounded-l-md"
                placeholder="Email"
              />
              <button className="btn join-item rounded-r-md bg-black text-white hover:text-black hover:bg-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}