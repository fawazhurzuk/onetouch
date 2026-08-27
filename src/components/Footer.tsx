import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-xl">OneTouch Solutions</span>
          </div>
          <p className="text-brand-light text-sm mb-6">
            Simply Connected. From warehouse to till to ledger.
          </p>
          <p className="text-brand-light/70 text-xs">
            © {new Date().getFullYear()} OneTouch Solutions. All rights reserved.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-3 text-sm text-brand-light">
            <li><Link href="/products/retail" className="hover:text-white transition-colors">OneTouch Retail</Link></li>
            <li><Link href="/products/dc" className="hover:text-white transition-colors">OneTouch DC</Link></li>
            <li><Link href="/products/accounting" className="hover:text-white transition-colors">OneTouch Accounting</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-brand-light">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-sm text-brand-light">
            <li><Link href="/resources" className="hover:text-white transition-colors">Help Center / FAQ</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
            <li><Link href="/login" className="hover:text-white transition-colors">Customer Login</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
