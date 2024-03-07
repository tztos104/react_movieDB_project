
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'

const Nav = () => {

    const [show, setShow] = useState(false);




    useEffect(() => {
        window.addEventListener('scroll', handleScroll) //스크롤 이벤트 발생하면 어떤 함수를 호출할건진 리스너를 등록.
        return () => {
          window.removeEventListener('scroll', handleScroll);//리스너를 제거를 안해주면 리스너가 여러개 등록되서 오류발생할수 있음. 꼭 삭제해야함.
        }
      }, [])
    
      // console.log('useLocation.search', useLocation().search);
    
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setShow(true);
        } else {
          setShow(false);
        }
      }



  return (
    <NavWrapper show={show}>
        <Logo >
            <img src="/images/logo.svg" alt="logo" 
            onClick={() => {window.location.href="/"}}/>
        </Logo>
    </NavWrapper>
  )
}

export default Nav

const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: ${props => props.show ? "#090b13" : "transparent"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;

`;

const Logo = styled.a`
    padding:0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    diplay: inline-block;

    img {
    display: block;
    width: 100%;
    }

`