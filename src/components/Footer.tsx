import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Logo from '@/assets/honestEGLogo_dbrd.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-slate-900 text-white">
      {/* Wavy Top Border */}
      <div className="absolute top-0 ltr:left-0 rtl:right-0 right-0 overflow-hidden h-16 -mt-1">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="absolute top-0 w-full h-full"
        >
          <path
            d="M0,50 Q250,20 500,50 T1000,50 L1000,0 L0,0 Z"
            fill="#e2e8f0"
            opacity="0.3"
          />
          <path
            d="M0,60 Q250,30 500,60 T1000,60 L1000,0 L0,0 Z"
            fill="#cbd5e1"
            opacity="0.4"
          />
          <path
            d="M0,70 Q250,40 500,70 T1000,70 L1000,0 L0,0 Z"
            fill="#94a3b8"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Honest Egy" className="w-1/3 h-1/3" />
              <span className="text-white font-bold text-sm">Honest Egy</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t('footer.companyDescription')}
            </p>
            <div className="flex gap-3">
              <Link
                to="https://www.facebook.com/Honestegy.investment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label={t('footer.social.facebook')}
              >
                <FacebookOutlinedIcon className="w-5 h-5" />
              </Link>
              <Link
                to="https://honestegy.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label={t('footer.social.website')}
              >
                <InsertLinkOutlinedIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.aboutUs.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/About-Us">
                  <span className="text-slate-300 hover:text-white transition-colors text-sm">
                    – {t('footer.aboutUs.aboutCompany')}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/#packs"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  – {t('footer.aboutUs.packages')}
                </Link>
              </li>
              <li>
                <Link to="/our-companies">
                  <span className="text-slate-300 hover:text-white transition-colors text-sm">
                    – {t('footer.aboutUs.ourCompanies')}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.location.title')}</h4>
            <ul className="space-y-2">
              <li>
                <div className="flex items-start gap-2 text-slate-300 text-sm">
                  <RoomOutlinedIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{t('footer.location.cairo')}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2 text-slate-300 text-sm">
                  <RoomOutlinedIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{t('footer.location.alexandria')}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.contact.title')}</h4>
            <div className="space-y-3">
              <a
                href="tel:+201122258164"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
              >
                <PhoneOutlinedIcon className="w-4 h-4" />
{                   t('footer.contact.phone')}</a>
              <a
                href="mailto:contact@honestegy.net"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm break-all"
              >
                <MailOutlinedIcon className="w-4 h-4" />
                contact@honestegy.net
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-700">
          <p className="text-center text-sm text-slate-400">
            {t('footer.copyright', { year: 2026 })}
          </p>
        </div>
      </div>
    </footer>
  );
}