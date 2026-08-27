import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full py-20 px-6">
      
      <div className="max-w-[800px] mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Simple, custom pricing</h1>
        <p className="text-lg text-text-muted">
          Every retail operation is unique. We price based on the modules you need and the scale of your business, ensuring you never pay for features you don&apos;t use.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div className="bg-white p-8 rounded-2xl border border-brand-light shadow-sm">
          <h2 className="text-2xl font-bold text-brand-navy mb-2">Get a Custom Quote</h2>
          <p className="text-text-muted mb-8">Tell us a bit about your setup and we&apos;ll get back to you with a tailored pricing plan within 24 hours.</p>
          
          <form className="space-y-4" action="mailto:demo@onetouchsolutions.com" method="post" encType="text/plain">
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
              <label className="block text-sm font-medium text-brand-navy mb-1">Company Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Number of Stores</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/50 bg-white">
                <option>1 (Single Store)</option>
                <option>2 - 5</option>
                <option>6 - 20</option>
                <option>21+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Products of Interest</label>
              <div className="space-y-2 mt-2">
                <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-blue" /> OneTouch Retail</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-blue" /> OneTouch DC (Warehouse)</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-blue" /> OneTouch Accounting</label>
              </div>
            </div>

            <button type="submit" className="w-full py-3 mt-4 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-navy transition-colors">
              Request Quote
            </button>
          </form>
        </div>

        <div className="bg-brand-bg p-8 rounded-2xl border border-brand-light h-full">
          <h3 className="text-xl font-bold text-brand-navy mb-6">What&apos;s included in every plan</h3>
          
          <ul className="space-y-4">
            {[
              "Cloud hosting with 99.9% uptime guarantee",
              "Unlimited standard support via email and portal",
              "Free automatic updates and security patches",
              "Real-time data synchronization between modules",
              "Role-based access controls for unlimited users",
              "Daily automated backups"
            ].map((feature, i) => (
              <li key={i} className="flex gap-3 text-text-muted">
                <div className="mt-1 w-5 h-5 rounded-full bg-brand-success/20 flex items-center justify-center text-brand-success shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 p-6 bg-white rounded-xl border border-brand-light">
            <h4 className="font-bold text-brand-navy mb-2">Need migration assistance?</h4>
            <p className="text-sm text-text-muted mb-4">Our onboarding team can help migrate your existing stock data and chart of accounts.</p>
            <Link href="/contact" className="text-brand-blue text-sm font-medium hover:underline">Speak to our onboarding team &rarr;</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
