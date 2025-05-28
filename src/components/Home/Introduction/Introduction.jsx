// import React, { useState } from "react";

// export default function TourIntroduction() {
//   const [tourData, setTourData] = useState({
//     introduction: {
//       title: "رحلة في قلب مصر",
//       subtitle: "أرض الحضارات والتاريخ والجمال",
//       paragraphs: [
//         "مستعدين يا جماعة؟ يلا بينا نبدأ رحلتنا في قلب مصر… أرض الحضارات والتاريخ والجمال!",
//         "مصر طول عمرها مميزة بتنوع معالمها التاريخية والدينية والفنية… أماكن مش بس بتشهد على حضارة آلاف السنين، لكن كمان بتدعم رؤية مصر 2030، اللي بتهدف للحفاظ على تراثنا العظيم للأجيال الجاية.",
//         "يلا نبدأ جولتنا ولا أروع!"
//       ]
//     },
//     categories: [
//       {
//         id: 1,
//         title: "المعالم الإسلامية",
//         color: "green-700",
//         attractions: [
//           {
//             name: "مسجد السلطان حسن",
//             description: "تحفة معمارية من العصر المملوكي"
//           },
//           {
//             name: "مسجد الرفاعي",
//             description: "يضم ضريح الخديوي إسماعيل"
//           },
//           {
//             name: "مسجد ابن طولون",
//             description: "أقدم مسجد موجود في القاهرة"
//           },
//           {
//             name: "مسجد عمرو بن العاص",
//             description: "أول مسجد في مصر وأفريقيا"
//           }
//         ]
//       },
//       {
//         id: 2,
//         title: "المتاحف",
//         color: "amber-800",
//         attractions: [
//           {
//             name: "المتحف المصري الكبير",
//             description: "يضم أكثر من 50 ألف قطعة أثرية"
//           },
//           {
//             name: "متحف الحضارة بالفسطاط",
//             description: "يحكي قصة مصر من عصور ما قبل التاريخ"
//           }
//         ]
//       },
//       {
//         id: 3,
//         title: "معالم دينية وتاريخية",
//         color: "blue-800",
//         attractions: [
//           {
//             name: "الكنيسة المعلقة",
//             description: "من أقدم الكنائس القبطية"
//           },
//           {
//             name: "شجرة مريم بالمطرية",
//             description: "استراحت عندها العائلة المقدسة"
//           },
//           {
//             name: "معبد بن عزرا اليهودي",
//             description: "أقدم معبد يهودي في مصر"
//           },
//           {
//             name: "قصر البارون إمبان",
//             description: "تصميم مستوحى من العمارة الهندية"
//           },
//           {
//             name: "كهف السنور ببني سويف",
//             description: "من أجمل الكهوف الطبيعية بتكويناته النادرة"
//           }
//         ]
//       }
//     ]
//   });
//   return (
//     <div className="bg-amber-50 rounded-lg shadow-md p-6 mt-4">
//       {/* Header - using data from state */}
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold text-amber-900 mb-2">
//           {tourData.introduction.title}
//         </h1>
//         <p className="text-xl text-amber-700">
//           {tourData.introduction.subtitle}
//         </p>
//       </div>

//       {/* Introduction Text - mapping through paragraphs */}
//       <div className="text-right mb-8 text-amber-800">
//         {tourData.introduction.paragraphs.map((paragraph, index) => (
//           <p key={index} className={`text-lg mb-4 ${index === tourData.introduction.paragraphs.length - 1 ? 'font-semibold' : ''}`}>
//             {paragraph}
//           </p>
//         ))}
//       </div>

//       {/* Featured Attractions - mapping through categories */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {tourData.categories.map(category => (
//           <div key={category.id} className="bg-white rounded-lg shadow overflow-hidden">
//             <div className={`bg-${category.color} text-white py-2 px-4 text-right`}>
//               <h3 className="text-xl font-bold">{category.title}</h3>
//             </div>
//             <div className="p-4 text-right">
//               {category.attractions.map((attraction, idx) => (
//                 <div key={idx} className={idx < category.attractions.length - 1 ? 'mb-4' : ''}>
//                   <p className="mb-2 font-bold">{attraction.name}</p>
//                   <p className="text-gray-700">{attraction.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Call to Action
//       <div className="text-center mt-8">
//         <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
//           احجز رحلتك الآن
//         </button>
//       </div> */}
//     </div>
//   );
// }



import React, { useState } from "react";
import { MapPin, Clock, Users, Star } from "lucide-react";

export default function TourIntroduction() {
  const [tourData, setTourData] = useState({
    introduction: {
      title: "رحلة في قلب مصر",
      subtitle: "أرض الحضارات والتاريخ والجمال",
      paragraphs: [
        "مستعدين يا جماعة؟ يلا بينا نبدأ رحلتنا في قلب مصر… أرض الحضارات والتاريخ والجمال!",
        "مصر طول عمرها مميزة بتنوع معالمها التاريخية والدينية والفنية… أماكن مش بس بتشهد على حضارة آلاف السنين، لكن كمان بتدعم رؤية مصر 2030، اللي بتهدف للحفاظ على تراثنا العظيم للأجيال الجاية.",
        "يلا نبدأ جولتنا ولا أروع!"
      ]
    },
    categories: [
      {
        id: 1,
        title: "المعالم الإسلامية",
        color: "emerald",
        icon: "🕌",
        attractions: [
          {
            name: "مسجد السلطان حسن",
            description: "تحفة معمارية من العصر المملوكي",
            rating: 4.8
          },
          {
            name: "مسجد الرفاعي",
            description: "يضم ضريح الخديوي إسماعيل",
            rating: 4.6
          },
          {
            name: "مسجد ابن طولون",
            description: "أقدم مسجد موجود في القاهرة",
            rating: 4.7
          },
          {
            name: "مسجد عمرو بن العاص",
            description: "أول مسجد في مصر وأفريقيا",
            rating: 4.9
          }
        ]
      },
      {
        id: 2,
        title: "المتاحف",
        color: "amber",
        icon: "🏛️",
        attractions: [
          {
            name: "المتحف المصري الكبير",
            description: "يضم أكثر من 50 ألف قطعة أثرية",
            rating: 4.9
          },
          {
            name: "متحف الحضارة بالفسطاط",
            description: "يحكي قصة مصر من عصور ما قبل التاريخ",
            rating: 4.7
          }
        ]
      },
      {
        id: 3,
        title: "معالم دينية وتاريخية",
        color: "blue",
        icon: "⛪",
        attractions: [
          {
            name: "الكنيسة المعلقة",
            description: "من أقدم الكنائس القبطية",
            rating: 4.5
          },
          {
            name: "شجرة مريم بالمطرية",
            description: "استراحت عندها العائلة المقدسة",
            rating: 4.3
          },
          {
            name: "معبد بن عزرا اليهودي",
            description: "أقدم معبد يهودي في مصر",
            rating: 4.4
          },
          {
            name: "قصر البارون إمبان",
            description: "تصميم مستوحى من العمارة الهندية",
            rating: 4.6
          },
          {
            name: "كهف السنور ببني سويف",
            description: "من أجمل الكهوف الطبيعية بتكويناته النادرة",
            rating: 4.8
          }
        ]
      }
    ],
    stats: {
      duration: "7 أيام",
      groupSize: "12 شخص",
      locations: "15 موقع"
    }
  });

  const getColorClasses = (color) => {
    const colorMap = {
      emerald: {
        bg: "bg-emerald-600",
        hover: "hover:bg-emerald-700",
        text: "text-emerald-600",
        border: "border-emerald-200",
        light: "bg-emerald-50"
      },
      amber: {
        bg: "bg-amber-600",
        hover: "hover:bg-amber-700",
        text: "text-amber-600",
        border: "border-amber-200",
        light: "bg-amber-50"
      },
      blue: {
        bg: "bg-blue-600",
        hover: "hover:bg-blue-700",
        text: "text-blue-600",
        border: "border-blue-200",
        light: "bg-blue-50"
      }
    };
    return colorMap[color] || colorMap.amber;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 mt-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4 leading-tight">
              {tourData.introduction.title}
            </h1>
            <p className="text-2xl md:text-3xl text-amber-700 mb-8 font-medium">
              {tourData.introduction.subtitle}
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Clock className="w-5 h-5 text-amber-600 ml-2" />
                <span className="font-semibold text-gray-800">{tourData.stats.duration}</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Users className="w-5 h-5 text-amber-600 ml-2" />
                <span className="font-semibold text-gray-800">{tourData.stats.groupSize}</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <MapPin className="w-5 h-5 text-amber-600 ml-2" />
                <span className="font-semibold text-gray-800">{tourData.stats.locations}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Text */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-right">
          {tourData.introduction.paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className={`text-lg md:text-xl leading-relaxed mb-6 ${
                index === tourData.introduction.paragraphs.length - 1 
                  ? 'font-bold text-amber-800 text-xl md:text-2xl' 
                  : 'text-gray-700'
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
          اكتشف أجمل المعالم
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tourData.categories.map(category => {
            const colors = getColorClasses(category.color);
            return (
              <div key={category.id} className="group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Category Header */}
                  <div className={`${colors.bg} ${colors.hover} text-white py-6 px-6 text-center transition-colors duration-300`}>
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  
                  {/* Attractions */}
                  <div className="p-6 space-y-6">
                    {category.attractions.map((attraction, idx) => (
                      <div 
                        key={idx} 
                        className={`${colors.light} rounded-xl p-4 border ${colors.border} text-right transition-all duration-200 hover:shadow-md`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current ml-1" />
                            <span className="text-sm font-medium text-gray-600">
                              {attraction.rating}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900">
                            {attraction.name}
                          </h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {attraction.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            جاهز للمغامرة؟
          </h3>
          <p className="text-xl mb-8 opacity-90">
            احجز رحلتك الآن واستكشف عجائب مصر
          </p>
          <button className="bg-white text-amber-600 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 hover:bg-amber-50 hover:scale-105 shadow-lg">
            احجز رحلتك الآن
          </button>
        </div>
      </div> */}
    </div>
  );
}