// import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
// import { 
//   ImageOff, 
//   Search, 
//   Calendar, 
//   BookOpen, 
//   User, 
//   ChevronLeft 
// } from "lucide-react";
// import { useReports } from "../Hooks/reportsStore";
// import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

// export default function Reports() {
//   const { reports } = useReports();
//   const [filteredReports, setFilteredReports] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("جميع التقارير");
//   const [searchQuery, setSearchQuery] = useState("");
  
//   // Get unique categories from reports
//   const categories = [
//     "جميع التقارير",
//     ...new Set(reports.map((report) => report.tags)),
//   ];

//   useEffect(() => {
//     let results = reports;
    
//     // Filter by category
//     if (activeCategory !== "جميع التقارير") {
//       results = results.filter((report) => report.tags === activeCategory);
//     }
    
//     // Filter by search query
//     if (searchQuery.trim() !== "") {
//       const query = searchQuery.toLowerCase();
//       results = results.filter(
//         (report) => 
//           report.title.toLowerCase().includes(query) || 
//           (typeof report.description === "string" && report.description.toLowerCase().includes(query))
//       );
//     }
    
//     setFilteredReports(results);
//   }, [activeCategory, reports, searchQuery]);

//   const breadcrumbItems = [
//     { label: "الرئيسية", link: "/" },
//     { label: "التقارير", link: "#" },
//   ];

//   const formatDate = (dateString) => {
//     try {
//       return new Date().toLocaleDateString("ar-EG", {
//         year: "numeric",
//         month: "long",
//         day: "numeric"
//       });
//     } catch (e) {
//       return new Date().toLocaleDateString("ar-EG");
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container mx-auto py-8 px-4">
//         {/* Breadcrumb */}
//         <Breadcrumb items={breadcrumbItems} />
        
//         {/* Header section */}
//         <div className="mb-8 text-right">
//           <h1 className="text-4xl font-bold text-gray-800">التقارير</h1>
//           <p className="text-gray-600 mt-2">استكشف أحدث التقارير والمقالات المتنوعة</p>
//         </div>
        
//         {/* Search and Filter Section */}
//         <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             {/* Search Bar */}
//             <div className="relative w-full md:w-1/3 order-2 md:order-1">
//               <input
//                 type="text"
//                 placeholder="ابحث في التقارير..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
//               />
//               <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>
            
//             {/* Categories Filter */}
//             <div className="flex flex-wrap gap-2 justify-end order-1 md:order-2 w-full md:w-auto">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category)}
//                   className={`px-4 py-2 rounded-full text-sm transition whitespace-nowrap ${
//                     activeCategory === category
//                       ? "bg-blue-600 text-white font-medium shadow-md"
//                       : "bg-gray-100 hover:bg-gray-200 text-gray-800"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Reports Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredReports.map((report) => (
//             <Link
//               to={`/تقارير/${report.id}`}
//               key={report.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               {/* Image */}
//               <div className="relative h-52 overflow-hidden">
//                 {report.images && report.images[0] ? (
//                   <img
//                     src={report.images[0]}
//                     alt={report.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                     <ImageOff size={60} className="text-gray-400" />
//                   </div>
//                 )}
//                 <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
//                   {report.tags}
//                 </div>
//               </div>
              
//               {/* Content */}
//               <div className="p-5 text-right">
//                 <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
//                   {report.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm line-clamp-3 mb-4">
//                   {typeof report.description === "string"
//                     ? report.description.replace(/<[^>]*>/g, "")
//                     : ""}
//                 </p>
                
//                 {/* Report Meta */}
//                 <div className="border-t pt-3 mt-auto">
//                   <div className="flex flex-wrap justify-between items-center text-sm text-gray-500 gap-2">
//                     <span className="flex items-center gap-1">
//                       <Calendar size={14} className="text-blue-500" />
//                       <span>{formatDate()}</span>
//                     </span>
                    
//                     <div className="flex items-center gap-1">
//                       <User size={14} className="text-blue-500" />
//                       <span className="font-medium">{report.writer}</span>
//                       {report.otherwriter && (
//                         <span className="font-medium mr-1">، {report.otherwriter}</span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Read More */}
//                 <div className="mt-3 text-left">
//                   <span className="text-blue-600 font-medium flex items-center text-sm hover:underline">
//                     قراءة المزيد
//                     <ChevronLeft size={16} />
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
        
//         {/* Empty State */}
//         {filteredReports.length === 0 && (
//           <div className="bg-white rounded-lg shadow-md p-10 text-center">
//             <BookOpen size={60} className="mx-auto mb-4 text-gray-400" />
//             <h3 className="text-xl font-bold mb-2 text-gray-700">لا توجد تقارير</h3>
//             <p className="text-gray-500">
//               لا توجد تقارير في هذه الفئة حالياً، يرجى تجربة فئة أخرى أو البحث عن محتوى مختلف
//             </p>
//           </div>
//         )}
//       </div>
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
  ArrowRight,
  Tag,
  Filter,
  Clock,
  ChevronLeft
} from "lucide-react";
import { useReports } from "../Hooks/reportsStore";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";



export default function Reports() {
  const { reports } = useReports();
  const [filteredReports, setFilteredReports] = useState([]);
  const [activeCategory, setActiveCategory] = useState("جميع التقارير");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
          <div className="relative z-10 h-full flex flex-col justify-center p-8 text-right">
            <h1 className="text-4xl font-bold text-white mb-2">التقارير</h1>
            <p className="text-blue-100 max-w-xl">
              استكشف أحدث التقارير والمقالات المتنوعة حول القضايا المهمة في مجتمعنا
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
                  placeholder="ابحث في التقارير..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              {/* Toggle Filters Button */}
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all order-1 md:order-2"
              >
                <Filter size={18} />
                تصفية التقارير
                <span className={`transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`}>
                  ⌄
                </span>
              </button>
            </div>
          </div>
          
          {/* Categories Filter */}
          {showFilters && (
            <div className="p-4 bg-blue-50 border-b border-blue-100 transition-all duration-300">
              <h3 className="text-lg font-medium mb-3 text-right text-blue-800">فئات التقارير</h3>
              <div className="flex flex-wrap gap-2 justify-end">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm transition whitespace-nowrap ${
                      activeCategory === category
                        ? "bg-blue-600 text-white font-medium shadow-md"
                        : "bg-white border border-blue-200 hover:bg-blue-100 text-gray-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report) => (
            <Link
              to={`/تقارير/${report.id}`}
              key={report.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                {report.images && report.images[0] ? (
                  <img
                    src={report.images[0]}
                    alt={report.title}
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
                    <Tag size={14} className="text-blue-300" />
                    <span className="text-sm font-medium bg-blue-600 px-2 py-1 rounded-sm">
                      {report.tags}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 text-right">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {report.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {typeof report.description === "string"
                    ? report.description.replace(/<[^>]*>/g, "")
                    : ""}
                </p>
                
                {/* Report Meta */}
                <div className="border-t pt-3 mt-auto flex flex-wrap justify-between items-center text-sm text-gray-500 gap-2">
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
                
                {/* Read More */}
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-blue-600 font-medium flex items-center text-sm group-hover:underline">
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
        {filteredReports.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-10 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-700">لا توجد تقارير</h3>
            <p className="text-gray-500 mb-6">
              لا توجد تقارير في هذه الفئة حالياً، يرجى تجربة فئة أخرى أو البحث عن محتوى مختلف
            </p>
            <button
              onClick={() => {
                setActiveCategory("جميع التقارير");
                setSearchQuery("");
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-blue-700 transition-colors"
            >
              <ArrowRight className="ml-2" size={18} />
              عرض جميع التقارير
            </button>
          </div>
        )}
      </div>
    </div>
  );
}