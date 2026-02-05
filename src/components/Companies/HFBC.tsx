import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import HFB from "@/assets/HFB.png";

import {
  fadeInUp,
  slideInRight,
  scrollFadeIn,
  logoHover,
} from "@/utils/animations";

export default function HFBC() {
    const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <div className="">
       {/* HFB Company Container */}
          <motion.div
            className="space-y-15"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollFadeIn}
          >
            <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-9 ${isRTL ? "md:flex-row-reverse" : ""}`}>
              {/* Logo Section */}
              <motion.div
                className="shrink-0 w-full md:w-1/3 flex justify-center"
                variants={fadeInUp}
              >
                <motion.div
                  className="w-48 h-48 flex items-center justify-center"
                  initial="rest"
                  whileHover="hover"
                  variants={logoHover}
                >
                  <img
                    src={HFB}
                    alt="Honest Financial Brokerage Logo"
                    className="max-w-full max-h-full p-4 object-contain scale-150"
                  />
                </motion.div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="flex-1 "
                variants={slideInRight(isRTL)}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t("companies.hfb.name")}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t("companies.hfb.description1")}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t("companies.hfb.description2")}
                </p>
                <h3 className="font-semibold mb-2">{t("companies.hfb.summaryTitle")}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t("companies.hfb.summary")}
                </p>
              </motion.div>
            </div>
          </motion.div>
    </div>
  )
}
