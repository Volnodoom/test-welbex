import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: baseline;

  margin-bottom: 1.25em;
`;

const HeaderNavigation = styled.nav`

`;

const HeaderNavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  min-width: 18em;

  list-style: none;
`;

const HeaderNavigationItem = styled.li`
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

`

const HeaderLogo = styled.a`
    display: none;
`;

const HeaderHiddenSpan = styled.span`
    display: none;
`;

const HeaderContacts = styled.ul`
    display: none;
`;

export {
  HeaderWrapper,
  HeaderNavigation,
  HeaderNavigationList,
  HeaderNavigationItem,
  HeaderNavigationTextLink,
  HeaderLogo,
  HeaderHiddenSpan,
  HeaderContacts,
}
