import React from 'react';
import { useTeam } from "../Hooks/TeamStore";

export default function TeamSection() {
  // Get team members from the store
  const { TeamMember } = useTeam();
  
  return (
    <section className="py-16 bg-amber-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">فريقنا</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تعرف على فريقنا المتميز من الخبراء في مجال السياحة والآثار والتاريخ، الذين يعملون بشغف لتقديم تجارب سياحية فريدة ونشر المعرفة التاريخية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TeamMember && TeamMember.map((member, index) => (
            <div 
              key={member.id || index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x400?text=صورة+غير+متوفرة';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                {member.position && (
                  <p className="text-amber-700 mb-3">{member.position}</p>
                )}
                {member.description && (
                  <p className="text-gray-600 mb-4">{member.description}</p>
                )}
                {member.socialLinks && (
                  <div className="flex space-x-4 space-x-reverse">
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} className="text-gray-500 hover:text-blue-500">
                        <span className="sr-only">تويتر</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} className="text-gray-500 hover:text-blue-700">
                        <span className="sr-only">لينكد إن</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.email && (
                      <a href={`mailto:${member.socialLinks.email}`} className="text-gray-500 hover:text-red-600">
                        <span className="sr-only">البريد الإلكتروني</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


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