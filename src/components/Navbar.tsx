"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
            <Image 
              src="/onetouch-logo-extracted.png" 
              alt="OneTouch Logo" 
              fill 
              className="object-cover scale-110"
            />
          </div>
          <span className="font-bold text-xl text-brand-navy tracking-tight hidden sm:block">
            OneTouch Solutions
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-brand-blue transition-colors py-2">
              Products <ChevronDown className="w-4 h-4" />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden py-2">
                <Link href="/products/retail" className="block px-4 py-2 text-sm hover:bg-brand-light/50 transition-colors">OneTouch Retail</Link>
                <Link href="/products/dc" className="block px-4 py-2 text-sm hover:bg-brand-light/50 transition-colors">OneTouch DC</Link>
                <Link href="/products/accounting" className="block px-4 py-2 text-sm hover:bg-brand-light/50 transition-colors">OneTouch Accounting</Link>
              </div>
            )}
          </div>
          <Link href="/solutions" className="text-sm font-medium text-text-primary hover:text-brand-blue transition-colors">Solutions</Link>
          <Link href="/pricing" className="text-sm font-medium text-text-primary hover:text-brand-blue transition-colors">Pricing</Link>
          <Link href="/resources" className="text-sm font-medium text-text-primary hover:text-brand-blue transition-colors">Resources</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-text-primary hover:text-brand-blue transition-colors">
            Customer Login
          </Link>
          <Link href="/contact" className="bg-brand-blue text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-brand-navy transition-colors shadow-sm">
            Request Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-6 space-y-4">
          <div className="space-y-3">
            <div className="font-semibold text-brand-navy">Products</div>
            <Link href="/products/retail" className="block pl-4 text-sm text-text-muted">OneTouch Retail</Link>
            <Link href="/products/dc" className="block pl-4 text-sm text-text-muted">OneTouch DC</Link>
            <Link href="/products/accounting" className="block pl-4 text-sm text-text-muted">OneTouch Accounting</Link>
          </div>
          <div className="pt-4 space-y-4 border-t border-gray-100">
            <Link href="/solutions" className="block font-medium">Solutions</Link>
            <Link href="/pricing" className="block font-medium">Pricing</Link>
            <Link href="/resources" className="block font-medium">Resources</Link>
            <Link href="/about" className="block font-medium">About</Link>
            <Link href="/login" className="block font-medium text-brand-blue">Customer Login</Link>
          </div>
          <div className="pt-6">
            <Link href="/contact" className="block w-full text-center bg-brand-blue text-white font-medium py-3 rounded-lg">
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
