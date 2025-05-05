import React, { useState } from "react";

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
        color: "green-700",
        attractions: [
          {
            name: "مسجد السلطان حسن",
            description: "تحفة معمارية من العصر المملوكي"
          },
          {
            name: "مسجد الرفاعي",
            description: "يضم ضريح الخديوي إسماعيل"
          },
          {
            name: "مسجد ابن طولون",
            description: "أقدم مسجد موجود في القاهرة"
          },
          {
            name: "مسجد عمرو بن العاص",
            description: "أول مسجد في مصر وأفريقيا"
          }
        ]
      },
      {
        id: 2,
        title: "المتاحف",
        color: "amber-800",
        attractions: [
          {
            name: "المتحف المصري الكبير",
            description: "يضم أكثر من 50 ألف قطعة أثرية"
          },
          {
            name: "متحف الحضارة بالفسطاط",
            description: "يحكي قصة مصر من عصور ما قبل التاريخ"
          }
        ]
      },
      {
        id: 3,
        title: "معالم دينية وتاريخية",
        color: "blue-800",
        attractions: [
          {
            name: "الكنيسة المعلقة",
            description: "من أقدم الكنائس القبطية"
          },
          {
            name: "شجرة مريم بالمطرية",
            description: "استراحت عندها العائلة المقدسة"
          },
          {
            name: "معبد بن عزرا اليهودي",
            description: "أقدم معبد يهودي في مصر"
          },
          {
            name: "قصر البارون إمبان",
            description: "تصميم مستوحى من العمارة الهندية"
          },
          {
            name: "كهف السنور ببني سويف",
            description: "من أجمل الكهوف الطبيعية بتكويناته النادرة"
          }
        ]
      }
    ]
  });
  return (
    <div className="bg-amber-50 rounded-lg shadow-md p-6 mt-4">
      {/* Header - using data from state */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-amber-900 mb-2">
          {tourData.introduction.title}
        </h1>
        <p className="text-xl text-amber-700">
          {tourData.introduction.subtitle}
        </p>
      </div>

      {/* Introduction Text - mapping through paragraphs */}
      <div className="text-right mb-8 text-amber-800">
        {tourData.introduction.paragraphs.map((paragraph, index) => (
          <p key={index} className={`text-lg mb-4 ${index === tourData.introduction.paragraphs.length - 1 ? 'font-semibold' : ''}`}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Featured Attractions - mapping through categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tourData.categories.map(category => (
          <div key={category.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className={`bg-${category.color} text-white py-2 px-4 text-right`}>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            <div className="p-4 text-right">
              {category.attractions.map((attraction, idx) => (
                <div key={idx} className={idx < category.attractions.length - 1 ? 'mb-4' : ''}>
                  <p className="mb-2 font-bold">{attraction.name}</p>
                  <p className="text-gray-700">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action
      <div className="text-center mt-8">
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          احجز رحلتك الآن
        </button>
      </div> */}
    </div>
  );
}