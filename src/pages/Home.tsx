import Bg1 from "@/assets/Bg1.jpeg";
import HH from "@/assets/HH.png";
import HR from "@/assets/HR.png";
import HFB from "@/assets/HFB.png";
import About from "@/assets/Algorithmic_20Trading.jpeg";
import Counter from "@/components/Counter";
import ContactUs from "@/components/ContactUs";
import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {
  textReveal,
  textLine
} from "@/utils/animations";


export default function Home() {
  const { t } = useTranslation();
  
  

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
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

  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
     <div ref={homeRef} className="min-h-screen flex items-center justify-center overflow-hidden relative ">
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
        <div className="flex flex-col md:flex-row border-0 rounded-xl shadow-2xl w-3/4 pt-10 pb-10 justify-center items-center">
          <div className="p-5 md:p-15 md:w-3/4 flex flex-col justify-center">
            <h2 className="text-xl md:text-[30px] font">
              {t('home.about.welcome')}
            </h2>
            <br />
            <h1 className="text-3xl md:text-6xl font-medium bg-gradient-to-r from-blue-950 via-sky-400 to-indigo-400 text-transparent bg-clip-text inline-block">
              {t('home.about.title')}
            </h1>
            <br />
            <p className="text-[17px] md:text-2xl text-gray-700 ">
              {t('home.about.description')}
            </p>
          </div>
          <div>
            <img
              src={About}
              alt="algorithm trading pic"
              className="scale-90 rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] md:scale-90"
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
    </main>
  );
}
    //  <LandingPage
    //     heroTitle="Invest in Your Future"
    //     heroSubtitle="Discover investment opportunities across real estate, finance, and professional development"
    //     heroImageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"
    //     aboutContent="We are a leading investment company providing innovative solutions across multiple sectors. Our integrated approach combines real estate expertise, financial advisory services, and professional training to create comprehensive opportunities for investors and entrepreneurs looking to build sustainable wealth."
    //     packs={packages}
    //     ctaButtonText="Explore Packages"
    //   />