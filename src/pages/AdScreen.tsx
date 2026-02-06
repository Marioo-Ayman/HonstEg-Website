// import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

interface InvestmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InvestmentModal({ isOpen, onClose }: InvestmentModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

  return () => {
    // Reset body overflow on unmount
    document.body.style.overflow = 'unset';
    document.removeEventListener('keydown', handleEsc);
  };
}, [isOpen, onClose]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-md mx-4 bg-[#ffffff] rounded-2xl shadow-2xl transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
            onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#1d283a] hover:bg-[#f5f5f5] rounded-lg transition-colors z-10"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        {/* Header */}
        <div className="pt-8 px-8 pb-4">
          <div className="inline-block mb-4 px-3 py-1 bg-[#FFB300] text-[#1d283a] text-xs font-semibold rounded-full">
            LIMITTED TIME  OFFER 
          </div>
          <h2 className="text-3xl font-bold text-[#1d283a] mb-2">
            Safe Metals Portfolio
          </h2>
          <p className="text-base text-[#737373]">
            Exclusive 12-Month Investment Program
          </p>
        </div>

        {/* Key Details */}
        <div className="px-8 py-6 border-t border-b border-[#e5e5e5]">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-xs text-[#737373] font-medium uppercase tracking-wide">
                Minimum Investment
              </p>
              <p className="text-xl font-bold text-[#FFB300]">
                $1,000,000
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-[#737373] font-medium uppercase tracking-wide">
                Profit Payout
              </p>
              <p className="text-xl font-bold text-[#1d283a]">Monthly</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-[#737373] font-medium uppercase tracking-wide">
                Principal Return
              </p>
              <p className="text-xl font-bold text-[#1d283a]">At Maturity</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-[#737373] font-medium uppercase tracking-wide">
                Limited to
              </p>
              <p className="text-xl font-bold text-[#FFB300]">
                70 Clients
              </p>
            </div>
          </div>
        </div>

        {/* Returns Section */}
        <div className="px-8 py-6 space-y-4">
          <p className="text-xs text-[#737373] font-medium uppercase tracking-wide">
            Expected Returns
          </p>
          <div className="space-y-3">
            {[
              { period: 'Monthly', rate: '13%' },
              { period: 'Every 4 Months', rate: '14%' },
              { period: 'Every 6 Months', rate: '15%' },
              { period: 'At Maturity', rate: '16%' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-sm text-[#1d283a]">{item.period}</span>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-12 bg-[#ffb700]" />
                  <span className="text-sm font-bold text-[#FFB300] min-w-fit">
                    {item.rate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-8 py-6 space-y-3 border-t border-[#e5e5e5]">
            {/* <Link to="/Apply-Special-Offer"> */}
                <button
                    onClick={() => navigate(`/Apply/${encodeURIComponent("Safe Metals")}`)} 
                    className="w-full py-3 bg-[#ffb700] text-[#1d283a] font-semibold rounded-lg hover:bg-[#ffc533] transition-colors shadow-lg hover:shadow-xl">
                    Apply Now
                </button>
            {/* </Link> */}
          {/* <button className="w-full py-3 border-2 border-[#1d283a] text-[#1d283a] font-semibold rounded-lg hover:bg-[#f5f5f5] transition-colors">
            View Details
          </button> */}
        </div>

        {/* Footer */}
        <div className="px-8 pb-6 pt-4">
          <p className="text-xs text-[#737373] text-center">
            Terms and conditions apply. All investments carry risk.
          </p>
        </div>
      </div>
    </div>
  );
}
