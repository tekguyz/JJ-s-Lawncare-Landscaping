import { ShieldCheck, Clock, Facebook, ArrowUpRight } from 'lucide-react';

export default function TrustBento() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: The Guarantee */}
          <div className="bg-asphalt-black p-10 rounded-sm flex flex-col justify-between border-l-8 border-slime-green">
            <div>
              <ShieldCheck className="w-12 h-12 text-slime-green mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
                Fully Licensed <br /> & Insured
              </h3>
              <p className="text-gray-400 font-medium">
                (Lic. # B1298). Protect your property by hiring true professionals who prioritize safety and compliance.
              </p>
            </div>
            <div className="mt-8 text-slime-green font-bold text-xs uppercase tracking-[0.2em]">
              Verified Professional
            </div>
          </div>

          {/* Card 2: Availability */}
          <div className="bg-slime-green p-10 rounded-sm flex flex-col justify-between">
            <div>
              <Clock className="w-12 h-12 text-asphalt-black mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-tight text-asphalt-black mb-4">
                Open 6 Days <br /> A Week
              </h3>
              <p className="text-asphalt-black/80 font-bold">
                Monday – Saturday <br />
                7:00 AM to 7:00 PM
              </p>
            </div>
            <div className="mt-8 text-asphalt-black font-black text-xs uppercase tracking-[0.2em]">
              Reliable Scheduling
            </div>
          </div>

          {/* Card 3: The Community */}
          <div className="bg-white border-4 border-asphalt-black p-10 rounded-sm flex flex-col justify-between group">
            <div>
              <Facebook className="w-12 h-12 text-asphalt-black mb-6 group-hover:text-ribbon-red transition-colors" />
              <h3 className="text-2xl font-black uppercase tracking-tight text-asphalt-black mb-4">
                Deerfield Beach <br /> Locals
              </h3>
              <p className="text-gray-600 font-medium mb-6">
                Find us serving your neighborhood or check out our recent work on Facebook.
              </p>
            </div>
            <a 
              href="https://facebook.com/JJslawn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-asphalt-black text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-ribbon-red transition-colors w-fit"
            >
              @JJslawn <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
