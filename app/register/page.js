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
              </UserFormDescription>{" "}
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
              <UserformHolder>
                <>
                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        First Name
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="enter your first Name" />
                    </UserformData>{" "}
                    <UserformData>
                      <label htmlFor="">
                        Last name
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="enter yourcLast name" />
                    </UserformData>
                  </FormContentWrapper>
                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        Other Names
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="enter your other name" />
                    </UserformData>
                    <UserformData>
                      <label htmlFor="">
                        Choice of car
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="Suzuki" />
                    </UserformData>
                  </FormContentWrapper>
                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        Email Address
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="Enter a valid email " />
                    </UserformData>

                    <UserformData>
                      <label htmlFor="">
                        phone number
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="+234 0987645678 " />
                    </UserformData>
                  </FormContentWrapper>

                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        Select city where you are
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="City" />
                    </UserformData>
                    <UserformData>
                      <label htmlFor="">
                        Date of Birth
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="date" />
                    </UserformData>
                  </FormContentWrapper>
                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        Home address(street name and number)
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="Address" />
                    </UserformData>
                    <UserformData>
                      <label htmlFor="">
                        City
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="Lagos" />
                    </UserformData>
                  </FormContentWrapper>

                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        Choose the mobility market place you currently drive for
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="Hopins" />
                    </UserformData>
                    <UserformData>
                      <label htmlFor="">
                        where is your business located?
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="Lagos" />
                    </UserformData>
                  </FormContentWrapper>

                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        Guarantors full Name
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="Enter  full name" />
                    </UserformData>
                    <UserformData>
                      <label htmlFor="">
                        Guarantors Home address
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input
                        type="text"
                        placeholder="12 williams way, ozumba avenue"
                      />
                    </UserformData>
                  </FormContentWrapper>
                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        Guarantors location (city)
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="Enter City" />
                    </UserformData>
                    <UserformData>
                      <label htmlFor="">
                        Guarantors Phone number
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="+234 4567890" />
                    </UserformData>
                  </FormContentWrapper>

                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        Applicant bank Account Name
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="Bank Name" />
                    </UserformData>
                    <UserformData>
                      <label htmlFor="">
                        Applicant Bank Account Number
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="0122222788" />
                    </UserformData>
                  </FormContentWrapper>

                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        Bank Name
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="Bank Name" />
                    </UserformData>
                    <UserformData>
                      <label htmlFor="">
                        bank verification number
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input type="text" placeholder="22345555677" />
                    </UserformData>
                  </FormContentWrapper>
                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        NIN (national identity number)
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input
                        type="text"
                        placeholder="NIN (national identity number)"
                      />
                    </UserformData>
                    <UserformData>
                      <label htmlFor="">
                        How did you hear about us?
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input
                        type="text"
                        placeholder="How did you hear about us?"
                      />
                    </UserformData>
                  </FormContentWrapper>

                  <FormContentWrapper>
                    <UserformData>
                      <label htmlFor="">
                        Confirm that your Hopin App, is installed and you are
                        online?
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input
                        type="text"
                        placeholder="NIN (national identity number)"
                      />
                    </UserformData>
                    <UserformData>
                      <label htmlFor="">
                        Confirm that your Hopin App, is installed and you are
                        online?
                        <Image
                          src="/icons/inputicon.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </label>
                      <input
                        type="text"
                        placeholder="NIN (national identity number)"
                      />
                    </UserformData>
                  </FormContentWrapper>
                </>
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
  padding: 150px 20px 200px;
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
const FormContentWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2em;
  align-items: center;
  @media only screen and (max-width: 728px) {
    flex-wrap: wrap;
    gap: unset;
  }
`;
const UserFormDescription = styled.div``;
const Picture = styled.div`
  p {
    text-transform: capitalize;
    margin-bottom: 10px;
  }
`;
const UserformHolder = styled.div``;
const UserformData = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  width: 100%;

  label {
    font-size: 16px;
    margin: 5px 0;
    gap: 5px;
    display: flex;
    align-items: center;
    img {
      margin-top: 5px;
    }
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
