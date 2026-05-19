import React, { useState } from 'react';

import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
  Stack,
  Divider,
  Chip,
  Grid
} from '@mui/material';

import { motion, AnimatePresence } from 'framer-motion';

import confetti from 'canvas-confetti';

import CssIcon from '@mui/icons-material/Css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const THEME_COLOR = '#264de4';
const SECONDARY_COLOR = '#7f5af0';

/* CSS QUESTIONS */

const cssTasks = [

  {
    id: 1,
    title: "CSS Introduction",
    question: "CSS-oda full form enna?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Syntax",
      "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets",
    explain:
      "CSS-na Cascading Style Sheets. Idhu webpage styling-ku use aagum."
  },

  {
    id: 2,
    title: "CSS Purpose",
    question: "CSS mainly etharku use pannuvanga?",
    options: [
      "Database create panna",
      "Webpage styling panna",
      "Server run panna",
      "Audio play panna"
    ],
    answer: "Webpage styling panna",
    explain:
      "CSS colors, layouts, spacing, animations maari styling work-ku use pannuvanga."
  },

  {
    id: 3,
    title: "CSS Syntax",
    question: "Correct CSS syntax edhu?",
    options: [
      "body { color: red; }",
      "body => color:red",
      "body = color:red",
      "<body color='red'>"
    ],
    answer: "body { color: red; }",
    explain:
      "CSS-la selector + property + value structure use pannuvanga."
  },

  {
    id: 4,
    title: "CSS Selector",
    question: "HTML element select panna CSS-la enna use pannuvanga?",
    options: [
      "Selector",
      "Attribute",
      "Property",
      "Variable"
    ],
    answer: "Selector",
    explain:
      "Selector HTML element target panna use pannuvanga."
  },

  {
    id: 5,
    title: "Text Color",
    question: "Text color change panna entha property use pannuvanga?",
    options: [
      "font-color",
      "text-color",
      "color",
      "bgcolor"
    ],
    answer: "color",
    explain:
      "color property text color set panna use aagum."
  },

  {
    id: 6,
    title: "Background Color",
    question: "Element background color set panna entha property use pannuvanga?",
    options: [
      "bg",
      "background-color",
      "color",
      "fill"
    ],
    answer: "background-color",
    explain:
      "background-color property element background change panna use aagum."
  },

  {
    id: 7,
    title: "Internal CSS",
    question: "HTML document-kulla <style> tag use pannura CSS type edhu?",
    options: [
      "Inline CSS",
      "Internal CSS",
      "External CSS",
      "Import CSS"
    ],
    answer: "Internal CSS",
    explain:
      "Style tag use pannina adhu Internal CSS."
  },

  {
    id: 8,
    title: "Inline CSS",
    question: "HTML tag-kulla style attribute use pannura CSS type edhu?",
    options: [
      "Internal CSS",
      "External CSS",
      "Inline CSS",
      "Linked CSS"
    ],
    answer: "Inline CSS",
    explain:
      "style='' attribute use pannina adhu Inline CSS."
  },

  {
    id: 9,
    title: "External CSS",
    question: ".css file separate-aa create pannura method-ku enna peyar?",
    options: [
      "Inline CSS",
      "External CSS",
      "Internal CSS",
      "Embedded CSS"
    ],
    answer: "External CSS",
    explain:
      "Separate CSS file use pannradhu External CSS."
  },

  {
    id: 10,
    title: "Link CSS File",
    question: "External CSS file connect panna entha HTML tag use pannuvanga?",
    options: [
      "<style>",
      "<css>",
      "<link>",
      "<script>"
    ],
    answer: "<link>",
    explain:
      "<link> tag use panni external stylesheet connect pannuvanga."
  },

  {
    id: 11,
    title: "ID Selector",
    question: "CSS-la ID selector start aagura symbol edhu?",
    options: [
      ".",
      "#",
      "*",
      "@"
    ],
    answer: "#",
    explain:
      "# symbol ID selector represent pannum."
  },

  {
    id: 12,
    title: "Class Selector",
    question: "CSS-la class selector-ku use pannura symbol edhu?",
    options: [
      ".",
      "#",
      "*",
      "%"
    ],
    answer: ".",
    explain:
      ". symbol class selector-ku use pannuvanga."
  },

  {
    id: 13,
    title: "Universal Selector",
    question: "Ella elements-yum select panna entha selector use pannuvanga?",
    options: [
      "#",
      ".",
      "*",
      "+"
    ],
    answer: "*",
    explain:
      "* universal selector all elements select pannum."
  },

  {
    id: 14,
    title: "Element Selector",
    question: "HTML tag name use pannura selector type edhu?",
    options: [
      "Universal Selector",
      "Class Selector",
      "Element Selector",
      "Pseudo Selector"
    ],
    answer: "Element Selector",
    explain:
      "Tag names directly use pannina adhu element selector."
  },

  {
    id: 15,
    title: "Group Selector",
    question: "Multiple selectors combine panna entha symbol use pannuvanga?",
    options: [
      "&",
      ",",
      ".",
      "#"
    ],
    answer: ",",
    explain:
      "Comma use panni multiple selectors combine pannuvanga."
  },

  {
    id: 16,
    title: "Padding",
    question: "Content-ukum border-kum naduvula space kudukka entha property use pannuvanga?",
    options: [
      "margin",
      "spacing",
      "padding",
      "gap"
    ],
    answer: "padding",
    explain:
      "Padding inner spacing create pannum."
  },

  {
    id: 17,
    title: "Margin",
    question: "Element-oda veliya space kudukka entha property use pannuvanga?",
    options: [
      "padding",
      "margin",
      "border",
      "space"
    ],
    answer: "margin",
    explain:
      "Margin outer spacing create pannum."
  },

  {
    id: 18,
    title: "Border",
    question: "Element-kku outline create panna entha property use pannuvanga?",
    options: [
      "outline",
      "border",
      "stroke",
      "line"
    ],
    answer: "border",
    explain:
      "Border property element outline create pannum."
  },

  {
    id: 19,
    title: "Box Model",
    question: "CSS Box Model-la content-ah surround pannura first layer edhu?",
    options: [
      "Margin",
      "Padding",
      "Border",
      "Content"
    ],
    answer: "Content",
    explain:
      "Content thaan box model center area."
  },

  {
    id: 20,
    title: "Width Property",
    question: "Element width set panna entha property use pannuvanga?",
    options: [
      "size",
      "height",
      "width",
      "length"
    ],
    answer: "width",
    explain:
      "width property horizontal size control pannum."
  },

  {
    id: 21,
    title: "Height Property",
    question: "Element height set panna entha property use pannuvanga?",
    options: [
      "height",
      "width",
      "length",
      "size"
    ],
    answer: "height",
    explain:
      "height property vertical size control pannum."
  },

  {
    id: 22,
    title: "Pixel Unit",
    question: "CSS-la fixed size define panna common unit edhu?",
    options: [
      "em",
      "%",
      "px",
      "vh"
    ],
    answer: "px",
    explain:
      "px fixed pixel size represent pannum."
  },

  {
    id: 23,
    title: "Percentage Unit",
    question: "Responsive relative sizing-ku entha unit use pannuvanga?",
    options: [
      "%",
      "px",
      "cm",
      "pt"
    ],
    answer: "%",
    explain:
      "% parent element based relative sizing kudukkum."
  },

  {
    id: 24,
    title: "Viewport Height",
    question: "Full screen height represent panna common CSS unit edhu?",
    options: [
      "px",
      "vh",
      "em",
      "%"
    ],
    answer: "vh",
    explain:
      "vh viewport height based unit."
  },

  {
    id: 25,
    title: "Display Flex",
    question: "Flexbox layout activate panna entha property/value use pannuvanga?",
    options: [
      "display:flex",
      "position:flex",
      "layout:flex",
      "flex:display"
    ],
    answer: "display:flex",
    explain:
      "display:flex flexbox layout enable pannum."
  },
  {
  id: 26,
  title: "Flex Direction",
  question: "Flex items horizontal-aa align aaga default flex-direction value enna?",
  options: [
    "column",
    "row",
    "grid",
    "inline"
  ],
  answer: "row",
  explain:
    "Flexbox default direction row. Items horizontal-aa arrange aagum."
},

{
  id: 27,
  title: "Justify Content",
  question: "Horizontal alignment control panna flexbox-la entha property use pannuvanga?",
  options: [
    "align-items",
    "justify-content",
    "place-items",
    "text-align"
  ],
  answer: "justify-content",
  explain:
    "justify-content main axis alignment control pannum."
},

{
  id: 28,
  title: "Align Items",
  question: "Vertical alignment control panna flexbox-la entha property use pannuvanga?",
  options: [
    "justify-content",
    "align-items",
    "vertical-align",
    "place-content"
  ],
  answer: "align-items",
  explain:
    "align-items cross axis alignment control pannum."
},

{
  id: 29,
  title: "Display Grid",
  question: "CSS Grid layout enable panna entha value use pannuvanga?",
  options: [
    "display:flex",
    "display:block",
    "display:grid",
    "layout:grid"
  ],
  answer: "display:grid",
  explain:
    "display:grid CSS Grid system activate pannum."
},

{
  id: 30,
  title: "Grid Columns",
  question: "Grid columns define panna entha property use pannuvanga?",
  options: [
    "grid-template-columns",
    "grid-column-layout",
    "column-template",
    "grid-layout"
  ],
  answer: "grid-template-columns",
  explain:
    "Grid columns size and count define panna use pannuvanga."
},

{
  id: 31,
  title: "Position Relative",
  question: "Element normal flow maintain pannitu move panna entha position value use pannuvanga?",
  options: [
    "absolute",
    "fixed",
    "relative",
    "sticky"
  ],
  answer: "relative",
  explain:
    "position:relative original space maintain pannum."
},

{
  id: 32,
  title: "Position Absolute",
  question: "Nearest positioned parent based move aaga entha position use pannuvanga?",
  options: [
    "relative",
    "fixed",
    "absolute",
    "sticky"
  ],
  answer: "absolute",
  explain:
    "absolute positioned elements nearest relative parent base-la work aagum."
},

{
  id: 33,
  title: "Position Fixed",
  question: "Scroll pannalum same place-la irukka entha position use pannuvanga?",
  options: [
    "absolute",
    "relative",
    "fixed",
    "static"
  ],
  answer: "fixed",
  explain:
    "Fixed elements viewport-ku attach aagum."
},

{
  id: 34,
  title: "Z-Index",
  question: "Elements overlap order control panna entha property use pannuvanga?",
  options: [
    "index",
    "layer",
    "z-index",
    "stack"
  ],
  answer: "z-index",
  explain:
    "z-index stacking order control pannum."
},

{
  id: 35,
  title: "Overflow Hidden",
  question: "Extra content hide panna entha overflow value use pannuvanga?",
  options: [
    "scroll",
    "auto",
    "hidden",
    "visible"
  ],
  answer: "hidden",
  explain:
    "overflow:hidden extra visible content-ah hide pannum."
},

{
  id: 36,
  title: "Font Size",
  question: "Text size change panna entha property use pannuvanga?",
  options: [
    "text-size",
    "font-size",
    "size",
    "font-style"
  ],
  answer: "font-size",
  explain:
    "font-size property text size control pannum."
},

{
  id: 37,
  title: "Font Weight",
  question: "Boldness control panna entha property use pannuvanga?",
  options: [
    "font-width",
    "font-style",
    "font-weight",
    "text-bold"
  ],
  answer: "font-weight",
  explain:
    "font-weight text thickness control pannum."
},

{
  id: 38,
  title: "Text Align",
  question: "Text alignment set panna entha property use pannuvanga?",
  options: [
    "align-text",
    "justify-content",
    "text-align",
    "font-align"
  ],
  answer: "text-align",
  explain:
    "text-align left, center, right alignment set pannum."
},

{
  id: 39,
  title: "Text Decoration",
  question: "Underline remove panna mostly entha property use pannuvanga?",
  options: [
    "font-style",
    "text-decoration",
    "remove-line",
    "underline:none"
  ],
  answer: "text-decoration",
  explain:
    "text-decoration:none underline remove panna use pannuvanga."
},

{
  id: 40,
  title: "Hover Effect",
  question: "Mouse hover state style panna entha pseudo-class use pannuvanga?",
  options: [
    ":active",
    ":hover",
    ":focus",
    ":visited"
  ],
  answer: ":hover",
  explain:
    ":hover mouse pointer element mela varumbodhu activate aagum."
},

{
  id: 41,
  title: "Active State",
  question: "Click pannumbodhu temporary active state-ku entha pseudo-class use pannuvanga?",
  options: [
    ":focus",
    ":visited",
    ":active",
    ":checked"
  ],
  answer: ":active",
  explain:
    ":active click interaction state-ku use pannuvanga."
},

{
  id: 42,
  title: "Transition",
  question: "Smooth animation effect create panna entha property use pannuvanga?",
  options: [
    "transform",
    "animation",
    "transition",
    "effect"
  ],
  answer: "transition",
  explain:
    "transition smooth property changes create pannum."
},

{
  id: 43,
  title: "Transform Scale",
  question: "Element zoom effect create panna entha transform function use pannuvanga?",
  options: [
    "rotate()",
    "translate()",
    "scale()",
    "skew()"
  ],
  answer: "scale()",
  explain:
    "scale() element size increase/decrease pannum."
},

{
  id: 44,
  title: "Rotate Transform",
  question: "Element rotate panna entha transform function use pannuvanga?",
  options: [
    "move()",
    "scale()",
    "rotate()",
    "flip()"
  ],
  answer: "rotate()",
  explain:
    "rotate() elements rotate panna use pannuvanga."
},

{
  id: 45,
  title: "Box Shadow",
  question: "Element shadow add panna entha property use pannuvanga?",
  options: [
    "shadow",
    "text-shadow",
    "box-shadow",
    "drop-shadow"
  ],
  answer: "box-shadow",
  explain:
    "box-shadow element outer shadow create pannum."
},

{
  id: 46,
  title: "Border Radius",
  question: "Rounded corners create panna entha property use pannuvanga?",
  options: [
    "corner-radius",
    "round",
    "border-radius",
    "radius"
  ],
  answer: "border-radius",
  explain:
    "border-radius rounded corners create pannum."
},

{
  id: 47,
  title: "Opacity",
  question: "Transparency control panna entha property use pannuvanga?",
  options: [
    "visibility",
    "opacity",
    "alpha",
    "transparent"
  ],
  answer: "opacity",
  explain:
    "opacity transparency level control pannum."
},

{
  id: 48,
  title: "Media Query",
  question: "Responsive design create panna entha CSS feature use pannuvanga?",
  options: [
    "@responsive",
    "@media",
    "@screen",
    "@mobile"
  ],
  answer: "@media",
  explain:
    "@media different screen sizes-ku styles apply panna use pannuvanga."
},

{
  id: 49,
  title: "Font Awesome",
  question: "Website-la icons use panna popular icon library edhu?",
  options: [
    "Bootstrap",
    "Tailwind",
    "Font Awesome",
    "React"
  ],
  answer: "Font Awesome",
  explain:
    "Font Awesome popular icon font library."
},

{
  id: 50,
  title: "Google Material Icons",
  question: "Google official icon system peyar enna?",
  options: [
    "Google UI Icons",
    "Material Icons",
    "Google Fonts",
    "Web Icons"
  ],
  answer: "Material Icons",
  explain:
    "Material Icons Google-oda official design icon system."
},
{
  id: 51,
  title: "Animation Property",
  question: "Continuous CSS animations create panna entha property use pannuvanga?",
  options: [
    "transition",
    "animation",
    "transform",
    "effect"
  ],
  answer: "animation",
  explain:
    "animation property advanced repeated animations create panna use aagum."
},

{
  id: 52,
  title: "Keyframes",
  question: "Custom animation steps define panna entha rule use pannuvanga?",
  options: [
    "@frames",
    "@keyframes",
    "@animate",
    "@motion"
  ],
  answer: "@keyframes",
  explain:
    "@keyframes animation stages define pannum."
},

{
  id: 53,
  title: "Animation Duration",
  question: "Animation evlo neram nadakkanum nu define panna entha property use pannuvanga?",
  options: [
    "animation-delay",
    "animation-duration",
    "animation-speed",
    "transition-duration"
  ],
  answer: "animation-duration",
  explain:
    "Animation total running time define panna use pannuvanga."
},

{
  id: 54,
  title: "Animation Infinite",
  question: "Animation continuous-aa repeat aaga entha value use pannuvanga?",
  options: [
    "repeat",
    "forever",
    "loop",
    "infinite"
  ],
  answer: "infinite",
  explain:
    "animation-iteration-count: infinite continuous looping-ku use aagum."
},

{
  id: 55,
  title: "CSS Variables",
  question: "Reusable custom values create panna CSS-la enna use pannuvanga?",
  options: [
    "constants",
    "variables",
    "functions",
    "selectors"
  ],
  answer: "variables",
  explain:
    "CSS variables reusable styles create panna help pannum."
},

{
  id: 56,
  title: "Variable Syntax",
  question: "CSS variable create panna correct syntax edhu?",
  options: [
    "$color:red;",
    "--color:red;",
    "@color:red;",
    "var-color:red;"
  ],
  answer: "--color:red;",
  explain:
    "CSS custom properties '--' use panni create pannuvanga."
},

{
  id: 57,
  title: "Using Variables",
  question: "CSS variable use panna entha function use pannuvanga?",
  options: [
    "value()",
    "variable()",
    "var()",
    "use()"
  ],
  answer: "var()",
  explain:
    "var() function CSS variables access panna use pannuvanga."
},

{
  id: 58,
  title: "Responsive Design",
  question: "Different devices-ku adapt aagura web design-ku enna peyar?",
  options: [
    "Adaptive Design",
    "Responsive Design",
    "Dynamic Design",
    "Flexible UI"
  ],
  answer: "Responsive Design",
  explain:
    "Responsive design ella screen sizes-layum proper-aa work aagum."
},

{
  id: 59,
  title: "Flex Wrap",
  question: "Flex items next line-ku move aaga entha property use pannuvanga?",
  options: [
    "flex-wrap",
    "wrap-flex",
    "flex-next",
    "overflow-wrap"
  ],
  answer: "flex-wrap",
  explain:
    "flex-wrap items multiple lines-ku move panna allow pannum."
},

{
  id: 60,
  title: "Gap Property",
  question: "Flex/Grid items-kulla spacing create panna entha property use pannuvanga?",
  options: [
    "spacing",
    "margin",
    "gap",
    "padding"
  ],
  answer: "gap",
  explain:
    "gap property item spacing easy-aa control pannum."
},

{
  id: 61,
  title: "Cursor Pointer",
  question: "Clickable cursor style kaatta entha value use pannuvanga?",
  options: [
    "click",
    "hand",
    "pointer",
    "select"
  ],
  answer: "pointer",
  explain:
    "cursor:pointer clickable element indication kudukkum."
},

{
  id: 62,
  title: "Display None",
  question: "Element completely hide panna entha value use pannuvanga?",
  options: [
    "visibility:hidden",
    "display:none",
    "opacity:0",
    "hidden:true"
  ],
  answer: "display:none",
  explain:
    "display:none element-ah layout-lendhu remove pannidum."
},

{
  id: 63,
  title: "Visibility Hidden",
  question: "Element space maintain pannitu hide panna entha property/value use pannuvanga?",
  options: [
    "display:none",
    "visibility:hidden",
    "opacity:0",
    "hidden:block"
  ],
  answer: "visibility:hidden",
  explain:
    "visibility:hidden layout space maintain pannum."
},

{
  id: 64,
  title: "Text Shadow",
  question: "Text-ku shadow effect kudukka entha property use pannuvanga?",
  options: [
    "box-shadow",
    "font-shadow",
    "text-shadow",
    "shadow-text"
  ],
  answer: "text-shadow",
  explain:
    "text-shadow text shadow effects create pannum."
},

{
  id: 65,
  title: "Linear Gradient",
  question: "Gradient background create panna entha CSS function use pannuvanga?",
  options: [
    "gradient()",
    "linear-gradient()",
    "bg-gradient()",
    "color-gradient()"
  ],
  answer: "linear-gradient()",
  explain:
    "linear-gradient smooth color transitions create pannum."
},

{
  id: 66,
  title: "Object Fit",
  question: "Image container fit control panna entha property use pannuvanga?",
  options: [
    "image-fit",
    "fit-image",
    "object-fit",
    "cover-fit"
  ],
  answer: "object-fit",
  explain:
    "object-fit images/videos resize behavior control pannum."
},

{
  id: 67,
  title: "Object Cover",
  question: "Image full container cover panna object-fit-ku entha value use pannuvanga?",
  options: [
    "contain",
    "cover",
    "fill",
    "stretch"
  ],
  answer: "cover",
  explain:
    "cover image crop aanaalum full area fill pannum."
},

{
  id: 68,
  title: "Overflow Scroll",
  question: "Scrollable content create panna overflow-ku entha value use pannuvanga?",
  options: [
    "hidden",
    "scroll",
    "visible",
    "clip"
  ],
  answer: "scroll",
  explain:
    "overflow:scroll scrollbars display pannum."
},

{
  id: 69,
  title: "CSS Comments",
  question: "CSS comment correct syntax edhu?",
  options: [
    "// comment",
    "<!-- comment -->",
    "/* comment */",
    "# comment"
  ],
  answer: "/* comment */",
  explain:
    "CSS comments /* */ syntax use pannuvanga."
},

{
  id: 70,
  title: "Pseudo Element",
  question: "Element specific part style panna use pannura selector type edhu?",
  options: [
    "Pseudo Class",
    "Pseudo Element",
    "Group Selector",
    "Universal Selector"
  ],
  answer: "Pseudo Element",
  explain:
    "::before, ::after maari pseudo elements specific parts style pannum."
},

{
  id: 71,
  title: "Before Pseudo Element",
  question: "Element content-ku munadi content add panna entha pseudo-element use pannuvanga?",
  options: [
    "::after",
    "::first",
    "::before",
    "::start"
  ],
  answer: "::before",
  explain:
    "::before element content-ku munadi virtual content add pannum."
},

{
  id: 72,
  title: "After Pseudo Element",
  question: "Element content-ku apram content add panna entha pseudo-element use pannuvanga?",
  options: [
    "::before",
    "::after",
    "::end",
    "::last"
  ],
  answer: "::after",
  explain:
    "::after content-ku apram virtual content add pannum."
},

{
  id: 73,
  title: "Transition Timing",
  question: "Animation speed curve control panna entha property use pannuvanga?",
  options: [
    "animation-style",
    "transition-timing-function",
    "speed-control",
    "transition-delay"
  ],
  answer: "transition-timing-function",
  explain:
    "ease, linear maari speed behaviors control panna use pannuvanga."
},

{
  id: 74,
  title: "Media Query Max Width",
  question: "Mobile responsive styles apply panna commonly entha condition use pannuvanga?",
  options: [
    "max-width",
    "min-height",
    "screen-size",
    "device-fit"
  ],
  answer: "max-width",
  explain:
    "max-width smaller devices target panna common-aa use pannuvanga."
},

{
  id: 75,
  title: "Google Fonts",
  question: "Custom web fonts import panna popular Google service edhu?",
  options: [
    "Google Text",
    "Google Typography",
    "Google Fonts",
    "Google Style"
  ],
  answer: "Google Fonts",
  explain:
    "Google Fonts free web font library provide pannum."
},
{
  id: 76,
  title: "CSS Min Width",
  question: "Large screen devices-ku styles apply panna media query-la commonly entha condition use pannuvanga?",
  options: [
    "max-width",
    "screen-width",
    "min-width",
    "device-width"
  ],
  answer: "min-width",
  explain:
    "min-width bigger screens-ku responsive styles apply panna use pannuvanga."
},

{
  id: 77,
  title: "CSS Clamp",
  question: "Responsive font sizing-ku modern CSS function edhu?",
  options: [
    "calc()",
    "clamp()",
    "size()",
    "font()"
  ],
  answer: "clamp()",
  explain:
    "clamp() minimum, preferred, maximum sizes define panna use pannuvanga."
},

{
  id: 78,
  title: "CSS Calc",
  question: "Dynamic calculations panna entha CSS function use pannuvanga?",
  options: [
    "math()",
    "calc()",
    "value()",
    "compute()"
  ],
  answer: "calc()",
  explain:
    "calc() multiple units combine calculations panna use pannuvanga."
},

{
  id: 79,
  title: "REM Unit",
  question: "Root font-size based responsive unit edhu?",
  options: [
    "em",
    "rem",
    "px",
    "%"
  ],
  answer: "rem",
  explain:
    "rem root HTML font-size base-la calculate aagum."
},

{
  id: 80,
  title: "EM Unit",
  question: "Parent font-size base-la work pannura CSS unit edhu?",
  options: [
    "vh",
    "rem",
    "em",
    "px"
  ],
  answer: "em",
  explain:
    "em current parent font-size base-la calculate aagum."
},

{
  id: 81,
  title: "CSS Grid Gap",
  question: "Grid rows and columns spacing control panna entha property use pannuvanga?",
  options: [
    "margin",
    "padding",
    "gap",
    "space"
  ],
  answer: "gap",
  explain:
    "gap flex/grid layouts spacing control panna use pannuvanga."
},

{
  id: 82,
  title: "Align Self",
  question: "Single flex item alignment control panna entha property use pannuvanga?",
  options: [
    "justify-self",
    "align-self",
    "place-self",
    "item-align"
  ],
  answer: "align-self",
  explain:
    "align-self specific item alignment control pannum."
},

{
  id: 83,
  title: "CSS nth-child",
  question: "Specific child elements target panna entha pseudo-class use pannuvanga?",
  options: [
    ":hover",
    ":focus",
    ":nth-child()",
    ":checked"
  ],
  answer: ":nth-child()",
  explain:
    ":nth-child() specific child positions select panna use pannuvanga."
},

{
  id: 84,
  title: "First Child",
  question: "First child element target panna entha pseudo-class use pannuvanga?",
  options: [
    ":first-child",
    ":first",
    ":start",
    ":child-first"
  ],
  answer: ":first-child",
  explain:
    ":first-child first child element select pannum."
},

{
  id: 85,
  title: "Last Child",
  question: "Last child element select panna entha pseudo-class use pannuvanga?",
  options: [
    ":last",
    ":last-item",
    ":last-child",
    ":end"
  ],
  answer: ":last-child",
  explain:
    ":last-child last child element select pannum."
},

{
  id: 86,
  title: "CSS Focus",
  question: "Input focus state style panna entha pseudo-class use pannuvanga?",
  options: [
    ":focus",
    ":hover",
    ":active",
    ":visited"
  ],
  answer: ":focus",
  explain:
    ":focus input active typing state-ku use pannuvanga."
},

{
  id: 87,
  title: "CSS Checked",
  question: "Checkbox/radio checked state target panna entha pseudo-class use pannuvanga?",
  options: [
    ":hover",
    ":focus",
    ":checked",
    ":selected"
  ],
  answer: ":checked",
  explain:
    ":checked selected form controls style panna use pannuvanga."
},

{
  id: 88,
  title: "Transform Translate",
  question: "Element move panna entha transform function use pannuvanga?",
  options: [
    "rotate()",
    "translate()",
    "scale()",
    "zoom()"
  ],
  answer: "translate()",
  explain:
    "translate() elements x/y direction-la move pannum."
},

{
  id: 89,
  title: "CSS Sticky",
  question: "Scroll panna sticky behavior create panna entha position value use pannuvanga?",
  options: [
    "fixed",
    "relative",
    "sticky",
    "absolute"
  ],
  answer: "sticky",
  explain:
    "position:sticky scroll threshold reach aagumbodhu stick aagum."
},

{
  id: 90,
  title: "CSS Filter",
  question: "Blur, brightness maari effects add panna entha property use pannuvanga?",
  options: [
    "effect",
    "visual",
    "filter",
    "transform"
  ],
  answer: "filter",
  explain:
    "filter property visual image effects create pannum."
},

{
  id: 91,
  title: "Blur Filter",
  question: "Blur effect create panna entha filter function use pannuvanga?",
  options: [
    "fade()",
    "blur()",
    "shadow()",
    "soft()"
  ],
  answer: "blur()",
  explain:
    "blur() elements soft blur effect create pannum."
},

{
  id: 92,
  title: "CSS Backdrop Filter",
  question: "Glassmorphism blur background effect-ku entha property use pannuvanga?",
  options: [
    "background-filter",
    "backdrop-filter",
    "blur-background",
    "glass-filter"
  ],
  answer: "backdrop-filter",
  explain:
    "backdrop-filter glass UI blur effects create panna use pannuvanga."
},

{
  id: 93,
  title: "CSS Overflow Auto",
  question: "Thevai irundha mattum scrollbar kaatta entha overflow value use pannuvanga?",
  options: [
    "hidden",
    "scroll",
    "auto",
    "visible"
  ],
  answer: "auto",
  explain:
    "overflow:auto required-na mattum scrollbar display pannum."
},

{
  id: 94,
  title: "CSS Resize",
  question: "Textarea resize control panna entha property use pannuvanga?",
  options: [
    "scale",
    "resize",
    "expand",
    "textarea-size"
  ],
  answer: "resize",
  explain:
    "resize property textarea resize behavior control pannum."
},

{
  id: 95,
  title: "CSS Aspect Ratio",
  question: "Fixed width-height proportion maintain panna entha property use pannuvanga?",
  options: [
    "ratio",
    "aspect-ratio",
    "object-fit",
    "dimension"
  ],
  answer: "aspect-ratio",
  explain:
    "aspect-ratio responsive proportions maintain panna use pannuvanga."
},

{
  id: 96,
  title: "CSS Cursor",
  question: "Mouse cursor appearance control panna entha property use pannuvanga?",
  options: [
    "pointer",
    "mouse",
    "cursor",
    "hover"
  ],
  answer: "cursor",
  explain:
    "cursor property mouse appearance control pannum."
},

{
  id: 97,
  title: "CSS Import",
  question: "Another CSS file import panna entha rule use pannuvanga?",
  options: [
    "@include",
    "@css",
    "@import",
    "@link"
  ],
  answer: "@import",
  explain:
    "@import external stylesheets import panna use pannuvanga."
},

{
  id: 98,
  title: "CSS Specificity",
  question: "CSS rules priority system-ku enna peyar?",
  options: [
    "Hierarchy",
    "Specificity",
    "Importance",
    "Cascade Order"
  ],
  answer: "Specificity",
  explain:
    "Specificity strongest selector decide panna help pannum."
},

{
  id: 99,
  title: "Important Keyword",
  question: "CSS rule highest priority kudukka entha keyword use pannuvanga?",
  options: [
    "!priority",
    "!important",
    "!main",
    "!override"
  ],
  answer: "!important",
  explain:
    "!important CSS specificity override panna use pannuvanga."
},

{
  id: 100,
  title: "CSS Framework",
  question: "Ready-made utility classes provide pannura popular CSS framework edhu?",
  options: [
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Express"
  ],
  answer: "Tailwind CSS",
  explain:
    "Tailwind CSS utility-first CSS framework."
}

];

function CssGame() {

  const [currentTask, setCurrentTask] = useState(0);

  const [selectedOption, setSelectedOption] =
    useState(null);

  const [result, setResult] = useState(null);

  const [score, setScore] = useState(0);

  const task = cssTasks[currentTask];

  /* FIREWORK EFFECT */

  const handleFirework = () => {
    confetti({
      particleCount: 160,
      spread: 90,
      origin: { y: 0.6 },

      colors: [
        THEME_COLOR,
        SECONDARY_COLOR,
        '#ffffff'
      ]
    });
  };

  /* OPTION CLICK */

  const handleOptionClick = (option) => {

    if (result === 'success') return;

    setSelectedOption(option);

    if (option === task.answer) {

      setResult('success');

      setScore(score + 10);

      handleFirework();

    } else {

      setResult('fail');
    }
  };

  /* NEXT QUESTION */

  const nextQuestion = () => {

    if (currentTask < cssTasks.length - 1) {

      setCurrentTask(currentTask + 1);

      setSelectedOption(null);

      setResult(null);
    }
  };

  return (
    <Box
      sx={{
        background:
          'linear-gradient(135deg,#050816 0%,#0b1026 50%,#111827 100%)',

        minHeight: '100vh',

        py: 6,

        color: '#fff'
      }}
    >
      <Container maxWidth="md">

        {/* TITLE */}

        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,

            textAlign: 'center',

            mb: 1,

            textShadow:
              '0 0 25px rgba(38,77,228,0.35)',

            fontSize: {
              xs: '1.9rem',
              md: '2.8rem'
            }
          }}
        >
          CSS{' '}
          <span
            style={{
              color: THEME_COLOR,

              textShadow:
                `0 0 25px ${THEME_COLOR}`
            }}
          >
            Quiz Master
          </span>
        </Typography>

        {/* DESCRIPTION */}

        <Typography
          sx={{
            textAlign: 'center',

            color: '#9fb0ff',

            mb: 5,

            fontSize: '0.95rem'
          }}
        >
          Test your CSS styling,
          layouts, animations and responsive
          design knowledge!
        </Typography>

        {/* QUIZ PANEL */}

        <Paper
          sx={{
            p: {
              xs: 3,
              md: 5
            },

            background:
              'rgba(16,24,48,0.72)',

            borderRadius: '26px',

            border:
              '1px solid rgba(127,90,240,0.18)',

            backdropFilter: 'blur(20px)',

            boxShadow:
              '0 10px 40px rgba(38,77,228,0.18)'
          }}
        >

          {/* TOP BAR */}

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 4 }}
          >

            <Chip
              label={`QUESTION ${task.id} / ${cssTasks.length}`}
              sx={{
                bgcolor: '#0d1328',

                color: THEME_COLOR,

                border:
                  '1px solid #1d2d6b',

                fontWeight: 700
              }}
            />

            <Typography
              sx={{
                color: SECONDARY_COLOR,

                fontWeight: 800,

                fontSize: '1.1rem'
              }}
            >
              Score: {score}
            </Typography>

          </Stack>

          {/* QUESTION */}

          <Box sx={{ mb: 4 }}>

            <Typography
              variant="caption"
              sx={{
                color: '#93a3ff',

                fontWeight: 700,

                textTransform: 'uppercase',

                letterSpacing: 1.5,

                display: 'block',

                mb: 1
              }}
            >
              Topic: {task.title}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,

                color: '#fff',

                lineHeight: 1.6,

                fontSize: {
                  xs: '1.1rem',
                  md: '1.35rem'
                }
              }}
            >
              {task.question}
            </Typography>

          </Box>

          <Divider
            sx={{
              borderColor:
                'rgba(255,255,255,0.05)',

              mb: 4
            }}
          />

          {/* OPTIONS */}

          <Grid
            container
            spacing={2}
            sx={{ mb: 4 }}
          >

            {task.options.map((option, idx) => {

              const isSelected =
                selectedOption === option;

              const isCorrect =
                option === task.answer;

              let borderBoxColor = '#24346b';

              let bgBoxColor = '#0f172f';

              if (result && isCorrect) {

                borderBoxColor = '#22c55e';

                bgBoxColor =
                  'rgba(34,197,94,0.08)';
              }

              if (
                result === 'fail' &&
                isSelected
              ) {

                borderBoxColor = '#ef4444';

                bgBoxColor =
                  'rgba(239,68,68,0.08)';
              }

              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={idx}
                >

                  <Box
                    onClick={() =>
                      handleOptionClick(option)
                    }

                    sx={{
                      p: 2.5,

                      borderRadius: '16px',

                      border:
                        `1px solid ${borderBoxColor}`,

                      bgcolor: bgBoxColor,

                      cursor:
                        result === 'success'
                          ? 'not-allowed'
                          : 'pointer',

                      transition: '0.25s',

                      display: 'flex',

                      alignItems: 'center',

                      gap: 1.5,

                      '&:hover': {

                        borderColor: result
                          ? borderBoxColor
                          : SECONDARY_COLOR,

                        bgcolor: result
                          ? bgBoxColor
                          : '#172554',

                        transform:
                          'translateY(-2px)'
                      }
                    }}
                  >

                    <CssIcon
                      sx={{
                        color: isSelected
                          ? THEME_COLOR
                          : '#6272b7',

                        fontSize: 20
                      }}
                    />

                    <Typography
                      sx={{
                        fontFamily: 'monospace',

                        fontWeight: 700,

                        color: '#fff',

                        fontSize: '1rem'
                      }}
                    >
                      {option}
                    </Typography>

                  </Box>

                </Grid>
              );
            })}

          </Grid>

          {/* RESULT PANEL */}

          <AnimatePresence>

            {result === 'success' && (

              <motion.div
                initial={{
                  y: 10,
                  opacity: 0
                }}

                animate={{
                  y: 0,
                  opacity: 1
                }}
              >

                <Box
                  sx={{
                    p: 2.5,

                    bgcolor:
                      'rgba(34,197,94,0.06)',

                    borderRadius: '14px',

                    border:
                      '1px solid rgba(34,197,94,0.2)',

                    mb: 3
                  }}
                >

                  <Typography
                    sx={{
                      color: '#22c55e',

                      fontWeight: 'bold',

                      display: 'flex',

                      alignItems: 'center',

                      gap: 1,

                      mb: 0.7
                    }}
                  >
                    <CheckCircleOutlineIcon
                      fontSize="small"
                    />

                    Correct Answer!
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#bfc9ff',

                      pl: 3.5,

                      lineHeight: 1.6
                    }}
                  >
                    {task.explain}
                  </Typography>

                </Box>

                {currentTask <
                  cssTasks.length - 1 && (

                  <Button
                    fullWidth
                    variant="contained"
                    onClick={nextQuestion}
                    sx={btnStyle}
                  >
                    Next Question ➡️
                  </Button>
                )}

              </motion.div>
            )}

            {result === 'fail' && (

              <motion.div
                initial={{
                  scale: 0.98,
                  opacity: 0
                }}

                animate={{
                  scale: 1,
                  opacity: 1
                }}
              >

                <Box
                  sx={{
                    p: 2.5,

                    bgcolor:
                      'rgba(239,68,68,0.05)',

                    borderRadius: '14px',

                    border:
                      '1px solid rgba(239,68,68,0.2)'
                  }}
                >

                  <Typography
                    sx={{
                      color: '#ef4444',

                      fontWeight: 'bold',

                      display: 'flex',

                      alignItems: 'center',

                      gap: 1
                    }}
                  >
                    <ErrorOutlineIcon
                      fontSize="small"
                    />

                    Wrong Answer!
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#cbd5ff',

                      mt: 1,

                      pl: 3.5,

                      lineHeight: 1.6
                    }}
                  >
                    Correct logic-ah yosichu
                    marubadiyum try pannunga 🔥
                  </Typography>

                </Box>

              </motion.div>
            )}

          </AnimatePresence>

        </Paper>

      </Container>
    </Box>
  );
}

/* BUTTON STYLE */

const btnStyle = {

  background:
    'linear-gradient(135deg,#264de4,#7f5af0)',

  color: '#fff',

  fontWeight: 800,

  borderRadius: '14px',

  py: 1.5,

  textTransform: 'none',

  fontSize: '0.95rem',

  boxShadow:
    '0 10px 25px rgba(38,77,228,0.35)',

  '&:hover': {

    background:
      'linear-gradient(135deg,#1d3bb8,#6844ff)',

    boxShadow:
      '0 0 25px rgba(127,90,240,0.45)'
  }
};

export default CssGame;