import React from "react";
import { Link } from "react-router-dom";

export default function RelatedBlogs({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-gray-500 text-center py-4">
        لا توجد مقالات ذات صلة حالياً
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          to={`/blogs/${blog.id}`}
          className="flex gap-3 items-start hover:bg-gray-50 p-2 rounded transition-colors"
        >
          <div className="flex-grow text-right">
            <h4 className="font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
              {blog.name}
            </h4>
            <div className="flex items-center justify-end gap-2 text-xs text-gray-500 mt-1">
              <span>{new Date().toLocaleDateString("ar-EG")}</span>
              <span>•</span>
              <span>{blog.writer}</span>
            </div>
          </div>

          <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden">
            {blog.image && blog.image[0] ? (
              <img
                src={blog.image[0]}
                alt={blog.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
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
          </div>
        </Link>
      ))}
    </div>
  );
}
