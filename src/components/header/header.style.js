import styled, { css } from "styled-components";

const interactiveLink = css`
  :link,
  :visited {
    color: ${({theme}) => theme.color.white};
  };

  :hover {
    color: ${({theme}) => theme.color.blue};
  };

  :active {
    color: ${({theme}) => theme.color.whiteActive};
  };
`;

const linkBasicStyle = css`
  display: block;
  text-decoration: none;
  ${interactiveLink};
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: baseline;

  margin-bottom: 1.25em;

  @media (min-width: 1440px) {
    position: relative;
    display: grid;
    gap: 1em 1.875em;
    grid-template-columns: repeat(12, 1fr);
    justify-content: flex-start;

    width: 71.25em;
    margin-bottom: 5.625em;

    ::before {
      content: '';
      position: absolute;
      top: 4.875em;
      left: 25.625em;
      transform: translate(-50%, -50%);
      width: 5.25em;
      height: 5.25em;

      border-radius: 50%;
      background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%);
      box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
      backdrop-filter: blur(2px);
    }

    ::after {
      content: '';
      position: absolute;
      top: -1.125em;
      left: 46.75em;
      transform: translate(-50%, -50%);
      width: 3.75em;
      height: 3.75em;

      border-radius: 50%;
      background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%);
      box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
      filter: blur(5px);
      backdrop-filter: blur(2px);
    }
  }
`;

const HeaderNavigation = styled.nav`
  min-width: 18em;

  @media (min-width: 1440px) {
    width: 34.7em;
    grid-column: 3 / span 6;
    grid-row: 1/-1;

    z-index: 100;
  }
`;

const HeaderNavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  list-style: none;

  @media (min-width: 1440px) {
    justify-content: start;
    gap: 1em 1.875em;
  }
`;

const HeaderNavigationItem = styled.li`
  :nth-child(n + 5) {
    display: none;
  }

  @media (min-width: 1440px) {
    :nth-child(n + 5) {
      display: block;
    }
  }
`;

const HeaderNavigationTextLink = styled.a`
  display: block;
  padding: 0 0.2em;

  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;

  :link,
  :visited {
    color: ${({theme}) => theme.color.white};
  };

  :hover {
    background-color: ${({theme}) => theme.color.blackActive};

  };

  :active {
    color: ${({theme}) => theme.color.whiteActive};
    background-color: ${({theme}) => theme.color.blackActive};
  };

  @media (min-width: 1440px) {
    font-size: 1rem;
    text-transform: none;
  }

`;

const HeaderLogoWrapper = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    grid-column: 1/ span 2;
  }
`;

const HeaderLogo = styled.a`
  :link,
  :visited,
  :hover,
  :active {
    color: ${({theme}) => theme.color.white};
  };
`;

const HeaderLogoMessage = styled.p`
  margin: 0.625em 0 0;
  width: 16.5em;

  font-family: "Montserrat";
  font-size: 0.625rem;
  font-weight: 300;
`;

const HeaderHiddenSpan = styled.span`
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
`;

const HeaderContacts = styled.ul`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    grid-column: 9 / span 4;
    justify-content: end;

    margin: 0;
    padding: 0;

    list-style: none;
  }
`;

const PhoneItem = styled.li`
  margin-right: 3em;
  a {
    ${linkBasicStyle}
    font-weight: 500;
  }
`;

const ContactItem = styled.li`
  :not(:last-child) {
    margin-right: 1.875em;
  };

  a {
    ${interactiveLink};
  };

  a svg {
    width: 1.25em;
    height: 1.25em;
  };
`;

export {
  HeaderWrapper,
  HeaderNavigation,
  HeaderNavigationList,
  HeaderNavigationItem,
  HeaderNavigationTextLink,
  HeaderLogoWrapper,
  HeaderLogo,
  HeaderLogoMessage,
  HeaderHiddenSpan,
  HeaderContacts,
  PhoneItem,
  ContactItem,
}
