export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md flex items-center justify-between p-4">
      {/* عنوان */}
      <h1 className="text-2xl font-bold tracking-wide">
        ⚡ پنل مدیریت
      </h1>

      {/* بخش اکشن‌ها */}
      <div className="flex items-center gap-4">
        {/* نوتیفیکیشن ساده با CSS */}
        <div className="relative">
          <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">
            🔔
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-indigo-600"></span>
        </div>

        {/* کاربر / avatar ساده */}
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold">
          A
        </div>
      </div>
    </header>
  );
}
