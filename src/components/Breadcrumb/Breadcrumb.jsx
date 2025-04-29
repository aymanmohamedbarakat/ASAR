import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex mb-6 text-gray-600 text-sm" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-2 space-x-reverse">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <>
                  <Link
                    to={item.link}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                  <svg
                    className="mx-2 h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </>
              ) : (
                <span className="text-gray-500">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
