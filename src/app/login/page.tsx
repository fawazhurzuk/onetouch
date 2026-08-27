"use client";

import { motion } from "framer-motion";
import { Store, Warehouse, Calculator } from "lucide-react";

export default function LoginPage() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
  };

  return (
    <div className="flex flex-col w-full py-20 px-6 min-h-[70vh] items-center justify-center bg-brand-bg overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Welcome back</h1>
        <p className="text-lg text-text-muted">
          Which OneTouch product do you use?
        </p>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] w-full"
      >
        
        {/* Retail Login */}
        <motion.a 
          variants={fadeUp}
          href="https://onetouch-retail-pos.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/30 hover:-translate-y-1 transition-all text-center group flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
            <Store className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-brand-navy mb-2">OneTouch Retail</h2>
          <p className="text-sm text-text-muted">In-store Point of Sale</p>
        </motion.a>

        {/* DC Login */}
        <motion.a 
          variants={fadeUp}
          href="https://onetouch-dc-pos.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/30 hover:-translate-y-1 transition-all text-center group flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
            <Warehouse className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-brand-navy mb-2">OneTouch DC</h2>
          <p className="text-sm text-text-muted">Warehouse & Distribution</p>
        </motion.a>

        {/* Accounting Login */}
        <motion.a 
          variants={fadeUp}
          href="https://infooware-accounting-uat.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/30 hover:-translate-y-1 transition-all text-center group flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
            <Calculator className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-brand-navy mb-2">OneTouch Accounting</h2>
          <p className="text-sm text-text-muted">ERP & General Ledger</p>
        </motion.a>

      </motion.div>
    </div>
  );
}
