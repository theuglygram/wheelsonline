import Image from "next/image";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterHolder>
          <FooterSections>
            <Title>
              <Image src="/icons/logo.svg" height={39} width={170} alt="logo" />
            </Title>
            <LinksWrapper>
              <p>The wheels is a logistic company. </p>
            </LinksWrapper>
            <Image
              src="/images/storesicons.png"
              height={206}
              width={246}
              alt="playstore"
            />
          </FooterSections>
          <FooterSections>
            <Title>
              {" "}
              <h4>company </h4>
            </Title>
            <LinksWrapper>
              <Links>About us</Links>
              <Links>Career</Links>
              <Links>Our Team</Links>
              <Links>Blog</Links>
              <Links>Help</Links>
            </LinksWrapper>
          </FooterSections>
          <FooterSections>
            <Title>
              <h4>Our Services </h4>
            </Title>
            <LinksWrapper>
              <Links>
                {" "}
                <Link href="/faq">FAQ</Link>
              </Links>
              <Links>Car Transaction</Links>
            </LinksWrapper>
          </FooterSections>
          <FooterSections>
            <Title>
              <h4>Join our socials </h4>
            </Title>
            <LinksWrapper>
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
              <Title>
                <h4>Our Services </h4>
              </Title>
              <LinksWrapper>
                <Links>
                  {" "}
                  <Link href="/faq">FAQ</Link>
                </Links>
                <Links>Car Transaction</Links>
              </LinksWrapper>
            </LinksWrapper>
          </FooterSections>
        </FooterHolder>
        <Copyright>
          Copyright © 2023 wheels | Powered by Quorum Interactive
        </Copyright>
      </FooterWrapper>
    </>
  );
}

export default Footer;

const FooterWrapper = styled.div``;
const FooterHolder = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
const FooterSections = styled.div``;
const Copyright = styled.div`
  height: 73px;
  background: #3385c3;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
const Title = styled.div`
  margin-bottom: 20px;
  h4 {
    font-size: 30px;
    text-transform: capitalize;
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 20px;
    font-weight: 400;
    margin: 20px 0;
  }
`;

const Links = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
`;

const SocialICons = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px 0 30px;
`;
