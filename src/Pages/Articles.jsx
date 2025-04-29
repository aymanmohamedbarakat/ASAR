import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  ImageOff, 
  Search, 
  Calendar, 
  BookOpen, 
  User, 
  ArrowRight,
  Tag,
  Filter,
  Clock,
  ChevronLeft
} from "lucide-react";

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useArticles } from "../Hooks/ArticlesStore";

export default function Articles() {
  const { articles } = useArticles();
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("جميع المقالات");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique categories from articles
  const categories = [
    "جميع المقالات",
    ...new Set(articles.map((article) => article.tags)),
  ];

  useEffect(() => {
    let results = articles;
    
    // Filter by category
    if (activeCategory !== "جميع المقالات") {
      results = results.filter((article) => article.tags === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (article) => 
          article.title.toLowerCase().includes(query) || 
          (typeof article.description === "string" && article.description.toLowerCase().includes(query))
      );
    }
    
    setFilteredArticles(results);
  }, [activeCategory, articles, searchQuery]);

  const breadcrumbItems = [
    { label: "الرئيسية", link: "/" },
    { label: "المقالات", link: "#" },
  ];

  const formatDate = () => {
    return new Date().toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Header Banner */}
        <div className="relative rounded-lg overflow-hidden mb-8 h-64">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800"></div>
          <div className="relative z-10 h-full flex flex-col justify-center p-8 text-right">
            <h1 className="text-4xl font-bold text-white mb-2">المقالات</h1>
            <p className="text-green-100 max-w-xl">
              استكشف أحدث المقالات والتحليلات في مختلف المجالات الثقافية والتاريخية
            </p>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-1/2 order-2 md:order-1">
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-right"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              {/* Toggle Filters Button */}
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-all order-1 md:order-2"
              >
                <Filter size={18} />
                تصفية المقالات
                <span className={`transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`}>
                  ⌄
                </span>
              </button>
            </div>
          </div>
          
          {/* Categories Filter */}
          {showFilters && (
            <div className="p-4 bg-green-50 border-b border-green-100 transition-all duration-300">
              <h3 className="text-lg font-medium mb-3 text-right text-green-800">فئات المقالات</h3>
              <div className="flex flex-wrap gap-2 justify-end">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm transition whitespace-nowrap ${
                      activeCategory === category
                        ? "bg-green-600 text-white font-medium shadow-md"
                        : "bg-white border border-green-200 hover:bg-green-100 text-gray-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link
              to={`/مقالات/${article.id}`}
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                {article.images && article.images[0] ? (
                  <img
                    src={article.images[0]}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <ImageOff size={60} className="text-gray-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <div className="absolute bottom-0 right-0 left-0 p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag size={14} className="text-green-300" />
                    <span className="text-sm font-medium bg-green-600 px-2 py-1 rounded-sm">
                      {article.tags}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 text-right">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {typeof article.description === "string"
                    ? article.description.replace(/<[^>]*>/g, "").replace(/\*\*/g, "")
                    : ""}
                </p>
                
                {/* Article Meta */}
                <div className="border-t pt-3 mt-auto flex flex-wrap justify-between items-center text-sm text-gray-500 gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-green-500" />
                    <span>{formatDate()}</span>
                  </span>
                  
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-green-500" />
                    <span className="font-medium">{article.writer}</span>
                    {article.otherwriter && (
                      <span className="font-medium mr-1">، {article.otherwriter}</span>
                    )}
                  </div>
                </div>
                
                {/* Read More */}
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-green-600 font-medium flex items-center text-sm group-hover:underline">
                    قراءة المزيد
                    <ChevronLeft size={16} />
                  </span>
                  
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={12} />
                    5 دقائق للقراءة
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-10 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-700">لا توجد مقالات</h3>
            <p className="text-gray-500 mb-6">
              لم يتم العثور على مقالات في هذه الفئة حالياً، يرجى تجربة فئة أخرى أو البحث عن محتوى مختلف
            </p>
            <button
              onClick={() => {
                setActiveCategory("جميع المقالات");
                setSearchQuery("");
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition-colors"
            >
              <ArrowRight className="ml-2" size={18} />
              عرض جميع المقالات
            </button>
          </div>
        )}
      </div>
    </div>
  );
}