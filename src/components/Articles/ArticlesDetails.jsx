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
  Bookmark,
  Quote,
} from "lucide-react";


import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useArticles } from "../../store";

export default function ArticlesDetails() {
  const { id } = useParams();
  const { articles } = useArticles();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    const foundArticle = articles.find((art) => art.id === id);

    if (foundArticle) {
      setArticle(foundArticle);
      // Find related articles based on the same tag
      const related = articles
        .filter(
          (art) => art.tags === foundArticle.tags && art.id !== foundArticle.id
        )
        .slice(0, 3);
      setRelatedArticles(related);
    }

    setLoading(false);

    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [id, articles]);

  const formatDate = () => {
    return new Date().toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const breadcrumbItems = [
    { label: "الرئيسية", link: "/" },
    { label: "المقالات", link: "/مقالات" },
    { label: article?.title || "تفاصيل المقال", link: "#" },
  ];

  const formatDescription = (description) => {
    if (!description) return "";

    // Remove markdown syntax
    let formattedText = description.replace(/\*\*/g, "");

    // Format paragraphs
    return formattedText.split("\n\n").map((paragraph, idx) => (
      <p key={idx} className="mb-4">
        {paragraph.trim()}
      </p>
    ));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">المقال غير موجود</h1>
        <p className="text-gray-600 mb-6">
          عذراً، لم نتمكن من العثور على المقال المطلوب
        </p>
        <Link
          to="/مقالات"
          className="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center"
        >
          <ArrowRight className="ml-2" size={18} />
          العودة إلى المقالات
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8 text-right">
            {/* Title with book icon */}
            <div className="flex items-center justify-start gap-3 mb-6">
              <div className="bg-green-100 text-green-700 p-2 rounded-full">
                <BookOpen size={24} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                {article.title}
              </h1>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar size={16} className="text-green-500" />
                  <span>{formatDate()}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                  <User size={16} className="text-green-500" />
                  <span>{article.writer}</span>
                  {article.otherwriter && <span>، {article.otherwriter}</span>}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Tag size={16} className="text-green-500" />
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {article.tags}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Portrait Image */}
          {article.images && article.images.length > 0 && (
            <div className="relative w-full mb-8 flex justify-center bg-gray-100 py-6">
              <div className="relative w-full max-w-lg">
                {/* Portrait Frame */}
                <div className="relative rounded-lg overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={article.images[0]}
                    alt={article.title}
                    className="w-full h-full object-cover aspect-[3/4]"
                  />
                </div>

                {/* Author Attribution */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg text-sm">
                  <span className="font-bold">{article.writer}</span>
                </div>
              </div>
            </div>
          )}

          {/* Featured Quote - Extract from the first paragraph */}
          <div className="p-6 md:p-8">
            <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500 mb-8 text-right">
              <Quote size={32} className="text-green-400 mb-2" />
              {article.description && article.description.includes("<") ? (
                <div className="text-xl text-green-800 font-medium italic">
                  {/* Extract text from first paragraph of HTML content */}
                  {article.description
                    .replace(/<strong>|<\/strong>/g, "")
                    .replace(/<br\s*\/?>/g, " ")
                    .replace(/<p>|<\/p>/g, "")
                    .trim()
                    .slice(0, 150) + "..."}
                </div>
              ) : (
                <p className="text-xl text-green-800 font-medium italic">
                  {typeof article.description === "string"
                    ? article.description
                        .replace(/\*\*/g, "")
                        .split("\n")[0]
                        .slice(0, 150) + "..."
                    : ""}
                </p>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 text-right">
            <div className="article-content text-right leading-7 text-gray-800 prose prose-lg max-w-none">
              {/* If description is HTML content */}
              {article.description && article.description.includes("<") ? (
                <div
                  className=" [&_ul]:list-disc [&_ul]:px-7 [&_li]:mb-1"
                  dangerouslySetInnerHTML={{ __html: article.description }}
                />
              ) : (
                // Format the markdown-like description
                formatDescription(article.description)
              )}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-right flex items-center gap-2">
              <BookOpen size={24} className="text-green-600" />
              مقالات ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  to={`/مقالات/${related.id}`}
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

        {/* Back to Articles */}
        <div className="text-center">
          <Link
            to="/مقالات"
            className="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition-colors"
          >
            <ArrowRight className="ml-2" size={18} />
            العودة إلى جميع المقالات
          </Link>
        </div>
      </div>
    </div>
  );
}
