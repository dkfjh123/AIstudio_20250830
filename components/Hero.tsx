import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[var(--card)] pt-20 pb-24 md:pt-32 md:pb-36 text-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?blur=5')" }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--foreground)] leading-tight mb-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          당신의 브랜드를 위한 <span className="text-[var(--primary)]">검증된 파트너</span>를 만나보세요
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          프랜차이즈의 리스크는 피하고, 개인 창업의 막막함은 해결하세요.
          Brand Connect가 성공적인 시작을 위한 제조업체와 물류사를 연결해 드립니다.
        </p>
        <a
          href="#generator"
          className="bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-lg px-8 py-4 rounded-full hover:brightness-90 transition-all transform hover:scale-105 shadow-[var(--shadow-lg)] animate-fade-in-up"
           style={{animationDelay: '0.6s'}}
        >
          나만의 브랜드 구상하기
        </a>
      </div>
    </section>
  );
};

export default Hero;