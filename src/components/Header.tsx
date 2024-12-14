"use client";

import Link from "next/link";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Header({ className = "" }) {
  return (
    <header className={`bg-white ${className}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          {/* <Link href="/" className="text-2xl font-bold text-black">
            LOGO
          </Link> */}
        </div>

        {/* Navigation Menu */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-sm font-medium">
          <Link href="/" className="text-black hover:text-gray-500">
            Home
          </Link>
          <Link href="/shop" className="text-black hover:text-gray-500">
            Shop
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-500">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-xl">
          <Link href="/account" className="text-black hover:text-gray-500">
            <FaUser />
          </Link>
          <Link href="/search" className="text-black hover:text-gray-500">
            <FaSearch />
          </Link>
          <Link href="/wishlist" className="text-black hover:text-gray-500">
            <FaHeart />
          </Link>
          <Link href="/cart" className="text-black hover:text-gray-500">
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </header>
  );
}
