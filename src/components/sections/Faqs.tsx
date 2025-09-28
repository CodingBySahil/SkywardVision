// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Badge } from "@/components/ui/badge";

// const faqItems = [
//   {
//     id: "faq-1",
//     question: "What is a FAQ?",
//     answer:
//       "A FAQ is a list of frequently asked questions and answers on a particular topic.",
//   },
//   {
//     id: "faq-2",
//     question: "What is the purpose of a FAQ?",
//     answer:
//       "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
//   },
//   {
//     id: "faq-3",
//     question: "How do I create a FAQ?",
//     answer:
//       "To create a FAQ, compile a list of common questions and answers and organize them in a clear, easy-to-navigate format.",
//   },
//   {
//     id: "faq-4",
//     question: "What are the benefits of a FAQ?",
//     answer:
//       "Benefits include quick access to information, reducing support requests, and improving user experience.",
//   },
//   {
//     id: "faq-5",
//     question: "How should I organize my FAQ?",
//     answer:
//       "Organize FAQs logically, grouping related questions and ordering from basic to advanced.",
//   },
//   {
//     id: "faq-6",
//     question: "How long should FAQ answers be?",
//     answer:
//       "Keep answers concise—typically a few sentences or a short paragraph is sufficient.",
//   },
//   {
//     id: "faq-7",
//     question: "Should I include links in my FAQ?",
//     answer:
//       "Yes, linking to more detailed information or related resources helps users learn more effectively.",
//   },
// ];

// const FaqsSection = ({
//   heading = "Frequently Asked Questions",
//   description = "Find answers to common questions about SkywardVision services. Can't find what you're looking for? Reach out to our support team.",
//   items = faqItems,
// }) => {
//   return (
//     <section className="relative py-24 overflow-hidden text-black">
//       {/* Floating Shapes */}
//       <div className="absolute inset-0">
//         <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6 lg:px-12 space-y-16">
//         {/* Section Heading */}
//         <div className="mx-auto max-w-4xl text-center space-y-4">
//           <Badge variant="outline" className="border-black/30 text-black">
//             FAQs
//           </Badge>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
//             {heading}
//           </h2>
//           <p className="text-black-100 text-lg lg:text-xl">{description}</p>
//         </div>

//         {/* Accordion */}
//         <Accordion
//           type="single"
//           collapsible
//           className="mx-auto w-full lg:max-w-3xl space-y-4"
//         >
//           {items.map((item) => (
//             <AccordionItem
//               key={item.id}
//               value={item.id}
//               className=" border border-white/20 hover:scale-105 transition-transform duration-500"
//             >
//               <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-white flex justify-between items-center hover:text-blue-300 transition-colors">
//                 {item.question}
//               </AccordionTrigger>
//               <AccordionContent className="px-6 pb-4 pt-4  text-base lg:text-lg">
//                 {item.answer}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </section>
//   );
// };

// export default FaqsSection;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    id: "faq-1",
    question: "What is SkywardVision’s specialty in advertising?",
    answer:
      "We specialize in high-impact SMD screen advertising that delivers dynamic, vibrant, and memorable brand experiences across prime locations.",
  },
  {
    id: "faq-2",
    question: "Why choose SMD screens over traditional billboards?",
    answer:
      "SMD screens offer motion graphics, brighter visuals, and real-time updates—making them more engaging than static billboards.",
  },
  {
    id: "faq-3",
    question: "Can I customize my advertising campaigns?",
    answer:
      "Yes! We provide full flexibility to run personalized, time-based, and event-specific campaigns tailored to your brand needs.",
  },
  {
    id: "faq-4",
    question: "Where are your SMD screens located?",
    answer:
      "Our screens are strategically placed at high-traffic commercial hubs, ensuring maximum brand visibility and audience engagement.",
  },
  {
    id: "faq-5",
    question: "Do you offer content creation services?",
    answer:
      "Absolutely! Our creative team designs compelling visuals and animations that make your message stand out on big screens.",
  },
  {
    id: "faq-6",
    question: "How quickly can ads be updated?",
    answer:
      "Ads can be updated instantly across all screens, giving you real-time control over campaigns and promotions.",
  },
];

const FaqsSection = ({
  heading = "Frequently Asked Questions",
  description = "Find answers about SkywardVision’s SMD advertising solutions. Can’t find your question? Our support team is always ready to help.",
  items = faqItems,
}) => {
  return (
    <section className="relative py-24 bg-[#101727] overflow-hidden text-white">
      {/* Floating Gradient Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-sky-400 to-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-600/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-gradient-to-r from-blue-600 to-sky-400 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 space-y-16">
        {/* Section Heading */}
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <Badge
            variant="outline"
            className="border-sky-400/50 text-sky-300 bg-white/5 backdrop-blur-sm"
          >
            FAQs
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            {heading}
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl">{description}</p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl space-y-4"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-500"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold flex justify-between items-center text-white hover:text-sky-300 transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-300 text-base lg:text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqsSection;
