import React from 'react'
import { useLinks } from '../../Hooks/uiStore';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/frontend_assets/assets';
import { Facebook, Instagram, Mail, MapPin, Phone,} from 'lucide-react';
import { PiTiktokLogoThin } from "react-icons/pi";
export default function Footer() {
    const { links } = useLinks();
  
    const socialLinks = [
      { icon: <Facebook  size={20} />, url: "https://www.facebook.com/share/1FePcFqSsW/", label: "Facebook" },
      { icon: <PiTiktokLogoThin size={20} />, url: "https://www.tiktok.com/@athar_magazine?_t=ZS-8vQf1TuHXQW&_r=1", label: "Twitter" },
      { icon: <Instagram size={20} />, url: "https://www.instagram.com/athar20_25?igsh=aXJtejRjcjd4bGNx&utm_source=qr", label: "Instagram" },
    ];
  
    const contactInfo = [
      { icon: <Mail size={16} />, text: "info@example.com" },
      { icon: <Phone size={16} />, text: "011-2345-6789" },
      { icon: <MapPin size={16} />, text: "القاهرة، مصر" }
    ];
  
    return (
      <footer className="bg-gray-800 text-white pt-10 pb-4 w-full">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Column */}
            <div className="flex flex-col items-start">
              <Link to="/" className="mb-4">
                <img src={assets.footerLogo} className="w-24" alt="الشعار" />
              </Link>
              <p className="text-gray-300 text-sm mb-4">
                بوابة إخبارية شاملة تقدم أحدث الأخبار والتقارير والتحليلات في مختلف المجالات  السياحة و الآثار و التاريخ.
              </p>
              <div className="flex items-center gap-3 mt-2">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    aria-label={social.label}
                    className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
  
            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-r-2 border-blue-500 pr-2">
                روابط سريعة
              </h3>
              <ul className="space-y-2">
                {links.slice(0, 6).map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-r-2 border-blue-500 pr-2">
                تواصل معنا
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="text-blue-400">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-400 text-xs">
              جميع الحقوق محفوظة © {new Date().getFullYear()} | تم التطوير بواسطة فريقنا المتميز
            </p>
          </div>
        </div>
      </footer>
    );
}
