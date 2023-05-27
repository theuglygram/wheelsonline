import React from "react";
import { styled } from "styled-components";

function Newsletter() {
  return (
    <div>
      {" "}
      <NewsletterHero>
        <NewsletterWrapper>
          <NewsTop>
            <NewsTitleWrap>
              <span></span>
              <p>Newsletter</p>
            </NewsTitleWrap>
            <h4>get the latest information from us</h4>
          </NewsTop>

          <NewsLetterDiv>
            <input type="text" placeholder="enter an active email address" />
            <SubBtn>Subscribe</SubBtn>
          </NewsLetterDiv>
        </NewsletterWrapper>
      </NewsletterHero>
    </div>
  );
}

export default Newsletter;

// --------------------------------------------- newsletter section

const NewsletterHero = styled.div`
  background: #d9e8f4;
`;
const NewsletterWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 20px 120px;
`;
const NewsTop = styled.div`
  text-align: center;
  h4 {
    font-size: 48px;
    font-weight: 600;
    line-height: 48px;
    text-transform: capitalize;
    @media only screen and (max-width: 768px) {
      font-size: 32px;
    }
  }
`;
const NewsTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  span {
    width: 115px;
    height: 3px;
    background: #2a2c2c;
    display: block;
  }
  p {
    font-size: 20px;
    font-weight: 400;
  }
`;

const NewsLetterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  max-width: 749px;
  width: 100%;
  background: #ffffff;
  border-radius: 50px;
  height: 74px;

  input {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    height: 74px;
    padding: 0 15px;
    font-size: 16px;
  }
`;
const SubBtn = styled.button`
  width: 100%;
  height: 74px;
  width: 206px;
  background: #3385c3;
  border-radius: 50px;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;
