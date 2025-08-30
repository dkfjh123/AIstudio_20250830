import React from 'react';

const SuccessStory: React.FC = () => {
  return (
    <section id="success-story" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/600/400?image=25" 
              alt="산방식당의 대표 메뉴" 
              className="rounded-[var(--radius-xl)] shadow-[var(--shadow-2xl)] w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="text-[var(--primary)] font-semibold">성공 사례</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mt-2 mb-4">산방식당의 성공 노하우, <br />이제 당신의 것이 됩니다.</h2>
            <p className="text-[var(--muted-foreground)] text-lg mb-6">
              수십 년간 사랑받아온 제주 대표 맛집 '산방식당'. Brand Connect는 산방식당과의 독점 파트너십을 통해, 단순한 레시피를 넘어 운영 철학과 서비스 노하우까지 전수하는 특별 프로그램을 제공합니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[var(--primary)] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="ml-3 text-[var(--muted-foreground)]"><span className="font-bold text-[var(--foreground)]">검증된 맛:</span> 수십 년간 검증된 시그니처 메뉴의 맛과 퀄리티를 보장합니다.</p>
              </div>
              <div className="flex items-start">
                 <div className="flex-shrink-0 h-6 w-6 text-[var(--primary)] mt-1">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                <p className="ml-3 text-[var(--muted-foreground)]"><span className="font-bold text-[var(--foreground)]">안정적 공급망:</span> 전용 식자재를 안정적으로 공급받아 운영에만 집중할 수 있습니다.</p>
              </div>
               <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[var(--primary)] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                 <p className="ml-3 text-[var(--muted-foreground)]"><span className="font-bold text-[var(--foreground)]">운영 노하우:</span> 고객 응대부터 재고 관리까지, 성공적인 매장 운영의 모든 것을 전수합니다.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;