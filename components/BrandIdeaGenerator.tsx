import React, { useState, useCallback } from 'react';
import { generateBrandIdeas } from '../services/geminiService';
import type { BrandIdea } from '../types';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
    </div>
);

const BrandIdeaCard: React.FC<{ idea: BrandIdea }> = ({ idea }) => (
    <div className="bg-[var(--card)] rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] p-6 border border-[var(--border)]/50 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
        <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">{idea.brandName}</h3>
        <p className="italic text-[var(--muted-foreground)] mb-4">"{idea.slogan}"</p>
        <p className="text-[var(--card-foreground)] mb-3"><span className="font-semibold">브랜드 설명:</span> {idea.description}</p>
        <p className="text-[var(--card-foreground)]"><span className="font-semibold">시그니처 메뉴:</span> {idea.signatureMenu}</p>
    </div>
);


const BrandIdeaGenerator: React.FC = () => {
    const [concept, setConcept] = useState('');
    const [audience, setAudience] = useState('');
    const [vibe, setVibe] = useState('');
    const [ideas, setIdeas] = useState<BrandIdea[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!concept || !audience || !vibe) {
            setError("모든 필드를 입력해주세요.");
            return;
        }
        setLoading(true);
        setError(null);
        setIdeas([]);
        
        try {
            const result = await generateBrandIdeas(concept, audience, vibe);
            setIdeas(result);
        } catch (err) {
            console.error(err);
            setError("브랜드 아이디어를 생성하는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setLoading(false);
        }
    }, [concept, audience, vibe]);

    return (
        <section id="generator" className="py-20 bg-[var(--background)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)]">AI 브랜드 아이디어 생성기</h2>
                    <p className="mt-4 text-lg text-[var(--muted-foreground)]">간단한 키워드로 당신의 브랜드 컨셉을 구체화해보세요.</p>
                </div>

                <div className="max-w-2xl mx-auto bg-[var(--muted)] p-8 rounded-[var(--radius-xl)] shadow-inner">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="concept" className="block text-sm font-medium text-[var(--muted-foreground)] mb-1">음식 컨셉</label>
                            <input type="text" id="concept" value={concept} onChange={(e) => setConcept(e.target.value)} placeholder="예: 매운 닭강정, 비건 베이커리" className="w-full px-4 py-2 border border-[var(--border)] rounded-[var(--radius-lg)] focus:ring-2 focus:ring-[var(--ring)] focus:border-[var(--primary)] bg-[var(--input)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"/>
                        </div>
                        <div>
                            <label htmlFor="audience" className="block text-sm font-medium text-[var(--muted-foreground)] mb-1">타겟 고객</label>
                            <input type="text" id="audience" value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="예: 20대 대학생, 건강을 중시하는 30대 직장인" className="w-full px-4 py-2 border border-[var(--border)] rounded-[var(--radius-lg)] focus:ring-2 focus:ring-[var(--ring)] focus:border-[var(--primary)] bg-[var(--input)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"/>
                        </div>
                        <div>
                            <label htmlFor="vibe" className="block text-sm font-medium text-[var(--muted-foreground)] mb-1">브랜드 분위기</label>
                            <input type="text" id="vibe" value={vibe} onChange={(e) => setVibe(e.target.value)} placeholder="예: 레트로, 힙스터, 미니멀리즘, 친환경" className="w-full px-4 py-2 border border-[var(--border)] rounded-[var(--radius-lg)] focus:ring-2 focus:ring-[var(--ring)] focus:border-[var(--primary)] bg-[var(--input)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"/>
                        </div>
                        <button type="submit" disabled={loading} className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] font-bold py-3 px-4 rounded-[var(--radius-lg)] hover:brightness-90 transition-colors disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)] disabled:cursor-not-allowed flex items-center justify-center">
                            {loading ? '생성 중...' : '브랜드 아이디어 생성'}
                        </button>
                    </form>
                </div>

                {error && <div className="mt-8 text-center text-[var(--destructive-foreground)] bg-[var(--destructive)] p-4 rounded-[var(--radius-lg)] max-w-2xl mx-auto">{error}</div>}
                
                {loading && <LoadingSpinner />}

                {ideas.length > 0 && (
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-center mb-8">AI 추천 브랜드 아이디어</h3>
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                            {ideas.map((idea, index) => (
                                <BrandIdeaCard key={index} idea={idea} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BrandIdeaGenerator;