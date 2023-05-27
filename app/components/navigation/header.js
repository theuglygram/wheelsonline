import Image from "next/image";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";
function Header() {
  return (
    <div>
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
                {" "}
                <Links>
                  <button>Apply to drive</button>
                </Links>
              </Link>
            </LinksWrap>
          </LinksWrapper>
        </Nav>
      </NavWrapper>
    </div>
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
