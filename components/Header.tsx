import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[var(--card)]/80 backdrop-blur-md shadow-[var(--shadow-sm)] sticky top-0 z-50 animate-slide-down">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[var(--card-foreground)]">
          <a href="#">Brand Connect</a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">이용 방법</a>
          <a href="#success-story" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">성공 사례</a>
          <a href="#partners" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">파트너사</a>
          <a href="#generator" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">브랜드 구상</a>
        </nav>
        <button className="hidden md:block bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold px-4 py-2 rounded-[var(--radius-lg)] hover:brightness-90 transition-all shadow-[var(--shadow-sm)]">
          상담 시작하기
        </button>
        <button className="md:hidden text-[var(--foreground)]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;