import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full py-20 px-6 max-w-[1200px] mx-auto">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Get in touch</h1>
        <p className="text-lg text-text-muted max-w-[700px] mx-auto">
          Have questions about OneTouch Solutions? Our team is ready to help you find the right setup for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Contact Information</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy">Email Us</h3>
                <p className="text-text-muted mt-1 mb-1">For general inquiries and support.</p>
                <a href="mailto:hello@onetouchsolutions.com" className="text-brand-blue font-medium hover:underline">hello@onetouchsolutions.com</a>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy">Call Us</h3>
                <p className="text-text-muted mt-1 mb-1">Mon-Fri from 9am to 6pm.</p>
                <a href="tel:+1234567890" className="text-brand-blue font-medium hover:underline">+1 (234) 567-890</a>
              </div>
            </div>

            <div className="flex gap-4">
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
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
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

            <button type="submit" className="w-full py-3 mt-4 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors">
              Send Message
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
