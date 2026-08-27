"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full py-20 px-6 max-w-[1000px] mx-auto overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">About OneTouch</h1>
        <p className="text-xl text-text-muted max-w-[700px] mx-auto">
          Built to connect the full retail operation, from warehouse to books.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm mb-16"
      >
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h2>
        <p className="text-lg text-text-muted leading-relaxed mb-6">
          Most retail businesses are forced to run separate, disconnected systems. They buy a POS for the store, a different software for the warehouse, and a generic accounting tool for the back office. The result? Hours spent manually reconciling data, exporting CSVs, and fixing errors when the numbers don&apos;t match up.
        </p>
        <p className="text-lg text-text-muted leading-relaxed">
          OneTouch Solutions was built to solve this. We believe that stock, sales, and books should exist in one connected system. When a cashier scans a barcode, the warehouse should know, and the ledger should update. Simply connected.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Story</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            [Placeholder: Insert company founding story here. Explain the initial problem the founders faced in retail/distribution, and how OneTouch was developed to create a single source of truth.]
          </p>
          <p className="text-text-muted leading-relaxed">
            [Placeholder: Add context about the team&apos;s background in retail operations and software engineering.]
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-brand-bg rounded-xl aspect-video border border-brand-light flex items-center justify-center hover:shadow-lg transition-shadow"
        >
          <span className="text-text-muted font-medium tracking-wide">Team Photo Placeholder</span>
        </motion.div>
      </div>

    </div>
  );
}
