"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { styled } from "styled-components";
import Image from "next/image";
import Header from "./components/navigation/header";
import { Button, Paragraph } from "./styling/styled-components/globalstyle";
import Footer from "./components/navigation/footer";
import Blog from "./components/universal/blog";
import Newsletter from "./components/universal/newsletter";
import Downloadapp from "./components/universal/downloadapp";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <main>
      <Header />
      <Carousel>
        <Carousel.Item>
          <ManageHero>
            <HeroWrapper>
              <LeftSection>
                <Trust>#1 trusted app in play store</Trust>

                <ManageCar>
                  manage your car payment easily with wheels
                  <span>
                    <Image
                      src="/icons/swirlvector.svg"
                      height={160}
                      width={160}
                      alt="vector"
                    />
                  </span>
                </ManageCar>
                <Description>
                  Start your business today by joining our marketplace where You
                  can own a car while you drive and also earn good money.
                </Description>

                <RegButtonWrapper>
                  <SignUpBtn>signup as a driver</SignUpBtn>
                  <BuyBtn>buy a car</BuyBtn>
                  <StarSp>
                    <Image
                      src="/icons/star.svg"
                      height={40}
                      width={40}
                      alt="star"
                    />
                  </StarSp>
                </RegButtonWrapper>

                <PartnersSection>
                  <span>global partners:</span>

                  <Partners>
                    <span>
                      <Image
                        src="/icons/google.svg"
                        height={35}
                        width={35}
                        alt="partnerlogo"
                      />
                    </span>{" "}
                    <span>
                      <Image
                        src="/icons/cisco.svg"
                        height={35}
                        width={35}
                        alt="partnerlogo"
                      />
                    </span>{" "}
                    <span>
                      <Image
                        src="/icons/leadway.svg"
                        height={35}
                        width={35}
                        alt="partnerlogo"
                      />
                    </span>{" "}
                    <span>
                      <Image
                        src="/icons/toyota.svg"
                        height={35}
                        width={35}
                        alt="partnerlogo"
                      />
                    </span>{" "}
                  </Partners>
                </PartnersSection>
              </LeftSection>
              <RightSection>
                <Image
                  src="/images/pickup.png"
                  height={751}
                  width={436}
                  alt="pick up image"
                />
              </RightSection>
            </HeroWrapper>
          </ManageHero>
        </Carousel.Item>
        <Carousel.Item>
          <OwnitHero>
            <OwnWrapper>
              <OwnContent>
                <OwnWrap>
                  <OwnTextContent>
                    <OwnTitle>
                      Own it with wheels. Join the world of car owners
                    </OwnTitle>
                    <OwnDesc>
                      we are a trusted brand and we ensures drivers, workers
                      gets the best car payment with our ease payment scheme
                    </OwnDesc>
                  </OwnTextContent>

                  <OtherSect>
                    <SignUpBtn>Select your car</SignUpBtn>
                    <SupportWrapper>
                      <SupportTxt>
                        <Image
                          src="/vectors/check.svg"
                          width={20}
                          height={20}
                          alt="checkmark"
                        />
                        24/7 support
                      </SupportTxt>
                      <SupportTxt>
                        <Image
                          src="/vectors/check.svg"
                          width={20}
                          height={20}
                          alt="checkmark"
                        />
                        tested and trusted partners
                      </SupportTxt>
                    </SupportWrapper>
                  </OtherSect>
                </OwnWrap>
              </OwnContent>
            </OwnWrapper>
          </OwnitHero>
        </Carousel.Item>

        <Carousel.Item>
          <RentCarHero>
            <RentCarHeroWrapper>
              <>
                <RentCarcontent>
                  <OwnTitle>
                    need a car for rent or lease? apply to drive!
                  </OwnTitle>
                  <OwnDesc>
                    we are a trusted brand and we ensures drivers, workers gets
                    the best car payment with our ease payment scheme
                  </OwnDesc>
                </RentCarcontent>

                <OtherSect>
                  <SelectCar>Select your car</SelectCar>
                  <LearnMore>
                    learn more{" "}
                    <Image
                      src="/icons/downarrow.svg"
                      height={50}
                      width={50}
                      alt="arrow"
                    />
                  </LearnMore>
                </OtherSect>
              </>
            </RentCarHeroWrapper>
          </RentCarHero>
        </Carousel.Item>
      </Carousel>

      {/* --------------------second hero section--------------------------------- */}
      <MakeMoneyHero>
        <MoneyHeroWrapper>
          <TopSection>
            <Features>
              <span></span> features
            </Features>
            <Title>make more money driving</Title>

            <RidersChoiceWrapper>
              <ChoiceHolder>
                <ChoiceTitle>we are every rider’s first choice</ChoiceTitle>
                <p>
                  We provide affordable vehicle financing for potential drivers
                  and help them with payment breakdown without stress
                </p>
              </ChoiceHolder>

              <ChoiceWrapper>
                <ChoiceHold>
                  <h4>1m</h4>
                  <p>active customers</p>
                </ChoiceHold>
                <ChoiceHold>
                  <h4>25k</h4>
                  <p>App downloads</p>
                </ChoiceHold>
                <ChoiceHold>
                  <h4>3</h4>
                  <p>continents</p>
                </ChoiceHold>
              </ChoiceWrapper>
            </RidersChoiceWrapper>

            <FinancialInclusionWrapper>
              <FinancialInclusionChild>
                <Image
                  src="/icons/bulletellipse.svg"
                  height={26}
                  width={26}
                  alt="ellipse"
                />
                <FinancialBody>
                  <FinancialTitle>Financial Inclusion</FinancialTitle>
                  <p>
                    Wheels provides customers with access to vehicle financing,
                    as well as a range{" "}
                  </p>
                </FinancialBody>
              </FinancialInclusionChild>
              <FinancialInclusionChild>
                <Image
                  src="/icons/bulletellipse.svg"
                  height={26}
                  width={26}
                  alt="ellipse"
                />
                <FinancialBody>
                  <FinancialTitle>Financial Inclusion</FinancialTitle>
                  <p>
                    Wheels provides customers with access to vehicle financing,
                    as well as a range{" "}
                  </p>
                </FinancialBody>
              </FinancialInclusionChild>
              <FinancialInclusionChild>
                <Image
                  src="/icons/bulletellipse.svg"
                  height={26}
                  width={26}
                  alt="ellipse"
                />
                <FinancialBody>
                  <FinancialTitle>Financial Inclusion</FinancialTitle>
                  <p>
                    Wheels provides customers with access to vehicle financing,
                    as well as a range{" "}
                  </p>
                </FinancialBody>
              </FinancialInclusionChild>
              <FinancialInclusionChild>
                <Image
                  src="/icons/bulletellipse.svg"
                  height={26}
                  width={26}
                  alt="ellipse"
                />
                <FinancialBody>
                  <FinancialTitle>Financial Inclusion</FinancialTitle>
                  <p>
                    Wheels provides customers with access to vehicle financing,
                    as well as a range{" "}
                  </p>
                </FinancialBody>
              </FinancialInclusionChild>
              <FinancialInclusionChild>
                <Image
                  src="/icons/bulletellipse.svg"
                  height={26}
                  width={26}
                  alt="ellipse"
                />
                <FinancialBody>
                  <FinancialTitle>Financial Inclusion</FinancialTitle>
                  <p>
                    Wheels provides customers with access to vehicle financing,
                    as well as a range{" "}
                  </p>
                </FinancialBody>
              </FinancialInclusionChild>
              <FinancialInclusionChild>
                <Image
                  src="/icons/bulletellipse.svg"
                  height={26}
                  width={26}
                  alt="ellipse"
                />
                <FinancialBody>
                  <FinancialTitle>Financial Inclusion</FinancialTitle>
                  <p>
                    Wheels provides customers with access to vehicle financing,
                    as well as a range{" "}
                  </p>
                </FinancialBody>
              </FinancialInclusionChild>
            </FinancialInclusionWrapper>
          </TopSection>
        </MoneyHeroWrapper>
      </MakeMoneyHero>

      {/* ---------------------how it works third hero section----------------------------------------------- */}
      <HowitWorksHero>
        <HowitWorksWrapper>
          <HowitWorksTitleHolder>
            <span></span>
            <div>
              <SmHow>owning a vehicle</SmHow>
              <HowWorks>how it works</HowWorks>
            </div>
          </HowitWorksTitleHolder>

          <HowitWorksCardHolder>
            <HowitWorksCard>
              <Image
                src="/icons/ellipse1.svg"
                height={80}
                width={80}
                alt="elipse"
              />
              <h4>means of identification</h4>
              <p>
                Get a means ofidentification Get a means ofidentification Get a
                means ofidentification
              </p>
            </HowitWorksCard>
            <HowitWorksCard>
              <Image
                src="/icons/ellipse2.svg"
                height={80}
                width={80}
                alt="elipse"
              />
              <h4>means of identification</h4>
              <p>
                Get a means ofidentification Get a means ofidentification Get a
                means ofidentification
              </p>
            </HowitWorksCard>
            <HowitWorksCard>
              <Image
                src="/icons/ellipse3.svg"
                height={80}
                width={80}
                alt="elipse"
              />
              <h4>means of identification</h4>
              <p>
                Get a means ofidentification Get a means ofidentification Get a
                means ofidentification
              </p>
            </HowitWorksCard>
            <HowitWorksCard>
              <Image
                src="/icons/ellipse4.svg"
                height={80}
                width={80}
                alt="elipse"
              />
              <h4>means of identification</h4>
              <p>
                Get a means ofidentification Get a means ofidentification Get a
                means ofidentification
              </p>
            </HowitWorksCard>
          </HowitWorksCardHolder>
        </HowitWorksWrapper>
      </HowitWorksHero>

      {/* --------------------------------choose vehicle sesction------------------------------------ */}
      <ChooseVehicleHero>
        <ChooseVehicleWrapper>
          <ChoseMiniSection>
            <TopChoice>
              <span>choose your vehicle</span>
              <h4>it’s your world, ride it</h4>
            </TopChoice>
            <p>
              The wheels is a logistic company that provides Vehicles for
              mobility entrepreneurs. We are here to provide Services that will
              lead you to owning your vehicle while you work. Our rates are very
              flexible and cause you no pain.
            </p>
          </ChoseMiniSection>

          <CarBrands>
            <Image
              src="/images/car1.png"
              width={464}
              height={244}
              alt="carbrand"
            />

            <Image
              src="/images/car2.png"
              width={400}
              height={226}
              alt="carbrand"
            />

            <Image
              src="/images/car3.png"
              width={507}
              height={352}
              alt="carbrand"
            />

            <Image
              src="/images/car4.png"
              width={624}
              height={300}
              alt="carbrand"
            />
          </CarBrands>
        </ChooseVehicleWrapper>
      </ChooseVehicleHero>

      {/* -----------------------Download app section------------------------------------------ */}
      <Downloadapp />
      {/* -------------------------------Blog Section----------------------------------------- */}
      <Blog />
      {/* -------------------------------newsletter section----------------------------------- */}
      <Newsletter />
      <Footer />
    </main>
  );
}

const ManageHero = styled.div`
  background: #d9e8f4;
  height: 100vh;
  padding: 50px 0;
`;
const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  place-items: center;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div``;
const RightSection = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 425px) {
    img {
      display: none;
    }
  }
`;

const Trust = styled.div`
  padding: 20px;
  text-align: center;
  border: 1px solid #2a2c2c;
  border-radius: 50px;
  width: 100%;
  text-transform: capitalize;
  margin-bottom: 40px;
`;
const ManageCar = styled.h4`
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  position: relative;
  span {
    position: absolute;
    left: 0;
    bottom: -30px;
    img {
      width: 100%;
      height: auto;
    }
  }
  @media only screen and (max-width: 425px) {
    font-size: 32px;
  }
`;
const Description = styled(Paragraph)`
  max-width: 360px;
`;
const RegButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px;
  position: relative;

  @media only screen and (max-width: 580px) {
    flex-direction: column;
  }
`;
const StarSp = styled.div`
  position: absolute;
  right: 80px;
  bottom: 80px;
`;
const SignUpBtn = styled(Button)`
  background: #0066b4;
  color: #fff;
`;
const BuyBtn = styled(Button)`
  background: #d9e8f4;
  border: 1px solid #0066b4;
`;

const PartnersSection = styled.div`
  margin-top: 80px;
  span {
    display: block;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 15px;
  }
`;
const Partners = styled.div`
  display: flex;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 78px;
    height: 58px;
    background: #fff;
    clip-path: polygon(50% 0%, 80% 10%, 80% 90%, 50% 100%, 20% 90%, 20% 10%);
  }
`;

// second style for first hero

const OwnitHero = styled.div`
  background: url("/images/ownit.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
const OwnWrapper = styled.div``;
const OwnContent = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  height: 100vh;
`;
const OtherSect = styled.div``;
const OwnTitle = styled.h4`
  font-family: Open Sans;
  font-size: 48px;
  font-weight: 800;
  color: #fff;
  text-transform: capitalize;
  @media only screen and (max-width: 425px) {
    font-size: 32px;
  }
`;
const OwnDesc = styled.div`
  font-size: 16px;
  color: #fff;
  text-transform: capitalize;
  margin-top: 20px;
`;
const OwnWrap = styled.div`
  max-width: 649px;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
const OwnTextContent = styled.div`
  background: #5937205e;
  border-radius: 20px;
  max-width: 649px;
  padding: 40px 20px;
`;
const OwnBtn = styled.div``;
const SupportWrapper = styled.div`
  margin-top: 100px;
`;
const SupportTxt = styled.div`
  color: #fff;
  display: flex;
  gap: 1em;
  align-items: center;
  margin: 5px 0;
`;

// third style first hero
const RentCarHero = styled.div`
  background: url("/images/rentbackground.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
const RentCarHeroWrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  max-width: 504px;
  width: 100%;
`;

const RentCarcontent = styled.div``;
const LearnMore = styled.div`
  margin-top: 50px;
  color: #fff;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 1em;
`;

const SelectCar = styled(Button)`
  background: #fff;
  color: #0066b4;
  margin-top: 30px;
`;

// second hero styling-----------------------------------
const MakeMoneyHero = styled.div`
  background: url("/icons/ellipse.svg");
  background-position: center;
  background-repeat: no-repeat;
`;
const MoneyHeroWrapper = styled.div`
  padding: 80px 20px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const TopSection = styled.div`
padding`;
const Features = styled.p`
  font-size: 20px;
  text-align: center;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  & span {
    display: block;
    width: 115px;
    height: 2px;
    background: #0066b4;
  }
`;
const Title = styled.h4`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const RidersChoiceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
    margin-top: 60px;
  }
`;
const ChoiceTitle = styled.h4`
  font-size: 32px;
  font-weight: 600;
  line-height: 55px;
  text-transform: capitalize;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
const ChoiceHolder = styled.div`
  max-width: 462px;
  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
  }
`;
const ChoiceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: 570px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const ChoiceHold = styled.div`
  text-align: center;

  h4 {
    font-size: 40px;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`;

const FinancialInclusionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 60px;
  gap: 50px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 570px) {
    grid-template-columns: 1fr;
  }
`;
const FinancialInclusionChild = styled.div`
  display: flex;
  gap: 30px;
`;
const FinancialBody = styled.div`
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0.5px;
    border-right: 1px solid #2a2c2c80;
  }
`;
const FinancialTitle = styled.h6`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
`;

// ------------------------------------how it works third herosection

const HowitWorksHero = styled.div`
  background: url("/images/ellipseBackdrop.png");
  background-position: 20% center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    background-position: center;
    height: 100%;
  }
`;
const HowitWorksWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 200px 20px 100px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    padding: 100px 20px 100px;
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

const HowitWorksCardHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 60px 0;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 525px) {
    grid-template-columns: 1fr;
  }
`;
const HowitWorksCard = styled.div`
  text-align: center;
  h4 {
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    text-transform: capitalize;
  }
  p {
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 25px;
  }
`;

// ------------------------------------- choose vehicle section

const ChooseVehicleHero = styled.div``;
const ChooseVehicleWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 20px;
  background: url(/icons/category.svg);
  background-repeat: no-repeat;
  background-position: left;
  height: 100%;
`;

const ChoseMiniSection = styled.div`
  max-width: 550px;
  margin: 0 auto;
  p {
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;
    line-height: 2;
    padding-left: 30px;
  }
`;
const TopChoice = styled.div`
  border-left: 4px solid #0066b4;
  padding-left: 30px;
  span {
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
  }
  h4 {
    font-size: 48px;
    font-weight: 600;
    line-height: 1.5;
    text-transform: capitalize;
  }
`;

const CarButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px 0;
  gap: 1em;
  overflow-x: auto;
`;
const CarBtn = styled.button`
  border: none;
  outline: none;
  box-shadow: none;
  width: 230px;
  height: 77px;
  background: rgba(219, 240, 255, 0.5);
  border-radius: 15px;
  font-size: 20px;
  cursor: pointer;
  text-transform: capitalize;
`;

const CarBrands = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  img {
    max-width: 100%;
  }

  @media only screen and (max-width: 765px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;
