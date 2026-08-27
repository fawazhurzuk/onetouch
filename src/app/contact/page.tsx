"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="flex flex-col w-full py-20 px-6 max-w-[1200px] mx-auto overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Get in touch</h1>
        <p className="text-lg text-text-muted max-w-[700px] mx-auto">
          Have questions about OneTouch Solutions? Our team is ready to help you find the right setup for your business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Contact Information</h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: <Mail className="w-6 h-6" />, title: "Email Us", desc: "For general inquiries and support.", link: "mailto:hello@onetouchsolutions.com", label: "hello@onetouchsolutions.com" },
              { icon: <Phone className="w-6 h-6" />, title: "Call Us", desc: "Mon-Fri from 9am to 6pm.", link: "tel:+1234567890", label: "+1 (234) 567-890" }
            ].map((info, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy">{info.title}</h3>
                  <p className="text-text-muted mt-1 mb-1">{info.desc}</p>
                  <a href={info.link} className="text-brand-blue font-medium hover:underline">{info.label}</a>
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="flex gap-4">
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy">Office</h3>
                <p className="text-text-muted mt-1">
                  123 Retail Way, Suite 400<br />
                  Commerce City, TX 75001<br />
                  United States
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Send a message</h2>
          
          <form className="space-y-4" action="mailto:hello@onetouchsolutions.com" method="post" encType="text/plain">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-navy mb-1">First Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-navy mb-1">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Company</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/50 resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-3 mt-4 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors shadow-sm">
              Send Message
            </button>
          </form>
        </motion.div>

      </div>

    </div>
  );
}
