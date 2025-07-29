import { useEffect, useState } from 'react';
import { useLanguage } from 'src/LanguageContext';

async function translate(text: string, targetLang: string) {
  const response = await fetch("https://api-inference.huggingface.co/models/facebook/mbart-large-50-many-to-many-mmt", {
    method: "POST",
    headers: {
      Authorization: `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`, 
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

export default function HomePage() {
  const { language } = useLanguage();
  const [translatedTitle, setTranslatedTitle] = useState('');
  const [translatedDescription, setTranslatedDescription] = useState('');

  useEffect(() => {
    async function runTranslation() {
      const title = await translate("Connect Street Food Vendors with", language);
      const description = await translate("Eco-Vyapaar bridges the gap between street food vendors and wholesale suppliers...", language);
      setTranslatedTitle(title);
      setTranslatedDescription(description);
    }
    runTranslation();
  }, [language]);

  return (
    <div>
      <h1>{translatedTitle}</h1>
      <p>{translatedDescription}</p>
    </div>
  );
}
