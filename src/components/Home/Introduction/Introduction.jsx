import React from "react";

export default function Introduction() {
  return (
    <div className="bg-amber-50 rounded-lg shadow-md p-6 mt-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-amber-900 mb-2">
          رحلة في قلب مصر
        </h1>
        <p className="text-xl text-amber-700">أرض الحضارات والتاريخ والجمال</p>
      </div>

      {/* Introduction Text */}
      <div className="text-right mb-8 text-amber-800">
        <p className="text-lg mb-4">
          مستعدين يا جماعة؟ يلا بينا نبدأ رحلتنا في قلب مصر… أرض الحضارات
          والتاريخ والجمال!
        </p>
        <p className="text-lg mb-4">
          مصر طول عمرها مميزة بتنوع معالمها التاريخية والدينية والفنية… أماكن مش
          بس بتشهد على حضارة آلاف السنين، لكن كمان بتدعم رؤية مصر 2030، اللي
          بتهدف للحفاظ على تراثنا العظيم للأجيال الجاية.
        </p>
        <p className="text-lg font-semibold">يلا نبدأ جولتنا ولا أروع!</p>
      </div>

      {/* Featured Attractions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Islamic Sites */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="bg-green-700 text-white py-2 px-4 text-right">
            <h3 className="text-xl font-bold">المعالم الإسلامية</h3>
          </div>
          <div className="p-4 text-right">
            <p className="mb-2 font-bold">مسجد السلطان حسن</p>
            <p className="text-gray-700 mb-4">تحفة معمارية من العصر المملوكي</p>

            <p className="mb-2 font-bold">مسجد الرفاعي</p>
            <p className="text-gray-700 mb-4">يضم ضريح الخديوي إسماعيل</p>

            <p className="mb-2 font-bold">مسجد ابن طولون</p>
            <p className="text-gray-700 mb-4">أقدم مسجد موجود في القاهرة</p>

            <p className="mb-2 font-bold">مسجد عمرو بن العاص</p>
            <p className="text-gray-700">أول مسجد في مصر وأفريقيا</p>
          </div>
        </div>

        {/* Museums */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="bg-amber-800 text-white py-2 px-4 text-right">
            <h3 className="text-xl font-bold">المتاحف</h3>
          </div>
          <div className="p-4 text-right">
            <p className="mb-2 font-bold">المتحف المصري الكبير</p>
            <p className="text-gray-700 mb-4">يضم أكثر من 50 ألف قطعة أثرية</p>

            <p className="mb-2 font-bold">متحف الحضارة بالفسطاط</p>
            <p className="text-gray-700">يحكي قصة مصر من عصور ما قبل التاريخ</p>
          </div>
        </div>

        {/* Religious and Historical Sites */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="bg-blue-800 text-white py-2 px-4 text-right">
            <h3 className="text-xl font-bold">معالم دينية وتاريخية</h3>
          </div>
          <div className="p-4 text-right">
            <p className="mb-2 font-bold">الكنيسة المعلقة</p>
            <p className="text-gray-700 mb-4">من أقدم الكنائس القبطية</p>

            <p className="mb-2 font-bold">شجرة مريم بالمطرية</p>
            <p className="text-gray-700 mb-4">استراحت عندها العائلة المقدسة</p>

            <p className="mb-2 font-bold">معبد بن عزرا اليهودي</p>
            <p className="text-gray-700 mb-4">أقدم معبد يهودي في مصر</p>

            <p className="mb-2 font-bold">قصر البارون إمبان</p>
            <p className="text-gray-700">تصميم مستوحى من العمارة الهندية</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="text-center mt-8">
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          احجز رحلتك الآن
        </button>
      </div> */}
    </div>
  );
}
