"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Box, CreditCard, LayoutDashboard, Monitor, Shield, Users } from "lucide-react";

export default function DCPage() {
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
          <motion.p variants={fadeUp} className="text-brand-blue font-semibold tracking-wide uppercase mb-3">OneTouch DC</motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Warehouse distribution, mastered.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-text-muted mb-10 max-w-[700px] mx-auto">
            Manage your entire distribution center with precision. From Goods Received Vouchers to bulk data imports and advanced POS.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/login" className="px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors shadow-md">
              Login to OneTouch DC
            </Link>
            <button className="px-6 py-3 bg-white border border-brand-light text-brand-navy font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              <Monitor className="w-5 h-5" />
              Download Desktop App
            </button>
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
            <LayoutDashboard className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="font-medium">Module Grid Screenshot</p>
            <p className="text-sm">(Sales Report, POS, Promotions, Users, Stocks, Inventory, GRV, Import Center)</p>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Built for high-volume environments</h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Available as both a responsive web app and a rock-solid downloadable desktop application — ensuring reliability in tough warehouse environments where connectivity fluctuates.
            </p>
            
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: <Box className="w-5 h-5" />, title: "Core Modules", desc: "Processing, Debtors, Creditors, Stock, Utilities, and Point of Sale." },
                { icon: <CreditCard className="w-5 h-5" />, title: "Advanced POS", desc: "Tax invoice generation, barcode scanning (fast-mode), suspend/resume sale, and customer selection." },
                { icon: <Users className="w-5 h-5" />, title: "Role-Based Access", desc: "Warehouse, Store Manager, Cashier, Admin, and Project Manager groups with terminal lock controls." },
                { icon: <Shield className="w-5 h-5" />, title: "Bulk Data Import Center", desc: "Easily import Stock, Outlets & Users, Products & Categories, and Promotions with full import history." }
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
            className="bg-brand-bg rounded-2xl p-8 border border-brand-light flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-brand-navy mb-4">The Desktop Advantage</h3>
            <p className="text-text-muted mb-6">
              Warehouse operations can&apos;t stop for slow internet. The OneTouch DC desktop application runs locally on your terminals while keeping data synced with the cloud.
            </p>
            <div className="space-y-4">
              {['Offline tolerance', 'Native hardware integration (scanners)', 'Faster data entry'].map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-3 text-sm font-medium text-brand-navy bg-white p-3 rounded-lg shadow-sm border border-brand-light/50"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-success"></div> {point}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
