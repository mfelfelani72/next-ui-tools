import Tabs from "@/components/ui/Tabs";
import React from "react";

const page = () => {
  return (
    <Tabs
      tabs={[
        { label: "پیش‌فرض", content: <p>محتوای تب ۱</p> },
        { label: "تنظیمات", content: <p>محتوای تب ۲</p> },
        { label: "داشبورد", content: <p>محتوای تب ۳</p> },
      ]}
    />
  );
};

export default page;
