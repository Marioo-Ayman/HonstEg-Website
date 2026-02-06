import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface InvestmentCardProps {
  packageName: string;
  returnPercentage: string;
  description: string;
  minimumInvestment: string;
  duration: string;
  riskLevel: string;
  variant?: "light" | "dark";
}

export function InvestmentCard({
  packageName,
  returnPercentage,
  description,
  minimumInvestment,
  duration,
  riskLevel,
  variant = "light",
}: InvestmentCardProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isDark = variant === "dark";
  return (
    <div
      className={`
         group relative
    h-full
    flex flex-col
    rounded-2xl p-8
    shadow-lg transition-all duration-300
    hover:shadow-2xl hover:-translate-y-1
    ${
      isDark
        ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white"
        : "bg-white text-slate-900"
    }
      `}
    >
      {/* Subtle accent gradient overlay */}
      {/* <div className="absolute top-0 ltr:left-0 rtl:right-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-t-2xl opacity-80" /> */}

      {/* Package Name */}
      <h3
        className={`text-2xl font-bold mb-6 tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}
      >
        {packageName}
      </h3>

      {/* Return Percentage - Focal Point */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
            {returnPercentage}
          </span>
          <span
            className={`text-lg font-medium ${isDark ? "text-slate-300" : "text-slate-600"}`}
          >
            {t("investment.annualReturn")}
          </span>
        </div>
      </div>

      {/* Description */}
      <p
        className={`mb-8 leading-relaxed w-85 ${isDark ? "text-slate-300" : "text-slate-600"}`}
      >
        {description}
      </p>

      {/* Key Details Section */}
      <div className="space-y-4 mb-8">
        <div
          className={`h-px bg-gradient-to-r ${isDark ? "from-slate-700 via-slate-600 to-transparent" : "from-slate-200 via-slate-300 to-transparent"}`}
        />

        <div className="grid gap-4">
          {/* Minimum Investment */}
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${isDark ? "bg-slate-800" : "bg-slate-50"}`}
            >
              <AttachMoneyOutlinedIcon
                className={`w-5 h-5 ${isDark ? "text-amber-400" : "text-amber-600"}`}
              />
            </div>
            <div>
              <p
                className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                {t("investment.minimumInvestment")}
              </p>
              <p
                className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {minimumInvestment}
              </p>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${isDark ? "bg-slate-800" : "bg-slate-50"}`}
            >
              <AccessTimeIcon
                className={`w-5 h-5 ${isDark ? "text-amber-400" : "text-amber-600"}`}
              />
            </div>
            <div>
              <p
                className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                {t("investment.duration")}
              </p>
              <p
                className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {duration}
              </p>
            </div>
          </div>

          {/* Risk Level / Interest Rate Type */}
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${isDark ? "bg-slate-800" : "bg-slate-50"}`}
            >
              <ShieldOutlinedIcon
                className={`w-5 h-5 ${isDark ? "text-amber-400" : "text-amber-600"}`}
              />
            </div>
            <div>
              <p
                className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                {t("investment.interestRateType")}
              </p>
              <p
                className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {riskLevel}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`h-px bg-linear-to-r ${isDark ? "from-slate-700 via-slate-600 to-transparent" : "from-slate-200 via-slate-300 to-transparent"}`}
        />
      </div>

      {/* Apply Now Button */}
        <button
          className={`
            w-full py-4 px-6 rounded-xl font-semibold text-white
            transition-all duration-300
            ${
              isDark
                ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                : "bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-950"
            }
            shadow-md hover:shadow-xl hover:scale-[1.02]
            flex items-center justify-center gap-2
          `}
           onClick={() => navigate(`/invest/${encodeURIComponent(packageName)}`)}
        >
          <span>{t("investment.applyNow")}</span>
          <TrendingUpIcon className="w-5 h-5" />
        </button>
    </div>
  );
}
