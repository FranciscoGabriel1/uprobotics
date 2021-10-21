import styled from 'styled-components'

export const Introduction = styled.section`
  text-align: center;
  margin-top: 3em;
  color: #575e75;
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2)
      format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  h1 {
    font-weight: bold;
  }
  p {
    width: 100%;
  }
`
