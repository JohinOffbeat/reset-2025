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
    question: "What time should I be there at the Venue?",
    answer: "Please book your tickets in a way that you reach Bangalore on 3rd October late morning, please reach the venue by 1:30 PM. Please make sure that you've completed your lunch and you reach Leroy Grand because the Registration and Event will get started right away!"
  },
  {
    question: "When can I book my tickets to go back home after Reset?",
    answer: "Please book your travel tickets to go back home for after 10:30 PM on 6th October (Monday) because we don't want you to rush after the event, or get stuck in traffic and miss your bus / train / flight. 10:30 PM would give you plenty of time to complete your last day peacefully, and reach your station / airport without missing any part of your experience"
  },
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