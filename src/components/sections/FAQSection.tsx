import { useState } from "react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "When is CodeCraft 2.0?",
    answer:
      "CodeCraft 2.0 runs from January 6 to January 8, 2026, daily from 7:30 PM to 8:30 PM. It's a three-day online coding bootcamp.",
  },
  {
    question: "Who can participate?",
    answer:
      "CodeCraft is open to all aspiring coders across Kerala who want to learn Python Turtle graphics and participate in coding challenges.",
  },
  {
    question: "What will I learn?",
    answer:
      "You'll learn Python Turtle graphics, transform code into visual designs, strengthen Python fundamentals, and participate in structured coding challenges.",
  },
  {
    question: "How do I register?",
    answer:
      "Registrations open on December 31st when the portal opens. Click the Register Now button to sign up for this exciting bootcamp!",
  },
  {
    question: "Is there a fee?",
    answer:
      "Please check the registration portal for details about participation fees and any available scholarships or discounts.",
  },
  {
    question: "Who is hosting this event?",
    answer:
      "CodeCraft is hosted on Python Library Joy and conducted in collaboration with IEDC BOOTCAMP CEC, IEDC CEK, IEDC GEC, IEDC VISAT, FOCES CEC, and IEDC RIT.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-hotbar via-inventory-border to-inventory-border overflow-hidden">
      {/* Cave texture */}
      <div className="absolute inset-0 opacity-20 bg-[repeating-conic-gradient(from_0deg,transparent_0deg_90deg,rgba(0,0,0,0.1)_90deg_180deg)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-lg sm:text-xl md:text-3xl font-minecraft text-ore-gold text-shadow-pixel text-center mb-8 sm:mb-12">
          FAQ
        </h2>

        <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-wood border-4 border-wood-light shadow-[inset_2px_2px_0_rgba(255,255,255,0.2),inset_-2px_-2px_0_rgba(0,0,0,0.3),4px_4px_0_rgba(0,0,0,0.4)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-3 sm:p-4 flex items-center justify-between text-left hover:bg-wood-light transition-colors active:bg-wood-light/80"
              >
                <span className="text-[10px] sm:text-xs font-minecraft text-ore-gold pr-2 sm:pr-4 leading-relaxed">
                  {faq.question}
                </span>
                {/* Chest lid indicator */}
                <div
                  className={cn(
                    "w-6 h-3 sm:w-8 sm:h-4 bg-wood-plank border-2 border-wood transition-transform origin-bottom flex-shrink-0",
                    openIndex === index ? "rotate-[-45deg] -translate-y-1" : ""
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-64" : "max-h-0"
                )}
              >
                <div className="p-3 sm:p-4 pt-0 border-t-2 border-wood-light">
                  <div className="bg-inventory-slot p-3 sm:p-4 border-2 border-inventory-border shadow-[inset_2px_2px_0_rgba(0,0,0,0.3)]">
                    <p className="text-[10px] sm:text-xs font-minecraft text-card-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
