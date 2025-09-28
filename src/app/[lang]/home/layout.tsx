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
      <body className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="flex-none h-screen">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
          {/* Sticky Header */}
          <div className="sticky top-0 z-50">
            <Header />
          </div>

          {/* Main scrollable content */}
          <main className="flex-1 overflow-auto p-4 bg-gray-50">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
