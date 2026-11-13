'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  data: {
    faq_title?: string;
    xschool_faq?: FaqItem[];
    [key: string]: any;
  };
}

export default function FaqSection({ data }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const title = data?.faq_title || "QUESTIONS?\nWE’VE GOT ANSWERS.";
  
  // API-dən gələn FAQ-lar, əgər yoxdursa ehtiyat (default) suallar
  const faqs = data?.xschool_faq && data.xschool_faq.length > 0 ? data.xschool_faq : [
    {
      question: "Who is xSchool designed for?",
      answer: "<p>xSchool is designed for marketing professionals ready to move beyond execution and into strategic leadership.</p>"
    },
    {
      question: "How long do the programs take to complete?",
      answer: "<p>Each program has its own defined duration. Emerging CMO and Marketing Pro follow structured curricula.</p>"
    },
    {
      question: "Do I need prior marketing experience to apply?",
      answer: "<p>Yes. Both Emerging CMO and Marketing Pro require prior experience in marketing or related fields.</p>"
    },
    {
      question: "Is there a selection process?",
      answer: "<p>Yes. xSchool is intentionally selective to ensure each participant is a strong fit.</p>"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-16 bg-[#EAEAEA] text-black border-t border-gray-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-16 whitespace-pre-line">
          {title}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-400 pb-6 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center py-2">
                <h3 className="text-lg sm:text-xl font-bold pr-4">
                  {faq.question}
                </h3>
                <span className="text-2xl font-light">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              
              {openIndex === index && (
                <div 
                  className="mt-4 text-gray-700 leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}