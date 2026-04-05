import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-asphalt-black overflow-hidden">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="JJ's Lawncare truck parked on a freshly cut lawn with towering palm trees" 
          fill 
          className="object-cover object-center" 
          priority 
          referrerPolicy="no-referrer" 
        />
        {/* Dark Overlay for aggressive text pop */}
        <div className="absolute inset-0 bg-asphalt-black/80"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Heavy, Italicized Headings */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 italic">
            <span className="block text-slime-green mb-2">LAWN CARE AT ITS BEST.</span>
            <span className="block text-white">TREE TRIMMING AT ITS FINEST.</span>
          </h1>
          
          {/* Trust Badge */}
          <div className="inline-block bg-slime-green text-asphalt-black font-black uppercase tracking-widest text-sm md:text-base px-5 py-3 rounded-sm mb-10 transform -skew-x-6 shadow-xl">
            Licensed & Insured (Lic. # B1298)
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-ribbon-red text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest text-sm md:text-base flex items-center justify-center gap-2 hover:bg-red-700 active:scale-95 transition-all text-center min-h-[44px]"
            >
              REQUEST FAST ESTIMATE
            </a>
            <a 
              href="sms:+17547792837?body=Hi%20JJ%27s!%20I%27d%20like%20a%20free%20estimate%20for%20my%20property.%20Here%20is%20a%20photo%20to%20get%20started:" 
              className="bg-asphalt-black border-4 border-white text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest text-sm md:text-base flex items-center justify-center gap-2 hover:bg-white hover:text-asphalt-black active:scale-95 transition-all text-center min-h-[44px]"
            >
              TEXT FOR ESTIMATE
            </a>
            <a 
              href="tel:+17547792837" 
              className="bg-transparent border-4 border-slime-green text-slime-green px-8 py-4 rounded-sm font-black uppercase tracking-widest text-sm md:text-base flex items-center justify-center gap-2 hover:bg-slime-green hover:text-asphalt-black active:scale-95 transition-all text-center min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              CALL: (754) 779-2837
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
