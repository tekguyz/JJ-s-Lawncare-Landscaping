import { Leaf, Sprout, Trees, Trash2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Lawn Maintenance',
    description: 'Weekly/bi-weekly mowing, edging, and blowing for pristine curb appeal.',
    icon: Leaf,
  },
  {
    title: 'Landscaping Design',
    description: 'Mulch, sod installation, and planting to completely refresh your property.',
    icon: Sprout,
  },
  {
    title: 'Tree Trimming Division',
    description: 'Safe, professional pruning and shaping to protect your home during storm season.',
    icon: Trees,
  },
  {
    title: 'Property Cleanups',
    description: 'Debris removal and severe overgrowth clearing.',
    icon: Trash2,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-asphalt-black mb-4">
            Our <span className="text-slime-green">Specialized</span> Divisions
          </h2>
          <div className="w-24 h-2 bg-slime-green"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href="#contact"
              className="group bg-asphalt-black p-8 rounded-sm flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-transparent hover:border-slime-green"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-slime-green" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-8 flex-grow">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-slime-green font-bold uppercase text-sm tracking-widest group-hover:gap-4 transition-all">
                Get Quote <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
