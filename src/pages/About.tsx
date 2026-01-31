import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Bg1 from "@/assets/Bg1.jpeg";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import MovingIcon from "@mui/icons-material/Moving";
import BM from "@/assets/business-man.jpg";
import BT from "@/assets/bitcoin.jpg";

export default function About() {
  return (
    <div>
      <section>
        <div className="min-h-screen flex items-center justify-center  overflow-hidden relative">
          <img
            src={Bg1}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 blur-xs transform scale-x-105"
          />
          <div className="absolute inset-0 bg-stone-950 opacity-60"></div>
          <div className="relative text-center text-white px-4">
            {/* <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to Honest Egy
          </h1> */}
            <p className="text-5xl md:text-9xl font-thin text-white mb-8">
              Take Your
            </p>
            <p className="text-5xl md:text-9xl font-medium text-[#FFB300] mb-8">
              Invest Startegy
            </p>
            <p className="text-5xl md:text-9xl font-medium text-white mb-8">
              TO THE NEXT LEVEL
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-linear-to-b from-gray-50 to-white py-16 px-4 md:px-8 lg:px-12">
        {/* Dark header line */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gray-800" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="flex flex-col space-y-6">
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500">
                <TrackChangesIcon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Our Vision
              </h2>

              {/* Description */}
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                To be a leading company in the field of investment and development in Egypt by providing innovative 
                and comprehensive solutions across the sectors of industry, agriculture, real estate, and stock markets.
                We aim to build an integrated economic ecosystem that supports entrepreneurs and investors,
                with a strong focus on education and training as essential tools for achieving success and financial sustainability
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={BM || "/placeholder.svg"}
                alt="{imageAlt}"
                className="h-auto w-full rounded-2xl object-cover shadow-lg md:max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 bg-gray-200/50 justify-items-center">
        <h1 className="text-5xl font-semibold">Sectors</h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 p-20 md:w-3/4">
          <div className="border-0 rounded-2xl shadow-2xl p-5 bg-white">
            <p className="p-2">Real Estate Investment</p>
            <p className="p-2 ">
              Developing, selling, and leasing residential and commercial
              properties, while providing reliable solutions that enhance asset
              value and support the needs of the real estate market.
            </p>
            <br />
            <Link to="/our-companies">
              <Button className="bg-linear-to-r from-blue-950 to-blue-500">
                <span className="text-white">Learn More</span>
              </Button>
            </Link>
          </div>
          <div className="border-0 rounded-2xl shadow-2xl p-5 bg-white">
            <p className="p-2">Training & Qualification</p>
            <p className="p-2">
              Developing, selling, and leasing residential and commercial
              properties, while providing reliable solutions that enhance asset
              value and support the needs of the real estate market.
            </p>
            <br />
            <Link to="/our-companies">
              <Button className="bg-linear-to-r from-blue-950 to-blue-500">
                <span className="text-white">Learn More</span>
              </Button>
            </Link>
          </div>
          <div className="border-0 rounded-2xl shadow-2xl p-5 bg-white">
            <p className="p-2">The Egyptian Stock Exchange</p>
            <p className="p-2">
              Developing, selling, and leasing residential and commercial
              properties, while providing reliable solutions that enhance asset
              value and support the needs of the real estate market.
            </p>
            <br />
            <Link to="/our-companies">
              <Button className="bg-linear-to-r from-blue-950 to-blue-500">
                <span className="text-white">Learn More</span>
              </Button>
            </Link>
          </div>
          <div className="border-0 rounded-2xl shadow-2xl p-5 bg-white">
            <p className="p-2">Land Reclamation</p>
            <p className="p-2">
              Developing, selling, and leasing residential and commercial
              properties, while providing reliable solutions that enhance asset
              value and support the needs of the real estate market.
            </p>
            <br />
            <Link to="/our-companies">
              <Button className="bg-linear-to-r from-blue-950 to-blue-500">
                <span className="text-white">Learn More</span>
              </Button>
            </Link>
          </div>
          <div className="border-0 rounded-2xl shadow-2xl p-5 bg-white">
            <p className="p-2">Securities Trading</p>
            <p className="p-2">
              Developing, selling, and leasing residential and commercial
              properties, while providing reliable solutions that enhance asset
              value and support the needs of the real estate market.
            </p>
            <br />
            <Link to="/our-companies">
              <Button className="bg-linear-to-r from-blue-950 to-blue-500">
                <span className="text-white">Learn More</span>
              </Button>
            </Link>
          </div>
          <div className="border-0 rounded-2xl shadow-2xl p-5 bg-white">
            <p className="p-2">Gold Investment</p>
            <p className="p-2">
              Developing, selling, and leasing residential and commercial
              properties, while providing reliable solutions that enhance asset
              value and support the needs of the real estate market.
            </p>
            <br />
            <Link to="/our-companies">
              <Button className="bg-linear-to-r from-blue-950 to-blue-500">
                <span className="text-white">Learn More</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full bg-linear-to-b from-gray-50 to-white py-16 px-4 md:px-8 lg:px-12">
        {/* Dark header line */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gray-800" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:gap-8 lg:grid-cols-2 lg:items-center">

            {/* Right Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={BT || "/placeholder.svg"}
                alt="{BT}"
                className="h-auto w-full rounded-2xl object-cover shadow-lg md:max-w-md lg:max-w-lg"
              />
            </div>
            
            {/* Left Content */}
            <div className="flex flex-col space-y-6">
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500">
                <MovingIcon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Our Mission
              </h2>

              {/* Description */}
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                We are committed to providing strong and sustainable investment opportunities in key sectors such as industry, agriculture, real estate, and financial markets. 
                Through specialized training programs, we empower individuals and entrepreneurs with the skills and knowledge needed to seize opportunities and drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
