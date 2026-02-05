import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import HH from "@/assets/HH.png";
import {
  fadeInUp,
  slideInLeft,
  scrollFadeIn,
  logoHover,
} from "@/utils/animations";

export default function HHC() {
const { t, i18n } = useTranslation();
const isRTL = i18n.language === "ar";
  return (
    <div>
      <motion.div
            className="space-y-15"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollFadeIn}
          >
            <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isRTL ? "" : "md:flex-row-reverse"}`}>
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
                    src={HH}
                    alt="HONEST HOMES Logo"
                    className="max-w-full max-h-full p-4 object-contain scale-250"
                  />
                </motion.div>
              </motion.div>
              {/* Content Section */}
              <motion.div
                className="flex-1 w-full md:w-2/3"
                variants={slideInLeft(isRTL)}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t("companies.hh.name")}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t("companies.hh.description")}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 ml-2">
                  <li className={`flex items-start gap-3 text-gray-700 ${isRTL ? "" : ""}`}>
                    <span className="shrink-0 w-2 h-2 rounded-full bg-gray-700 mt-2" />
                    <div className={isRTL ? "" : ""}>
                      <span className="font-semibold">{t("companies.hh.mission")} </span>
                      <span className="text-gray-600 text-lg leading-relaxed">
                        {t("companies.hh.missionText")}
                      </span>
                    </div>
                  </li>
                  <li className={`flex items-start gap-3 text-gray-700 ${isRTL ? "" : ""}`}>
                    <span className="shrink-0 w-2 h-2 rounded-full bg-gray-700 mt-2" />
                    <div className={isRTL ? "text-right" : ""}>
                      <span className="font-semibold">{t("companies.hh.values")} </span>
                      <span className="text-gray-600 text-lg leading-relaxed">
                        {t("companies.hh.valuesText")}
                      </span>
                    </div>
                  </li>
                  <li className={`flex items-start gap-3 text-gray-700 ${isRTL ? "" : ""}`}>
                    <span className="shrink-0 w-2 h-2 rounded-full bg-gray-700 mt-2" />
                    <div className={isRTL ? "text-right" : ""}>
                      <span className="font-semibold">{t("companies.hh.services")} </span>
                      <span className="text-gray-600 text-lg leading-relaxed">
                        {t("companies.hh.servicesText")}
                      </span>
                    </div>
                  </li>
                  <li className={`flex items-start gap-3 text-gray-700 ${isRTL ? "" : ""}`}>
                    <span className="shrink-0 w-2 h-2 rounded-full bg-gray-700 mt-2" />
                    <div className={isRTL ? "text-right" : ""}>
                      <span className="font-semibold">{t("companies.hh.team")} </span>
                      <span className="text-gray-600 text-lg leading-relaxed">
                        {t("companies.hh.teamText")}
                      </span>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                  {t("companies.hh.closing")}
                </p>
              </motion.div>

              
            </div>
          </motion.div>
    </div>
  )
}
