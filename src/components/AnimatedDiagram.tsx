"use client";

import { motion } from "framer-motion";
import { Warehouse, Store, Calculator, ArrowRight } from "lucide-react";

export default function AnimatedDiagram() {
  const nodeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between relative">
        
        {/* Connection Lines (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-brand-light -z-10 -translate-y-1/2" />
        
        {/* Animated Data Particles */}
        <motion.div 
          className="hidden md:block absolute top-1/2 left-[15%] w-2 h-2 rounded-full bg-brand-blue -translate-y-1/2 shadow-[0_0_8px_rgba(20,100,190,0.8)]"
          animate={{
            left: ["15%", "85%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div 
          className="hidden md:block absolute top-1/2 left-[15%] w-2 h-2 rounded-full bg-brand-success -translate-y-1/2 shadow-[0_0_8px_rgba(22,163,74,0.8)]"
          animate={{
            left: ["15%", "85%"],
          }}
          transition={{
            duration: 3,
            delay: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Node 1: DC */}
        <motion.div 
          variants={nodeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full md:w-64 mb-8 md:mb-0 z-10"
        >
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-4 text-brand-navy">
            <Warehouse className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-lg text-brand-navy">OneTouch DC</h3>
          <p className="text-sm text-text-muted text-center mt-2">Warehouse & Distribution</p>
        </motion.div>

        <ArrowRight className="md:hidden text-brand-light w-8 h-8 mb-8" />

        {/* Node 2: Retail */}
        <motion.div 
          variants={nodeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg border border-brand-blue/20 w-full md:w-64 mb-8 md:mb-0 z-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-light/20 to-transparent -z-10" />
          <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mb-4">
            <Store className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-lg text-brand-navy">OneTouch Retail</h3>
          <p className="text-sm text-text-muted text-center mt-2">In-store POS & Checkout</p>
        </motion.div>

        <ArrowRight className="md:hidden text-brand-light w-8 h-8 mb-8" />

        {/* Node 3: Accounting */}
        <motion.div 
          variants={nodeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full md:w-64 z-10"
        >
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-4 text-brand-navy">
            <Calculator className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-lg text-brand-navy">OneTouch Accounting</h3>
          <p className="text-sm text-text-muted text-center mt-2">Full ERP & General Ledger</p>
        </motion.div>

      </div>
    </div>
  );
}
