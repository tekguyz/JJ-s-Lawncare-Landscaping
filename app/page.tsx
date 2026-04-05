import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustBento from '@/components/TrustBento';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col relative pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <Services />
      <TrustBento />
      <ContactForm />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
