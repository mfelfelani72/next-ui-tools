import "../../../app/globals.css";
import Sidebar from "@/components/app/Sidebar";
import Header from "@/components/app/Header";
import Footer from "@/components/app/Footer";

export const metadata = {
  title: "UI Kit Example",
  description: "ساختار با Sidebar و Header/Footer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 p-4 bg-gray-50">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
