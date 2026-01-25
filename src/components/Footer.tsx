import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Logo from '@/assets/honestEGLogo_dbrd.png';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-16 -mt-1">
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
              <img src={Logo} alt="Honest Egy" className='w-1/3 h-1/3' />
                <span className="text-white font-bold text-sm">Honest Egy</span>

            </div>
            <p className="text-sm text-slate-300 leading-relaxed">Start your investment and trading journey with Honest EG Group of Companies            </p>
            <div className="flex gap-3">
              {/* <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              <a
                href="#Honestegy"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FacebookOutlinedIcon className="w-5 h-5" />
              </a>
              <a
                href="#honestegy.net"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Instagram"
              >
                <InsertLinkOutlinedIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">About us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#About" className="text-slate-300 hover:text-white transition-colors text-sm">
                  – About Company
                </a>
              </li>
              <li>
                <a href="#Packs" className="text-slate-300 hover:text-white transition-colors text-sm">
                  – Packages
                </a>
              </li>
      
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Location</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                   <RoomOutlinedIcon className="w-5 h-5" />
                   المقطم الهضبه الوسطى 99 بتقسيم الزهور- القاهرة

                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                    <RoomOutlinedIcon className="w-5 h-5" />
                   81 أ شارع سيدي جابر – الإسكندرية

                </a>
              </li>
      
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
    
            <div className="space-y-3">
              <a
                href="tel:+20 1122258164"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
              >
                <PhoneOutlinedIcon className="w-4 h-4" />
                +20 1122258164
              </a>
              <a
                href="mailto:contact@honestegy.net"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
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
            © 2026 Honest Egy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}