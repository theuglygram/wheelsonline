"use client";
import React from "react";
import { styled } from "styled-components";
import Header from "../components/navigation/header";
import Newsletter from "../components/universal/newsletter";
import Footer from "../components/navigation/footer";
import Image from "next/image";
import Downloadapp from "../components/universal/downloadapp";
import { Button } from "../styling/styled-components/globalstyle";

function Contact() {
  return (
    <>
      <Header />
      <Wrapper>
        <ContactWrapper>
          <ContactUs>
            <LeftSection>
              <TopSection>
                <h4>Get in touch </h4>
                <h6>you can directly message us via</h6>
                <p>admin@codebytes.com</p>
              </TopSection>
              <InputSection>
                <InputWrapper>
                  <input type="text" placeholder="enter your fullname" />
                </InputWrapper>
                <InputWrapper>
                  <input type="text" placeholder="enter your email" />
                  <span>We'll never share your email with anyone else.</span>
                </InputWrapper>
                <InputWrapper>
                  <input type="text" placeholder="+234 4356888889" />
                </InputWrapper>
                <InputWrapper>
                  <textarea placeholder="">enter a personal message</textarea>
                </InputWrapper>
                <SubmitBtn>Submit</SubmitBtn>
              </InputSection>
            </LeftSection>
            <RightSection>
              <OfficeWrapper>
                <h4>our Office</h4>
                <h6>lagos</h6>
                <p>39 Afred rewane street, Mulliner towers Ikoyi lagos.</p>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.29004 7.77998V17.51C2.29004 19.41 3.64004 20.19 5.28004 19.25L7.63004 17.91C8.14004 17.62 8.99004 17.59 9.52004 17.86L14.77 20.49C15.3 20.75 16.15 20.73 16.66 20.44L20.99 17.96C21.54 17.64 22 16.86 22 16.22V6.48998C22 4.58998 20.65 3.80998 19.01 4.74998L16.66 6.08998C16.15 6.37998 15.3 6.40998 14.77 6.13998L9.52004 3.51998C8.99004 3.25998 8.14004 3.27998 7.63004 3.56998L3.30004 6.04998C2.74004 6.36998 2.29004 7.14998 2.29004 7.77998Z"
                      stroke="#0066B4"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.55957 4V17"
                      stroke="#0066B4"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.7305 6.61914V19.9991"
                      stroke="#0066B4"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  locate our office
                </span>
              </OfficeWrapper>
              <OfficeWrapper>
                <h6>Abuja</h6>
                <p>39 Afred rewane street, Mulliner towers Ikoyi lagos.</p>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.29004 7.77998V17.51C2.29004 19.41 3.64004 20.19 5.28004 19.25L7.63004 17.91C8.14004 17.62 8.99004 17.59 9.52004 17.86L14.77 20.49C15.3 20.75 16.15 20.73 16.66 20.44L20.99 17.96C21.54 17.64 22 16.86 22 16.22V6.48998C22 4.58998 20.65 3.80998 19.01 4.74998L16.66 6.08998C16.15 6.37998 15.3 6.40998 14.77 6.13998L9.52004 3.51998C8.99004 3.25998 8.14004 3.27998 7.63004 3.56998L3.30004 6.04998C2.74004 6.36998 2.29004 7.14998 2.29004 7.77998Z"
                      stroke="#0066B4"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.55957 4V17"
                      stroke="#0066B4"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.7305 6.61914V19.9991"
                      stroke="#0066B4"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  locate our office
                </span>
              </OfficeWrapper>

              <OfficeWrapper>
                <h4>Love to Call</h4>

                <p>+234 803 719 8620</p>
                <p>+234 (0)4356888889 </p>
                <p>Mon to Fri 7am to 6 pm</p>
              </OfficeWrapper>

              <OfficeWrapper>
                <Title>
                  <h4>Join our socials </h4>
                </Title>

                <SocialICons>
                  <Image
                    src="/icons/mditwitter.svg"
                    height={30}
                    width={30}
                    alt="social icons"
                  />
                  <Image
                    src="/icons/fbmessanger.svg"
                    height={30}
                    width={30}
                    alt="social icons"
                  />
                  <Image
                    src="/icons/rilinkedin.svg"
                    height={30}
                    width={30}
                    alt="social icons"
                  />
                </SocialICons>
              </OfficeWrapper>
            </RightSection>
          </ContactUs>
        </ContactWrapper>
        <FaqWrapper>
          <Faq>
            <LeftFaq>
              <h4>Frequently asked questions</h4>
              <p>get more answers on our faq page</p>
              <Image
                src="/vectors/faqpeople.svg"
                width={345}
                height={89}
                alt="people"
              />
            </LeftFaq>
            <RightFaq>
              <Image src="/images/faq.png" height={568} width={610} alt="faq" />
            </RightFaq>
          </Faq>
        </FaqWrapper>
      </Wrapper>
      <Downloadapp />

      <Newsletter />
      <Footer />
    </>
  );
}

export default Contact;

const Wrapper = styled.div``;
const ContactWrapper = styled.div`
  background: url("/images/contactbackdrop.png");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContactUs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  max-width: 1440px;
  padding: 150px 20px;

  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div`
  border-right: 1px solid #000000;
  padding-right: 50px;
  @media only screen and (max-width: 680px) {
    padding-right: unset;
    border: unset;
  }
`;
const RightSection = styled.div`
  padding-left: 50px;
  @media only screen and (max-width: 680px) {
    padding-left: unset;
  }
`;

const TopSection = styled.div`
  text-align: right;
  @media only screen and (max-width: 680px) {
    text-align: left;
  }
  margin-bottom: 50px;
  h4 {
    font-size: 32px;
    line-height: 65px;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    color: #0066b4;
  }
  h6 {
    font-size: 24px;
    letter-spacing: 1.5px;
    text-transform: capitalize;
    color: #2a2c2c;
  }
`;
const InputSection = styled.div``;
const InputWrapper = styled.div`
  input {
    width: 100%;
    height: 77px;
    border: 2px solid rgba(42, 44, 44, 0.35);
    background: transparent;
    outline: none;
    margin: 10px 0;
    padding: 0 15px;
    font-size: 18px;
  }
  textarea {
    width: 100%;
    height: 234px;
    border: 2px solid rgba(42, 44, 44, 0.35);
    padding: 15px;
    font-size: 18px;
    background: transparent;

    &:active,
    &:focus {
      outline: none;
    }
  }
`;
const SubmitBtn = styled.button`
  width: 50%;
  height: 50px;
  background: #0066b4;
  color: white;
  border: none;
  outline: none;
  box-shadow: none;
  margin: 30px 0;
`;

const OfficeWrapper = styled.div`
  text-align: left;
  margin-bottom: 50px;
  h4 {
    font-size: 32px;
    line-height: 65px;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    color: #0066b4;
  }
  h6 {
    font-size: 24px;
    letter-spacing: 1.5px;
    text-transform: capitalize;
    color: #2a2c2c;
  }
  p {
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0.005em;
  }
  span {
    display: flex;
    gap: 1em;
    align-items: center;
    margin-top: 1em;
  }
`;

const FaqWrapper = styled.div`
  background: url("/vectors/question.svg"), #d9e8f4;
  background-repeat: no-repeat;
`;
const Faq = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  max-width: 1440px;
  padding: 100px 20px;
  place-items: center;
  gap: 2em;
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
const LeftFaq = styled.div`
  h4 {
    font-family: Open Sans;
    font-size: 48px;
    font-weight: 600;
    line-height: 65px;
    letter-spacing: 0.5px;
    margin: 10px 0;
  }
  p {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 30px;
  }
  img {
    max-width: 100%;
  }
`;
const RightFaq = styled.div`
  img {
    max-width: 100%;
  }
`;
const Title = styled.div`
  margin-bottom: 20px;
  h4 {
    font-size: 30px;
    text-transform: capitalize;
  }
`;

const SocialICons = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px 0 30px;
`;
