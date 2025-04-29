import React, { useEffect, useState } from "react";

export default function WhyAsar() {
  const [activeSection, setActiveSection] = useState(0);
  // Auto-scroll to next section every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) =>
        prev < contentSections.length - 1 ? prev + 1 : 0
      );
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const contentSections = [
    {
      title: "لماذا إخترنا إسم أثر؟",
      content:
        "الأثر هو رساله من الماضي، بتحكيلنا عن حضارات سبقتنا و بتورينا قد ايه مصر كانت و مازلت بلد حضارة و فن و تاريخ عظيم.",
    },
    {
      title: "أثر أكثر من مجرد إسم",
      content:
        '"أثر"، بنكتشف مع بعض كيف الأماكن السياحية والتاريخية بتترك بصمة فينا، والمجلة مش بس بتعرض تاريخ، بل بتخلي كل زيارة ليك لها معنى أكبر.',
    },
    {
      title: "تجربة فريدة",
      content:
        '"أثر" مش بس كلمة، دي تجربة، سواء كنت بتزور أماكن سياحية أو بتكتشف تاريخ وحكايات من الماضي، "أثر" بتكون موجودة معاك، بتوثق كل لحظة في كل مكان.',
    },
    {
      title: "رحلة عبر الزمن",
      content:
        '"أثر" مجلة تأخذك في رحلة عبر أزمنة مصر العريقة، حيث تتلاقى روعة الحضارة وإبداع الفن والتراث في كل صفحة، لتنير دروب المستقبل بذكريات الماضي.',
    },
    {
      title: "أثر في قلوبنا",
      content:
        '"أثر" هو كل حاجة بتسيب فينا علامة.. مكان، حكاية، أو لحظة معانا، كل خطوة في مكان أثري بتتحول لحكاية جوه قلبك. مش كل "أثر" حجر.. أوقات بيكون ذكرى، إحساس، أو نظرة انبهار.',
    },
  ];
  return (
    <div>
      {/* Content Sections */}
      <div className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-stone-800">
          لماذا قمنا بإختيار اسم "أثر" لمشروع تخرجنا؟
        </h2>

        {/* Animated Content Carousel */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="relative">
            {/* Content Display */}
            <div className="px-8 py-20 h-100 md:h-50">
              {contentSections.map((section, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-1000 absolute inset-0 flex flex-col justify-center px-8 ${
                    activeSection === index
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4 text-amber-600">
                    {section.title}
                  </h3>
                  <p className="text-lg text-stone-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {contentSections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeSection === index
                      ? "w-6 bg-amber-500"
                      : "bg-stone-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Quote Section */}
        <div className="mt-24 text-center">
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <blockquote className="text-2xl font-light italic text-stone-700 max-w-3xl mx-auto">
            "في مجلة أثر، بنؤمن إن الأماكن بتتكلم، بس محتاجين نصغى، علشان كده
            بدأنا نحكي بصوتهم. أثر هو اللحظة اللي بتحس فيها إنك مش لوحدك.. إن
            المكان لسه فاكر، ولسه حي."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
