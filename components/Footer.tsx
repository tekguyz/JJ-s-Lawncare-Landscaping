import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-asphalt-black text-white py-16 px-6 md:px-12 border-t-8 border-slime-green">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="font-black text-3xl tracking-tighter uppercase">
            JJ's <span className="text-slime-green">Lawncare</span>
          </div>
          <p className="text-gray-400 font-medium leading-relaxed">
            Professional, licensed, and insured landscaping services in Deerfield Beach and surrounding areas.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://facebook.com/JJslawn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-sm hover:bg-slime-green hover:text-asphalt-black transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact Column */}
        <div className="space-y-6">
          <h4 className="text-xl font-black uppercase tracking-tight text-slime-green">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <a href="tel:+17547792837" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 text-slime-green group-hover:scale-110 transition-transform" />
                <span className="font-bold">(754) 779-2837</span>
              </a>
            </li>
            <li>
              <a href="mailto:Jjlawncare06@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 text-slime-green group-hover:scale-110 transition-transform" />
                <span className="font-bold">Jjlawncare06@gmail.com</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-slime-green mt-1 shrink-0" />
              <span className="font-bold leading-tight">
                340 SW 1st Terrace<br />
                Deerfield Beach, FL 33441
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-6">
          <h4 className="text-xl font-black uppercase tracking-tight text-slime-green">Quick Links</h4>
          <ul className="space-y-3 font-bold uppercase text-sm tracking-widest">
            <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Free Quote</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="space-y-6">
          <h4 className="text-xl font-black uppercase tracking-tight text-slime-green">Credentials</h4>
          <div className="bg-white/5 p-6 rounded-sm border-l-4 border-slime-green">
            <p className="text-sm font-black uppercase tracking-widest mb-2">Licensed & Insured</p>
            <p className="text-gray-400 text-xs font-bold">Lic. # B1298</p>
            <p className="text-gray-400 text-xs mt-4">Serving Deerfield Beach, Boca Raton, and Pompano Beach.</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} JJ's Lawncare & Landscaping. All Rights Reserved.
      </div>
    </footer>
  );
}
