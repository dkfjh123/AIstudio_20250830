import React from 'react';

const Partners: React.FC = () => {
  const partnerLogos = [
    { name: 'Gourmet Foods Inc.', logo: '🍴' },
    { name: 'Fresh Logistics', logo: '🚚' },
    { name: 'Artisan Ingredients', logo: '🌿' },
    { name: 'Speedy Supply Co.', logo: '⚡️' },
    { name: 'Quality Packaging', logo: '📦' },
    { name: 'Prime Meats', logo: '🥩' },
  ];

  return (
    <section id="partners" className="py-20 bg-[var(--muted)]">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-extrabold text-[var(--foreground)] mb-2">신뢰할 수 있는 파트너사</h2>
        <p className="text-center text-lg text-[var(--muted-foreground)] mb-10">Brand Connect는 최고의 품질을 위해 엄선된 파트너와 함께합니다.</p>
        <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {partnerLogos.concat(partnerLogos).map((partner, index) => (
                    <div key={index} className="flex items-center justify-center mx-6 p-6 h-24 w-64 bg-[var(--card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)]">
                        <span className="text-4xl mr-4">{partner.logo}</span>
                        <span className="text-lg font-semibold text-[var(--card-foreground)]">{partner.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;