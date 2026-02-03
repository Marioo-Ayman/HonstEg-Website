import Bg1 from "@/assets/Bg1.jpeg";
import HH from "@/assets/HH.png";
import HR from "@/assets/HR.png";
import HFB from "@/assets/HFB.png";
import About from "@/assets/Algorithmic_20Trading.jpeg";
import invest from "@/assets/investment-bg.jpg";
import Counter from "@/components/Counter";
import { InvestmentCard } from "@/components/PackCard";
import ContactUs from "@/components/ContactUs";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Pagination } from "@/components/Pagination";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {
  textReveal,
  textLine
} from "@/utils/animations";
export default function Home() {
  const { t } = useTranslation();
  
  const investmentPackages = [
    {packageId: "8",
      packageName: t('packages.starter.name'),
      returnPercentage: "3%",
      description: t('packages.starter.description'),
      minimumInvestment: "$1000",
      duration: t('packages.starter.duration'),
      riskLevel: t('packages.starter.paymentFrequency'),
      variant: "dark" as const,
    },
    {
      packageId: "9",
      packageName: t('packages.growth.name'),
      returnPercentage: "4%",
      description: t('packages.growth.description'),
      minimumInvestment: "$4000",
      duration: t('packages.growth.duration'),
      riskLevel: t('packages.growth.paymentFrequency'),
      variant: "dark" as const,
    },{
      packageId: "1",
      packageName: t('packages.premium.name'),
      returnPercentage: "5%",
      description: t('packages.premium.description'),
      minimumInvestment: "$7000",
      duration: t('packages.premium.duration'),
      riskLevel: t('packages.premium.paymentFrequency'),
      variant: "dark" as const,
    },
    {
      packageId: "2",
      packageName: t('packages.elite.name'),
      returnPercentage: "6%",
      description: t('packages.elite.description'),
      minimumInvestment: "$11,000",
      duration: t('packages.elite.duration'),
      riskLevel: t('packages.elite.paymentFrequency'),
      variant: "dark" as const,
    },
    {
      packageId: "3",
      packageName: t('packages.flexi.name'),
      returnPercentage: "7%",
      description: t('packages.flexi.description'),
      minimumInvestment: "$15,000",
      duration: t('packages.flexi.duration'),
      riskLevel: t('packages.flexi.paymentFrequency'),
      variant: "dark" as const,
    },
    {
      packageId: "4",
      packageName: t('packages.visionary.name'),
      returnPercentage: "9%",
      description: t('packages.visionary.description'),
      minimumInvestment: "$21,000",
      duration: t('packages.visionary.duration'),
      riskLevel: t('packages.visionary.paymentFrequency'),
      variant: "dark" as const,
    },
    {
      packageId: "5",
      packageName: t('packages.legendary.name'),
      returnPercentage: "10%",
      description: t('packages.legendary.description'),
      minimumInvestment: "$31,000",
      duration: t('packages.legendary.duration'),
      riskLevel: t('packages.legendary.paymentFrequency'),
      variant: "dark" as const,
    },
    {
      packageId: "6",
      packageName: t('packages.infinity.name'),
      returnPercentage: "12%",
      description: t('packages.infinity.description'),
      minimumInvestment: "$110,000",
      duration: t('packages.infinity.duration'),
      riskLevel: t('packages.infinity.paymentFrequency'),
      variant: "dark" as const,
    },
    {
      packageId: "7",
      packageName: t('packages.supreme.name'),
      returnPercentage: "13%",
      description: t('packages.supreme.description'),
      minimumInvestment: "$200,000",
      duration: t('packages.supreme.duration'),
      riskLevel: t('packages.supreme.paymentFrequency'),
      variant: "dark" as const,
    },   
    {
    packageId: "10",
    packageName: t('packages.silver.name'),
    returnPercentage: "4%",
    description: t('packages.silver.description'),
    minimumInvestment: "15,000 EGP",
    duration: t('packages.silver.duration'),
    riskLevel: t('packages.silver.paymentFrequency'),
    variant: "dark" as const,
  },
  {
    packageId: "11",
    packageName: t('packages.gold.name'),
    returnPercentage: "5%",
    description: t('packages.gold.description'),
    minimumInvestment: "60,000 EGP",
    duration: t('packages.gold.duration'),
    riskLevel: t('packages.gold.paymentFrequency'),
    variant: "dark" as const,
  },
  {
    packageId: "12",
    packageName: t('packages.platinum.name'),
    returnPercentage: "6%",
    description: t('packages.platinum.description'),
    minimumInvestment: "160,000 EGP",
    duration: t('packages.platinum.duration'),
    riskLevel: t('packages.platinum.paymentFrequency'),
    variant: "dark" as const,
  },
  {
    packageId: "13",
    packageName: t('packages.diamond.name'),
    returnPercentage: "8%",
    description: t('packages.diamond.description'),
    minimumInvestment: "310,000 EGP",
    duration: t('packages.diamond.duration'),
    riskLevel: t('packages.diamond.paymentFrequency'),
    variant: "dark" as const,
  },
  {
    packageId: "14",
    packageName: t('packages.honestEgy.name'),
    returnPercentage: "10%",
    description: t('packages.honestEgy.description'),
    minimumInvestment: "620,000 EGP",
    duration: t('packages.honestEgy.duration'),
    riskLevel: t('packages.honestEgy.paymentFrequency'),
    variant: "dark" as const,
  },

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
  const packsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    packs: packsRef,
    home: homeRef,
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
      {/* Hero Section */}
     <div ref={homeRef} className="min-h-screen flex items-center justify-center overflow-hidden relative">
          <motion.img
            src={Bg1}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 blur-xs transform scale-x-105"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-stone-950 opacity-60"></div>
          
          <motion.div
            className="relative text-center text-white px-4"
            variants={textReveal}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={textLine}
              className="text-5xl md:text-9xl font-thin text-white mb-8"
            >
              {t("home.hero.takeYour")}
            </motion.p>
            <motion.p
              variants={textLine}
              className="text-5xl md:text-9xl font-medium text-[#FFB300] mb-8"
            >
              {t("home.hero.investStrategy")}
            </motion.p>
            <motion.p
              variants={textLine}
              className="text-5xl md:text-9xl font-medium text-white mb-8"
            >
              {t("home.hero.nextLevel")}
            </motion.p>
          </motion.div>
        </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        id="about"
        className="flex flex-col scroll-mt-24 justify-center items-center space-y-2.5"
      >
        <div className="flex flex-col md:flex-row border-0 rounded-xl shadow-2xl w-3/4 pt-10 pb-10 justify-center items-center">
          <div className="p-3 md:p-15 w-3/4 flex flex-col justify-center">
            <h2 className="text-xl md:text-[30px] font">
              {t('home.about.welcome')}
            </h2>
            <br />
            <h1 className="text-3xl md:text-6xl font-medium bg-gradient-to-r from-blue-950 via-sky-400 to-indigo-400 text-transparent bg-clip-text inline-block">
              {t('home.about.title')}
            </h1>
            <br />
            <p className="text-[12px] md:text-2xl text-gray-700 mb-8">
              {t('home.about.description')}
            </p>
          </div>
          <div>
            <img
              src={About}
              alt="algorithm trading pic"
              className="scale-70 rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] md:scale-90"
            />
          </div>
        </div>

        {/* Companies Section */}
        <div className="flex flex-col md:flex-row gap-2 justify-around items-center w-3/4 mb-12">
          <Link to="/our-companies">
            <div className="flex flex-col justify-center items-center p-6 cursor-pointer hover:scale-110 transition-transform duration-300">
              <img
                src={HH}
                alt="Honest Homes"
                className="object-cover scale-70 h-35"
              />
              <p>{t('home.companies.honestHouse')}</p>
            </div>
          </Link>
          <Link to="/our-companies">
            <div className="flex flex-col justify-center items-center p-6 cursor-pointer hover:scale-110 transition-transform duration-300">
              <img src={HFB} alt="HFB" className="object-cover w-35 h-35" />
              <p>{t('home.companies.honestHouse')}</p>
            </div>
          </Link>
          <Link to="/our-companies">
            <div className="flex flex-col justify-center items-center p-6 cursor-pointer hover:scale-110 transition-transform duration-300">
              <img
                src={HR}
                alt="Honest Of Revenue"
                className="object-cover w-35 h-35"
              />
              <p>{t('home.companies.honestHouse')}</p>
            </div>
          </Link>
        </div>

        {/* Statistics Section */}
        <section
          ref={ref}
          className="flex flex-row justify-around w-full bg-gradient-to-br from-slate-950 to-sky-500 p-5 md:p-10 md:mb-15 mb-5"
        >
          <div className="grid justify-items-center p-4">
            <Counter target={1500} start={isInView} />
            <p className="text-white md:text-xl text-md">
              {t('home.stats.happyClients')}
            </p>
          </div>
          <div className="grid justify-items-center p-4">
            <Counter target={124} start={isInView} />
            <p className="text-white md:text-xl text-md">
              {t('home.stats.invests')}
            </p>
          </div>
          <div className="grid justify-items-center p-4">
            <Counter target={110} start={isInView} />
            <p className="text-white md:text-xl text-md">
              {t('home.stats.investors')}
            </p>
          </div>
          <div className="grid justify-items-center p-4">
            <Counter target={4} start={isInView} />
            <p className="text-white md:text-xl text-md">
              {t('home.stats.years')}
            </p>
          </div>
        </section>
      </div>

      {/* Investment Packages Section */}
      <div
        ref={packsRef}
        id="packs"
        className="flex flex-col scroll-mt-24 justify-center items-center mb-12 relative p-4"
      >
        <img
          src={invest}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <h2 className="text-xl md:text-[30px]">
          {t('home.investments.subtitle')}
        </h2>
        <p className="text-3xl md:text-6xl font-medium bg-gradient-to-r from-blue-950 via-sky-400 to-indigo-400 text-transparent bg-clip-text inline-block">
          {t('home.investments.title')}
        </p>
        <br />
        <p className="text-gray-900">
          {t('home.investments.quote')}
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
              className="  grid
                      grid-cols-1
                      md:grid-cols-2
                      lg:grid-cols-3
                      gap-8
                      items-stretch"
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

      {/* Contact Section */}
      <div
        ref={contactRef}
        id="contact"
        className="flex justify-center scroll-mt-24 items-center mb-12"
      >
        <ContactUs />
      </div>
    </main>
  );
}