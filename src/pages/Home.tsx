import Bg1 from "@/assets/Bg1.jpeg";
import HH from "@/assets/HH.png";
import HR from "@/assets/HR.png";
import HFB from "@/assets/HFB.png";
import About from "@/assets/Algorithmic_20Trading.jpeg";
import Counter from "@/components/Counter";
// import {PremiumInvestmentOffer} from "@/components/InvestmentOffer";
import ContactUs from "@/components/ContactUs";
import { useRef, useEffect,useState } from "react";
import { motion, useInView } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { textReveal, textLine } from "@/utils/animations";
import { InvestmentModal } from '@/pages/AdScreen';

export default function Home() {
  const { t, i18n } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const location = useLocation();
  
  // Create refs for multiple sections
  const packsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setMounted] = useState(false);

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
    setMounted(true);
    // Open modal after 2 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 0);

    return () => clearTimeout(timer);
  }, [location, i18n.language]);

  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div
        ref={homeRef}
        className="min-h-screen flex items-center justify-center overflow-hidden relative "
      >
        <motion.img
          src={Bg1}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 blur-xs transform scale-x-100 md:scale-x-105"
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
        className="flex flex-col scroll-mt-24 justify-center items-center space-y-2.5 mt-10"
      >
        <div
          className="
      flex flex-col md:flex-row
      items-center gap-8
      w-full max-w-7xl
      rounded-2xl shadow-2xl
      bg-white
      px-6 py-10
      md:px-10 md:py-14
    "
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-lg sm:text-xl md:text-2xl  text-slate-700">
              {t("home.about.welcome")}
            </h2>

            <h1
              className="
          mt-3
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-semibold
          bg-gradient-to-r from-blue-950 via-sky-400 to-indigo-400
          text-transparent bg-clip-text
        "
            >
              {t("home.about.title")}
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              {t("home.about.description")}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={About}
              alt="algorithm trading"
              className="
          w-full max-w-sm sm:max-w-md lg:max-w-lg
          rounded-2xl
          object-cover
          drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]
        "
            />
          </div>
        </div>

        <section
          ref={ref}
          className="flex flex-row justify-around w-full bg-gradient-to-br from-slate-950 to-sky-500 p-5 md:p-10 md:mb-15 mb-5"
        >
          <div className="grid justify-items-center p-4">
            <Counter target={1500} start={isInView} />
            <p className="text-white md:text-xl text-md">
              {t("home.stats.happyClients")}
            </p>
          </div>
          <div className="grid justify-items-center p-4">
            <Counter target={124} start={isInView} />
            <p className="text-white md:text-xl text-md">
              {t("home.stats.invests")}
            </p>
          </div>
          <div className="grid justify-items-center p-4">
            <Counter target={110} start={isInView} />
            <p className="text-white md:text-xl text-md">
              {t("home.stats.investors")}
            </p>
          </div>
          <div className="grid justify-items-center p-4">
            <Counter target={4} start={isInView} />
            <p className="text-white md:text-xl text-md">
              {t("home.stats.years")}
            </p>
          </div>
        </section>

      {/* <PremiumInvestmentOffer  /> */}

        {/* Companies Section */}
            <p className="text-4xl md:text-5xl font-bold text-gray-900 text-balance"> {t("companies.section.title")}</p>
        <div className="flex flex-col md:flex-row gap-2 justify-around items-center w-3/4 mb-12">
          <Link to="/our-companies">
            <div className="flex flex-col justify-center items-center p-6 cursor-pointer hover:scale-110 transition-transform duration-300">
              <img
                src={HH}
                alt="Honest Homes"
                className="object-cover scale-70 h-35"
              />
              <p>{t("home.companies.honestHouse")}</p>
            </div>
          </Link>
          <Link to="/our-companies">
            <div className="flex flex-col justify-center items-center p-6 cursor-pointer hover:scale-110 transition-transform duration-300">
              <img src={HFB} alt="HFB" className="object-cover w-35 h-35" />
              <p>{t("companies.hfb.name")}</p>
            </div>
          </Link>
          <Link to="/our-companies">
            <div className="flex flex-col justify-center items-center p-6 cursor-pointer hover:scale-110 transition-transform duration-300">
              <img
                src={HR}
                alt="Honest Of Revenue"
                className="object-cover w-35 h-35"
              />
              <p>{t("companies.hr.name")}</p>
            </div>
          </Link>
        </div>

        {/* Statistics Section */}
      </div>

      {/* Investment Packages Section */}
      {/* <div
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
          className="max-w-6xl mx-auto mb-8 text-center"
        ></motion.div> */}

      {/* Cards Grid with AnimatePresence for smooth transitions */}
      {/* <div className="max-w-6xl mx-auto">
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

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>*/}
      {/* </div>  */}

      {/* Contact Section */}
      <div
        ref={contactRef}
        id="contact"
        className="flex justify-center scroll-mt-24 items-center mb-12"
      >
        <ContactUs />
      </div>
      <InvestmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}