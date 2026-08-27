import Link from "next/link";
import { ArrowRight, ShoppingCart, Tag, Store, BarChart3, Database } from "lucide-react";

export default function RetailPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* Sub-hero */}
      <section className="pt-20 pb-16 px-6 bg-brand-bg border-b border-brand-light">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-brand-blue font-semibold tracking-wide uppercase mb-3">OneTouch Retail</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            The intelligent point of sale.
          </h1>
          <p className="text-lg text-text-muted mb-10 max-w-[700px] mx-auto">
            Run your store operations smoothly. Seamlessly connected to your warehouse inventory and accounting ledger.
          </p>
          <div className="flex justify-center">
            <Link href="/login" className="px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors">
              Login to OneTouch Retail
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Screenshot Placeholder */}
      <section className="py-16 px-6 -mt-12">
        <div className="max-w-[1000px] mx-auto bg-white p-2 rounded-xl shadow-2xl border border-gray-100 aspect-video flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center text-text-muted">
            <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="font-medium">Retail POS Screen Placeholder</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Everything you need to run your store</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <ShoppingCart className="w-8 h-8 text-brand-blue mb-4" />
            <h3 className="font-bold text-brand-navy text-lg mb-2">Checkout & Billing</h3>
            <p className="text-sm text-text-muted">Fast, reliable checkout experiences supporting barcode scanners and receipt printers.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <Database className="w-8 h-8 text-brand-blue mb-4" />
            <h3 className="font-bold text-brand-navy text-lg mb-2">Inventory Management</h3>
            <p className="text-sm text-text-muted">Real-time stock levels synced with your DC. Never sell what you don&apos;t have.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <Tag className="w-8 h-8 text-brand-blue mb-4" />
            <h3 className="font-bold text-brand-navy text-lg mb-2">Discounts & Promotions</h3>
            <p className="text-sm text-text-muted">Easily set up complex promotions, bundles, and seasonal discounts.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <Store className="w-8 h-8 text-brand-blue mb-4" />
            <h3 className="font-bold text-brand-navy text-lg mb-2">Multi-store Management</h3>
            <p className="text-sm text-text-muted">Control pricing and track performance across multiple locations from one dashboard.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <BarChart3 className="w-8 h-8 text-brand-blue mb-4" />
            <h3 className="font-bold text-brand-navy text-lg mb-2">Sales Analytics</h3>
            <p className="text-sm text-text-muted">Detailed end-of-day reports, cashier tracking, and sales performance metrics.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <ShoppingCart className="w-8 h-8 text-brand-blue mb-4" />
            <h3 className="font-bold text-brand-navy text-lg mb-2">Customer Loyalty / CRM</h3>
            <p className="text-sm text-text-muted">Build detailed customer profiles and track purchase history to drive repeat business.</p>
          </div>

        </div>
      </section>

      {/* Mini Diagram Section */}
      <section className="py-20 bg-brand-navy text-white px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">How it connects to the suite</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="bg-white/10 p-4 rounded-lg w-full md:w-48 text-center border border-white/20">
              <span className="block text-sm text-brand-light mb-1">Replenished from</span>
              <strong className="block text-lg">OneTouch DC</strong>
            </div>
            
            <div className="hidden md:flex flex-col items-center justify-center text-brand-light">
              <ArrowRight className="w-6 h-6 rotate-180 mb-1" />
              <ArrowRight className="w-6 h-6 mt-1" />
            </div>
            
            <div className="bg-brand-blue p-6 rounded-xl w-full md:w-56 text-center shadow-lg border border-brand-blue">
              <strong className="block text-xl">OneTouch Retail</strong>
            </div>

            <div className="hidden md:flex items-center justify-center text-brand-light">
              <ArrowRight className="w-6 h-6" />
            </div>

            <div className="bg-white/10 p-4 rounded-lg w-full md:w-48 text-center border border-white/20">
              <span className="block text-sm text-brand-light mb-1">Sales feed into</span>
              <strong className="block text-lg">Accounting Ledger</strong>
            </div>
          </div>
          <p className="mt-8 text-brand-light">Stock moves from the warehouse to the till, and sales data flows instantly into your accounting ledger. No manual reconciliation needed.</p>
        </div>
      </section>

    </div>
  );
}
