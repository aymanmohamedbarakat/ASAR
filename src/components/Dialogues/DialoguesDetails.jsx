import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  ArrowRight,
  Calendar,
  User,
  Clock,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Search,
  Tag,
  Mic,
  Quote,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useDialogues } from "../../Hooks/DialoguesStore";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function DialoguesDetails() {
  const { id } = useParams();
  const { dialogues } = useDialogues();
  const [dialogue, setDialogue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [relatedDialogues, setRelatedDialogues] = useState([]);

  useEffect(() => {
    setLoading(true);
    const foundDialogue = dialogues.find((dlg) => dlg.id === id);

    if (foundDialogue) {
      setDialogue(foundDialogue);
      // Find related dialogues based on the same tag
      const related = dialogues
        .filter(
          (dlg) =>
            dlg.tags === foundDialogue.tags && dlg.id !== foundDialogue.id
        )
        .slice(0, 3);
      setRelatedDialogues(related);
    }

    setLoading(false);
    // Reset image index when dialogue changes
    setActiveImageIndex(0);

    // Scroll to top when dialogue changes
    window.scrollTo(0, 0);
  }, [id, dialogues]);

  const formatDate = () => {
    return new Date().toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const breadcrumbItems = [
    { label: "الرئيسية", link: "/" },
    { label: "الحوارات", link: "/حوارات" },
    { label: dialogue?.title || "تفاصيل الحوار", link: "#" },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!dialogue) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">الحوار غير موجود</h1>
        <p className="text-gray-600 mb-6">
          عذراً، لم نتمكن من العثور على الحوار المطلوب
        </p>
        <Link
          to="/حوارات"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center"
        >
          <ArrowRight className="ml-2" size={18} />
          العودة إلى الحوارات
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Dialogue Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8 text-right">
            {/* Title with interview icon */}
            <div className="flex items-center justify-end gap-3 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                {dialogue.title}
              </h1>
              <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
                <Mic size={24} />
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar size={16} className="text-blue-500" />
                  <span>{formatDate()}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                  <User size={16} className="text-blue-500" />
                  <span>{dialogue.writer}</span>
                  {dialogue.otherwriter && (
                    <span>، {dialogue.otherwriter}</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Tag size={16} className="text-blue-500" />
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {dialogue.tags}
                </span>
              </div>
            </div>
          </div>

          {/* Swiper Gallery */}
          {dialogue.images && dialogue.images.length > 0 && (
            <div className="relative w-full mb-8">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                className="w-full h-96 md:h-[500px]"
                onSlideChange={(swiper) =>
                  setActiveImageIndex(swiper.realIndex)
                }
              >
                {dialogue.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                      <img
                        src={image}
                        alt={`${dialogue.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute bottom-6 right-6 left-6 text-white text-xl font-bold">
                        {dialogue.title}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation */}
              <div className="swiper-button-prev absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-3 shadow-md cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300">
                <ChevronLeft size={20} />
              </div>
              <div className="swiper-button-next absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-3 shadow-md cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300">
                <ChevronRight size={20} />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {activeImageIndex + 1} / {dialogue.images.length}
              </div>
            </div>
          )}

          {/* Featured Quote */}
          <div className="p-6 md:p-8">
            <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-500 mb-8 text-right">
              <Quote size={32} className="text-blue-400 mb-2" />
              <p className="text-xl text-blue-800 font-medium italic">
                {dialogue.description && dialogue.description.includes("<") ? (
                  <div className="text-xl text-green-800 font-medium italic">
                    {/* Extract text from first paragraph of HTML content */}
                    {dialogue.description
                      .replace(/<strong>|<\/strong>/g, "")
                      .replace(/<br\s*\/?>/g, " ")
                      .replace(/<p>|<\/p>/g, "")
                      .trim()
                      .slice(0, 150) + "..."}
                  </div>
                ) : (
                  <p className="text-xl text-green-800 font-medium italic">
                    {typeof dialogue.description === "string"
                      ? dialogue.description
                          .replace(/\*\*/g, "")
                          .split("\n")[0]
                          .slice(0, 150) + "..."
                      : ""}
                  </p>
                )}{" "}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 text-right">
            <div className="article-content text-right leading-7 text-gray-800 prose prose-lg max-w-none">
              {/* If description is HTML content */}
              {dialogue.description && dialogue.description.includes("<") ? (
                <div
                  dangerouslySetInnerHTML={{ __html: dialogue.description }}
                />
              ) : (
                // If description is plain text, split by paragraphs
                dialogue.description &&
                dialogue.description.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Related Dialogues */}
        {relatedDialogues.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-right flex items-center gap-2">
              <MessageSquare size={24} className="text-blue-600" />
              حوارات ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDialogues.map((related) => (
                <Link
                  to={`/حوارات/${related.id}`}
                  key={related.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 border-blue-500"
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
                    <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
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

        {/* Back to Dialogues */}
        <div className="text-center">
          <Link
            to="/حوارات"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-blue-700 transition-colors"
          >
            <ArrowRight className="ml-2" size={18} />
            العودة إلى جميع الحوارات
          </Link>
        </div>
      </div>
    </div>
  );
}
