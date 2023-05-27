"use client";
import React from "react";
import Header from "../components/navigation/header";
import Newsletter from "../components/universal/newsletter";
import Footer from "../components/navigation/footer";
import { styled } from "styled-components";
import Image from "next/image";

function Team() {
  return (
    <>
      <Header />

      <HeroWrapper>
        <HeroSection>
          <TeamWrap>meet our team</TeamWrap>
        </HeroSection>
      </HeroWrapper>
      <TeamHero>
        <TopSection>
          <p>We Are Led By A Team driven by love,</p>
          <h4>
            creativity, and innovative towards solving business challenges
          </h4>
        </TopSection>

        <TeamMembersWrapper>
          <CeoWrapper>
            <TextSection>
              <CeoName>osas osas</CeoName>
              <CeoRole>chief executive office</CeoRole>
              <CeoDesc>
                Lorem ipsum dolor sit amet consectetur. Eget massa a vivamus
                scelerisque sed felis. Ipsum neque porttitor tempor faucibus.
                Dolor volutpat nibh tristique massa. Auctor amet et donec est
                blandit vitae non venenatis cras. Diam neque lorem pellentesque
                consectetur{" "}
              </CeoDesc>
            </TextSection>
            <ImageSection>
              <Image src="/images/ceo.png" height={447} width={566} alt="ceo" />
            </ImageSection>
          </CeoWrapper>

          <TeamMembers>
            <TeamCard>
              <Image
                src="/images/teamone.png"
                height={288}
                width={358}
                alt="team"
              />
              <MemberName>
                <p>jane joe</p>
                <p>human resource</p>
              </MemberName>
            </TeamCard>
            <TeamCard>
              <Image
                src="/images/teamtwo.png"
                height={288}
                width={358}
                alt="team"
              />
              <MemberName>
                <p>jane joe</p>
                <p>human resource</p>
              </MemberName>
            </TeamCard>
            <TeamCard>
              <Image
                src="/images/teamthree.png"
                height={288}
                width={358}
                alt="team"
              />
              <MemberName>
                <p>jane joe</p>
                <p>human resource</p>
              </MemberName>
            </TeamCard>
            <TeamCard>
              <Image
                src="/images/teamone.png"
                height={288}
                width={358}
                alt="team"
              />
              <MemberName>
                <p>jane joe</p>
                <p>human resource</p>
              </MemberName>
            </TeamCard>
            <TeamCard>
              <Image
                src="/images/teamtwo.png"
                height={288}
                width={358}
                alt="team"
              />
              <MemberName>
                <p>jane joe</p>
                <p>human resource</p>
              </MemberName>
            </TeamCard>
            <TeamCard>
              <Image
                src="/images/teamthree.png"
                height={288}
                width={358}
                alt="team"
              />
              <MemberName>
                <p>jane joe</p>
                <p>human resource</p>
              </MemberName>
            </TeamCard>
          </TeamMembers>
        </TeamMembersWrapper>
      </TeamHero>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Team;

const HeroWrapper = styled.div`
  background: url("/images/team.png");
  height: 70vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const HeroSection = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 70vh;
`;
const TeamWrap = styled.div`
  text-transform: capitalize;
  background: rgba(0, 102, 180, 0.59);
  padding: 40px 30px;
  font-size: 48px;
  font-weight: 600;
  color: #fff;
`;

const TeamHero = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 0;
`;
const TopSection = styled.div`
  p {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
  }
  h4 {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    color: #0066b4;
    text-transform: capitalize;
  }
`;

const TeamMembersWrapper = styled.div``;
const CeoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding-top: 100px;
  margin: 0 auto;
`;
const TextSection = styled.div``;
const CeoName = styled.p`
  font-size: 48px;
  font-weight: 600;
  text-transform: capitalize;
  color: #0066b4;
  margin-bottom: 15px;
`;
const CeoRole = styled.p`
  font-size: 32px;
  text-transform: capitalize;
  color: #d12200;
  margin-bottom: 25px;
`;
const CeoDesc = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;
const ImageSection = styled.div`
  text-align: center;
  img {
    max-width: 100%;
  }
`;

const TeamMembers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 100px 0 150px;
`;
const TeamCard = styled.div`
  position: relative;
  img {
    max-width: 100%;
  }
`;
const MemberName = styled.div`
  background: rgba(0, 102, 180, 0.68);
  border-radius: 30px 30px 0px 0px;
  position: absolute;
  bottom: 5px;
  left: 132px;
  padding: 20px 30px;
  p {
    font-weight: 600;
    font-size: 20px;
    text-transform: capitalize;
    color: #ffffff;
  }
`;
