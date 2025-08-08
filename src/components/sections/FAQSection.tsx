import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How will the rooms be assigned to me?",
    answer: "Rooms will be assigned on a Twin - Sharing basis. Which means you will be sharing a room with another awesome Reset attendee. Shared energy, and connection is a part of the Reset process & experience. Also, as rooms are limited, single rooms are not an option."
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
    question: "Can my kids attend Reset as well?",
    answer: "We love kids learning early in their life definitely. But this event is going to be an intense event, and some immersion isn't designed for young kids. 14+ Year olds can definitely be a part of Reset. You can purchase a ticket for them. This event will NOT BE SUITABLE for kids younger than 14."
  },
  {
    question: "Is the fee refundable?",
    answer: "No. Your payment blocks a room and meal plan with the hotel."
  },
  {
    question: "What time should I be there at the Venue?",
    answer: "Please book your tickets in a way that you reach Bangalore on 3rd October late morning, please reach the venue by 1:30 PM to 2:30 PM. Please make sure that you've completed your lunch and you reach Leroy Grand because the Registration and Event will get started right away!"
  },
  {
    question: "When can I book my tickets to go back home after Reset?",
    answer: "Please book your travel tickets to go back home for after 10:30 PM on 6th October (Monday) because we don't want you to rush after the event, or get stuck in traffic and miss your bus / train / flight. 10:30 PM would give you plenty of time to complete your last day peacefully, and reach your station / airport without missing any part of your experience"
  },
  {
    question: "What is the Venue? And where is the Hotel that I will be staying in?",
    answer: "Both Hotel and the Venue are the same - Leroy Grand, Yashwanthpur. You'll be spending 4 days here in total immersion!"
  },
   {
    question: "What dates is Reset 2025 happening??",
    answer: "Reset 2025 is happening on October 3, 4, 5, 6. [Friday to Monday]. Friday - make sure that you reach the venue by 2:30 PM. Please make sure that you've completed your lunch and you reach Leroy Grand because the Registration and Event will get started right away! Monday - Please book your travel tickets to go back home for after 10:30 PM on 6th October (Monday"
  },
  {
    question: "If I need any help, who can I reach out to?",
    answer: "For any help, please send a mail to info@swastiknandakumar.com. The team is active here - they will help you out within a few hours!"
  },
   {
    question: "What are the closest travel options?",
    answer: "Airport - Kempegowda International Airport, Bengaluru | 33 kms from Leroy Grand, Yashwanthpur Railway Station - Yesvantpur Railwau Station | 3.6 kms from Leroy Grand, Yashwanthpur Bus Stop - 5 kms from Leroy Grand, Yashwanthpur"
  },
  {
    question: "Is the Reset Fee refundable?",
    answer: "Since this is an Offline event, the amount you pay for Reset is directly sent to the hotel, as they have to block rooms for you. For this reason, the amount is non-refundable."
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