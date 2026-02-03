import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/Languagecontext';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  // In RTL, "previous" means right arrow, "next" means left arrow
  const PrevIcon = isRTL ? ChevronRightIcon : ChevronLeftIcon;
  const NextIcon = isRTL ? ChevronLeftIcon : ChevronRightIcon ;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          p-3 rounded-xl transition-all duration-300
          ${currentPage === 1
            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
            : 'bg-white text-slate-700 hover:bg-slate-900 hover:text-white shadow-md hover:shadow-xl'
          }
        `}
        aria-label={t('pagination.previous')}
      >
        <PrevIcon className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              w-12 h-12 rounded-xl font-semibold transition-all duration-300
              ${currentPage === page
                ? 'bg-linear-to-r from-slate-800 to-slate-900 text-white shadow-lg scale-110'
                : 'bg-white text-slate-700 hover:bg-slate-100 shadow-md hover:shadow-lg hover:scale-105'
              }
            `}
            aria-label={t('pagination.pageNumber', { page })}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`
          p-3 rounded-xl transition-all duration-300
          ${currentPage === totalPages
            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
            : 'bg-white text-slate-700 hover:bg-slate-900 hover:text-white shadow-md hover:shadow-xl'
          }
        `}
        aria-label={t('pagination.next')}
      >
        <NextIcon className="w-5 h-5" />
      </button>
    </div>
  );
}