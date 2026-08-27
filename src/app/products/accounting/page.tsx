import Link from "next/link";
import { Calculator, BarChart4, Briefcase, FileText, Landmark, Users2, Moon, Sun } from "lucide-react";

export default function AccountingPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* Sub-hero */}
      <section className="pt-20 pb-16 px-6 bg-brand-bg border-b border-brand-light">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-brand-blue font-semibold tracking-wide uppercase mb-3">OneTouch Accounting</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Your finances, perfectly synced.
          </h1>
          <p className="text-lg text-text-muted mb-10 max-w-[700px] mx-auto">
            A full ERP experience. Multi-company management, advanced banking reconciliation, and automated flow from your retail and distribution channels.
          </p>
          <div className="flex justify-center">
            <Link href="/login" className="px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors">
              Login to OneTouch Accounting
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Screenshot Placeholder */}
      <section className="py-16 px-6 -mt-12">
        <div className="max-w-[1000px] mx-auto bg-white p-2 rounded-xl shadow-2xl border border-gray-100 aspect-video flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center text-text-muted">
            <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="font-medium">Accounting Dashboard Placeholder</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Complete Financial Control</h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Ditch the manual spreadsheets. OneTouch Accounting provides a comprehensive suite of tools for rigorous financial management, tailored for complex retail environments.
            </p>
            
            <ul className="space-y-8">
              <li className="flex gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-lg text-brand-blue"><Briefcase className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-brand-navy">Multi-Company Management</h4>
                  <p className="text-text-muted text-sm mt-1">Manage books for multiple business entities from a single unified login.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-lg text-brand-blue"><FileText className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-brand-navy">Full Chart of Accounts</h4>
                  <p className="text-text-muted text-sm mt-1">Configure sales/purchase accounts, reporting groups, and opening balances.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-lg text-brand-blue"><Landmark className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-brand-navy">Banking & Reconciliation</h4>
                  <p className="text-text-muted text-sm mt-1">Handle multiple banks and credit cards, statement mapping, quick entry rules, and deep transaction histories.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-brand-bg rounded-2xl p-8 border border-brand-light">
            <h3 className="text-xl font-bold text-brand-navy mb-6">Advanced Modules</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-brand-navy flex items-center gap-2"><Users2 className="w-4 h-4 text-brand-blue" /> Full Order-to-Cash Flow</h4>
                <p className="text-sm text-text-muted mt-1">Seamlessly process quotes, sales orders, invoices, receipts, credit notes, write-offs, and adjustments.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-navy flex items-center gap-2"><BarChart4 className="w-4 h-4 text-brand-blue" /> Financial Dashboard</h4>
                <p className="text-sm text-text-muted mt-1">Instantly view customer balances by days outstanding, top customers by sales, and upcoming payments due.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-navy flex items-center gap-2"><Users2 className="w-4 h-4 text-brand-blue" /> Customer & Supplier Management</h4>
                <p className="text-sm text-text-muted mt-1">Track credit limits, exposure, assign categories, and manage sales rep assignments effortlessly.</p>
              </div>
              <div className="pt-4 border-t border-brand-light flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">Light and Dark Mode</h4>
                  <p className="text-xs text-text-muted">Work comfortably at any hour.</p>
                </div>
                <div className="flex gap-2 text-brand-blue">
                  <Sun className="w-5 h-5" />
                  <Moon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
