
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Bg1 from "@/assets/transformed.webp";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import MovingIcon from "@mui/icons-material/Moving";
import BM from "@/assets/business-man.jpg";
import BT from "@/assets/istock.jpeg";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  iconFloat,
  staggerContainer,
  staggerItem,
  textReveal,
  textLine,
  cardHover,
  buttonHover,
  imageReveal,
} from "@/utils/animations";

// Sectors data array
const sectorsData = [
  "realEstate",
  "training",
  "stockExchange",
  "landReclamation",
  "securitiesTrading",
  "goldInvestment",
] as const;

export default function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section>
        <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
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
              className="text-5xl md:text-9xl font-medium text-[#FFB300] mb-8"
            >
              {t("about.hero.investStrategy")}
            </motion.p>
            <motion.p
              variants={textLine}
              className="text-5xl md:text-9xl font-medium text-white mb-8"
            >
              {t("about.hero.toNextLevel")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full bg-linear-to-b from-gray-50 to-white py-16 px-4 md:px-8 lg:px-12 relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <motion.div
              className="flex flex-col space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft(isRTL)}
            >
              {/* Icon */}
              <div className="flex flex-row items-baseline">
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500"
                variants={iconFloat}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrackChangesIcon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold text-gray-900 md:text-4xl"
              >
                {t("about.vision.title")}
              </motion.h2>
              </div>
              

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-base leading-relaxed text-gray-600 md:text-lg"
              >
                {t("about.vision.description")}
              </motion.p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight(isRTL)}
            >
              <motion.img
                src={BM}
                alt="Business Vision"
                className="h-auto w-full rounded-2xl object-cover shadow-lg md:max-w-md lg:max-w-lg"
                variants={imageReveal}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="w-full py-16 px-4 bg-gray-200/50 justify-items-center">
        <motion.h1
          className="text-5xl font-semibold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("about.sectors.title")}
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:p-20 md:w-3/4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sectorsData.map((sector) => (
            <motion.div
              key={sector}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="border-0 rounded-2xl shadow-2xl p-5 bg-white h-full flex flex-col"
                variants={cardHover}
              >
                <p className="p-2 font-semibold text-lg">
                  {t(`about.sectors.items.${sector}.title`)}
                </p>
                <p className="p-2 text-gray-600 flex-grow">
                  {t(`about.sectors.items.${sector}.description`)}
                </p>
                <br />
                <Link to="/our-companies">
                  <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                    <Button className="bg-gradient-to-r from-blue-950 to-blue-500 w-full">
                      <span className="text-white">{t("about.sectors.learnMore")}</span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-linear-to-b from-gray-50 to-white py-16 px-4 md:px-8 lg:px-12 relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Image */}
            <motion.div
              className={`flex justify-center ${isRTL ? "lg:justify-end" : "lg:justify-start"} order-2 lg:order-1`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft(isRTL)}
            >
              <motion.img
                src={BT}
                alt=" Investment"
                className="h-auto w-full rounded-2xl object-cover shadow-lg md:max-w-md lg:max-w-lg"
                variants={imageReveal}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              className={`flex flex-col space-y-6 order-1 lg:order-2`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight(isRTL)}
            >
              <div className="flex flex-row items-baseline">
                {/* Icon */}
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500"
                  variants={iconFloat}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MovingIcon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Title */}
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-bold text-gray-900 md:text-4xl"
                >
                  {t("about.mission.title")}
                </motion.h2>
              </div>


              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-base leading-relaxed text-gray-600 md:text-lg"
              >
                {t("about.mission.description")}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}