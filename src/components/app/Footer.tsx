export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 shadow-inner p-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      {/* سمت چپ: متن */}
      <p className="text-sm sm:text-base">&copy; 2025 همه حقوق محفوظ است</p>

      {/* سمت راست: لینک‌ها */}
      <div className="flex gap-4">
        <a
          href="#"
          className="hover:text-white transition-colors duration-200 text-sm sm:text-base"
        >
          سیاست حفظ حریم خصوصی
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors duration-200 text-sm sm:text-base"
        >
          تماس با ما
        </a>
      </div>
    </footer>
  );
}
