export default function ResourcesPage() {
  return (
    <div className="flex flex-col w-full py-20 px-6 max-w-[800px] mx-auto">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-navy mb-4">Help Center & FAQ</h1>
        <p className="text-lg text-text-muted">
          Find answers to common questions about OneTouch Solutions.
        </p>
      </div>

      <div className="space-y-6">
        
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-brand-navy mb-2">{faq.question}</h3>
            <p className="text-text-muted leading-relaxed">{faq.answer}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

const faqs = [
  {
    question: "How do the different OneTouch products connect?",
    answer: "OneTouch Retail, DC, and Accounting share a unified cloud backend. When a sale is made in Retail, the stock is instantly deducted from the DC inventory, and the financial transaction is automatically posted to the Accounting ledger without any manual syncing or export/import."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use industry-standard encryption for data at rest and in transit. Our cloud infrastructure is hosted on secure, compliant servers with daily automated backups."
  },
  {
    question: "How long does onboarding typically take?",
    answer: "For a single store, onboarding can be completed in a few days. For larger multi-store or distributor setups, our team typically works with you on a 2-4 week implementation plan to ensure all your existing data (stock, debtors, creditors) is migrated correctly."
  },
  {
    question: "Can I use OneTouch DC offline?",
    answer: "Yes, OneTouch DC offers a downloadable desktop application that can continue running locally on your warehouse terminals during internet outages, syncing data back to the cloud once connectivity is restored."
  },
  {
    question: "What hardware is compatible with OneTouch Retail?",
    answer: "OneTouch Retail is web-based and compatible with standard USB or Bluetooth barcode scanners, receipt printers, and cash drawers that can connect to your PC, Mac, or tablet."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, all plans include standard email and portal support. Premium support with a dedicated account manager and phone support is available for enterprise clients."
  }
];
