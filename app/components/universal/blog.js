import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

function Blog() {
  return (
    <div>
      <UpdateHero>
        <UpdateWrapper>
          <UpdateTitleWrapper>
            <p>Our Blog</p>
            <h4>updates and upcoming events</h4>
          </UpdateTitleWrapper>{" "}
          <UpdateCardWrapper>
            <UpdateCard>
              <CardImage>
                <Image
                  src="/images/talentimage.png"
                  height={355}
                  width={397}
                  alt="talentimage"
                />
              </CardImage>
              <Author>wheels talent hunt</Author>
              <CaedTitle>
                wheels Lagos talent hunt set for 25th of december 2023
              </CaedTitle>
              <CardTime>2mins read</CardTime>
            </UpdateCard>
            <UpdateCard>
              <CardImage>
                <Image
                  src="/images/talentimage.png"
                  height={355}
                  width={397}
                  alt="talentimage"
                />
              </CardImage>
              <Author>wheels talent hunt</Author>
              <CaedTitle>
                wheels Lagos talent hunt set for 25th of december 2023
              </CaedTitle>
              <CardTime>2mins read</CardTime>
            </UpdateCard>
            <UpdateCard>
              <CardImage>
                <Image
                  src="/images/talentimage.png"
                  height={355}
                  width={397}
                  alt="talentimage"
                />
              </CardImage>
              <Author>wheels talent hunt</Author>
              <CaedTitle>
                wheels Lagos talent hunt set for 25th of december 2023
              </CaedTitle>
              <CardTime>2mins read</CardTime>
            </UpdateCard>
          </UpdateCardWrapper>
        </UpdateWrapper>
      </UpdateHero>
    </div>
  );
}

export default Blog;

// --------------------- update section
const UpdateHero = styled.div``;
const UpdateWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 20px;
`;
const UpdateTitleWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-left: 4px solid #3385c3;
  padding-left: 30px;
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    color: #3385c3;
  }
  h4 {
    font-weight: 600;
    font-size: 48px;
    line-height: 1.5;
    text-transform: capitalize;
    color: #3385c3;
    @media only screen and (max-width: 468px) {
      font-size: 32px;
    }
  }
`;

const UpdateCardWrapper = styled.div`
  padding: 80px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const UpdateCard = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardImage = styled.div`
  img {
    max-width: 100%;
  }
`;
const Author = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
  margin-bottom: 10px;
  text-transform: capitalize;
`;
const CaedTitle = styled.h4`
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  margin: 10px 0;
`;
const CardTime = styled.p`
  margin-top: 20px;
`;
