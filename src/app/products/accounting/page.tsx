"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, BarChart4, Briefcase, FileText, Landmark, Users2, Moon, Sun } from "lucide-react";

export default function AccountingPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Sub-hero */}
      <section className="pt-20 pb-16 px-6 bg-brand-bg border-b border-brand-light">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[1000px] mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-brand-blue font-semibold tracking-wide uppercase mb-3">OneTouch Accounting</motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Your finances, perfectly synced.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-text-muted mb-10 max-w-[700px] mx-auto">
            A full ERP experience. Multi-company management, advanced banking reconciliation, and automated flow from your retail and distribution channels.
          </motion.p>
          <motion.div variants={fadeUp} className="flex justify-center">
            <Link href="/login" className="px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors shadow-md">
              Login to OneTouch Accounting
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Screenshot Placeholder */}
      <section className="py-16 px-6 -mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="max-w-[1000px] mx-auto bg-white p-2 rounded-xl shadow-2xl border border-gray-100 aspect-video flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
        >
          <div className="text-center text-text-muted">
            <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="font-medium">Accounting Dashboard Placeholder</p>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Complete Financial Control</h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Ditch the manual spreadsheets. OneTouch Accounting provides a comprehensive suite of tools for rigorous financial management, tailored for complex retail environments.
            </p>
            
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: <Briefcase className="w-5 h-5" />, title: "Multi-Company Management", desc: "Manage books for multiple business entities from a single unified login." },
                { icon: <FileText className="w-5 h-5" />, title: "Full Chart of Accounts", desc: "Configure sales/purchase accounts, reporting groups, and opening balances." },
                { icon: <Landmark className="w-5 h-5" />, title: "Banking & Reconciliation", desc: "Handle multiple banks and credit cards, statement mapping, quick entry rules, and deep transaction histories." }
              ].map((feature, i) => (
                <motion.li key={i} variants={fadeUp} className="flex gap-4">
                  <div className="mt-1 bg-brand-light p-2 rounded-lg text-brand-blue shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-brand-navy">{feature.title}</h4>
                    <p className="text-text-muted text-sm mt-1">{feature.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-bg rounded-2xl p-8 border border-brand-light"
          >
            <h3 className="text-xl font-bold text-brand-navy mb-6">Advanced Modules</h3>
            
            <div className="space-y-6">
              {[
                { icon: <Users2 className="w-4 h-4 text-brand-blue" />, title: "Full Order-to-Cash Flow", desc: "Seamlessly process quotes, sales orders, invoices, receipts, credit notes, write-offs, and adjustments." },
                { icon: <BarChart4 className="w-4 h-4 text-brand-blue" />, title: "Financial Dashboard", desc: "Instantly view customer balances by days outstanding, top customers by sales, and upcoming payments due." },
                { icon: <Users2 className="w-4 h-4 text-brand-blue" />, title: "Customer & Supplier Management", desc: "Track credit limits, exposure, assign categories, and manage sales rep assignments effortlessly." }
              ].map((mod, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                >
                  <h4 className="font-bold text-brand-navy flex items-center gap-2">{mod.icon} {mod.title}</h4>
                  <p className="text-sm text-text-muted mt-1">{mod.desc}</p>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="pt-4 border-t border-brand-light flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">Light and Dark Mode</h4>
                  <p className="text-xs text-text-muted">Work comfortably at any hour.</p>
                </div>
                <div className="flex gap-2 text-brand-blue">
                  <Sun className="w-5 h-5" />
                  <Moon className="w-5 h-5" />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
