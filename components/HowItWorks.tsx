import React from 'react';

const Step: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-[var(--card)] rounded-[var(--radius-xl)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-all duration-300 ease-in-out transform hover:-translate-y-2">
      <div className="bg-[var(--accent)] text-[var(--primary)] rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[var(--card-foreground)]">{title}</h3>
      <p className="text-[var(--muted-foreground)]">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-[var(--muted)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)]">Brand Connect 이용 방법</h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">단 4단계로 당신의 브랜드가 현실이 됩니다.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Step
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
            title="1. 파트너 탐색"
            description="엄선된 제조업체와 물류사의 포트폴리오를 탐색하고 당신의 컨셉에 맞는 파트너를 찾아보세요."
          />
          <Step
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v1m-4 2l-2-2m0 0l-2 2m2-2v6" /></svg>}
            title="2. 맞춤 상담"
            description="전문 매니저와 1:1 상담을 통해 브랜드 컨셉을 구체화하고 최적의 파트너를 매칭받습니다."
          />
          <Step
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
            title="3. 제품 개발 및 계약"
            description="파트너사와 함께 전용 레시피와 식자재를 개발하고 안정적인 공급을 위한 계약을 체결합니다."
          />
          <Step
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>}
            title="4. 브랜드 런칭"
            description="성공 노하우 전수와 체계적인 지원을 받으며, 자신감 있게 당신의 브랜드를 세상에 선보입니다."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;