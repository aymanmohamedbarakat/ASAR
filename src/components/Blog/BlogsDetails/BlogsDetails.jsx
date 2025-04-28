import React, { useEffect, useState } from "react";
import { useBlog } from "../../../Hooks/blogStore";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import RelatedBlogs from "../RelatedBlogs/RelatedBlogs";

export default function BlogsDetails() {
  const { blogId } = useParams();
  const { blogs } = useBlog ();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    // Find the blog with the matching ID
    if (blogs && blogs.length > 0) {
      const foundBlog = blogs.find((b) => b.id === blogId);
      if (foundBlog) {
        setBlog(foundBlog);

        // Find related blogs (can be based on similar topics or tags)
        // Here we're just getting other blogs as an example
        const related = blogs.filter((b) => b.id !== blogId).slice(0, 3);
        setRelatedBlogs(related);
      }
      setLoading(false);
    }
  }, [blogId, blogs]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">لم يتم العثور على المقال</h2>
        <Link to="/الأخبار" className="text-blue-600 hover:underline">
          العودة إلى صفحة المقالات
        </Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "الرئيسية", link: "/" },
    { label: "المقالات", link: "/الأخبار" },
    { label: blog.name, link: "#" },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-6 px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-right">
            {blog.name}
          </h1>

          <div className="flex flex-wrap justify-between items-center mb-6 text-gray-500 text-sm">
            {/* <div className="flex items-center gap-2 order-2 md:order-1">
              <ShareButtons url={window.location.href} title={blog.name} />
            </div> */}

            <div className="flex items-center gap-4 mb-2 md:mb-0 w-full md:w-auto order-1 md:order-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{blog.writer}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{new Date().toLocaleDateString("ar-EG")}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span>{blog.nameNews}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Article Content */}
          <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-md p-6">
            {/* Featured Image */}
            {blog.image && blog.image.length > 0 && (
              <div className="mb-6">
                <img
                  src={blog.image[0]}
                  alt={blog.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            {/* Article Text */}
            <div className="article-content text-right leading-7 text-gray-800">
              {/* If description is HTML content */}
              {blog.description.includes("<") ? (
                <div dangerouslySetInnerHTML={{ __html: blog.description }} />
              ) : (
                // If description is plain text, split by paragraphs
                blog.description.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))
              )}
            </div>

            {/* Gallery - if blog has multiple images */}
            {blog.image && blog.image.length > 1 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-right">
                  معرض الصور
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {blog.image.slice(1).map((img, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden">
                      <img
                        src={img}
                        alt={`${blog.name} - صورة ${idx + 2}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {blog.tags && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2 justify-end">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Author Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-right border-r-4 border-blue-600 pr-3">
                عن الكاتب
              </h3>
              <div className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <h4 className="font-bold">{blog.writer}</h4>
                  <p className="text-gray-500 text-sm">كاتب صحفي</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4 text-right border-r-4 border-blue-600 pr-3">
                مقالات ذات صلة
              </h3>

              <RelatedBlogs blogs={relatedBlogs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
