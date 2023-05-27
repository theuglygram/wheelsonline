"use client";
import React from "react";
import { styled } from "styled-components";
import Header from "../components/navigation/header";
import Downloadapp from "../components/universal/downloadapp";
import Newsletter from "../components/universal/newsletter";
import Footer from "../components/navigation/footer";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../../components/ui/accordion";

function Faq() {
  return (
    <>
      <Header />

      <Wrapper>
        <FaqWrapper>
          <h4>FAQ</h4>
          <p>
            have a question? get your answers right away.Let us know how we can
            help!
          </p>
        </FaqWrapper>

        <div>
          {" "}
          {/* <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. Its animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        </div>
      </Wrapper>
      <Downloadapp />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Faq;
const Wrapper = styled.div`
  background: url("/vectors/faqellipse.svg"), #d9e8f4;
  background-repeat: no-repeat;
  background-size: cover;
`;
const FaqWrapper = styled.div`
  padding: 80px 0;
  margin: 0 auto;
  max-width: 1440px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 375px;
  h4 {
    font-size: 48px;
    line-height: 65px;
    letter-spacing: 1.5px;
    text-transform: capitalize;
    color: #0066b4;
  }
  p {
    font-size: 18px;
    text-transform: capitalize;
  }
`;
