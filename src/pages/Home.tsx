import Bg1 from "@/assets/Bg1.jpeg";
import HH from "@/assets/HH.png";
import HR from "@/assets/HR.png";
import HFB from "@/assets/HFB.png";
import About from "@/assets/Algorithmic_20Trading.jpeg";
import invest from "@/assets/investment-bg.jpg";
import Counter from "@/components/Counter";
import { InvestmentCard } from "@/components/PackCard";
import ContactUs from "@/components/ContactUs";
import { useState,useRef, useEffect } from "react";
import { motion, AnimatePresence,useInView } from "motion/react";
import { Pagination } from "@/components/Pagination";
import { Link, useLocation} from "react-router-dom";
export default function Home() {
  const investmentPackages = [
    {
      packageId: "8",
      packageName: "Starter",
      returnPercentage: "3%",
      description:
        "Starter investemnt package for beginners in USD .",
      minimumInvestment: "$1000",
      duration: "1 Yaer",
      riskLevel: "Monthly",
      variant: "dark" as const,
    },
    {
      packageId: "9",
      packageName: " Growth",
      returnPercentage: "4%",
      description:
        "Growth package for expanding portfolios.",
      minimumInvestment: "$4000",
      duration: "1 Yaer",
      riskLevel: "Monthly",
      variant: "dark" as const,
    },
    {
      packageId: "1",
      packageName: " PREMIUM",
      returnPercentage: "5%",
      description:
        "Premium package with enhanced returns.",
      minimumInvestment: "$7000",
      duration: "1 Yaer",
      riskLevel: "Monthly",
      variant: "dark" as const,
    },
    {
            packageId: "2",

      packageName: "ELITE  ",
      returnPercentage: "6%",
      description:
        "Elite package for serious investors.",
      minimumInvestment: "$11,000",
      duration: "1 year",
      riskLevel: "Monthly",
      variant: "dark" as const,
    },
    {
            packageId: "3",

      packageName: "FLEXI INVEST",
      returnPercentage: "7%",
      description:
        "HFlexible investment with competitive returns.",
      minimumInvestment: "$15,000",
      duration: "1 year",
      riskLevel: "Monthly",
      variant: "dark" as const,
    },
    {
            packageId: "4",

      packageName: "VISIONARY",
      returnPercentage: "9%",
      description:
        "Visionary package for forward-thinking investors.",
      minimumInvestment: "$21,000",
      duration: "1 year",
      riskLevel: "Monthly",
      variant: "dark" as const,
    },
    {
            packageId: "5",

      packageName: "LEGENDARY",
      returnPercentage: "10%",
      description:
        "Legendary package for high-value investments.",
      minimumInvestment: "$31,000",
      duration: "1 year",
      riskLevel: "Monthly",
      variant: "dark" as const,
    },
    {
            packageId: "6",

      packageName: "INFINITY",
      returnPercentage: "12%",
      description:
        "Conservative portfolio emphasizing capital preservation and steady income through government bonds and blue-chip dividends.",
      minimumInvestment: "$110,000",
      duration: "1 year",
      riskLevel: "Monthly",
      variant: "dark" as const,
    },
    {
            packageId: "7",

      packageName: "SUPREME",
      returnPercentage: "13%",
      description:
        "Supreme package with semi-annual returns.",
      minimumInvestment: "$200,000",
      duration: "1 year",
      riskLevel: "Semi-Annually",
      variant: "dark" as const,
    }
  ];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(investmentPackages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPackages = investmentPackages.slice(startIndex, endIndex);
  const location = useLocation();

  // Create refs for multiple sections
  const packsRef = useRef<HTMLDivElement| null>(null);
  const aboutRef = useRef<HTMLDivElement| null>(null);
  const contactRef = useRef<HTMLDivElement| null>(null);

const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    packs: packsRef,
    about: aboutRef,
    contact: contactRef,
  };

  // Scroll to the correct section when location.hash changes
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", ""); // remove #
      const ref = sectionRefs[hash];
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <main className="">
      <div className="min-h-screen flex items-center justify-center mb-15 overflow-hidden relative">
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

      <div ref={aboutRef} id="about" className="flex flex-col  scroll-mt-24 justify-center items-center space-y-2.5 ">
        <div  className="flex flex-col md:flex-row border-0 rounded-xl shadow-2xl w-3/4  pt-10 pb-10 justify-center items-center">
          <div className=" p-3 md:p-15 w-3/4 flex flex-col justify-center ">
            <h2 className="text-xl md:text-[30px] font">Welcome to Honest Egy</h2>
            <br />
            <h1 className="text-3xl md:text-6xl font-medium  bg-linear-to-r from-blue-950 via-sky-400 to-indigo-400 text-transparent bg-clip-text inline-block">
              Words About Us
            </h1>
            <br />
            <p className=" text-[12px] md:text-2xl text-gray-700  mb-8">
              A group of companies operating in several sectors, including
              real estate investment, gold investment, the Egyptian stock exchange
              and securities trading, as well as training and qualifying
              individuals in business, marketing, and technology.
            </p>
          </div>
          <div>
            <img src={About} alt="algorithm trading pic" className="scale-70 rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] md:scale-90" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 justify-around items-center w-3/4 mb-12">
          <Link to="/our-companies">
            <div className="flex flex-col justify-center items-center p-6 cursor-pointer hover:scale-110 transition-transform duration-300">
              <img
                src={HH}
                alt="Honest Homes"
                className="object-cover scale-70 h-35"
              />
              <p>Honest House</p>
            </div>
          </Link>
          <Link to="/our-companies">
            <div className="flex flex-col justify-center items-center p-6 cursor-pointer hover:scale-110 transition-transform duration-300">
              <img src={HFB} alt="HFB" className="object-cover w-35 h-35" />
              <p>Honest House</p>
            </div>
          </Link>
          <Link to="/our-companies">
            <div className="flex flex-col justify-center items-center p-6 cursor-pointer hover:scale-110 transition-transform duration-300">
              <img
                src={HR}
                alt="Honest Of Revence"
                className="object-cover w-35 h-35"
              />
              <p>Honest House</p>
            </div>
          </Link>
        </div>
        <section ref={ref} className="flex flex-row justify-around w-full bg-linear-to-br from-slate-950 to-sky-500 p-5 md:p-10 md:mb-15 mb-5">
          <div className="grid justify-items-center p-4">
                <Counter target={1500} start={isInView} />
           <p className="text-white md:text-xl text-md ">Happy Clients</p>
          </div>
          <div className="grid justify-items-center p-4">
                <Counter target={124} start={isInView} />
           <p className="text-white md:text-xl text-md ">Invests</p>
          </div>
          <div className="grid justify-items-center p-4">
                <Counter target={110} start={isInView} />
           <p className="text-white md:text-xl text-md ">Investors</p>
          </div>
          <div className="grid justify-items-center p-4">
                <Counter target={4} start={isInView} />
           <p className="text-white md:text-xl text-md ">Years</p>
          </div>
        </section>
      </div>
      <div ref={packsRef} id="packs" className="flex flex-col scroll-mt-24 justify-center items-center mb-12 relative p-4">
        <img
          src={invest}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
        />
          <h2 className="text-xl md:text-[30px]" >INVESTMENT OFFER</h2>
          <p className="text-3xl md:text-6xl font-medium  bg-linear-to-r from-blue-950 via-sky-400 to-indigo-400 text-transparent bg-clip-text inline-block">Our Investment Plans</p>
          <br />
          <p className="text-gray-900">
            " Don't miss out on something interesting today just because you think
            you'll find something better tomorrow."
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-7xl mx-auto mb-8 text-center"
          ></motion.div>

          {/* Cards Grid with AnimatePresence for smooth transitions */}
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {currentPackages.map((pkg, index) => (
                  <InvestmentCard
                    key={startIndex + index}
                    packageName={pkg.packageName}
                    returnPercentage={pkg.returnPercentage}
                    description={pkg.description}
                    minimumInvestment={pkg.minimumInvestment}
                    duration={pkg.duration}
                    riskLevel={pkg.riskLevel}
                    variant={pkg.variant}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <div ref={contactRef} id="contact" className="flex justify-center scroll-mt-24 items-center mb-12">
          <ContactUs/>
        </div>

    </main>
  );
}
