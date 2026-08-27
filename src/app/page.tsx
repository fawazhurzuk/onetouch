"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, RefreshCw, Layers, Globe, Users } from "lucide-react";
import AnimatedDiagram from "@/components/AnimatedDiagram";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:pt-32 md:pb-24">
        <motion.div 
          className="max-w-[1000px] mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-brand-navy tracking-tight mb-6"
          >
            Simply connected. <br className="hidden md:block" />
            <span className="text-brand-blue">From warehouse to till to ledger.</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted mb-10 max-w-[800px] mx-auto leading-relaxed"
          >
            OneTouch Solutions brings distribution, retail, and accounting into one system — so your stock, sales, and books are always in sync.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors shadow-lg hover:shadow-xl">
              Request a Demo
            </Link>
            <Link href="/solutions" className="w-full sm:w-auto px-8 py-3.5 bg-white text-brand-navy border border-brand-light font-medium rounded-lg hover:bg-brand-bg transition-colors flex items-center justify-center gap-2">
              See it in action <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Animated Diagram Section */}
      <section className="py-12 bg-brand-bg px-6 border-y border-brand-light/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto text-center mb-8"
        >
          <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">The OneTouch Suite</p>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-2">One continuous flow of operations</h2>
        </motion.div>
        <AnimatedDiagram />
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Why choose OneTouch?</h2>
          <p className="text-text-muted mt-4 max-w-[600px] mx-auto">Eliminate manual reconciliation and data silos with a system built to communicate perfectly from day one.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all cursor-default"
            >
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-blue mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{benefit.title}</h3>
              <p className="text-text-muted leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof (Placeholder) */}
      <section className="py-16 bg-brand-navy text-white px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-sm font-medium text-brand-light mb-8 uppercase tracking-widest">Trusted by growing retailers</p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {/* Replace with real logos */}
            <div className="text-2xl font-bold">LOGO IPSUM</div>
            <div className="text-2xl font-bold">LOREM INC</div>
            <div className="text-2xl font-bold">RETAIL CO</div>
            <div className="text-2xl font-bold">TECHMART</div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            {[
              { stat: "500+", label: "Stores Powered" },
              { stat: "2M+", label: "Transactions Synced" },
              { stat: "99.9%", label: "Uptime Reliability" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring" }}
              >
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <div className="text-brand-light text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 text-center max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Ready to bring your operations into one system?</h2>
          <p className="text-text-muted mb-10 text-lg">Stop jumping between disconnected tools. Experience the OneTouch Solutions difference today.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors shadow-lg">
            Request a Demo
          </Link>
        </motion.div>
      </section>

    </div>
  );
}

const benefits = [
  {
    icon: <RefreshCw />,
    title: "Real-time sync",
    description: "Data moves instantly across distribution, retail, and accounting without delay."
  },
  {
    icon: <CheckCircle2 />,
    title: "No double entry",
    description: "Eliminate manual reconciliation completely. What happens in the store reflects in the ledger."
  },
  {
    icon: <Layers />,
    title: "Multi-entity support",
    description: "Manage multiple stores and companies effortlessly under a single umbrella."
  },
  {
    icon: <ShieldCheck />,
    title: "Financial visibility",
    description: "Track the complete lifecycle from stock movement all the way to final accounting."
  },
  {
    icon: <Globe />,
    title: "Cloud & Desktop",
    description: "Accessible anywhere via web, plus a robust downloadable desktop option for warehouse terminals."
  },
  {
    icon: <Users />,
    title: "Role-based access",
    description: "Strict controls ensure users only see and edit what their specific role allows."
  }
];
