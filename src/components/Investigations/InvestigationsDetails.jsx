import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  ArrowRight,
  Calendar,
  User,
  Clock,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Search,
  Tag,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useInvestigations } from "../../Hooks/InvestigationsStore";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function InvestigationsDetails() {
  const { id } = useParams();
  const { investigations } = useInvestigations();
  const [investigation, setInvestigation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [relatedInvestigations, setRelatedInvestigations] = useState([]);

  useEffect(() => {
    setLoading(true);
    const foundInvestigation = investigations.find((inv) => inv.id === id);

    if (foundInvestigation) {
      setInvestigation(foundInvestigation);
      // Find related investigations based on the same tag
      const related = investigations
        .filter((inv) => inv.tags === foundInvestigation.tags && inv.id !== foundInvestigation.id)
        .slice(0, 3);
      setRelatedInvestigations(related);
    }
    
    setLoading(false);
    // Reset image index when investigation changes
    setActiveImageIndex(0);

    // Scroll to top when investigation changes
    window.scrollTo(0, 0);
  }, [id, investigations]);

  const formatDate = () => {
    return new Date().toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const breadcrumbItems = [
    { label: "الرئيسية", link: "/" },
    { label: "التحقيقات", link: "/تحقيقات" },
    { label: investigation?.title || "تفاصيل التحقيق", link: "#" },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!investigation) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">التحقيق غير موجود</h1>
        <p className="text-gray-600 mb-6">
          عذراً، لم نتمكن من العثور على التحقيق المطلوب
        </p>
        <Link
          to="/تحقيقات"
          className="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center"
        >
          <ArrowRight className="ml-2" size={18} />
          العودة إلى التحقيقات
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Investigation Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8 text-right">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {investigation.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar size={16} className="text-green-500" />
                  <span>{formatDate()}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                  <User size={16} className="text-green-500" />
                  <span>{investigation.writer}</span>
                  {investigation.otherwriter && <span>، {investigation.otherwriter}</span>}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Tag size={16} className="text-green-500" />
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {investigation.tags}
                </span>
              </div>
            </div>
          </div>

          {/* Swiper Gallery */}
          <div className="relative w-full mb-8">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="w-full h-96 md:h-[500px]"
              onSlideChange={(swiper) => setActiveImageIndex(swiper.realIndex)}
            >
              {investigation.images && investigation.images.length > 0
                ? investigation.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full w-full">
                        <img
                          src={image}
                          alt={`${investigation.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute bottom-6 right-6 left-6 text-white text-xl font-bold">
                          {investigation.title}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                : null}
            </Swiper>
            
            {/* Custom Navigation */}
            <div className="swiper-button-prev absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-3 shadow-md cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-300">
              <ChevronLeft size={20} />
            </div>
            <div className="swiper-button-next absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-3 shadow-md cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-300">
              <ChevronRight size={20} />
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {activeImageIndex + 1} / {investigation.images ? investigation.images.length : 0}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 text-right">
            <div className="article-content text-right leading-7 text-gray-800 prose prose-lg max-w-none">
              {/* If description is HTML content */}
              {investigation.description.includes("<") ? (
                <div dangerouslySetInnerHTML={{ __html: investigation.description }} />
              ) : (
                // If description is plain text, split by paragraphs
                investigation.description.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Related Investigations */}
        {relatedInvestigations.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-right flex items-center gap-2">
              <BookOpen size={24} className="text-green-600" />
              تحقيقات ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedInvestigations.map((related) => (
                <Link
                  to={`/تحقيقات/${related.id}`}
                  key={related.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 border-green-500"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    {related.images && related.images[0] ? (
                      <img
                        src={related.images[0]}
                        alt={related.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">لا توجد صورة</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 text-right">
                    <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                      <Tag size={14} />
                      <span>{related.tags}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-3 line-clamp-2">
                      {related.title}
                    </h3>
                    <div className="flex justify-between items-center text-sm text-gray-500 pt-2 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {formatDate()}
                      </span>
                      <span className="font-medium">{related.writer}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Investigations */}
        <div className="text-center">
          <Link
            to="/تحقيقات"
            className="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition-colors"
          >
            <ArrowRight className="ml-2" size={18} />
            العودة إلى جميع التحقيقات
          </Link>
        </div>
      </div>
    </div>
  );
}
