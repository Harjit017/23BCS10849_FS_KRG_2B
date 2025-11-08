import aiaca from '../../components/aiaica.png';
import dastkar from '../../components/Dastkar.png';
import rangasutra from '../../components/Rangasutra.png';
import jaipur from '../../components/Jaipur.png';

export default function PartnerLogos() {
  const logos = [aiaca, dastkar, rangasutra, jaipur];

  return (
    <section className="py-12 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {logos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
              alt="partner logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
