import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

interface InvestmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InvestmentModal({ isOpen, onClose }: InvestmentModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Returns data array
  const returnsData = [
    { period: t('modal.returns.monthly'), rate: '13%' },
    { period: t('modal.returns.quarterly'), rate: '14%' },
    { period: t('modal.returns.semiAnnually'), rate: '15%' },
    { period: t('modal.returns.annually'), rate: '16%' },
  ];

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    //   document.body.style.overflow = 'hidden';
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
    //   document.body.style.overflow = 'unset';
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
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 ${
            isRTL ? 'left-6' : 'right-6'
          } p-2 text-[#1d283a] hover:bg-[#f5f5f5] rounded-lg transition-colors z-10`}
          aria-label={t('modal.closeButton')}
        >
          <CloseIcon />
        </button>

        {/* Header */}
        <div className={`pt-8 px-8 pb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="inline-block mb-4 px-3 py-1 bg-[#FFB300] text-[#1d283a] text-xs font-semibold rounded-full">
            {t('modal.limitedOffer')}
          </div>
          <h2 className="text-3xl font-bold text-[#1d283a] mb-2">
            {t('modal.title')}
          </h2>
          <p className="text-base text-[#737373]">
            {t('modal.subtitle')}
          </p>
        </div>

        {/* Key Details */}
        <div className="px-8 py-6 border-t border-b border-[#e5e5e5]">
          <div className="grid grid-cols-2 gap-6">
            <div className={`space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <p className="text-xs text-[#737373] font-medium uppercase tracking-wide">
                {t('modal.details.minimumInvestment')}
              </p>
              <p className="text-xl font-bold text-[#FFB300]">
                {t('modal.details.minimumAmount')}
              </p>
            </div>
            <div className={`space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <p className="text-xs text-[#737373] font-medium uppercase tracking-wide">
                {t('modal.details.profitPayout')}
              </p>
              <p className="text-xl font-bold text-[#1d283a]">
                {t('modal.details.payoutFrequency')}
              </p>
            </div>
            <div className={`space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <p className="text-xs text-[#737373] font-medium uppercase tracking-wide">
                {t('modal.details.principalReturn')}
              </p>
              <p className="text-xl font-bold text-[#1d283a]">
                {t('modal.details.returnTiming')}
              </p>
            </div>
            <div className={`space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <p className="text-xs text-[#737373] font-medium uppercase tracking-wide">
                {t('modal.details.limitedTo')}
              </p>
              <p className="text-xl font-bold text-[#FFB300]">
                {t('modal.details.clientLimit')}
              </p>
            </div>
          </div>
        </div>

        {/* Returns Section */}
        <div className={`px-8 py-6 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <p className="text-xs text-[#737373] font-medium uppercase tracking-wide">
            {t('modal.expectedReturns')}
          </p>
          <div className="space-y-3">
            {returnsData.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center ${
                  isRTL ? 'flex-row-reverse' : ''
                } justify-between`}
              >
                <span className="text-md text-[#1d283a]">{item.period}</span>
                <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="h-0.5 w-12 bg-[#ffb700]" />
                  <span className="text-md font-bold text-[#FFB300] min-w-fit">
                    {item.rate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-8 py-6 space-y-3 border-t border-[#e5e5e5]">
          <button
            onClick={() => navigate(`/Apply/${encodeURIComponent("Safe Metals")}`)}
            className="w-full py-3 bg-[#ffb700] text-[#1d283a] font-semibold rounded-lg hover:bg-[#ffc533] transition-colors shadow-lg hover:shadow-xl"
          >
            {t('modal.applyNow')}
          </button>
        </div>

        {/* Footer */}
        <div className="px-8 pb-6 pt-4">
          <p className="text-xs text-[#737373] text-center">
            {t('modal.disclaimer')}
          </p>
        </div>
      </div>
    </div>
  );
}