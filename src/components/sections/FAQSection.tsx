import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I get a single room?",
    answer: "No. Shared energy is part of the process, and rooms are limited."
  },
  {
    question: "How will my roommate be chosen?",
    answer: "Gender-matched and curator-paired. No roommate requests."
  },
  {
    question: "Attending with a spouse or 14+ child?",
    answer: "Book two seats (₹ 20k + GST each) and we'll room you together."
  },
  {
    question: "Under-14 kids?",
    answer: "This immersion isn't designed for children."
  },
  {
    question: "Is the fee refundable?",
    answer: "No. Your payment blocks a room and meal plan with the hotel."
  },
  {
    question: "Travel timing?",
    answer: "Arrive Friday before dinner. Book flights **11 p.m. Monday or later** (1 h drive + 2 h check-in)."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-card/20 fade-in-section">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-6xl text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-accent/30 transition-colors"
              >
                <AccordionTrigger className="font-subheading text-lg text-left hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};