"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Tag, Store, BarChart3, Database } from "lucide-react";

export default function RetailPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Sub-hero */}
      <section className="pt-20 pb-16 px-6 bg-brand-bg border-b border-brand-light">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-[1000px] mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-brand-blue font-semibold tracking-wide uppercase mb-3">OneTouch Retail</motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            The intelligent point of sale.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-text-muted mb-10 max-w-[700px] mx-auto">
            Run your store operations smoothly. Seamlessly connected to your warehouse inventory and accounting ledger.
          </motion.p>
          <motion.div variants={fadeUp} className="flex justify-center">
            <Link href="/login" className="px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors shadow-md">
              Login to OneTouch Retail
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
            <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="font-medium">Retail POS Screen Placeholder</p>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-brand-navy mb-12 text-center"
        >
          Everything you need to run your store
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShoppingCart />, title: "Checkout & Billing", desc: "Fast, reliable checkout experiences supporting barcode scanners and receipt printers." },
            { icon: <Database />, title: "Inventory Management", desc: "Real-time stock levels synced with your DC. Never sell what you don't have." },
            { icon: <Tag />, title: "Discounts & Promotions", desc: "Easily set up complex promotions, bundles, and seasonal discounts." },
            { icon: <Store />, title: "Multi-store Management", desc: "Control pricing and track performance across multiple locations from one dashboard." },
            { icon: <BarChart3 />, title: "Sales Analytics", desc: "Detailed end-of-day reports, cashier tracking, and sales performance metrics." },
            { icon: <ShoppingCart />, title: "Customer Loyalty / CRM", desc: "Build detailed customer profiles and track purchase history to drive repeat business." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center text-brand-blue mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-text-muted">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mini Diagram Section */}
      <section className="py-20 bg-brand-navy text-white px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto text-center"
        >
          <h2 className="text-2xl font-bold mb-8">How it connects to the suite</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 p-4 rounded-lg w-full md:w-48 text-center border border-white/20"
            >
              <span className="block text-sm text-brand-light mb-1">Replenished from</span>
              <strong className="block text-lg">OneTouch DC</strong>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex flex-col items-center justify-center text-brand-light"
            >
              <ArrowRight className="w-6 h-6 rotate-180 mb-1" />
              <ArrowRight className="w-6 h-6 mt-1" />
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-brand-blue p-6 rounded-xl w-full md:w-56 text-center shadow-lg border border-brand-blue relative"
            >
              <strong className="block text-xl">OneTouch Retail</strong>
            </motion.div>

            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="hidden md:flex items-center justify-center text-brand-light"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="bg-white/10 p-4 rounded-lg w-full md:w-48 text-center border border-white/20"
            >
              <span className="block text-sm text-brand-light mb-1">Sales feed into</span>
              <strong className="block text-lg">Accounting Ledger</strong>
            </motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-brand-light"
          >
            Stock moves from the warehouse to the till, and sales data flows instantly into your accounting ledger. No manual reconciliation needed.
          </motion.p>
        </motion.div>
      </section>

    </div>
  );
}
