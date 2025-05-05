import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  User,
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Copy,
  Eye,
} from "lucide-react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useReports } from "../../store";

export default function ReportsDetails() {
  const { id } = useParams();
  const { reports } = useReports();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [relatedReports, setRelatedReports] = useState([]);

  useEffect(() => {
    setLoading(true);
    const foundReport = reports.find((r) => r.id === id);

    if (foundReport) {
      setReport(foundReport);
      // Find related reports based on the same tag
      const related = reports
        .filter((r) => r.tags === foundReport.tags && r.id !== foundReport.id)
        .slice(0, 3);
      setRelatedReports(related);
    }
    console.log(reports);
    setLoading(false);
    // Reset image index when report changes
    setActiveImageIndex(0);

    // Scroll to top when report changes
    window.scrollTo(0, 0);
  }, [id, reports]);

  const formatDate = () => {
    return new Date().toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const breadcrumbItems = [
    { label: "الرئيسية", link: "/" },
    { label: "التقارير", link: "/تقارير" },
    { label: report?.title || "تفاصيل التقرير", link: "#" },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">التقرير غير موجود</h1>
        <p className="text-gray-600 mb-6">
          عذراً، لم نتمكن من العثور على التقرير المطلوب
        </p>
        <Link
          to="/تقارير"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center"
        >
          <ArrowRight className="ml-2" size={18} />
          العودة إلى التقارير
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {/* Report Header */}
          <div className="relative w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="w-full"
              onSlideChange={(swiper) => setActiveImageIndex(swiper.realIndex)}
            >
              {report.images && report.images.length > 0
                ? report.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-screen w-full bg-gray-900">
                        <img
                          src={image}
                          alt={`${report.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))
                : null}
            </Swiper>

            {/* Category Tag */}
            <div
              className={`${
                report.images ? "absolute top-4 right-4" : ""
              } bg-blue-600 text-white px-4 py-2 rounded-md font-medium z-10`}
            >
              {report.tags}
            </div>
          </div>

          {/* Report Content */}
          <div className="p-6 md:p-8 text-right">
            <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar size={16} className="text-blue-500" />
                  <span>{formatDate()}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                  <User size={16} className="text-blue-500" />
                  <span>{report.writer}</span>
                  {report.otherwriter && <span>، {report.otherwriter}</span>}
                </div>

                {/* <div className="flex items-center gap-1 text-gray-600">
                  <Eye size={16} className="text-blue-500" />
                  <span>324 مشاهدة</span>
                </div> */}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {report.title}
            </h1>

            {/* Content */}
            {/* Article Text */}
            <div className="article-content text-right leading-7 text-gray-800">
              {/* If description is HTML content */}
              {report.description.includes("<") ? (
                <div
                  className=" [&_ul]:list-disc [&_ul]:px-7 [&_li]:mb-1"
                  dangerouslySetInnerHTML={{ __html: report.description }}
                />
              ) : (
                // If description is plain text, split by paragraphs
                report.description.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Related Reports */}
        {relatedReports.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-right">
              تقارير ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedReports.map((related) => (
                <Link
                  to={`/تقارير/${related.id}`}
                  key={related.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
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
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {typeof related.description === "string"
                        ? related.description.replace(/<[^>]*>/g, "")
                        : ""}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Reports */}
        <div className="text-center">
          <Link
            to="/تقارير"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-blue-700 transition-colors"
          >
            <ArrowRight className="ml-2" size={18} />
            العودة إلى جميع التقارير
          </Link>
        </div>
      </div>
    </div>
  );
}
