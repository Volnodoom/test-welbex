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

const SubTitle = styled.h3`
  margin: 0 0 1.25em;
  padding: 0;

  color: ${({theme}) => theme.color.grey};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: calc(0.75em * 0.05);
`;

const FooterSimpleList = styled.ul`
  margin: 0 0 1.875em;
  padding: 0;

  list-style: none;
`;

const SimpleListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 0.625em;
  }
`;

const ItemLink = styled.a`
  font-size: 0.875rem;
  ${linkBasicStyle}
`;

const FooterGridList = styled.ul`
  display: grid;
  grid-template-columns: 5fr 5fr;
  gap: 0.625em 2.06em;
  margin: 0 0 1.875em;
  padding: 0 1.56em 0 0;
  width: 18em;


  list-style: none;
`;

const FooterContactsList = styled.ul`
  display: grid;
  grid-template-areas:
  "phone phone phone phone phone"
  "telega viber whats . ."
  "address address address address address";
  gap: 0.5em 0.625em;
  margin: 0 0 3.125em;
  padding: 0;
  width: 18em;

  list-style: none;
`;

const PhoneItem = styled.li`
  grid-area: phone;

  a {
    ${linkBasicStyle}
    font-weight: 500;
  }
`;

const TelegaItem = styled.li`
  grid-area: telega;

  a {
    ${interactiveLink};
  }
`;

const ViberItem = styled.li`
  grid-area: viber;

  a {
    ${interactiveLink};
  }
`;

const WhatsItem = styled.li`
  grid-area: whats;

  a {
    ${interactiveLink};
  }
`;

const AddressItem = styled.li`
  grid-area: address;
  font-size: 0.875rem;
`;

const CopyRight = styled.p`
  margin: 0 0 0.3em;
  font-size: 0.75rem;
  font-family: "Montserrat";
`;

const UserPolicy = styled.a`
  display: block;

  font-size: 0.75rem;
  font-family: "Montserrat";
  text-decoration: underline;
  ${interactiveLink};
`;

export {
  SubTitle,
  FooterSimpleList,
  SimpleListItem,
  ItemLink,
  FooterGridList,
  FooterContactsList,
  PhoneItem,
  TelegaItem,
  ViberItem,
  WhatsItem,
  AddressItem,
  CopyRight,
  UserPolicy,
}
