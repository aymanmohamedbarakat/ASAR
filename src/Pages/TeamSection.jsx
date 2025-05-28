import React, { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import { PiTiktokLogoThin } from "react-icons/pi";
import { useTeam } from "../store";

export default function TeamSection() {
  const { TeamMember } = useTeam();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-amber-50 to-white"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            فريقنا المتميز
            <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            تعرف على فريقنا المتميز من الخبراء في مجال السياحة والآثار والتاريخ،
            الذين يعملون بشغف لتقديم تجارب سياحية فريدة ونشر المعرفة التاريخية
          </p>
        </div>

        {/* Team grid with hover effects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TeamMember &&
            TeamMember.map((member, index) => (
              <div
                key={member.id || index}
                className="group relative transition-all duration-500"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* New horizontal card design with floating effect */}
                <div
                  className={`flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
                    activeIndex === index ? "shadow-2xl translate-y-2" : ""
                  }`}
                >
                  {/* Left side - circular image with border */}
                  <div className="md:w-1/3 p-6 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-amber-200 shadow-lg transform transition-transform duration-500 group-hover:scale-105">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/300x300?text=صورة+غير+متوفرة";
                        }}
                      />
                    </div>
                  </div>

                  {/* Right side - content with decorative elements */}
                  <div className="md:w-2/3 p-6 md:pr-8 relative bg-gradient-to-br from-white to-amber-50">
                    {/* Decorative element */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-amber-100 opacity-40 rounded-full transform -translate-x-8 -translate-y-8"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 border-b-2 border-amber-200 pb-2 inline-block">
                        {member.name}
                      </h3>

                      {member.position && (
                        <p className="text-amber-700 font-medium mb-3">
                          {member.position}
                        </p>
                      )}

                      {member.description && (
                        <p className="text-gray-600 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                          {member.description}
                        </p>
                      )}

                      {/* Social links in a more modern style */}
                      {member.socialLinks && (
                        <div className="flex flex-wrap mt-4 gap-2">
                          {member.socialLinks.tiktok && (
                            <a
                              href={member.socialLinks.tiktok}
                              className="text-gray-600 hover:text-amber-500 transition-colors duration-300"
                              aria-label="تيك توك"
                            >
                              <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full hover:bg-amber-100 transition-all duration-300">
                                <PiTiktokLogoThin size={15} />
                                <span className="text-sm">تيك توك</span>
                              </div>
                            </a>
                          )}
                          {member.socialLinks.facebook && (
                            <a
                              href={member.socialLinks.facebook}
                              className="text-gray-600 hover:text-amber-500 transition-colors duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="فيسبوك"
                            >
                              <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full hover:bg-amber-100 transition-all duration-300">
                                <Facebook size={15} />
                                <span className="text-sm">فيسبوك</span>
                              </div>
                            </a>
                          )}
                          {member.socialLinks.instagram && (
                            <a
                              href={member.socialLinks.instagram}
                              className="text-gray-600 hover:text-amber-500 transition-colors duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="انستغرام"
                            >
                              <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full hover:bg-amber-100 transition-all duration-300">
                                <Instagram size={15} />
                                <span className="text-sm">انستغرام</span>
                              </div>
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Decorative accent */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-amber-100 opacity-30 rounded-full transform translate-x-10 translate-y-10"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

//////////////////////////////////
// import React from 'react';
// import { useTeam } from "../Hooks/TeamStore";

// export default function TeamSection() {
//   // Get team members from the store
//   const { TeamMember } = useTeam();

//   return (
//     <section className="py-12 sm:py-16 md:py-20 bg-amber-50 relative overflow-hidden" dir="rtl">
//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         {/* Section Header with Responsive Styling */}
//         <div className="text-center mb-8 sm:mb-12 md:mb-16 relative">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 inline-block relative z-10">
//             فريقنا
//             <div className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-2 sm:h-3 bg-amber-300 opacity-50 transform -rotate-1"></div>
//           </h2>
//           <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto mt-4 sm:mt-6 px-2">
//             تعرف على فريقنا المتميز من الخبراء في مجال السياحة والآثار والتاريخ،
//             الذين يعملون بشغف لتقديم تجارب سياحية فريدة ونشر المعرفة التاريخية
//           </p>
//         </div>

//         {/* Team Members Grid - Responsive Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
//           {TeamMember && TeamMember.map((member, index) => (
//             <div
//               key={member.id || index}
//               className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
//             >
//               {/* Image Container with Responsive Sizing */}
//               <div className="relative">
//                 <div className="absolute -inset-1 bg-amber-300 opacity-70 rounded-lg transform rotate-2 group-hover:rotate-3 transition-transform duration-300 hidden sm:block"></div>
//                 <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-white shadow-md">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/300x400?text=صورة+غير+متوفرة';
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Content Container with Responsive Padding */}
//               <div className="p-4 sm:px-5 sm:pt-6 sm:pb-5">
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>

//                 {member.position && (
//                   <div className="flex items-center mb-2 sm:mb-3">
//                     <div className="w-6 sm:w-8 h-0.5 bg-amber-500 ml-2 sm:ml-3"></div>
//                     <p className="text-sm sm:text-base text-amber-700 font-medium">{member.position}</p>
//                   </div>
//                 )}

//                 {member.description && (
//                   <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 leading-relaxed line-clamp-3">{member.description}</p>
//                 )}

//                 {/* Social Links with Responsive Sizing */}
//                 {member.socialLinks && (
//                   <div className="flex space-x-3 sm:space-x-4 space-x-reverse">
//                     {member.socialLinks.twitter && (
//                       <a
//                         href={member.socialLinks.twitter}
//                         className="bg-amber-100 p-1.5 sm:p-2 rounded-full text-gray-600 hover:bg-amber-500 hover:text-white transition-colors duration-300"
//                         aria-label="تويتر"
//                       >
//                         <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                         </svg>
//                       </a>
//                     )}
//                     {member.socialLinks.linkedin && (
//                       <a
//                         href={member.socialLinks.linkedin}
//                         className="bg-amber-100 p-1.5 sm:p-2 rounded-full text-gray-600 hover:bg-amber-500 hover:text-white transition-colors duration-300"
//                         aria-label="لينكد إن"
//                       >
//                         <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                         </svg>
//                       </a>
//                     )}
//                     {member.socialLinks.email && (
//                       <a
//                         href={`mailto:${member.socialLinks.email}`}
//                         className="bg-amber-100 p-1.5 sm:p-2 rounded-full text-gray-600 hover:bg-amber-500 hover:text-white transition-colors duration-300"
//                         aria-label="البريد الإلكتروني"
//                       >
//                         <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//                         </svg>
//                       </a>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Responsive Decorative Elements */}
//         <div className="hidden md:block absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 bg-amber-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="hidden md:block absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-amber-300 rounded-full opacity-20 translate-x-1/4 translate-y-1/4"></div>
//       </div>
//     </section>
//   );
// }
