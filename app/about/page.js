"use client";
import React from "react";
import { styled } from "styled-components";
import Header from "../components/navigation/header";
import Image from "next/image";
import Blog from "../components/universal/blog";
import Newsletter from "../components/universal/newsletter";
import Footer from "../components/navigation/footer";

function About() {
  return (
    <>
      <Header />
      <HeroWrapper>
        <HeroSection>
          <AboutWrap>
            <p>About us</p>
            <h4>
              At <span>Wheels</span>{" "}
            </h4>
          </AboutWrap>
        </HeroSection>
      </HeroWrapper>

      <AboutDetailsWrapper>
        <AboutDetails>
          <TextWrapper>
            <h4>
              About <span>Wheels</span>{" "}
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Accumsan nibh nisi sed
              congue pellentesque vestibulum. Eu lorem eu duis vitae in. Eget
              pellentesque tellus in in. Mauris pharetra iaculis ante nisl
              ipsum. Volutpat pellentesque ante et donec cum tortor varius ac
              penatibus. Cras leo nec volutpat etiam nulla enim amet. Cursus
              condimentum ut vitae fusce duis nisl. Massa purus non eu duis et
              maecenas sed tincidunt turpis. Tellus vestibulum at amet vitae
              scelerisque eros pulvinar erat dui. Hendrerit viverra congue
              condimentum urna faucibus pellentesque. Luctus mollis sit aenean
              porta rhoncus ipsum integer congue habitasse. Amet interdum a
              placerat suscipit amet tincidunt turpis. Tellus a pellentesque
              risus lacus luctus. Ac orci tincidunt tincidunt eu tellus donec
              ultricies. Tincidunt at aliquam in dignissim donec est sit
              pellentesque iaculis. Id ut pulvinar cras tempor eu quisque. Purus
              semper at molestie justo eu risus natoque enim quam. Dapibus
              mattis cursus non ultrices porttitor. Ornare habitant id eget ac
              lacus ultrices. Ac metus a nisl suspendisse nibh. Aliquet lacus
              facilisi sit morbi id quis a feugiat sed. Habitant velit tristique
              nisi quis fringilla enim tortor sed. Ornare phasellus aenean nunc
              nibh cursus imperdiet dictumst vitae. Duis neque cursus semper
              accumsan nisl et enim. Mollis id maecenas interdum amet
              scelerisque nibh rhoncus neque quis. Non dolor mattis venenatis eu
              pretium phasellus non. Arcu varius amet amet velit quis
              ullamcorper mauris sit risus. Cursus nibh laoreet bibendum metus.
              Massa laoreet risus sed commodo nunc pellentesque nibh mi id. Id
              mauris imperdiet fermentum fames et sed in. Non tellus amet lorem
              congue sit vestibulum pretium pulvinar at. A sit at et massa.
              Purus consectetur ornare volutpat amet feugiat turpis sagittis
              laoreet. Enim commodo imperdiet convallis sed. Enim adipiscing
              elit tellus euismod amet vel et nascetur. Vivamus consectetur id
              leo eleifend in in massa. Aliquet velit eu vel pretium turpis sit
              eget enim. Gravida etiam arcu aliquam ullamcorper aenean eget
              varius egestas. Sit magna scelerisque senectus felis risus. Vitae
              pulvinar elit eget accumsan. Id felis cras non faucibus lacinia
              sit hendrerit diam lorem. Vulputate amet vel massa natoque
              volutpat. Arcu nibh nisi aliquet consectetur posuere. Ullamcorper
              consequat nibh blandit dictum amet pellentesque. Diam viverra quis
              luctus sed ac leo. Cursus potenti ut nec viverra pellentesque
              nunc. Bibendum at tristique pharetra enim quis porttitor egestas.
              Ipsum ullamcorper pellentesque leo convallis. Est quam ullamcorper
              est amet feugiat. Ut suspendisse placerat aliquet odio. Mattis
              eros justo facilisis viverra morbi sed interdum. Donec quis
              lobortis ornare consequat ullamcorper quisque integer cum.
              Ultricies turpis pharetra vulputate hendrerit viverra sagittis.
              Quis ut amet in ultrices sodales.
            </p>
          </TextWrapper>

          <CardWrapper>
            <CardSection>
              <CardImage>
                <Image
                  src="/icons/vision.svg"
                  height={122}
                  width={122}
                  alt="vision"
                />
              </CardImage>
              <CardContent>
                <h4>Vision</h4>
                <p>
                  Our mission is to connect marketplace, business, mobility
                  entrepreneurs and together we create wealth for all stake
                  holders.
                </p>
              </CardContent>
            </CardSection>
            <CardSection>
              <CardImage>
                {" "}
                <Image
                  src="/icons/mission.svg"
                  height={122}
                  width={122}
                  alt="vision"
                />
              </CardImage>
              <CardContent>
                <h4>Mission</h4>
                <p>
                  To be number one in providing access to vehicle for mobility
                  entrepreneurs across Africa and the world.
                </p>
              </CardContent>
            </CardSection>
          </CardWrapper>
        </AboutDetails>
      </AboutDetailsWrapper>

      <PartnersWrapper>
        <Partners>
          <PartnersTitle>our partners</PartnersTitle>
          <AllPartners>
            <Image
              src="/brands/toyota.png"
              width={190}
              height={84}
              alt="partner"
            />
            <Image
              src="/brands/benz.png"
              width={190}
              height={84}
              alt="partner"
            />
            <Image
              src="/brands/honda.png"
              width={190}
              height={84}
              alt="partner"
            />
            <Image
              src="/brands/bmw.png"
              width={190}
              height={84}
              alt="partner"
            />
            <Image
              src="/brands/range.png"
              width={190}
              height={84}
              alt="partner"
            />
            <Image
              src="/brands/volkswagen.png"
              width={190}
              height={84}
              alt="partner"
            />
          </AllPartners>
        </Partners>
      </PartnersWrapper>

      <CoreValueWrapper>
        <CoreValues>
          <CoreValueTitle>our core values</CoreValueTitle>
          <CoreValueCardWrapper>
            <CoreValueCard>
              <Image
                src="/vectors/innovation.svg"
                width={99}
                height={117}
                alt="innovation"
              />
              <h4>innovation</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu enim at posuere
                aliquet mattis ullamcorper pellentesque. Morbi elit cum
                elementum tortor egestas.
              </p>
            </CoreValueCard>
            <CoreValueCard>
              <Image
                src="/vectors/engage.svg"
                width={99}
                height={117}
                alt="engage"
              />
              <h4>Engaging</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu enim at posuere
                aliquet mattis ullamcorper pellentesque. Morbi elit cum
                elementum tortor egestas.
              </p>
            </CoreValueCard>
            <CoreValueCard>
              <Image
                src="/vectors/teamwork.svg"
                width={99}
                height={117}
                alt="teamwork"
              />
              <h4>Team Work</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu enim at posuere
                aliquet mattis ullamcorper pellentesque. Morbi elit cum
                elementum tortor egestas.
              </p>
            </CoreValueCard>
            <CoreValueCard>
              <Image
                src="/vectors/respect.svg"
                width={99}
                height={117}
                alt="respect"
              />
              <h4>Respect</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu enim at posuere
                aliquet mattis ullamcorper pellentesque. Morbi elit cum
                elementum tortor egestas.
              </p>
            </CoreValueCard>
            <CoreValueCard>
              <Image
                src="/vectors/service.svg"
                width={99}
                height={117}
                alt="service"
              />
              <h4>Service</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu enim at posuere
                aliquet mattis ullamcorper pellentesque. Morbi elit cum
                elementum tortor egestas.
              </p>
            </CoreValueCard>
            <CoreValueCard>
              <Image
                src="/vectors/profession.svg"
                width={99}
                height={117}
                alt="profession"
              />
              <h4>Professionalism</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu enim at posuere
                aliquet mattis ullamcorper pellentesque. Morbi elit cum
                elementum tortor egestas.
              </p>
            </CoreValueCard>
          </CoreValueCardWrapper>
        </CoreValues>
      </CoreValueWrapper>
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}

export default About;
const HeroWrapper = styled.div`
  background: url("/images/aboutBackdrop.png");
  height: 70vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0 20px;
`;
const HeroSection = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 70vh;
`;
const AboutWrap = styled.div`
  border-left: 3px solid #fff;
  padding-left: 10px;
  p {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
  }
  h4 {
    font-size: 48px;
    font-weight: 600;
    line-height: 65px;
    letter-spacing: 0.5px;
    span {
      color: #d12200;
    }
  }
`;

const AboutDetailsWrapper = styled.div`
  background: url("/icons/spiral.svg");
  background-position: top left;
  background-repeat: no-repeat;
`;

const AboutDetails = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 0;
`;
const TextWrapper = styled.div`
  padding: 0 20px;
  h4 {
    font-size: 48px;
    font-weight: 600;
    padding-bottom: 90px;
    span {
      color: #0066b4;
    }
  }
  p {
    font-size: 20px;
    line-height: 45px;
    letter-spacing: 0.005em;
    text-align: justify;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 200px;
  gap: 50px;
  padding: 0 20px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const CardSection = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(181, 187, 211, 0.25);
  border-radius: 15px;
  display: flex;
  padding: 30px;
  gap: 30px;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const CardImage = styled.div``;
const CardContent = styled.div`
  h4 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 25px;
  }
  p {
    font-size: 20px;
    line-height: 1.5;
  }
`;

// ---------------------------------------------partners

const PartnersWrapper = styled.div`
  background: url("/icons/category.svg") #d9e8f4;
  background-position: top right;
  background-repeat: no-repeat;
`;
const Partners = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PartnersTitle = styled.h4`
  font-weight: 600;
  font-size: 48px;
  text-transform: capitalize;
  color: #3385c3;
  margin-bottom: 60px;
`;
const AllPartners = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 40px;
`;

// -------------------------------core values------------------

const CoreValueWrapper = styled.div``;
const CoreValues = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 0 120px;
`;
const CoreValueTitle = styled.h4`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
  @media only screen and (max-width: 550px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;
const CoreValueCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  text-align: center;
  padding: 0 20px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
const CoreValueCard = styled.div`
  h4 {
    margin: 10px 0;
    font-size: 32px;
    text-transform: capitalize;
  }
  p {
    font-size: 20px;
  }
`;
