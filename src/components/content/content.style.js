import styled from "styled-components";
import MobileBackGround from "assets/img/mobile-bg.png";

const ContentWrapper = styled.section`
  padding: 2.5em 0 3.75em;
  margin-bottom: 2.5em;
  position: relative;
  width: 18em;

  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    width: 71.25em;
    padding: 0;
    margin-bottom: 7.75em;
  }

  ::before {
    content: '';
    position: absolute;
    inset: 0 auto auto -1em;
    width: 320px;
    height: 445px;
    object-fit: cover;
    background-image: url(${MobileBackGround});
    background-repeat: no-repeat;

    @media (min-width: 1440px) {
      inset: 22em auto auto 44.75em;
      width: 1.75em;
      height: 1.75em;
      border-radius: 50%;

      background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, rgba(212, 93, 93, 0.248) 59.67%, rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%);
      box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
      filter: blur(2.5px);
      backdrop-filter: blur(2px);
    }
  }
`;

const SubContentWrapper = styled.div`
`;

const ContentTitle = styled.h1`
  position: relative;
  margin: 0 0 1em;

  font-size: 2rem;

  @media (min-width: 1440px) {
    margin: 0 0 0.625em;
    font-size: 3rem;

    ::before {
      content: '';
      position: absolute;
      width: 6.5em;
      height: 6.5em;

      border-radius: 50%;
      background-color: ${({theme}) => theme.color.flame};
      opacity: 0.25;
      filter: blur(4em);
      top: 4.125em;
      left: 1.96em;
      transform: translate(-100%, -50%);
    }
  }
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

  @media (min-width: 1440px) {
    margin: 0 0 1em;
  }
`;

const ContentTextTwo = styled.p`
  position: relative;
  margin: 0 0 1.25em;
  padding: 0;
  width: 17em;

  font-size: 1.125rem;
  font-weight: 700;

  @media (min-width: 1440px) {
    padding-top: 1em;
    margin-bottom: 2.5em;
    width: 18.25em;

    text-align: end;
  }
`;

const TextSpecial = styled.span`
  background: linear-gradient(90deg, ${({theme}) => theme.color.gradientStart2} 36.99%, ${({theme}) => theme.color.gradientEnd2} 180%);
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 1440px) {
    text-transform: uppercase;
  }
`;

const ContentListMobile = styled.ul`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 0.875em 0.5em;
  margin: 0;
  padding: 0;

  list-style: none;

  @media (min-width: 1440px) {
    display: none;
  }
`;

const ContentListDesktop = styled.ul`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1.875em;
    margin: 0 0 3.75em auto;
    padding: 0;
    width: 19em;

    list-style: none;
  }
`;

const ContentItem = styled.li`
  position: relative;
  padding-left: 1em;

  font-size: 0.812rem;
  font-family: 'Montserrat';

  @media (min-width: 1440px) {
    padding: 0;
    width: 7.6em;

    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.125rem;
    font-family: 'Inter';
    text-align: end;
  }

  ::before {
    position: absolute;
    width: 0.625em;
    height: 0.06em;
    z-index: 200;

    content: '';
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    background-image: linear-gradient(90deg, ${({theme}) => theme.color.gradientStart2}, ${({theme}) => theme.color.gradientEnd2});

    @media (min-width: 1440px) {
      display: none;
    }
  }
`;

const ContentSubItem = styled.span`
  display: block;
  padding-top: 0.375em;

  font-family: 'Montserrat';
  font-size: 1rem;
  text-transform: none;
`;

const ContentConsultationButton = styled.button`
  display: none;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: block;
    padding: 1.25em 2.25em;
    margin-left: auto;

    color: ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.color.blue};
    font-weight: 500;

    :hover {
      background-color: ${({theme}) => theme.color.blueActive};
    }

    :active {
      color: ${({theme}) => theme.color.grey};
      background-color: ${({theme}) => theme.color.blueActive};
    }

    border-color: transparent;
  }

`


export {
  ContentWrapper,
  SubContentWrapper,
  ContentTitle,
  TitleSpecial,
  ContentTextOne,
  ContentTextTwo,
  TextSpecial,
  ContentListMobile,
  ContentItem,
  ContentListDesktop,
  ContentSubItem,
  ContentConsultationButton,
}
