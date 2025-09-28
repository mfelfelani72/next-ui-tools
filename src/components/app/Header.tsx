"use client";
import { useState } from "react";

export default function Header() {
  const [notifications] = useState(3);

  return (
    <header className="w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg px-6 py-3 flex items-center justify-between">
      {/* Left Side - Logo / Title */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-extrabold text-slate-900">
          ⚡
        </div>
        <h1 className="text-lg md:text-xl font-bold tracking-wide">
          پنل مدیریت
        </h1>
      </div>

      {/* Center - Search */}
      <div className="hidden md:flex items-center bg-slate-800 rounded-full px-3 py-1 w-72 shadow-inner">
        <span className="text-gray-400 text-sm">🔍</span>
        <input
          type="text"
          placeholder="جستجو..."
          className="bg-transparent flex-1 ml-2 text-sm placeholder-gray-400 text-white focus:outline-none"
        />
      </div>

      {/* Right Side - Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-slate-600 transition-colors">
          <span className="text-lg">🔔</span>
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-emerald-400 text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold text-slate-900 shadow">
              {notifications}
            </span>
          )}
        </button>

        {/* User Menu */}
        <div className="relative group">
          <button className="w-9 h-9 rounded-full bg-emerald-500 text-slate-900 flex items-center justify-center font-bold">
            A
          </button>
          <div className="absolute right-0 mt-2 w-44 bg-white text-slate-800 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="px-4 py-2 font-semibold border-b">حساب کاربری</div>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              پروفایل
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              تنظیمات
            </button>
            <div className="border-t"></div>
            <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
              خروج
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
