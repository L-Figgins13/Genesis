import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { injectGlobal } from "styled-components";

injectGlobal`
 /* Aspect Ratio Responsive Method */
 body {
   margin: 0;
   padding: 0;
   line-height: 1;
   font-size: 62.5%;
  }

  :root {
    --ratio: 9 / 16;
    --width: 98vmin;
    --height: calc(var(--width) * var(--ratio));
  }

  /* HTML & CSS RESET */
  * {
      box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Selection Styles */
  ::-moz-selection { background: #111; }
  ::selection { background: #111; border: none;}

  /* Scroll Bar Styles */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      background: wheat; 
      -moz-box-shadow:    inset 0 0 4px #000000;
        -webkit-box-shadow: inset 0 0 4px #000000;
        box-shadow:         inset 0 0 4px #000000;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: #333333; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: #111; 
  }
`;

const contentNode = document.getElementById("contents");

import App from "./App.jsx";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  contentNode
);
