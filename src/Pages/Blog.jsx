import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useBlog } from "../Hooks/blogStore";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";



export default function Blog() {
  const { blogs } = useBlog();
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("جميع الأخبار");
  
  // Get unique categories from blogs
  const categories = ["جميع الأخبار", ...new Set(blogs.map(blog => blog.nameNews))];
  // تعديل اضافة tags
  useEffect(() => {
    if (activeCategory === "جميع الأخبار") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.nameNews === activeCategory));
    }
    console.log(blogs)
  }, [activeCategory, blogs]);

  const breadcrumbItems = [
    { label: "الرئيسية", link: "/" },
    { label: "الأخبار", link: "#" },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-3xl font-bold mb-8 text-right"> الأخبار</h1>
      
      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2 justify-end mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <Link
            to={`/الأخبار/${blog.id}`}
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              {blog.image && blog.image[0] ? (
                <img
                  src={blog.image[0]}
                  alt={blog.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
              
              <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm">
                {blog.nameNews}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4 text-right">
              <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                {blog.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {typeof blog.description === 'string' 
                  ? blog.description.replace(/<[^>]*>/g, '') 
                  : ''}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {new Date().toLocaleDateString('ar-EG')}
                </span>
                <span className="font-medium">{blog.writer}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredBlogs.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          لا توجد أخبار في هذه الفئة حالياً
        </div>
      )}
    </div>
  );
}