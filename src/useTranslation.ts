// src/useTranslation.ts
import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

const HF_TOKEN = "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"; // Replace this

export async function translate(text: string, targetLang: string) {
  if (targetLang === "en_XX") return text;

  const response = await fetch("https://api-inference.huggingface.co/models/facebook/mbart-large-50-many-to-many-mmt", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inputs: text,
      parameters: {
        src_lang: "en_XX",
        tgt_lang: targetLang
      }
    })
  });

  const result = await response.json();
  return result[0]?.translation_text || text;
}

export const useTranslation = (text: string) => {
  const { language } = useLanguage();
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    translate(text, language).then(setTranslated);
  }, [text, language]);

  return translated;
};
