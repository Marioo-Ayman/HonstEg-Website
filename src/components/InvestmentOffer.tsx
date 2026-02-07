import { motion } from 'framer-motion';
import Button from "@mui/material/Button";
import Image from '@/assets/offer.jpg';
import { useState, useEffect } from 'react';
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import house from '@/assets/offer.jpg'
interface ReturnSchedule {
  period: string;
  rate: number;
}

export function PremiumInvestmentOffer() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.days * 86400 +
          prev.hours * 3600 +
          prev.minutes * 60 +
          prev.seconds -
          1;

        if (totalSeconds <= 0) {
          clearInterval(interval);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: Math.floor(totalSeconds / 86400),
          hours: Math.floor((totalSeconds % 86400) / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

  const itemVariants: Variants  =  {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const returnSchedule: ReturnSchedule[] = [
    { period: 'Monthly', rate: 13 },
    { period: 'Every 4 Months', rate: 14 },
    { period: 'Every 6 Months', rate: 15 },
    { period: 'At Maturity', rate: 16 },
  ];




  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full"
          >
            <span className="text-sm font-semibold text-blue-700 tracking-wide">
              EXCLUSIVE LIMITED OFFER
            </span>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-serif text-slate-900 mb-4 text-balance">
            Safe Metals Portfolio
          </h2>
          <p className="text-xl text-slate-600 text-balance max-w-2xl mx-auto">
            12-Month Investment Opportunity for Sophisticated Investors
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Details */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Investment Details */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-serif text-slate-900 mb-6">
                Investment Details
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                  <span className="text-slate-600 font-medium">
                    Minimum Investment
                  </span>
                  <span className="text-2xl font-semibold text-slate-900">
                    1 Million
                  </span>
                </div>
                <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                  <span className="text-slate-600 font-medium">Duration</span>
                  <span className="text-2xl font-semibold text-slate-900">
                    12 Months
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-600 font-medium">
                    Profit Payout
                  </span>
                  <span className="text-2xl font-semibold text-slate-900">
                    Monthly
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Returns Schedule */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-serif mb-6">Return Schedule</h3>
              <div className="grid grid-cols-2 gap-4">
                {returnSchedule.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm border border-white border-opacity-20"
                  >
                    <p className="text-sm text-slate-300 mb-2">{item.period}</p>
                    <p className="text-3xl font-bold text-white">
                      {item.rate}%
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image & Timer */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={house}
                alt="Luxury home investment"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              variants={itemVariants}
              className="bg-blue-600 rounded-2xl p-8 text-white text-center"
            >
              <p className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-90">
                Offer Valid For
              </p>
              <div className="flex justify-around mb-6">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold mb-1">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs uppercase tracking-wider opacity-80">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm opacity-90">
                Limited to 70 clients only • First come, first served
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights & CTA */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => navigate(`/Apply/${encodeURIComponent("Safe Metals")}`)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Investment Today
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
