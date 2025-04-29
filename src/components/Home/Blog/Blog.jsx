// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import Title from "../../Title/Title";
// import { useBlog } from "../../../Hooks/blogStore";
// import { Link } from "react-router-dom";

// export default function Blog() {
//   const { blogs, setBlogs } = useBlog();

//   useEffect(() => {
//     console.log(blogs);
//   }, []);

//   return (
//     <div className="my-10">
    //   <div className="flex justify-between items-center py-8">
    //     <div className="text-center  text-2xl md:text-3xl">
    //       <Title text1={"أحدث المقالات"} />
    //     </div>
    //     <div>
    //       <Link
    //         to="/blogs"
    //         className="inline-block mt-4  text-blue-600 hover:text-blue-800 transition-colors"
    //       >
    //         عرض جميع المقالات
    //       </Link>
    //     </div>
    //   </div>

//       <div className="relative flex-1 overflow-hidden">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={10}
//           slidesPerView={4}
//           loop={true}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           breakpoints={{
//             320: { slidesPerView: 1, spaceBetween: 10 },
//             576: { slidesPerView: 2, spaceBetween: 15 },
//             992: { slidesPerView: 3, spaceBetween: 20 },
//             1200: { slidesPerView: 4, spaceBetween: 20 },
//           }}
//           className="w-full"
//         >
//           {blogs &&
//             blogs.map((blog, index) => (
//               <SwiperSlide
//                 key={blog.id || index}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 {/* Image Container */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={blog.image && blog.image[0]}
//                     alt={blog.name}
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                   />
//                   <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm">
//                     {blog.nameNews}
//                   </div>
//                 </div>

//                 {/* Blog Content Container */}
//                 <div className="p-4 text-right">
//                   <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
//                     {blog.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm line-clamp-3 mb-3">
//                     {blog.description}
//                   </p>
//                   <div className="flex justify-between items-center text-sm text-gray-500">
//                     <span className="flex items-center gap-1">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                       </svg>
//                       {new Date().toLocaleDateString("ar-EG")}
//                     </span>
//                     <span className="font-medium">{blog.writer}</span>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }





import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Title from "../../Title/Title";
import { useBlog } from "../../../Hooks/blogStore";

export default function HomeBlog() {
  const { blogs } = useBlog();

  return (
    <div className="my-10">
      <div className="flex justify-between items-center py-2">
        <div className="text-center text-2xl md:text-3xl">
          <Title text1={"أحدث "} text2={"الأخبار"} />
        </div>
        <div>
          <Link
            to="/الأخبار"
            className="inline-block mb-3 text-blue-600 hover:text-blue-800 transition-colors"
          >
         جميع الأخبار
          </Link>
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            576: { slidesPerView: 2, spaceBetween: 15 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="w-full"
        >
          {blogs && blogs.map((blog, index) => (
            <SwiperSlide key={blog.id || index}>
              <Link 
                to={`/الأخبار/${blog.id}`}
                className="block bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform hover:scale-105"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
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
                
                {/* Blog Content Container */}
                <div className="p-4 text-right">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}