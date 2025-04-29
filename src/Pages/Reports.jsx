// import React, { useEffect, useState } from "react";
// import { useReports } from "../Hooks/reportsStore";
// import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
// import { Link } from "react-router-dom";
// import { Clock4, ImageOff } from "lucide-react";

// export default function Reports() {
//   const { reports } = useReports();
//   const [filteredReports, setFilteredReports] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("جميع التقارير");
//   // Get unique categories from reports
//   const categories = [
//     "جميع التقارير",
//     ...new Set(reports.map((report) => report.tags)),
//   ];
//   // تعديل اضافة tags
//   useEffect(() => {
//     if (activeCategory === "جميع التقارير") {
//       setFilteredReports(reports);
//     } else {
//       setFilteredReports(
//         reports.filter((report) => report.tags === activeCategory)
//       );
//     }
//     console.log(reports);
//   }, [activeCategory, reports]);

//   const breadcrumbItems = [
//     { label: "الرئيسية", link: "/" },
//     { label: "التقارير", link: "#" },
//   ];
//   return (
//     <div className="container mx-auto py-8 px-4">
//       {/* Breadcrumb */}
//       <Breadcrumb items={breadcrumbItems} />
//       <h1 className="text-3xl font-bold mb-8 text-right"> التقارير</h1>
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
//         {filteredReports.map((report) => (
//           <Link
//             to={`/التقارير/${report.id}`}
//             key={report.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//           >
//             {/* Image */}
//             <div className="relative h-48 overflow-hidden">
//               {report.images && report.images[0] ? (
//                 <img
//                   src={report.images[0]}
//                   alt={report.title}
//                   className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                   <ImageOff size={60} />
//                 </div>
//               )}
//               <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm">
//                 {report.tags}
//               </div>
//             </div>
//             {/* Content */}
//             <div className="p-4 text-right">
//               <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
//                 {report.title}
//               </h3>
//               <p className="text-gray-600 text-sm line-clamp-3 mb-3">
//                 {typeof report.description === "string"
//                   ? report.description.replace(/<[^>]*>/g, "")
//                   : ""}
//               </p>
//               <div className="flex justify-between items-center text-sm text-gray-500">
//                 <span className="flex items-center gap-1">
//                   <Clock4 size={15} />
//                   {new Date().toLocaleDateString("ar-EG")}
//                 </span>
//                 <span className="font-medium">{report.writer}</span>
//                 <span className="font-medium">{report.otherwriter}</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//       {filteredReports.length === 0 && (
//         <div className="text-center py-10 text-gray-500">
//           لا توجد تقارير في هذه الفئة حالياً
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { 
  ImageOff, 
  Search, 
  Calendar, 
  BookOpen, 
  User, 
  ChevronLeft 
} from "lucide-react";
import { useReports } from "../Hooks/reportsStore";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

export default function Reports() {
  const { reports } = useReports();
  const [filteredReports, setFilteredReports] = useState([]);
  const [activeCategory, setActiveCategory] = useState("جميع التقارير");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get unique categories from reports
  const categories = [
    "جميع التقارير",
    ...new Set(reports.map((report) => report.tags)),
  ];

  useEffect(() => {
    let results = reports;
    
    // Filter by category
    if (activeCategory !== "جميع التقارير") {
      results = results.filter((report) => report.tags === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (report) => 
          report.title.toLowerCase().includes(query) || 
          (typeof report.description === "string" && report.description.toLowerCase().includes(query))
      );
    }
    
    setFilteredReports(results);
  }, [activeCategory, reports, searchQuery]);

  const breadcrumbItems = [
    { label: "الرئيسية", link: "/" },
    { label: "التقارير", link: "#" },
  ];

  const formatDate = (dateString) => {
    try {
      return new Date().toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch (e) {
      return new Date().toLocaleDateString("ar-EG");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Header section */}
        <div className="mb-8 text-right">
          <h1 className="text-4xl font-bold text-gray-800">التقارير</h1>
          <p className="text-gray-600 mt-2">استكشف أحدث التقارير والمقالات المتنوعة</p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/3 order-2 md:order-1">
              <input
                type="text"
                placeholder="ابحث في التقارير..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 justify-end order-1 md:order-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-blue-600 text-white font-medium shadow-md"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report) => (
            <Link
              to={`/تقارير/${report.id}`}
              key={report.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                {report.images && report.images[0] ? (
                  <img
                    src={report.images[0]}
                    alt={report.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <ImageOff size={60} className="text-gray-400" />
                  </div>
                )}
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  {report.tags}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 text-right">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                  {report.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {typeof report.description === "string"
                    ? report.description.replace(/<[^>]*>/g, "")
                    : ""}
                </p>
                
                {/* Report Meta */}
                <div className="border-t pt-3 mt-auto">
                  <div className="flex flex-wrap justify-between items-center text-sm text-gray-500 gap-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-blue-500" />
                      <span>{formatDate()}</span>
                    </span>
                    
                    <div className="flex items-center gap-1">
                      <User size={14} className="text-blue-500" />
                      <span className="font-medium">{report.writer}</span>
                      {report.otherwriter && (
                        <span className="font-medium mr-1">، {report.otherwriter}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Read More */}
                <div className="mt-3 text-left">
                  <span className="text-blue-600 font-medium flex items-center text-sm hover:underline">
                    قراءة المزيد
                    <ChevronLeft size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredReports.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-10 text-center">
            <BookOpen size={60} className="mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-2 text-gray-700">لا توجد تقارير</h3>
            <p className="text-gray-500">
              لا توجد تقارير في هذه الفئة حالياً، يرجى تجربة فئة أخرى أو البحث عن محتوى مختلف
            </p>
          </div>
        )}
      </div>
    </div>
  );
}