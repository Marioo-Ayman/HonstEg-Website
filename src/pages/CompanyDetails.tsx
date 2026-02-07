import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { InvestmentCard } from "@/components/PackCard";
import type { Variants } from "framer-motion";
import CBG from "@/assets/CBG.jpeg"
// import invest from "@/assets/investment-bg.jpg";

// Package category types
export type PackageCategory = 'usd' | 'egp' | 'all';
interface Package {
  packageId: string;
  packageName: string;
  returnPercentage: string;
  description: string;
  minimumInvestment: string;
  duration: string;
  riskLevel: string;
  variant?: 'light' | 'dark';
}
interface LandingPageProps {
  content: React.ReactNode; 
  packageCategory?: PackageCategory; // Filter which packages to show
  customPackages?: Package[]; // Optional: pass custom packages array
}

// Animation variants
const containerVariants: Variants  = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants  = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Card stagger animation for packages
const cardStagger: Variants  = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants  = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function LandingPage({
  content,
  packageCategory = 'all',
  customPackages,
}: LandingPageProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // USD Packages (IDs 1-9)


  // Get packages based on category or use custom packages

  const displayPackages: Package[] = Array.isArray(customPackages)
  ? customPackages
  : [];
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full">
        <div className="pt-[15%] flex items-center justify-center overflow-hidden relative">
          <motion.img
            src={CBG}
            alt="Trading Background"
            className="absolute top-0 left-0 w-full -z-10 transform md:-top-70 scale-x-105"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-stone-950 opacity-60"></div>
          
          <motion.div
            className={`relative text-start text-white px-4 md:-top-20`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              className="text-3xl md:text-6xl font-medium text-white mb-8"
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t("companies.hero.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="w-full py-20 px-6 sm:px-8 lg:px-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          {content}
        </div>
      </section>

      {/* Packages Section */}
      <section
        id="packages"
        className="w-full py-20 px-6 sm:px-8 lg:px-16 bg-white relative"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className={`text-center mb-16 ${isRTL ? 'rtl' : 'ltr'}`}
            variants={containerVariants}
            whileInView="visible"
            viewport={{ once: false, margin: '-10px' }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 bg-gradient-to-r from-blue-950 via-sky-400 to-indigo-400 text-transparent bg-clip-text inline-block"
              variants={itemVariants}
            >
          {t('home.investments.title')}
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 "
              variants={itemVariants}
            >
          {t('home.investments.quote')}
            </motion.p>
          </motion.div>
          {/* <img
            src={invest}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover "
          /> */}
          {/* Packages Grid with Scroll Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={packageCategory}
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            >
              {displayPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.packageId}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <InvestmentCard
                    packageName={pkg.packageName}
                    returnPercentage={pkg.returnPercentage}
                    description={pkg.description}
                    minimumInvestment={pkg.minimumInvestment}
                    duration={pkg.duration}
                    riskLevel={pkg.riskLevel}
                    variant={pkg.variant}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state if no packages */}
          {displayPackages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-slate-500">
                {t('landing.noPackages') || 'No packages available at the moment'}
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}