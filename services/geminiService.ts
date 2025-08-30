
import { GoogleGenAI, Type } from "@google/genai";
import type { BrandIdea } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const responseSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        brandName: {
          type: Type.STRING,
          description: '기억하기 쉽고 독창적인 브랜드 이름',
        },
        slogan: {
          type: Type.STRING,
          description: '브랜드의 핵심 가치를 담은 짧은 슬로건',
        },
        description: {
          type: Type.STRING,
          description: '브랜드의 정체성과 컨셉에 대한 간략한 설명',
        },
        signatureMenu: {
            type: Type.STRING,
            description: '브랜드를 대표하는 가장 핵심적인 메뉴'
        }
      },
      required: ['brandName', 'slogan', 'description', 'signatureMenu'],
    },
};


export const generateBrandIdeas = async (
    concept: string, 
    audience: string, 
    vibe: string
): Promise<BrandIdea[]> => {
    
    const prompt = `
        당신은 음식료(F&B) 산업 전문 브랜딩 컨설턴트입니다.
        아래 사용자의 입력을 바탕으로 독창적이고 매력적인 브랜드 아이디어 3가지를 제안해주세요.
        
        ## 사용자 입력
        - 음식 컨셉: ${concept}
        - 타겟 고객: ${audience}
        - 브랜드 분위기: ${vibe}
        
        ## 출력 가이드라인
        - 각 아이디어는 브랜드 이름, 슬로건, 브랜드 설명, 시그니처 메뉴를 포함해야 합니다.
        - 한국 시장에 적합하고, 창의적이면서도 현실적인 아이디어를 제안해주세요.
        - 반드시 지정된 JSON 스키마 형식으로 응답을 반환해야 합니다.
    `;
    
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.8,
            },
        });

        const jsonText = response.text.trim();
        const parsedData = JSON.parse(jsonText);

        // Basic validation
        if (!Array.isArray(parsedData)) {
            throw new Error("API 응답이 배열 형식이 아닙니다.");
        }

        return parsedData as BrandIdea[];

    } catch (error) {
        console.error("Gemini API 호출 중 오류 발생:", error);
        throw new Error("AI로부터 브랜드 아이디어를 받아오는 데 실패했습니다.");
    }
};
