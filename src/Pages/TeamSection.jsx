// import React from "react";
// import { useTeam } from "../Hooks/TeamStore";

// export default function TeamSection() {
//   // Get team members from the store
//   const { TeamMember } = useTeam();

//   return (
//     <section className="py-16 bg-amber-50" dir="rtl">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">فريقنا</h2>
//           <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             تعرف على فريقنا المتميز من الخبراء في مجال السياحة والآثار والتاريخ،
//             الذين يعملون بشغف لتقديم تجارب سياحية فريدة ونشر المعرفة التاريخية
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
//           {TeamMember &&
//             TeamMember.map((member, index) => (
//               <div
//                 key={member.id || index}
//                 className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
//               >
//                 <div className="h-80 overflow-hidden relative">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.src =
//                         "https://via.placeholder.com/300x400?text=صورة+غير+متوفرة";
//                     }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {member.name}
//                   </h3>
//                   {member.position && (
//                     <p className="text-amber-700 mb-3">{member.position}</p>
//                   )}
//                   {member.description && (
//                     <p className="text-gray-600 mb-4 line-clamp-2">{member.description}</p>
//                   )}
//                   {member.socialLinks && (
//                     <div className="flex justify-center pt-3 mt-4 border-t border-amber-100">
//                       {member.socialLinks.twitter && (
//                         <a
//                           href={member.socialLinks.twitter}
//                           className="mx-2 p-2 bg-amber-50 text-gray-600 rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-110 transition-all duration-300"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           aria-label="تويتر"
//                         >
//                           <svg
//                             className="h-5 w-5"
//                             fill="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                           </svg>
//                         </a>
//                       )}
//                       {member.socialLinks.linkedin && (
//                         <a
//                           href={member.socialLinks.linkedin}
//                           className="mx-2 p-2 bg-amber-50 text-gray-600 rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-110 transition-all duration-300"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           aria-label="لينكد إن"
//                         >
//                           <svg
//                             className="h-5 w-5"
//                             fill="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                           </svg>
//                         </a>
//                       )}
//                       {member.socialLinks.email && (
//                         <a
//                           href={`mailto:${member.socialLinks.email}`}
//                           className="mx-2 p-2 bg-amber-50 text-gray-600 rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-110 transition-all duration-300"
//                           aria-label="البريد الإلكتروني"
//                         >
//                           <svg
//                             className="h-5 w-5"
//                             fill="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//                           </svg>
//                         </a>
//                       )}
//                       {member.socialLinks.facebook && (
//                         <a
//                           href={member.socialLinks.facebook}
//                           className="mx-2 p-2 bg-amber-50 text-gray-600 rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-110 transition-all duration-300"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           aria-label="فيسبوك"
//                         >
//                           <svg
//                             className="h-5 w-5"
//                             fill="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                           </svg>
//                         </a>
//                       )}
//                       {member.socialLinks.instagram && (
//                         <a
//                           href={member.socialLinks.instagram}
//                           className="mx-2 p-2 bg-amber-50 text-gray-600 rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-110 transition-all duration-300"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           aria-label="انستغرام"
//                         >
//                           <svg
//                             className="h-5 w-5"
//                             fill="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                           </svg>
//                         </a>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }
//////////////////////////////////////

// import React, { useState } from "react";
// import { useTeam } from "../Hooks/TeamStore";

// export default function TeamSection() {
//   const { TeamMember } = useTeam();
//   const [activeIndex, setActiveIndex] = useState(null);

//   // Handle mouse enter
//   const handleMouseEnter = (index) => {
//     setActiveIndex(index);
//   };

//   // Handle mouse leave
//   const handleMouseLeave = () => {
//     setActiveIndex(null);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-amber-50 to-white" dir="rtl">
//       <div className="container mx-auto px-4">
//         {/* Section Header with animated underline */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
//             فريقنا المتميز
//             <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
//           </h2>
//           <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             تعرف على فريقنا المتميز من الخبراء في مجال السياحة والآثار والتاريخ،
//             الذين يعملون بشغف لتقديم تجارب سياحية فريدة ونشر المعرفة التاريخية
//           </p>
//         </div>

//         {/* Team grid with hover effects */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {TeamMember &&
//             TeamMember.map((member, index) => (
//               <div
//                 key={member.id || index}
//                 className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl"
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 {/* Card with perspective effect */}
//                 <div className={`transform transition-transform duration-500 ${activeIndex === index ? "scale-105" : ""}`}>
//                   {/* Image container with overlay */}
//                   <div className="h-72 overflow-hidden relative">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       onError={(e) => {
//                         e.target.src =
//                           "https://via.placeholder.com/300x400?text=صورة+غير+متوفرة";
//                       }}
//                     />
//                     {/* Gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   </div>

//                   {/* Content container */}
//                   <div className="p-6 bg-white relative z-10">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-amber-600">
//                       {member.name}
//                     </h3>
//                     {member.position && (
//                       <p className="text-amber-700 mb-3 font-medium">{member.position}</p>
//                     )}
//                     {member.description && (
//                       <p className="text-gray-600 mb-4 line-clamp-3 transition-all duration-300 group-hover:line-clamp-none">
//                         {member.description}
//                       </p>
//                     )}

//                     {/* Social links with animated icons */}
//                     {member.socialLinks && (
//                       <div className="flex justify-center pt-4 mt-4 border-t border-amber-100">
//                         {member.socialLinks.twitter && (
//                           <a
//                             href={member.socialLinks.twitter}
//                             className="mx-2 p-2 bg-amber-50 text-gray-600 rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-110 transition-all duration-300"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label="تويتر"
//                           >
//                             <svg
//                               className="h-5 w-5"
//                               fill="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                             </svg>
//                           </a>
//                         )}
//                         {member.socialLinks.linkedin && (
//                           <a
//                             href={member.socialLinks.linkedin}
//                             className="mx-2 p-2 bg-amber-50 text-gray-600 rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-110 transition-all duration-300"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label="لينكد إن"
//                           >
//                             <svg
//                               className="h-5 w-5"
//                               fill="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                             </svg>
//                           </a>
//                         )}
//                         {member.socialLinks.email && (
//                           <a
//                             href={`mailto:${member.socialLinks.email}`}
//                             className="mx-2 p-2 bg-amber-50 text-gray-600 rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-110 transition-all duration-300"
//                             aria-label="البريد الإلكتروني"
//                           >
//                             <svg
//                               className="h-5 w-5"
//                               fill="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//                             </svg>
//                           </a>
//                         )}
//                         {member.socialLinks.facebook && (
//                           <a
//                             href={member.socialLinks.facebook}
//                             className="mx-2 p-2 bg-amber-50 text-gray-600 rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-110 transition-all duration-300"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label="فيسبوك"
//                           >
//                             <svg
//                               className="h-5 w-5"
//                               fill="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                             </svg>
//                           </a>
//                         )}
//                         {member.socialLinks.instagram && (
//                           <a
//                             href={member.socialLinks.instagram}
//                             className="mx-2 p-2 bg-amber-50 text-gray-600 rounded-full hover:bg-amber-500 hover:text-white transform hover:scale-110 transition-all duration-300"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label="انستغرام"
//                           >
//                             <svg
//                               className="h-5 w-5"
//                               fill="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                             </svg>
//                           </a>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }
////////////////////////////////

import React, { useState } from "react";
import { useTeam } from "../Hooks/TeamStore";

export default function TeamSection() {
  const { TeamMember } = useTeam();
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle mouse enter
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-amber-50 to-white"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        {/* Section Header with animated underline */}
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
                          {member.socialLinks.twitter && (
                            <a
                              href={member.socialLinks.twitter}
                              className="text-gray-600 hover:text-amber-500 transition-colors duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="تويتر"
                            >
                              <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full hover:bg-amber-100 transition-all duration-300">
                                <svg
                                  className="h-4 w-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                                <span className="text-sm">تويتر</span>
                              </div>
                            </a>
                          )}
                          {member.socialLinks.linkedin && (
                            <a
                              href={member.socialLinks.linkedin}
                              className="text-gray-600 hover:text-amber-500 transition-colors duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="لينكد إن"
                            >
                              <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full hover:bg-amber-100 transition-all duration-300">
                                <svg
                                  className="h-4 w-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                <span className="text-sm">لينكد إن</span>
                              </div>
                            </a>
                          )}
                          {member.socialLinks.email && (
                            <a
                              href={`mailto:${member.socialLinks.email}`}
                              className="text-gray-600 hover:text-amber-500 transition-colors duration-300"
                              aria-label="البريد الإلكتروني"
                            >
                              <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full hover:bg-amber-100 transition-all duration-300">
                                <svg
                                  className="h-4 w-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span className="text-sm">البريد</span>
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
                                <svg
                                  className="h-4 w-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
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
                                <svg
                                  className="h-4 w-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
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
