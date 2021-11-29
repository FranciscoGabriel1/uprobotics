import styled from 'styled-components'

export const Introduction = styled.section`
  /* text-align: center; */
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
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
    font-size: 3.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5;

    span {
      color: var(--cyan-500);
    }
  }
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    margin-top: 1.5rem;

    span {
      color: var(--cyan-500);
      font-weight: bold;
    }
  }
`

export const TabStyle = styled(Introduction)`
  /* color: #292841; */
  margin-bottom: 2em;
  font-size: 1.1rem;
  line-height: 2rem;

  img {
    margin-left: 2em;
    width: ${props => (props.width ? width : '8%')};
  }
`

export const CustomFooter = styled.footer`
  background-color: #23272a;
  color: #fff;
  padding: 8rem 2.4rem 6.4rem;

  .divider {
    margin-top: 20px;
    grid-column: 1/-1;
    height: 1px;
    background-color: #4eaec9;
    margin-bottom: 3.2rem;
  }
  .social-media{
    i{
      margin-right: 10px;
      font-size: 20px;
      
    }
  }
  .city{
    font-size: 14px;
    margin: 8px;
  }
  .img-logo {
    width: 20px;
    height: 20px;
  }
  .footer-title {
    font-size: 32px;
    color: #4eaec9;
    font-weight: bold;
  }
  .sm-link {
    font-size: 2.3rem;
    color: inherit;
    margin-right: 2rem;
  }
  .links {
    margin-top: 12px;
    p {
      color: #4eaec9;
      font-weight: bold;
    }
    ul,
    li {
      margin-top: 10px;
      margin-left: 5px;
      list-style: none;
      list-style-type: none;

      a:hover{
        color: #2ECCF8;
      }
    }
  }
`
