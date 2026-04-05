'use client';

import { Phone, MessageSquare } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex h-16 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <a
        href="tel:+17547792837"
        className="flex-1 bg-asphalt-black text-white flex items-center justify-center gap-2 font-black uppercase tracking-widest text-sm border-r border-white/10"
      >
        <Phone className="w-5 h-5 text-slime-green" />
        Call
      </a>
      <a
        href="sms:+17547792837"
        className="flex-1 bg-ribbon-red text-white flex items-center justify-center gap-2 font-black uppercase tracking-widest text-sm"
      >
        <MessageSquare className="w-5 h-5" />
        Text Photo
      </a>
    </div>
  );
}
