import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 py-40 lg:px-0">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="mb-4">
          <AccordionTrigger className="bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-lg">
            What is NextGEN Leaders Magazine?
          </AccordionTrigger>
          <AccordionContent className="border-l-2 border-gray-200 p-4 text-lg">
            NextGEN Leaders Magazine is a digital publication focusing on
            empowering the next generation of leaders through insightful
            articles, interviews, and resources.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="mb-4">
          <AccordionTrigger className="bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-lg">
            How can I access the magazine?
          </AccordionTrigger>
          <AccordionContent className="border-l-2 border-gray-200 p-4 text-lg">
            The magazine is accessible online through our website. Simply visit
            our site and navigate to the Magazine section to access all the
            issues.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="mb-4">
          <AccordionTrigger className="bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-lg">
            Can I contribute to the magazine?
          </AccordionTrigger>
          <AccordionContent className="border-l-2 border-gray-200 p-4 text-lg">
            Yes, we welcome contributions from aspiring writers and industry
            experts. Feel free to reach out to our editorial team with your
            ideas or submissions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="mb-4">
          <AccordionTrigger className="bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-lg">
            Is the magazine available in print format?
          </AccordionTrigger>
          <AccordionContent className="border-l-2 border-gray-200 p-4 text-lg">
            Currently, NextGEN Leaders Magazine is only available in digital
            format. However, we are exploring options for print editions in the
            future.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="mb-4">
          <AccordionTrigger className="bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-lg">
            Are there any subscription plans?
          </AccordionTrigger>
          <AccordionContent className="border-l-2 border-gray-200 p-4 text-lg">
            Yes, we offer subscription plans for accessing premium content and
            features. You can find more information about our subscription
            options on our website.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
