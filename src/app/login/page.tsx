import { Store, Warehouse, Calculator } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex flex-col w-full py-20 px-6 min-h-[70vh] items-center justify-center bg-brand-bg">
      
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Welcome back</h1>
        <p className="text-lg text-text-muted">
          Which OneTouch product do you use?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] w-full">
        
        {/* Retail Login */}
        <a 
          href="https://onetouch-retail-pos.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-blue/30 transition-all text-center group flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
            <Store className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-brand-navy mb-2">OneTouch Retail</h2>
          <p className="text-sm text-text-muted">In-store Point of Sale</p>
        </a>

        {/* DC Login */}
        <a 
          href="https://onetouch-dc-pos.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-blue/30 transition-all text-center group flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
            <Warehouse className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-brand-navy mb-2">OneTouch DC</h2>
          <p className="text-sm text-text-muted">Warehouse & Distribution</p>
        </a>

        {/* Accounting Login */}
        <a 
          href="https://infooware-accounting-uat.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-blue/30 transition-all text-center group flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
            <Calculator className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-brand-navy mb-2">OneTouch Accounting</h2>
          <p className="text-sm text-text-muted">ERP & General Ledger</p>
        </a>

      </div>
    </div>
  );
}
