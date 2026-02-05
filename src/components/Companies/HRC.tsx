import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import HR from "@/assets/HR.png";
import {
  fadeInUp,
  slideInRight,
  scrollFadeIn,
  logoHover,
} from "@/utils/animations";


export default function HRC() {
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
                    src={HR}
                    alt="HR ACADEMY Logo"
                    className="max-w-full max-h-full p-4 object-contain scale-200"
                  />
                </motion.div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="flex-1 w-full md:w-3/4"
                variants={slideInRight(isRTL)}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t("companies.hr.name")}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t("companies.hr.description")}
                </p>
              </motion.div>
            </div>
          </motion.div>
    </div>
  )
}
