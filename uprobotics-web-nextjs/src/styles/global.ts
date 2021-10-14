import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --white:#ffffff;

    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-700: #292841;
    --gray-800: #29292e;
    --gray-850:#1f2729;
    --gray-900: #121214;

    --cyan-500: #61dafb;
    --yellow-500: #eba417;

    --blue: blue;
    --blue--300: 
    --blue--400: #3DB2FF;
    --blue--500: #404EED;
    --blue--600: #2962FF;

    --white-100: #FCFCFC;



}

@media(max-width: 1080px){
    html{
        font-size: 93.75%;
    }
}
@media(max-width: 720px){
    html{
        font-size: 87.5%;
    }
}
@media(max-width: 1080px){
    html{
        font-size: 87.5%;
    }
}



body{
    background-color: var(--white-100);
    color: var(--gray-700);
     
}

body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
}
button{
    cursor: pointer;
}

a{
    color: inherit;
    text-decoration: none;
}
`
