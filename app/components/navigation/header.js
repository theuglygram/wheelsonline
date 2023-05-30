import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  // handlenavigation state
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      {/* DESTOP NAV */}
      <NavWrapper>
        <Nav>
          <LogoWrapper>
            <Link href="/">
              <Image src="/icons/logo.svg" height={39} width={170} alt="logo" />
            </Link>
          </LogoWrapper>
          <LinksWrapper>
            <LinksWrap>
              <Links>partner with Wheels</Links>
              <Links>Blog</Links>
              <Links>
                <Link href="/about">About</Link>
              </Links>{" "}
              <Links>
                <Link href="/contact">Contact us</Link>
              </Links>
              <Link href="/register">
                <Links>
                  <button>Apply to drive</button>
                </Links>
              </Link>
            </LinksWrap>
          </LinksWrapper>
        </Nav>
      </NavWrapper>

      {/* MOBILE NAV */}

      <MobileNavWrapper>
        <MobileNav>
          <MobileLogoWrapper>
            <Link href="/">
              <Image src="/icons/logo.svg" height={29} width={150} alt="logo" />
            </Link>
          </MobileLogoWrapper>

          <MobileLinksWrapper className={navOpen ? "menu-open" : "menu-closed"}>
            <MobileLinks>Blog</MobileLinks>
            <MobileLinks>
              <Link href="/about">About</Link>
            </MobileLinks>
            <MobileLinks>
              <Link href="/contact">Contact us</Link>
            </MobileLinks>
            <Link href="/register">
              {" "}
              <MobileLinks>
                <button>Apply to drive</button>
              </MobileLinks>
            </Link>
          </MobileLinksWrapper>

          <MobileHamburger>
            {navOpen ? (
              <Image
                src="/icons/close.png"
                height={35}
                width={35}
                alt="hamburger"
                onClick={toggleNav}
              />
            ) : (
              <Image
                src="/icons/open.png"
                height={35}
                width={35}
                alt="hamburger"
                onClick={toggleNav}
              />
            )}
          </MobileHamburger>
        </MobileNav>
      </MobileNavWrapper>
    </>
  );
}

export default Header;

const NavWrapper = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 10px 0.2px #b5bbd3;
  position: relative;
  z-index: 2;
`;
const Nav = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  padding: 0 20px;
  @media only screen and (max-width: 1004px) {
    display: none;
  }
`;
const LogoWrapper = styled.div``;
const LinksWrapper = styled.div``;
const LinksWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
`;
const Links = styled.li`
  list-style: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 1.5px;
  text-transform: capitalize;
  button {
    width: 284px;
    height: 77px;
    background: #0066b4;
    border: none;
    outline: none;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }
`;

const MobileNavWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 1004px) {
    display: block;
  }
`;
const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
  box-shadow: 0px 24px 24px #0000000d;
`;
const MobileLogoWrapper = styled.div``;
const MobileLinksWrapper = styled.div`
  position: absolute;
  top: 75px;
  background: #fff;
  width: 100%;
  left: 0;
  box-shadow: 0px 24px 24px #0000000d;
  height: 50vh;
  z-index: 99;
  padding: 30px 0 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
`;
const MobileLinks = styled.div`
  list-style: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 1.5px;
  text-transform: capitalize;
  button {
    width: 284px;
    height: 77px;
    background: #0066b4;
    border: none;
    outline: none;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }
`;
const MobileHamburger = styled.div``;
