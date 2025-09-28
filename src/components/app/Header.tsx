import Link from "next/link";

export default function SimpleHeader() {
  return (
    <header className="bg-white rounded-lg mx-1 my-2 shadow-[0_4px_20px_rgba(0,0,0,0.25)] sticky top-4 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <span className="text-2xl font-bold text-blue-600 cursor-pointer">
              Brand
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8 items-center">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            href="/get-started"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
