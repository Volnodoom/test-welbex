import styled, { createGlobalStyle } from "styled-components";
import InterRegular from 'assets/fonts/inter-regular.woff';
import InterRegularWoff2 from 'assets/fonts/inter-regular.woff2';
import InterBold from 'assets/fonts/inter-bold.woff';
import InterBoldWoff2 from 'assets/fonts/inter-bold.woff2';
import InterBlack from 'assets/fonts/inter-black.woff';
import InterBlackWoff2 from 'assets/fonts/inter-black.woff2';
import InterMedium from 'assets/fonts/inter-medium.woff';
import InterMediumWoff2 from 'assets/fonts/inter-medium.woff2';
import MontserratRegular from 'assets/fonts/montserrat-regular.woff';
import MontserratRegularWoff2 from 'assets/fonts/montserrat-regular.woff2';
import MontserratLight from 'assets/fonts/montserrat-light.woff';
import MontserratLightWoff2 from 'assets/fonts/montserrat-light.woff2';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src:  local('Inter'),
        url(${InterRegularWoff2}) format('woff2'),
        url(${InterRegular}) format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src:  local('Inter'),
        url(${InterMediumWoff2}) format('woff2'),
        url(${InterMedium}) format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 7000;
  src:  local('Inter'),
        url(${InterBoldWoff2}) format('woff2'),
        url(${InterBold}) format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  src:  local('Inter'),
        url(${InterBlackWoff2}) format('woff2'),
        url(${InterBlack}) format('woff');
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  src:  local('Inter'),
        url(${MontserratLightWoff2}) format('woff2'),
        url(${MontserratLight}) format('woff');
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src:  local('Inter'),
        url(${MontserratRegularWoff2}) format('woff2'),
        url(${MontserratRegular}) format('woff');
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100%;

  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.22;
  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.black};
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

textarea {
  resize: none;
}

/* firefox placeholder \ invalid fix + ios bdrs */
input {
  border-radius: 0;
}

input::placeholder {
  opacity: 1;
}

input:invalid {
  box-shadow: none;
}

textarea {
  border-radius: 0;
}

textarea::placeholder {
  opacity: 1;
}

textarea:invalid {
  box-shadow: none;
}

select {
  border-radius: 0;
}

/* chrome search X removal */
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  appearance: none;
}

/* input[number] arrows removal */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;

  appearance: none;
}

input[type='number'] {
  appearance: textfield;
}

/* ios button \ inputs reset */
select,
textarea,
input:matches([type='email'], [type='number'], [type='password'], [type='search'], [type='tel'], [type='text'], [type='url']) {
  appearance: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  appearance: none;
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;

  clip: rect(0 0 0 0);
}
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25em 1em 3.75em;
`;

export {
  GlobalStyle,
  AppWrapper,
};
