import Link from "next/link";
import { Store, Building2, Building } from "lucide-react";

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full py-20 px-6 max-w-[1200px] mx-auto">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Solutions for every scale</h1>
        <p className="text-lg text-text-muted max-w-[700px] mx-auto">
          Whether you run a single boutique or a nationwide distribution network, OneTouch Solutions scales to meet your exact operational needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Single Store */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
          <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center text-brand-blue mb-6">
            <Store className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Single Store</h2>
          <p className="text-text-muted flex-grow mb-8">
            Perfect for independent retailers looking to upgrade from generic cash registers. Combine OneTouch Retail for fast checkout and OneTouch Accounting to keep your books clean and tax-ready from day one.
          </p>
          <div className="space-y-2 border-t border-brand-light pt-6 mt-auto">
            <span className="block text-sm font-semibold text-brand-navy">Recommended setup:</span>
            <span className="inline-block bg-brand-bg text-brand-blue text-xs font-medium px-2 py-1 rounded">OneTouch Retail</span>
            <span className="inline-block bg-brand-bg text-brand-blue text-xs font-medium px-2 py-1 rounded ml-2">OneTouch Accounting</span>
          </div>
        </div>

        {/* Multi-Store Chain */}
        <div className="bg-white p-8 rounded-2xl border border-brand-blue/20 shadow-lg relative flex flex-col h-full">
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
          <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center text-white mb-6">
            <Building className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Multi-Store Retail Chain</h2>
          <p className="text-text-muted flex-grow mb-8">
            Manage pricing, promotions, and inventory across multiple locations. Add OneTouch DC to act as your central replenishment hub, feeding stock to stores and financial data to head office automatically.
          </p>
          <div className="space-y-2 border-t border-brand-light pt-6 mt-auto">
            <span className="block text-sm font-semibold text-brand-navy">Recommended setup:</span>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-brand-light text-brand-navy text-xs font-medium px-2 py-1 rounded">OneTouch Retail (Multiple)</span>
              <span className="inline-block bg-brand-light text-brand-navy text-xs font-medium px-2 py-1 rounded">OneTouch DC</span>
              <span className="inline-block bg-brand-light text-brand-navy text-xs font-medium px-2 py-1 rounded">OneTouch Accounting</span>
            </div>
          </div>
        </div>

        {/* Distributor + Retailer */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
          <div className="w-14 h-14 bg-brand-navy rounded-xl flex items-center justify-center text-white mb-6">
            <Building2 className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Distributor + Retail Combo</h2>
          <p className="text-text-muted flex-grow mb-8">
            For businesses that wholesale out of a warehouse while running public-facing retail fronts. Keep wholesale B2B pricing entirely separate from retail B2C pricing, while consolidating all revenue in one ledger.
          </p>
          <div className="space-y-2 border-t border-brand-light pt-6 mt-auto">
            <span className="block text-sm font-semibold text-brand-navy">Recommended setup:</span>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-brand-bg text-brand-blue text-xs font-medium px-2 py-1 rounded">OneTouch DC (Wholesale)</span>
              <span className="inline-block bg-brand-bg text-brand-blue text-xs font-medium px-2 py-1 rounded">OneTouch Retail</span>
              <span className="inline-block bg-brand-bg text-brand-blue text-xs font-medium px-2 py-1 rounded">OneTouch Accounting</span>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold text-brand-navy mb-6">Not sure which setup is right for you?</h3>
        <Link href="/contact" className="inline-block px-8 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors">
          Talk to an expert
        </Link>
      </div>

    </div>
  );
}
