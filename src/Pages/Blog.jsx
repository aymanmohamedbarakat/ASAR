// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useBlog } from "../Hooks/blogStore";
// import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

// export default function Blog() {
//   const { blogs } = useBlog();
//   const [filteredBlogs, setFilteredBlogs] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("جميع الأخبار");

//   // Get unique categories from blogs
//   const categories = ["جميع الأخبار", ...new Set(blogs.map(blog => blog.nameNews))];
//   // تعديل اضافة tags
//   useEffect(() => {
//     if (activeCategory === "جميع الأخبار") {
//       setFilteredBlogs(blogs);
//     } else {
//       setFilteredBlogs(blogs.filter(blog => blog.nameNews === activeCategory));
//     }
//     console.log(blogs)
//   }, [activeCategory, blogs]);

//   const breadcrumbItems = [
//     { label: "الرئيسية", link: "/" },
//     { label: "الأخبار", link: "#" },
//   ];

//   return (
//     <div className="container mx-auto py-8 px-4">
//       {/* Breadcrumb */}
//       <Breadcrumb items={breadcrumbItems} />

//       <h1 className="text-3xl font-bold mb-8 text-right"> الأخبار</h1>

//       {/* Categories Filter */}
//       <div className="flex flex-wrap gap-2 justify-end mb-8">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category)}
//             className={`px-4 py-2 rounded-full text-sm transition ${
//               activeCategory === category
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-100 hover:bg-gray-200 text-gray-800"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Blog Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredBlogs.map((blog) => (
//           <Link
//             to={`/الأخبار/${blog.id}`}
//             key={blog.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//           >
//             {/* Image */}
//             <div className="relative h-48 overflow-hidden">
//               {blog.image && blog.image[0] ? (
//                 <img
//                   src={blog.image[0]}
//                   alt={blog.name}
//                   className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-12 w-12 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//               )}

//               <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm">
//                 {blog.nameNews}
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-4 text-right">
//               <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
//                 {blog.name}
//               </h3>
//               <p className="text-gray-600 text-sm line-clamp-3 mb-3">
//                 {typeof blog.description === 'string'
//                   ? blog.description.replace(/<[^>]*>/g, '')
//                   : ''}
//               </p>
//               <div className="flex justify-between items-center text-sm text-gray-500">
//                 <span className="flex items-center gap-1">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   {new Date().toLocaleDateString('ar-EG')}
//                 </span>
//                 <span className="font-medium">{blog.writer}</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {filteredBlogs.length === 0 && (
//         <div className="text-center py-10 text-gray-500">
//           لا توجد أخبار في هذه الفئة حالياً
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
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
  ChevronLeft,
} from "lucide-react";
import { useBlog } from "../Hooks/blogStore";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

export default function Blog() {
  const { blogs } = useBlog();
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("جميع الأخبار");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories from blogs
  const categories = [
    "جميع الأخبار",
    ...new Set(blogs.map((blog) => blog.nameNews)),
  ];

  useEffect(() => {
    let results = blogs;

    // Filter by category
    if (activeCategory !== "جميع الأخبار") {
      results = results.filter((blog) => blog.nameNews === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (blog) =>
          blog.name.toLowerCase().includes(query) ||
          (typeof blog.description === "string" &&
            blog.description.toLowerCase().includes(query))
      );
    }

    setFilteredBlogs(results);
  }, [activeCategory, blogs, searchQuery]);

  const breadcrumbItems = [
    { label: "الرئيسية", link: "/" },
    { label: "الأخبار", link: "#" },
  ];

  const formatDate = () => {
    return new Date().toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Header Banner */}
        <div className="relative rounded-lg overflow-hidden mb-8 h-64">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-900"></div>
          <div className="relative z-10 h-full flex flex-col justify-center p-8 text-right">
            <h1 className="text-4xl font-bold text-white mb-2">الأخبار</h1>
            <p className="text-indigo-100 max-w-xl">
              اطلع على آخر الأخبار والمستجدات على الساحة المحلية والدولية
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
                  placeholder="ابحث في الأخبار..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-right"
                />
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>

              {/* Toggle Filters Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-all order-1 md:order-2"
              >
                <Filter size={18} />
                تصفية الأخبار
                <span
                  className={`transition-transform duration-300 ${
                    showFilters ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>
            </div>
          </div>

          {/* Categories Filter */}
          {showFilters && (
            <div className="p-4 bg-indigo-50 border-b border-indigo-100 transition-all duration-300">
              <h3 className="text-lg font-medium mb-3 text-right text-indigo-800">
                فئات الأخبار
              </h3>
              <div className="flex flex-wrap gap-2 justify-end">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm transition whitespace-nowrap ${
                      activeCategory === category
                        ? "bg-indigo-600 text-white font-medium shadow-md"
                        : "bg-white border border-indigo-200 hover:bg-indigo-100 text-gray-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <Link
              to={`/الأخبار/${blog.id}`}
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                {blog.image && blog.image[0] ? (
                  <img
                    src={blog.image[0]}
                    alt={blog.name}
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
                    <Tag size={14} className="text-indigo-300" />
                    <span className="text-sm font-medium bg-indigo-600 px-2 py-1 rounded-sm">
                      {blog.nameNews}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-right">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {blog.name}
                </h3>
                {blog.description && blog.description.includes("<") ? (
                  <div className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {/* Extract text from HTML content */}
                    {blog.description
                      .replace(/<strong>|<\/strong>/g, "")
                      .replace(/<br\s*\/?>/g, " ")
                      .replace(/<p>|<\/p>/g, "")
                      .replace(/<h1>|<\/h1>/g, "")
                      .trim()
                      .slice(0, 150) + "..."}
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {typeof blog.description === "string"
                      ? blog.description
                          .replace(/\*\*/g, "")
                          .split("\n")[0]
                          .slice(0, 150) + "..."
                      : ""}
                  </p>
                )}

                {/* Blog Meta */}
                <div className="border-t pt-3 mt-auto flex flex-wrap justify-between items-center text-sm text-gray-500 gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-indigo-500" />
                    <span>{formatDate()}</span>
                  </span>

                  <div className="flex items-center gap-1">
                    <User size={14} className="text-indigo-500" />
                    <span className="font-medium">{blog.writer}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-indigo-600 font-medium flex items-center text-sm group-hover:underline">
                    قراءة المزيد
                    <ChevronLeft size={16} />
                  </span>

                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={12} />3 دقائق للقراءة
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-10 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-700">
              لا توجد أخبار
            </h3>
            <p className="text-gray-500 mb-6">
              لا توجد أخبار في هذه الفئة حالياً، يرجى تجربة فئة أخرى أو البحث عن
              محتوى مختلف
            </p>
            <button
              onClick={() => {
                setActiveCategory("جميع الأخبار");
                setSearchQuery("");
              }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-indigo-700 transition-colors"
            >
              <ArrowRight className="ml-2" size={18} />
              عرض جميع الأخبار
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
