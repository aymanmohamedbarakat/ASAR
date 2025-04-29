import React from "react";
import { Route, Routes } from "react-router-dom";
import PagesLayout from "./Layout/PagesLayout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogsDetails from "./components/Blog/BlogsDetails/BlogsDetails";
import Reports from "./Pages/Reports";
import ReportsDetails from "./components/Reports/ReportsDetails";

export default function App() {
  return (
    <div className="App bg-white text-black px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 ">
      <Routes>
        <Route path="/" element={<PagesLayout />} >
          <Route index element={<Home />} />
          <Route path="لماذا-نحن" element={<h1 className="text-3xl">لماذا نحن ؟</h1>} />
          <Route path="تواصل-معنا" element={<h1 className="text-3xl">تواصل معنا</h1>} />
          <Route path="الأخبار" element={<Blog />} />
          <Route path="الأخبار/:blogId" element={<BlogsDetails />} />
          <Route path="تقارير" element={<Reports />} />
          <Route path="تقارير/:id" element={<ReportsDetails />} />
          <Route path="تحقيقات" element={<h1 className="text-3xl">تحقيقات</h1>} />
          <Route path="حوارات" element={<h1 className="text-3xl">حوارات</h1>} />
          <Route path="مقالات" element={<h1 className="text-3xl">مقالات</h1>} />
          <Route path="*" element={<h1 className="text-3xl">هذه الصفحة غير متوفرة</h1>} />
        </Route>
      </Routes>
    </div>
  );
}
