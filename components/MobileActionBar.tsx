'use client';

import { Phone, MessageSquare } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex h-16 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <a
        href="tel:+17547792837"
        className="flex-1 bg-asphalt-black text-white flex items-center justify-center gap-2 font-black uppercase tracking-widest text-sm border-r border-white/10 active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5 text-slime-green" />
        Call
      </a>
      <a
        href="sms:+17547792837?body=Hi%20JJ%27s!%20I%27d%20like%20a%20free%20estimate%20for%20my%20property.%20Here%20is%20a%20photo%20to%20get%20started:"
        className="flex-1 bg-ribbon-red text-white flex items-center justify-center gap-2 font-black uppercase tracking-widest text-sm active:scale-95 transition-transform"
      >
        <MessageSquare className="w-5 h-5" />
        Text Photo
      </a>
    </div>
  );
}
