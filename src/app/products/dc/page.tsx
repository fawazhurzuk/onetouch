import Link from "next/link";
import { ArrowRight, Box, CreditCard, LayoutDashboard, Monitor, Shield, Users } from "lucide-react";

export default function DCPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* Sub-hero */}
      <section className="pt-20 pb-16 px-6 bg-brand-bg border-b border-brand-light">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-brand-blue font-semibold tracking-wide uppercase mb-3">OneTouch DC</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Warehouse distribution, mastered.
          </h1>
          <p className="text-lg text-text-muted mb-10 max-w-[700px] mx-auto">
            Manage your entire distribution center with precision. From Goods Received Vouchers to bulk data imports and advanced POS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/login" className="px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors">
              Login to OneTouch DC
            </Link>
            <button className="px-6 py-3 bg-white border border-brand-light text-brand-navy font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Monitor className="w-5 h-5" />
              Download Desktop App
            </button>
          </div>
        </div>
      </section>

      {/* Feature Screenshot Placeholder */}
      <section className="py-16 px-6 -mt-12">
        <div className="max-w-[1000px] mx-auto bg-white p-2 rounded-xl shadow-2xl border border-gray-100 aspect-video flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center text-text-muted">
            <LayoutDashboard className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="font-medium">Module Grid Screenshot</p>
            <p className="text-sm">(Sales Report, POS, Promotions, Users, Stocks, Inventory, GRV, Import Center)</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Built for high-volume environments</h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Available as both a responsive web app and a rock-solid downloadable desktop application — ensuring reliability in tough warehouse environments where connectivity fluctuates.
            </p>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-lg text-brand-blue"><Box className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-brand-navy">Core Modules</h4>
                  <p className="text-text-muted text-sm mt-1">Processing, Debtors, Creditors, Stock, Utilities, and Point of Sale.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-lg text-brand-blue"><CreditCard className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-brand-navy">Advanced POS</h4>
                  <p className="text-text-muted text-sm mt-1">Tax invoice generation, barcode scanning (fast-mode), suspend/resume sale, and customer selection.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-lg text-brand-blue"><Users className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-brand-navy">Role-Based Access</h4>
                  <p className="text-text-muted text-sm mt-1">Warehouse, Store Manager, Cashier, Admin, and Project Manager groups with terminal lock controls.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-lg text-brand-blue"><Shield className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-brand-navy">Bulk Data Import Center</h4>
                  <p className="text-text-muted text-sm mt-1">Easily import Stock, Outlets & Users, Products & Categories, and Promotions with full import history.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-brand-bg rounded-2xl p-8 border border-brand-light flex flex-col justify-center">
            <h3 className="text-xl font-bold text-brand-navy mb-4">The Desktop Advantage</h3>
            <p className="text-text-muted mb-6">
              Warehouse operations can&apos;t stop for slow internet. The OneTouch DC desktop application runs locally on your terminals while keeping data synced with the cloud.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm font-medium text-brand-navy">
                <div className="w-2 h-2 rounded-full bg-brand-success"></div> Offline tolerance
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-brand-navy">
                <div className="w-2 h-2 rounded-full bg-brand-success"></div> Native hardware integration (scanners)
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-brand-navy">
                <div className="w-2 h-2 rounded-full bg-brand-success"></div> Faster data entry
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
