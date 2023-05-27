"use client";
import { Button } from "@/app/styling/styled-components/globalstyle";
import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

function Downloadapp() {
  return (
    <DownloadAppHero>
      <DownloadAppWrapper>
        <HowitWorksTitleHolder>
          <span></span>

          <div>
            <SmHow>join our community</SmHow>
            <HowWorks>download our App </HowWorks>
          </div>
        </HowitWorksTitleHolder>

        <JoinCommWrap>
          <ImgSection>
            <Image
              src="/images/appdriver.png"
              width={400}
              height={400}
              alt="driver"
            />
            <span></span>
          </ImgSection>
          <TxtSection>
            <p>
              Download the hopin app on Android. earn more with your customer
              engagement and optimize your skill performance with wheels.
            </p>
            <DownBtn>
              <Image
                src="/icons/googleplay.svg"
                height={20}
                width={20}
                alt="icon"
              />
              download on play store
            </DownBtn>
            <DownBtn>
              {" "}
              <Image src="/icons/apple.svg" height={20} width={20} alt="icon" />
              download on apple store
            </DownBtn>
          </TxtSection>
        </JoinCommWrap>
      </DownloadAppWrapper>
    </DownloadAppHero>
  );
}

export default Downloadapp;

const DownloadAppHero = styled.div`
  background: url(/images/dowloadapphero.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 20px;
`;
const DownloadAppWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background: url(/images/appbackdrop.png) #3385c3;
  padding: 50px 20px;
  border-radius: 15px;
`;

const JoinCommWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 60px 20px;
  gap: 50px 0;
  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
  }
`;
const ImgSection = styled.div`
  position: relative;
  img {
    z-index: 9;
    position: relative;
    max-width: 100%;
  }
  span {
    position: absolute;
    height: 400px;
    width: 400px;
    background: #fff;
    box-shadow: 2px 2px 10px 0.2px #b5bbd3;
    border-radius: 25px;
    left: 70px;
    top: 50px;

    @media only screen and (max-width: 1024px) {
      left: 8px;
      top: 15px;
    }
    @media only screen and (max-width: 530px) {
      width: 100%;
    }
  }
`;
const TxtSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
  }
`;

const DownBtn = styled(Button)`
  box-shadow: 2px 2px 10px 0.2px #b5bbd3;
  border-radius: 15px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  font-size: 14px;
  @media only screen and (max-width: 530px) {
    width: auto;
  }
`;

const HowitWorksTitleHolder = styled.div`
  display: inline-flex;
  gap: 30px;
  span {
    display: block;
    width: 115px;
    height: 3px;
    background: #fff;
    margin-top: 15px;

    @media only screen and (max-width: 468px) {
      width: 80px;
    }
  }
`;
const SmHow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #fff;
`;
const HowWorks = styled.h4`
  color: #fff;
  text-transform: capitalize;
  font-size: 48px;
  font-weight: 600;
  line-height: 65px;
  letter-spacing: 0.5px;
  text-align: left;
  @media only screen and (max-width: 425px) {
    font-size: 32px;
    line-height: 1.5;
  }
`;
