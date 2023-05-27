"use client";
import React from "react";
import { styled } from "styled-components";
import Header from "../components/navigation/header";
import Downloadapp from "../components/universal/downloadapp";
import Newsletter from "../components/universal/newsletter";
import Footer from "../components/navigation/footer";
import Image from "next/image";

function Register() {
  return (
    <>
      <Header />
      <Wrapper>
        <FormWrapper>
          <Form>
            <FormDesc>
              <h4>kindly fill this form to get started</h4>
            </FormDesc>

            <UserForm>
              <UserFormDescription>
                <h4>user Basic information</h4>
                <p>
                  kindly Enter the required information below to Register.
                  ensure to fill in correct and real details. every form goes
                  through a process of validation and a confirmation message
                  will be sent to you immediately after filling this form.
                </p>
              </UserFormDescription>
              <UserformHolder>
                <LeftSection>
                  <UserformData>
                    <Picture>
                      <p>upload picture</p>
                      <Image
                        src="/vectors/avatar.svg"
                        height={173}
                        width={162}
                        alt="avatar"
                      />
                    </Picture>
                  </UserformData>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                </LeftSection>
                <RightSection>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                  <UserformData>
                    <label htmlFor="">
                      choose the mobility market place you currently drive for
                    </label>
                    <input type="text" />
                  </UserformData>
                </RightSection>
              </UserformHolder>
            </UserForm>
          </Form>
        </FormWrapper>
      </Wrapper>
      <Downloadapp />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Register;

const Wrapper = styled.div`
  background: url("/vectors/formbackdrop.svg"), #7bc2f7;
  background-repeat: no-repeat;
  background-size: cover;
`;
const FormWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 150px 0 300px;
`;
const Form = styled.div``;
const FormDesc = styled.div`
  h4 {
    font-size: 32px;
    font-weight: 600;
    line-height: 65px;
    letter-spacing: 0.5px;
    text-transform: capitalize;
  }
`;
const UserForm = styled.div`
  background: #fff;
  padding: 50px 40px;
  box-shadow: 2px 2px 10px 0.5px rgba(181, 187, 211, 0.25);
  border-radius: 15px;
`;

const UserFormDescription = styled.div``;
const Picture = styled.div`
  p {
    text-transform: capitalize;
    margin-bottom: 10px;
  }
`;
const UserformHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin-top: 50px;
`;
const UserformData = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  label {
    font-size: 14px;
    margin: 5px 0;
  }
  input {
    width: 100%;
    border: 2px solid rgba(42, 44, 44, 0.35);
    outline: none;
    margin: 10px 0;
    padding: 0 15px;
    font-size: 18px;
    padding: 0.875rem 1rem;
    margin: 0.25rem 0px 0px;
    width: 100%;
    border-radius: 8px;
    background: #fff;
    color: rgb(0, 0, 0);
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

const LeftSection = styled.div``;
const RightSection = styled.div``;
