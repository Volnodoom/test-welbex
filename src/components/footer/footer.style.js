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

const FooterWrapper = styled.div`
  width: 18em;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em 1.875em;
    width: 71.25em;
    margin-bottom: 1.25em;
  }
`;

const CompanyWrapper = styled.div`

@media (min-width: 1440px) {
  grid-column: 1 / span 3;
  grid-row: 1 / span 1;
}
`;

const MenuWrapper = styled.div`
  @media (min-width: 1440px) {
    grid-column: 4 / span 5;
    grid-row: 1 / span 1;
  }
`;

const ContactsWrapper = styled.div`
  @media (min-width: 1440px) {
    grid-column: 9 / span 4;
    grid-row: 1 / span 1;
    text-align: end;
  }
`;

const UserPoliceWrapper = styled.div`
  @media (min-width: 1440px) {
    grid-column: 1 / -1;
    grid-row: 2 / span 1;

    text-align: end;
  }
`;

const SubTitle = styled.h3`
  margin: 0 0 1.25em;
  padding: 0;

  color: ${({theme}) => theme.color.grey};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: calc(5 * 0.01em);

  @media (min-width: 1440px) {
    font-size: 0.875rem;
  }
`;

const FooterSimpleList = styled.ul`
  margin: 0 0 1.875em;
  padding: 0;

  list-style: none;

  @media (min-width: 1440px) {
    margin: 0;
  }
`;

const SimpleListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 0.625em;
  }
`;

const ItemLink = styled.a`
  ${linkBasicStyle}
  font-size: 0.875rem;

  @media (min-width: 1440px) {
    font-size: 1rem;
  }
`;

const FooterGridList = styled.ul`
  display: grid;
  grid-template-columns: 5fr 5fr;
  gap: 0.625em 2.06em;
  margin: 0 0 1.875em;
  padding: 0 1.56em 0 0;
  width: 18em;

  list-style: none;

  @media (min-width: 1440px) {
    grid-template-columns: 2fr 3fr;
    gap: 0.625em 1.875em;
    padding: 0;
    width: auto;
  }
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

  @media (min-width: 1440px) {
    gap: 1.25em 0.625em;
    margin: 0 0 0 auto;
    grid-template-areas:
    "phone phone phone phone phone"
    " . . telega viber whats"
    "address address address address address";
  }
`;

const ContactItemLink = styled.a`
  @media (min-width: 1440px) {
    svg {
      width: 1.25em;
      height: 1.25em;
    }
  }
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

  @media (min-width: 1440px) {
    font-size: 1rem;
  }
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
  text-underline-offset: 0.2em;
  ${interactiveLink};
`;

export {
  FooterWrapper,
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
  CompanyWrapper,
  MenuWrapper,
  ContactsWrapper,
  UserPoliceWrapper,
  ContactItemLink,
}
