'use client';

import { useState } from 'react';
import { Send, Upload, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('form-name', 'jjs-lawncare-contact');

    try {
      const response = await fetch("/forms.html", {
        method: "POST",
        headers: { "X-Requested-With": "XMLHttpRequest" },
        body: formData,
      });
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 px-6 md:px-12 bg-asphalt-black text-white text-center">
        <div className="max-w-2xl mx-auto py-12 border-4 border-slime-green rounded-sm bg-asphalt-black/50">
          <CheckCircle2 className="w-20 h-20 text-slime-green mx-auto mb-6" />
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Message Sent!</h2>
          <p className="text-xl text-gray-300 font-medium px-6">
            Thanks for reaching out. JJ will review your request and get back to you shortly.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-8 text-slime-green font-bold uppercase tracking-widest hover:underline"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Info */}
        <div>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-asphalt-black mb-6">
            Get A <span className="text-slime-green">Free</span> Quote.
          </h2>
          <p className="text-xl text-gray-600 font-medium mb-10 leading-relaxed">
            Ready to refresh your property? Fill out the form or attach a photo of your lawn or trees for a faster estimate.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-sm border-l-4 border-slime-green">
              <div className="bg-asphalt-black p-3 rounded-sm">
                <Upload className="w-6 h-6 text-slime-green" />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-tight text-asphalt-black">Photo Estimates</h4>
                <p className="text-gray-600">Upload a picture of your overgrown lawn or trees for a quick quote.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-asphalt-black p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
          {/* Accent Graphic */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-slime-green opacity-10 transform translate-x-16 -translate-y-16 rotate-45"></div>
          
          <form 
            name="jjs-lawncare-contact" 
            method="POST" 
            action="/forms.html"
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
            encType="multipart/form-data"
          >
            <input type="hidden" name="form-name" value="jjs-lawncare-contact" />
            <p className="hidden">
              <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slime-green">Full Name</label>
                <input 
                  required 
                  type="text" 
                  name="full_name" 
                  className="w-full bg-white/5 border-2 border-white/10 p-4 text-white text-base focus:border-slime-green outline-none transition-colors rounded-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slime-green">Phone Number</label>
                <input 
                  required 
                  type="tel" 
                  name="phone_number" 
                  className="w-full bg-white/5 border-2 border-white/10 p-4 text-white text-base focus:border-slime-green outline-none transition-colors rounded-sm"
                  placeholder="(754) 779-2837"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slime-green">Email Address</label>
              <input 
                required 
                type="email" 
                name="email" 
                className="w-full bg-white/5 border-2 border-white/10 p-4 text-white text-base focus:border-slime-green outline-none transition-colors rounded-sm"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slime-green">Property Address</label>
              <input 
                required 
                type="text" 
                name="address" 
                className="w-full bg-white/5 border-2 border-white/10 p-4 text-white text-base focus:border-slime-green outline-none transition-colors rounded-sm"
                placeholder="123 Deerfield Beach Blvd"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slime-green">Attach Property Photo (Optional)</label>
              <div className="relative group">
                <input 
                  type="file" 
                  name="property_photo" 
                  accept="image/*"
                  className="w-full bg-white/5 border-2 border-dashed border-white/20 p-8 text-white focus:border-slime-green outline-none transition-colors rounded-sm cursor-pointer file:hidden"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-gray-400 group-hover:text-slime-green transition-colors">
                  <div className="text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-bold uppercase tracking-wider">Click to upload photo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slime-green">Message / Service Details</label>
              <textarea 
                name="message" 
                rows={4}
                className="w-full bg-white/5 border-2 border-white/10 p-4 text-white text-base focus:border-slime-green outline-none transition-colors rounded-sm resize-none"
                placeholder="Tell us what you need..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-ribbon-red text-white py-5 rounded-sm font-black uppercase tracking-[0.2em] text-lg flex items-center justify-center gap-3 hover:bg-red-700 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  Submit Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
