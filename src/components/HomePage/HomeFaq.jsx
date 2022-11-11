import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { question } from "./files/ques";

const HomeFaq = () => {
  return (
    <Box boxShadow="rgba(0, 0, 0, 0.06) 0px 5px 4px 0px inset">
      <Heading
        m={["1rem", "3rem", "4rem", "5rem"]}
        size={["lg", "md", "md", "lg"]}
      >
        Things worth knowing about using a time <br />
        tracker
      </Heading>

      <Box w={["100%", "85%", "70%", "50%"]} m="auto">
        {question.map((q) => (
          <Accordion key={q.question} defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    p="1rem"
                    flex="1"
                    textAlign="left"
                    fontSize="lg"
                    fontWeight="bold"
                  >
                    {q.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h1>
              <AccordionPanel fontSize="lg" color="green" pb={4}>
                {q.answer}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default HomeFaq;
