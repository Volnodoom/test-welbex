import styled from "styled-components";
import MobileBackGround from "assets/img/mobile-bg.png";

const ContentWrapper = styled.section`
  padding: 2.5em 0 3.75em;
  margin-bottom: 2.5em;
  position: relative;
  width: 18em;

  ::before {
    content: '';
    position: absolute;
    inset: 0 auto auto -1em;
    width: 320px;
    height: 445px;
    object-fit: cover;
    background-image: url(${MobileBackGround});
    background-repeat: no-repeat;
  }
`;

const ContentTitle = styled.h1`
  position: relative;
  margin: 0 0 1em;

  font-size: 2rem;
`;

const TitleSpecial = styled.span`
  font-weight: 900;
  background: linear-gradient(92deg, ${({theme}) => theme.color.gradientStart1} 27.14%, ${({theme}) => theme.color.gradientEnd1} 121.36%);
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContentTextOne = styled.p`
  position: relative;
  margin: 0 0 2.8em;
  padding: 0;
  width: 17em;

  font-family: 'Montserrat';
  font-size: 1.125rem;
`;

const ContentTextTwo = styled.p`
  position: relative;
  margin: 0 0 1.25em;
  padding: 0;
  width: 17em;

  font-size: 1.125rem;
  font-weight: 700;
`;

const TextSpecial = styled.span`
  background: linear-gradient(90deg, ${({theme}) => theme.color.gradientStart2} 36.99%, ${({theme}) => theme.color.gradientEnd2} 180%);
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContentList = styled.ul`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 0.875em 0.5em;
  margin: 0;
  padding: 0;


  list-style: none;
`;

const ContentItem = styled.li`
  position: relative;
  padding-left: 1em;

  font-size: 0.812rem;
  font-family: 'Montserrat';

  ::before {
    position: absolute;
    width: 0.625em;
    height: 0.06em;

    content: '';
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    background-image: linear-gradient(to right, ${({theme}) => theme.color.gradientStart2}, ${({theme}) => theme.color.gradientEnd2});
  }
`;


export {
  ContentWrapper,
  ContentTitle,
  TitleSpecial,
  ContentTextOne,
  ContentTextTwo,
  TextSpecial,
  ContentList,
  ContentItem,
}
