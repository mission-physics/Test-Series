"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
            <Image src={'/images/logo_mp.png'} alt="logo" height={60} width={60} />
            <span className="text-2xl ml-2 font-bold text-[#263238]">Mission<span className="text-[#dea0ee]">Physics</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#263238] hover:text-[#eaa5fb] transition-colors">Home</Link>
            <Link href="#" className="text-[#263238] hover:text-[#eaa5fb] transition-colors">About</Link>
            <Link href="#test-series" className="text-[#263238] hover:text-[#eaa5fb] transition-colors">Test Series</Link>
            <Link href="#" className="text-[#263238] hover:text-[#eaa5fb] transition-colors">Contact</Link>
            <button className="bg-[#dea0ee] text-gray-50 px-4 py-2 rounded-full font-semibold hover:bg-[#eaa5fb] transition-colors" onClick={() => router.push("#test-series")}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#263238]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-[#263238] hover:text-[#92E3A9] transition-colors">Home</a>
              <a href="#" className="block px-3 py-2 text-[#263238] hover:text-[#92E3A9] transition-colors">About</a>
              <a href="#" className="block px-3 py-2 text-[#263238] hover:text-[#92E3A9] transition-colors">Test Series</a>
              <a href="#" className="block px-3 py-2 text-[#263238] hover:text-[#92E3A9] transition-colors">Contact</a>
              <button className="w-full mt-2 bg-[#92E3A9] text-[#263238] px-4 py-2 rounded-full font-semibold hover:bg-[#82d399] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}