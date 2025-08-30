import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--secondary-foreground)] text-[var(--background)]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Brand Connect</h3>
            <p className="opacity-75">당신의 성공적인 브랜드를 위한 첫걸음</p>
          </div>
          <div className="text-center opacity-75">
            <p>&copy; {new Date().getFullYear()} Brand Connect. All rights reserved.</p>
            <p className="text-sm">사업자등록번호: 123-45-67890 | 대표: 홍길동</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;