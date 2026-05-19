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
  Grid,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const THEME_COLOR = '#e44d26'; // HTML5 Orange Brand Color

// ---------------- HTML TASKS DATA (THANGLISH) ----------------
const htmlTasks = [
   {
    id: 1,
    title: "HTML Introduction",
    question: "HTML-oda full form enna?",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Machine Language",
      "Hyperlink Text Main Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language",
    explain: "HTML-na Hyper Text Markup Language. Idhu thaan web pages create panna use aagura base language."
  },

  {
    id: 2,
    title: "HTML History",
    question: "HTML-ai uruvakkina person yaaru?",
    options: [
      "Bill Gates",
      "Tim Berners-Lee",
      "Elon Musk",
      "Steve Jobs"
    ],
    answer: "Tim Berners-Lee",
    explain: "Tim Berners-Lee thaan World Wide Web-um HTML-um create pannina inventor."
  },

  {
    id: 3,
    title: "HTML Structure",
    question: "HTML document-oda root element enna?",
    options: [
      "<body>",
      "<head>",
      "<html>",
      "<title>"
    ],
    answer: "<html>",
    explain: "<html> tag thaan entire HTML page-oda root element."
  },

  {
    id: 4,
    title: "HTML Elements",
    question: "Opening tag + content + closing tag sernthu enna solluvanga?",
    options: [
      "Attribute",
      "Element",
      "Class",
      "Property"
    ],
    answer: "Element",
    explain: "HTML-la opening tag, content, closing tag serntha structure-ah element nu soluvanga."
  },

  {
    id: 5,
    title: "Headings",
    question: "HTML-la smallest heading tag edhu?",
    options: [
      "<h1>",
      "<h3>",
      "<h6>",
      "<small>"
    ],
    answer: "<h6>",
    explain: "<h1> biggest heading. <h6> smallest heading."
  },

  {
    id: 6,
    title: "Paragraph",
    question: "Paragraph create panna entha tag use pannuvom?",
    options: [
      "<text>",
      "<para>",
      "<p>",
      "<pg>"
    ],
    answer: "<p>",
    explain: "<p> tag paragraph content display panna use aagum."
  },

  {
    id: 7,
    title: "Line Break",
    question: "Next line-ku move panna entha tag use pannuvom?",
    options: [
      "<lb>",
      "<next>",
      "<br>",
      "<break>"
    ],
    answer: "<br>",
    explain: "<br> tag line break create panna use aagum."
  },

  {
    id: 8,
    title: "Horizontal Line",
    question: "Horizontal line display panna entha tag use pannuvom?",
    options: [
      "<line>",
      "<hr>",
      "<border>",
      "<hl>"
    ],
    answer: "<hr>",
    explain: "<hr> tag horizontal rule line create panna use aagum."
  },

  {
    id: 9,
    title: "Comments",
    question: "HTML comment write panna correct syntax edhu?",
    options: [
      "// comment",
      "/* comment */",
      "<!-- comment -->",
      "# comment"
    ],
    answer: "<!-- comment -->",
    explain: "HTML comments browser-la display aagathu. Developer notes-ku use pannuvanga."
  },

  {
    id: 10,
    title: "Attributes",
    question: "HTML attributes enga write pannuvanga?",
    options: [
      "Closing tag",
      "Opening tag",
      "Body content",
      "Footer"
    ],
    answer: "Opening tag",
    explain: "Attributes ellame opening tag-kulla write pannuvanga."
  },

  {
    id: 11,
    title: "Links",
    question: "Hyperlink create panna entha tag use pannuvom?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    answer: "<a>",
    explain: "<a> tag hyperlink create panna use aagum."
  },

  {
    id: 12,
    title: "Anchor Attribute",
    question: "Link destination specify panna entha attribute use pannuvom?",
    options: [
      "src",
      "alt",
      "href",
      "link"
    ],
    answer: "href",
    explain: "href attribute hyperlink URL store pannum."
  },

  {
    id: 13,
    title: "Images",
    question: "Image display panna entha tag use pannuvom?",
    options: [
      "<picture>",
      "<img>",
      "<image>",
      "<photo>"
    ],
    answer: "<img>",
    explain: "<img> tag image display panna use aagum."
  },

  {
    id: 14,
    title: "Image Source",
    question: "Image path kudukka entha attribute use pannuvom?",
    options: [
      "href",
      "alt",
      "src",
      "path"
    ],
    answer: "src",
    explain: "src attribute image source path define pannum."
  },

  {
    id: 15,
    title: "Alternate Text",
    question: "Image load aagalana text show panna entha attribute use pannuvom?",
    options: [
      "title",
      "src",
      "alt",
      "name"
    ],
    answer: "alt",
    explain: "alt attribute image unavailable irundha alternate text show pannum."
  },

  {
    id: 16,
    title: "Lists",
    question: "Unordered list create panna entha tag use pannuvom?",
    options: [
      "<ol>",
      "<li>",
      "<ul>",
      "<list>"
    ],
    answer: "<ul>",
    explain: "<ul> unordered bullet list create panna use aagum."
  },

  {
    id: 17,
    title: "Ordered List",
    question: "Number list create panna entha tag use pannuvom?",
    options: [
      "<ul>",
      "<ol>",
      "<li>",
      "<dl>"
    ],
    answer: "<ol>",
    explain: "<ol> ordered numbered list create panna use aagum."
  },

  {
    id: 18,
    title: "List Item",
    question: "List item create panna entha tag use pannuvom?",
    options: [
      "<item>",
      "<li>",
      "<list>",
      "<dt>"
    ],
    answer: "<li>",
    explain: "<li> tag list items define panna use pannuvanga."
  },

  {
    id: 19,
    title: "Tables",
    question: "Table create panna main tag edhu?",
    options: [
      "<tb>",
      "<tr>",
      "<table>",
      "<td>"
    ],
    answer: "<table>",
    explain: "<table> tag HTML tables create panna use pannuvanga."
  },

  {
    id: 20,
    title: "Table Row",
    question: "Table row create panna entha tag use pannuvom?",
    options: [
      "<td>",
      "<th>",
      "<tr>",
      "<row>"
    ],
    answer: "<tr>",
    explain: "<tr> table row define pannum."
  },

  {
    id: 21,
    title: "Table Data",
    question: "Table cell data create panna entha tag use pannuvom?",
    options: [
      "<tr>",
      "<td>",
      "<th>",
      "<cell>"
    ],
    answer: "<td>",
    explain: "<td> table data cell create panna use pannuvanga."
  },

  {
    id: 22,
    title: "Table Header",
    question: "Bold table heading create panna entha tag use pannuvom?",
    options: [
      "<head>",
      "<th>",
      "<thead>",
      "<td>"
    ],
    answer: "<th>",
    explain: "<th> table heading cells create panna use pannuvanga."
  },

  {
    id: 23,
    title: "Forms",
    question: "User data collect panna entha tag use pannuvom?",
    options: [
      "<input>",
      "<collect>",
      "<form>",
      "<submit>"
    ],
    answer: "<form>",
    explain: "<form> tag user input collect panna use aagum."
  },

  {
    id: 24,
    title: "Input Field",
    question: "Text input create panna entha tag use pannuvom?",
    options: [
      "<textbox>",
      "<field>",
      "<input>",
      "<text>"
    ],
    answer: "<input>",
    explain: "<input> tag multiple input fields create panna use pannuvanga."
  },

  {
    id: 25,
    title: "Password Input",
    question: "Password field create panna correct type enna?",
    options: [
      "type='text'",
      "type='password'",
      "type='secret'",
      "type='hide'"
    ],
    answer: "type='password'",
    explain: "Password characters hide panna type='password' use pannuvanga."
  },
  {
  id: 26,
  title: "Block Elements",
  question: "Full width occupy pannura HTML elements-ku enna peyar?",
  options: [
    "Inline Elements",
    "Block Elements",
    "Void Elements",
    "Semantic Elements"
  ],
  answer: "Block Elements",
  explain: "Block elements full width occupy pannum matrum next line-la start aagum."
},

{
  id: 27,
  title: "Inline Elements",
  question: "Content irukkura alavuku mattum space edukura element type edhu?",
  options: [
    "Block",
    "Container",
    "Inline",
    "Semantic"
  ],
  answer: "Inline",
  explain: "Inline elements required content width mattum eduthu same line-la continue aagum."
},

{
  id: 28,
  title: "Inline Tag Example",
  question: "Keela irukkura tag-la inline element edhu?",
  options: [
    "<div>",
    "<section>",
    "<span>",
    "<article>"
  ],
  answer: "<span>",
  explain: "<span> oru inline element. Adhu full width edukathu."
},

{
  id: 29,
  title: "Block Tag Example",
  question: "Keela irukkura tag-la block element edhu?",
  options: [
    "<span>",
    "<a>",
    "<strong>",
    "<div>"
  ],
  answer: "<div>",
  explain: "<div> tag full width occupy pannura common block element."
},

{
  id: 30,
  title: "Void Elements",
  question: "Closing tag illaama use pannura elements-ku enna peyar?",
  options: [
    "Inline Elements",
    "Block Elements",
    "Void Elements",
    "Semantic Elements"
  ],
  answer: "Void Elements",
  explain: "Void elements-ku closing tag thevai illa."
},

{
  id: 31,
  title: "Void Tag Example",
  question: "Keela irukkura tag-la void element edhu?",
  options: [
    "<div>",
    "<p>",
    "<img>",
    "<section>"
  ],
  answer: "<img>",
  explain: "<img> tag-ku closing tag kedayathu. Adhu oru void element."
},

{
  id: 32,
  title: "Semantic HTML",
  question: "Content meaning-ai clearly describe pannura tags-ku enna peyar?",
  options: [
    "Void Tags",
    "Semantic Tags",
    "Inline Tags",
    "Special Tags"
  ],
  answer: "Semantic Tags",
  explain: "Semantic tags browser-ukum developers-kum content meaning explain pannum."
},

{
  id: 33,
  title: "Semantic Example",
  question: "Keela irukkura semantic tag edhu?",
  options: [
    "<div>",
    "<span>",
    "<footer>",
    "<font>"
  ],
  answer: "<footer>",
  explain: "<footer> semantic meaning kudukkura HTML5 structural tag."
},

{
  id: 34,
  title: "Non Semantic",
  question: "Meaning describe pannaatha tags-ku enna peyar?",
  options: [
    "Semantic Tags",
    "Non Semantic Tags",
    "Void Tags",
    "Media Tags"
  ],
  answer: "Non Semantic Tags",
  explain: "<div>, <span> maari tags meaning describe pannaathu."
},

{
  id: 35,
  title: "Div Element",
  question: "<div> tag mostly etharku use pannuvanga?",
  options: [
    "Video play panna",
    "Layout grouping",
    "Audio create panna",
    "SEO panna"
  ],
  answer: "Layout grouping",
  explain: "<div> tag sections and layouts group panna use pannuvanga."
},

{
  id: 36,
  title: "Span Element",
  question: "<span> tag mostly eppadi use pannuvanga?",
  options: [
    "Block layout",
    "Table create",
    "Inline styling",
    "Audio play"
  ],
  answer: "Inline styling",
  explain: "<span> inline content style panna use aagum."
},

{
  id: 37,
  title: "Header Tag",
  question: "Website top section create panna entha semantic tag use pannuvanga?",
  options: [
    "<bottom>",
    "<header>",
    "<top>",
    "<head>"
  ],
  answer: "<header>",
  explain: "<header> website top navigation/header section-ku use pannuvanga."
},

{
  id: 38,
  title: "Navigation Tag",
  question: "Menus matrum navigation links-ku entha semantic tag use pannuvanga?",
  options: [
    "<nav>",
    "<menu>",
    "<navigate>",
    "<links>"
  ],
  answer: "<nav>",
  explain: "<nav> tag navigation links group panna use pannuvanga."
},

{
  id: 39,
  title: "Section Tag",
  question: "Related content section separate panna entha tag use pannuvanga?",
  options: [
    "<div>",
    "<section>",
    "<group>",
    "<part>"
  ],
  answer: "<section>",
  explain: "<section> related thematic content divide panna use aagum."
},

{
  id: 40,
  title: "Article Tag",
  question: "Independent content piece-ku entha semantic tag use pannuvanga?",
  options: [
    "<article>",
    "<div>",
    "<aside>",
    "<main>"
  ],
  answer: "<article>",
  explain: "<article> independent blog/news content-ku use pannuvanga."
},

{
  id: 41,
  title: "Aside Tag",
  question: "Side content/sidebar create panna entha tag use pannuvanga?",
  options: [
    "<sidebar>",
    "<aside>",
    "<section>",
    "<extra>"
  ],
  answer: "<aside>",
  explain: "<aside> related side information/sidebar create panna use aagum."
},

{
  id: 42,
  title: "Main Tag",
  question: "Website main content represent panna entha semantic tag use pannuvanga?",
  options: [
    "<body>",
    "<main>",
    "<content>",
    "<section>"
  ],
  answer: "<main>",
  explain: "<main> page-oda primary main content define pannum."
},

{
  id: 43,
  title: "Audio Tag",
  question: "Audio files play panna HTML5-la entha tag use pannuvanga?",
  options: [
    "<music>",
    "<sound>",
    "<audio>",
    "<mp3>"
  ],
  answer: "<audio>",
  explain: "<audio> tag audio playback-ku use pannuvanga."
},

{
  id: 44,
  title: "Video Tag",
  question: "Video display panna HTML5-la entha tag use pannuvanga?",
  options: [
    "<movie>",
    "<media>",
    "<video>",
    "<mp4>"
  ],
  answer: "<video>",
  explain: "<video> tag web page-la video play panna use aagum."
},

{
  id: 45,
  title: "Iframe",
  question: "Another website/page embed panna entha tag use pannuvanga?",
  options: [
    "<embed>",
    "<frame>",
    "<iframe>",
    "<window>"
  ],
  answer: "<iframe>",
  explain: "<iframe> other webpages embed panna use pannuvanga."
},

{
  id: 46,
  title: "Iframe Meaning",
  question: "iframe-oda full meaning enna?",
  options: [
    "Internal Frame",
    "Inline Frame",
    "Internet Frame",
    "Input Frame"
  ],
  answer: "Inline Frame",
  explain: "iframe-na Inline Frame."
},

{
  id: 47,
  title: "Controls Attribute",
  question: "Audio/video controls kaatta entha attribute use pannuvanga?",
  options: [
    "play",
    "controls",
    "start",
    "media"
  ],
  answer: "controls",
  explain: "controls attribute browser default play/pause buttons kaatum."
},

{
  id: 48,
  title: "Autoplay Attribute",
  question: "Page load aagumbodhe media auto play panna entha attribute use pannuvanga?",
  options: [
    "autoplay",
    "play",
    "auto",
    "run"
  ],
  answer: "autoplay",
  explain: "autoplay attribute media automatically play aaga use pannuvanga."
},

{
  id: 49,
  title: "Loop Attribute",
  question: "Audio/video repeat-aa play aaga entha attribute use pannuvanga?",
  options: [
    "repeat",
    "reload",
    "loop",
    "again"
  ],
  answer: "loop",
  explain: "loop attribute media continuous-aa replay aagum."
},

{
  id: 50,
  title: "Muted Attribute",
  question: "Video mute mode-la start aaga entha attribute use pannuvanga?",
  options: [
    "silent",
    "mute",
    "muted",
    "volume='0'"
  ],
  answer: "muted",
  explain: "muted attribute media sound mute pannum."
},
{
  id: 51,
  title: "DOCTYPE Declaration",
  question: "HTML5 document start-la browser-ku HTML version solla entha declaration use pannuvom?",
  options: [
    "<html5>",
    "<doctype>",
    "<!DOCTYPE html>",
    "<meta html>"
  ],
  answer: "<!DOCTYPE html>",
  explain: "DOCTYPE declaration browser-ku idhu HTML5 document nu identify panna help pannum."
},

{
  id: 52,
  title: "Head Section",
  question: "Metadata, title, CSS links ellam usually HTML document-la enga irukkum?",
  options: [
    "<body>",
    "<footer>",
    "<head>",
    "<section>"
  ],
  answer: "<head>",
  explain: "<head> section-la metadata, title, stylesheets, scripts include pannuvanga."
},

{
  id: 53,
  title: "Title Tag",
  question: "Browser tab-la page title kaatta entha tag use pannuvanga?",
  options: [
    "<heading>",
    "<tab>",
    "<title>",
    "<caption>"
  ],
  answer: "<title>",
  explain: "<title> tag browser tab title display panna use aagum."
},

{
  id: 54,
  title: "Meta Charset",
  question: "UTF-8 character encoding specify panna commonly entha meta tag use pannuvanga?",
  options: [
    "<meta utf>",
    "<meta charset='UTF-8'>",
    "<charset>",
    "<encoding>"
  ],
  answer: "<meta charset='UTF-8'>",
  explain: "UTF-8 multiple language characters properly display panna help pannum."
},

{
  id: 55,
  title: "Viewport Meta",
  question: "Responsive mobile layout-ku important meta tag edhu?",
  options: [
    "keywords",
    "description",
    "viewport",
    "author"
  ],
  answer: "viewport",
  explain: "Viewport meta tag mobile responsive layouts-ku romba important."
},

{
  id: 56,
  title: "Favicon",
  question: "Browser tab icon add panna mostly entha tag use pannuvanga?",
  options: [
    "<icon>",
    "<fav>",
    "<link>",
    "<img>"
  ],
  answer: "<link>",
  explain: "<link rel='icon'> use panni favicon add pannuvanga."
},

{
  id: 57,
  title: "Label Tag",
  question: "Form input-ku descriptive label kudukka entha tag use pannuvanga?",
  options: [
    "<name>",
    "<caption>",
    "<label>",
    "<text>"
  ],
  answer: "<label>",
  explain: "<label> tag form field description kudukka use pannuvanga."
},

{
  id: 58,
  title: "Textarea",
  question: "Multi-line text input create panna entha tag use pannuvanga?",
  options: [
    "<textbox>",
    "<textarea>",
    "<input type='text'>",
    "<paragraph>"
  ],
  answer: "<textarea>",
  explain: "<textarea> multi-line text input-ku use pannuvanga."
},

{
  id: 59,
  title: "Select Dropdown",
  question: "Dropdown menu create panna entha tag use pannuvanga?",
  options: [
    "<dropdown>",
    "<option>",
    "<select>",
    "<menu>"
  ],
  answer: "<select>",
  explain: "<select> tag dropdown list create panna use aagum."
},

{
  id: 60,
  title: "Option Tag",
  question: "Dropdown-la individual choices create panna entha tag use pannuvanga?",
  options: [
    "<item>",
    "<choice>",
    "<option>",
    "<select-item>"
  ],
  answer: "<option>",
  explain: "<option> dropdown choices define panna use pannuvanga."
},

{
  id: 61,
  title: "Checkbox Input",
  question: "Multiple selections allow panna entha input type use pannuvanga?",
  options: [
    "radio",
    "checkbox",
    "select",
    "toggle"
  ],
  answer: "checkbox",
  explain: "Checkbox multiple options select panna allow pannum."
},

{
  id: 62,
  title: "Radio Input",
  question: "Single option mattum select panna entha input type use pannuvanga?",
  options: [
    "checkbox",
    "radio",
    "toggle",
    "option"
  ],
  answer: "radio",
  explain: "Radio buttons-la oru option mattum choose panna mudiyum."
},

{
  id: 63,
  title: "Submit Button",
  question: "Form submit panna entha input type use pannuvanga?",
  options: [
    "type='send'",
    "type='submit'",
    "type='upload'",
    "type='push'"
  ],
  answer: "type='submit'",
  explain: "Submit button form data server-ku anuppa use pannuvanga."
},

{
  id: 64,
  title: "Reset Button",
  question: "Form values clear/reset panna entha input type use pannuvanga?",
  options: [
    "type='clear'",
    "type='delete'",
    "type='reset'",
    "type='remove'"
  ],
  answer: "type='reset'",
  explain: "Reset button form fields original state-ku restore pannum."
},

{
  id: 65,
  title: "Required Attribute",
  question: "Mandatory field create panna entha attribute use pannuvanga?",
  options: [
    "important",
    "required",
    "validate",
    "needed"
  ],
  answer: "required",
  explain: "required attribute field compulsory-aa fill panna force pannum."
},

{
  id: 66,
  title: "Placeholder Attribute",
  question: "Input field-kulla hint text kaatta entha attribute use pannuvanga?",
  options: [
    "hint",
    "example",
    "placeholder",
    "label"
  ],
  answer: "placeholder",
  explain: "Placeholder temporary hint text display pannum."
},

{
  id: 67,
  title: "Readonly Attribute",
  question: "Input value edit panna mudiyama lock panna entha attribute use pannuvanga?",
  options: [
    "freeze",
    "disabled",
    "readonly",
    "lock"
  ],
  answer: "readonly",
  explain: "Readonly field visible-aa irukkum but edit panna mudiyathu."
},

{
  id: 68,
  title: "Disabled Attribute",
  question: "Entire input field disable panna entha attribute use pannuvanga?",
  options: [
    "readonly",
    "inactive",
    "disabled",
    "stop"
  ],
  answer: "disabled",
  explain: "Disabled input interact panna mudiyama disable aagidum."
},

{
  id: 69,
  title: "Email Input",
  question: "Email validation-ku special input type edhu?",
  options: [
    "type='mail'",
    "type='email'",
    "type='text'",
    "type='gmail'"
  ],
  answer: "type='email'",
  explain: "Email input automatic email format validation support pannum."
},

{
  id: 70,
  title: "Number Input",
  question: "Only numbers accept panna entha input type use pannuvanga?",
  options: [
    "type='count'",
    "type='integer'",
    "type='number'",
    "type='numeric'"
  ],
  answer: "type='number'",
  explain: "Number input numeric values mattum accept pannum."
},

{
  id: 71,
  title: "Date Input",
  question: "Date picker kaatta entha input type use pannuvanga?",
  options: [
    "type='calendar'",
    "type='date'",
    "type='day'",
    "type='time'"
  ],
  answer: "type='date'",
  explain: "Date input browser default calendar picker kaatum."
},

{
  id: 72,
  title: "File Upload",
  question: "Files upload panna entha input type use pannuvanga?",
  options: [
    "type='upload'",
    "type='attachment'",
    "type='file'",
    "type='document'"
  ],
  answer: "type='file'",
  explain: "File input users system-lendhu files choose panna help pannum."
},

{
  id: 73,
  title: "Figure Tag",
  question: "Images with captions group panna entha semantic tag use pannuvanga?",
  options: [
    "<image-group>",
    "<figure>",
    "<caption>",
    "<media>"
  ],
  answer: "<figure>",
  explain: "<figure> image/media with related caption group panna use pannuvanga."
},

{
  id: 74,
  title: "Figcaption",
  question: "Figure image-ku caption add panna entha tag use pannuvanga?",
  options: [
    "<caption>",
    "<figcaption>",
    "<text>",
    "<figure-title>"
  ],
  answer: "<figcaption>",
  explain: "<figcaption> figure element-ku caption kudukka use pannuvanga."
},

{
  id: 75,
  title: "Mark Tag",
  question: "Highlighted text kaatta entha HTML tag use pannuvanga?",
  options: [
    "<highlight>",
    "<mark>",
    "<strong>",
    "<focus>"
  ],
  answer: "<mark>",
  explain: "<mark> highlighted background effect kudukkum."
},
{
  id: 76,
  title: "Table Caption",
  question: "Table-ku title/caption kudukka entha tag use pannuvanga?",
  options: [
    "<title>",
    "<caption>",
    "<thead>",
    "<label>"
  ],
  answer: "<caption>",
  explain: "<caption> tag table-ku heading/title display panna use pannuvanga."
},

{
  id: 77,
  title: "Table Head",
  question: "Table heading rows group panna entha tag use pannuvanga?",
  options: [
    "<tbody>",
    "<tfoot>",
    "<thead>",
    "<head>"
  ],
  answer: "<thead>",
  explain: "<thead> table heading rows group panna use pannuvanga."
},

{
  id: 78,
  title: "Table Body",
  question: "Main table data rows group panna entha tag use pannuvanga?",
  options: [
    "<tbody>",
    "<thead>",
    "<tr>",
    "<td>"
  ],
  answer: "<tbody>",
  explain: "<tbody> table main content rows hold pannum."
},

{
  id: 79,
  title: "Table Footer",
  question: "Table footer/summaries group panna entha tag use pannuvanga?",
  options: [
    "<tfoot>",
    "<footer>",
    "<bottom>",
    "<summary>"
  ],
  answer: "<tfoot>",
  explain: "<tfoot> totals or footer details group panna use pannuvanga."
},

{
  id: 80,
  title: "Colspan",
  question: "Multiple columns merge panna entha attribute use pannuvanga?",
  options: [
    "rowspan",
    "merge",
    "colspan",
    "span"
  ],
  answer: "colspan",
  explain: "colspan multiple columns-ah join panna use aagum."
},

{
  id: 81,
  title: "Rowspan",
  question: "Multiple rows merge panna entha attribute use pannuvanga?",
  options: [
    "colspan",
    "rowspan",
    "merge-row",
    "join"
  ],
  answer: "rowspan",
  explain: "rowspan multiple rows-ah merge panna use pannuvanga."
},

{
  id: 82,
  title: "Strong Tag",
  question: "Important bold text indicate panna entha tag use pannuvanga?",
  options: [
    "<bold>",
    "<strong>",
    "<b>",
    "<important>"
  ],
  answer: "<strong>",
  explain: "<strong> semantic importance kudukkura bold tag."
},

{
  id: 83,
  title: "Bold Tag",
  question: "Visual bold text mattum kaatta entha tag use pannuvanga?",
  options: [
    "<strong>",
    "<b>",
    "<bold>",
    "<heavy>"
  ],
  answer: "<b>",
  explain: "<b> visual bold effect mattum kudukkum."
},

{
  id: 84,
  title: "Italic Tag",
  question: "Italic style text create panna entha tag use pannuvanga?",
  options: [
    "<italic>",
    "<style>",
    "<i>",
    "<em>"
  ],
  answer: "<i>",
  explain: "<i> italic appearance kudukka use pannuvanga."
},

{
  id: 85,
  title: "Emphasis Tag",
  question: "Emphasized meaning kudukka entha semantic formatting tag use pannuvanga?",
  options: [
    "<i>",
    "<em>",
    "<focus>",
    "<mark>"
  ],
  answer: "<em>",
  explain: "<em> emphasis meaning kudukkum semantic italic tag."
},

{
  id: 86,
  title: "Underline Tag",
  question: "Underline text create panna entha tag use pannuvanga?",
  options: [
    "<underline>",
    "<u>",
    "<line>",
    "<ins>"
  ],
  answer: "<u>",
  explain: "<u> underline effect kudukka use pannuvanga."
},

{
  id: 87,
  title: "Superscript",
  question: "x² maari upper power text create panna entha tag use pannuvanga?",
  options: [
    "<power>",
    "<sup>",
    "<top>",
    "<super>"
  ],
  answer: "<sup>",
  explain: "<sup> superscript text create panna use pannuvanga."
},

{
  id: 88,
  title: "Subscript",
  question: "H₂O maari lower text create panna entha tag use pannuvanga?",
  options: [
    "<sub>",
    "<down>",
    "<small>",
    "<lower>"
  ],
  answer: "<sub>",
  explain: "<sub> subscript text create panna use pannuvanga."
},

{
  id: 89,
  title: "Deleted Text",
  question: "Deleted/removed text kaatta entha tag use pannuvanga?",
  options: [
    "<remove>",
    "<strike>",
    "<del>",
    "<cut>"
  ],
  answer: "<del>",
  explain: "<del> deleted text strike line-oda kaatum."
},

{
  id: 90,
  title: "HTML Entity",
  question: "Less than symbol (<) display panna entha HTML entity use pannuvanga?",
  options: [
    "&gt;",
    "&lt;",
    "&copy;",
    "&nbsp;"
  ],
  answer: "&lt;",
  explain: "&lt; entity '<' symbol display panna use aagum."
},

{
  id: 91,
  title: "Non Breaking Space",
  question: "Extra non-breaking space create panna entha HTML entity use pannuvanga?",
  options: [
    "&space;",
    "&nbsp;",
    "&blank;",
    "&tab;"
  ],
  answer: "&nbsp;",
  explain: "&nbsp; extra fixed space create panna use pannuvanga."
},

{
  id: 92,
  title: "Copyright Entity",
  question: "© symbol display panna entha HTML entity use pannuvanga?",
  options: [
    "&copy;",
    "&copyright;",
    "&symbol;",
    "&reg;"
  ],
  answer: "&copy;",
  explain: "&copy; copyright symbol generate pannum."
},

{
  id: 93,
  title: "DOM Meaning",
  question: "DOM-oda full form enna?",
  options: [
    "Document Object Model",
    "Display Object Management",
    "Document Order Module",
    "Dynamic Object Mapping"
  ],
  answer: "Document Object Model",
  explain: "DOM browser-la HTML page structure represent pannum."
},

{
  id: 94,
  title: "DOM Tree",
  question: "HTML document structure DOM-la eppadi represent aagum?",
  options: [
    "List",
    "Array",
    "Tree",
    "Table"
  ],
  answer: "Tree",
  explain: "DOM tree structure parent-child relationships use pannum."
},

{
  id: 95,
  title: "Parent Element",
  question: "Oru element-kulla vera element irundha outer element-ku enna peyar?",
  options: [
    "Sibling",
    "Parent",
    "Child",
    "Inline"
  ],
  answer: "Parent",
  explain: "Outer containing element parent element nu soluvanga."
},

{
  id: 96,
  title: "Child Element",
  question: "Parent element-kulla irukkura element-ku enna peyar?",
  options: [
    "Parent",
    "Root",
    "Child",
    "Sibling"
  ],
  answer: "Child",
  explain: "Nested inner element child element nu azhaippanga."
},

{
  id: 97,
  title: "Canvas Tag",
  question: "Graphics draw panna HTML5-la entha tag use pannuvanga?",
  options: [
    "<graphic>",
    "<draw>",
    "<canvas>",
    "<svg>"
  ],
  answer: "<canvas>",
  explain: "<canvas> dynamic graphics draw panna use pannuvanga."
},

{
  id: 98,
  title: "SVG",
  question: "Scalable vector graphics create panna entha tag use pannuvanga?",
  options: [
    "<vector>",
    "<svg>",
    "<canvas>",
    "<graphic>"
  ],
  answer: "<svg>",
  explain: "<svg> scalable vector graphics create panna use pannuvanga."
},

{
  id: 99,
  title: "Details Tag",
  question: "Expandable/collapsible content create panna entha tag use pannuvanga?",
  options: [
    "<dropdown>",
    "<collapse>",
    "<details>",
    "<expand>"
  ],
  answer: "<details>",
  explain: "<details> expandable hidden content sections create pannum."
},

{
  id: 100,
  title: "Summary Tag",
  question: "<details> element-oda visible heading create panna entha tag use pannuvanga?",
  options: [
    "<title>",
    "<heading>",
    "<summary>",
    "<caption>"
  ],
  answer: "<summary>",
  explain: "<summary> details element-ku clickable heading create pannum."
}
];

function HtmlGame() {
  const [currentTask, setCurrentTask] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);

  const task = htmlTasks[currentTask];

  const handleFirework = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: [THEME_COLOR, '#264de4', '#ffffff'],
    });
  };

  const handleOptionClick = (option) => {
    if (result === 'success') return; // Correct panna apram option-ah lock panrom
    setSelectedOption(option);

    if (option === task.answer) {
      setResult('success');
      setScore(score + 10);
      handleFirework();
    } else {
      setResult('fail');
    }
  };

  const nextQuestion = () => {
    if (currentTask < htmlTasks.length - 1) {
      setCurrentTask(currentTask + 1);
      setSelectedOption(null);
      setResult(null);
    }
  };

  return (
    <Box sx={{ bgcolor: '#0f0502', minHeight: '100vh', py: 6, color: '#fff', fontFamily: 'sans-serif' }}>
      <Container maxWidth="md">
        
        {/* TITLE */}
        <Typography variant="h4" sx={{ fontWeight: 900, textAlign: 'center', mb: 1, textShadow: '0 0 25px rgba(228,77,38,0.2)', fontSize: { xs: '1.8rem', md: '2.8rem' } }}>
          HTML <span style={{ color: THEME_COLOR, textShadow: `0 0 25px ${THEME_COLOR}` }}>Quiz Master</span> ⚡
        </Typography>
        <Typography sx={{ textAlign: 'center', color: '#bfaaa3', mb: 5, fontSize: '0.95rem' }}>
          Choose the best answers to test your HTML core knowledge!
        </Typography>

        {/* QUIZ INTERACTIVE INTERFACE PANEL */}
        <Paper sx={{ p: { xs: 3, md: 5 }, bgcolor: 'rgba(28,14,10,0.6)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)' }}>
          
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
            <Chip label={`QUESTION ${task.id} / ${htmlTasks.length}`} sx={{ bgcolor: '#000', color: THEME_COLOR, border: '1px solid #3d1b12', fontWeight: 700 }} />
            <Typography sx={{ color: THEME_COLOR, fontWeight: 800, fontSize: '1.1rem' }}>Score: {score}</Typography>
          </Stack>

          {/* TASK TITLE & QUESTION */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="caption" sx={{ color: '#8c6b62', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, display: 'block', mb: 1 }}>
              Topic: {task.title}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#fff', lineHeight: 1.6, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
              {task.question}
            </Typography>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255,145,0,0.05)', mb: 4 }} />

          {/* OPTIONS GRID */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {task.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === task.answer;
              
              let borderBoxColor = '#3d1b12';
              let bgBoxColor = '#140a07';
              if (result && isCorrect) { borderBoxColor = '#09ee24'; bgBoxColor = 'rgba(9,238,36,0.06)'; }
              if (result === 'fail' && isSelected) { borderBoxColor = '#ff5252'; bgBoxColor = 'rgba(255,82,82,0.06)'; }

              return (
                <Grid item xs={12} sm={6} key={idx}>
                  <Box
                    onClick={() => handleOptionClick(option)}
                    sx={{
                      p: 2.5, borderRadius: '14px', border: `1px solid ${borderBoxColor}`, bgcolor: bgBoxColor,
                      cursor: result === 'success' ? 'not-allowed' : 'pointer', transition: '0.2s',
                      display: 'flex', alignItems: 'center', gap: 1.5,
                      '&:hover': { borderColor: result ? borderBoxColor : THEME_COLOR, bgcolor: result ? bgBoxColor : '#24120e' }
                    }}
                  >
                    <CodeIcon sx={{ color: isSelected ? THEME_COLOR : '#5c433c', fontSize: 18 }} />
                    <Typography sx={{ fontFamily: 'monospace', fontWeight: 700, color: '#fff', fontSize: '1rem' }}>
                      {option}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          {/* EXPLANATION & NEXT BUTTON SYSTEM */}
          <AnimatePresence>
            {result === 'success' && (
              <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                <Box sx={{ p: 2.5, bgcolor: 'rgba(9, 238, 36, 0.04)', borderRadius: '12px', border: '1px solid #09ee2422', mb: 3 }}>
                  <Typography sx={{ color: '#09ee24', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, fontSize: '0.95rem' }}>
                    <CheckCircleOutlineIcon fontSize="small" /> Correct Answer! Thanimaiyana Vilakkam:
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#bfaaa3', pl: 3.5, lineHeight: 1.5 }}>
                    {task.explain}
                  </Typography>
                </Box>
                {currentTask < htmlTasks.length - 1 && (
                  <Button fullWidth variant="contained" onClick={nextQuestion} sx={btnStyle}>
                    Next Question ➡️
                  </Button>
                )}
              </motion.div>
            )}

            {result === 'fail' && (
              <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <Box sx={{ p: 2.5, bgcolor: 'rgba(255, 82, 82, 0.04)', borderRadius: '12px', border: '1px solid #ff525222' }}>
                  <Typography sx={{ color: '#ff5252', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.95rem' }}>
                    <ErrorOutlineIcon fontSize="small" /> Thappana Badhil!
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#bfaaa3', mt: 1, pl: 3.5, lineHeight: 1.5 }}>
                    Intha tag ithuku match aagala. Vera correct-ana logic tag-ah yosichi click pannunga!
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

// Button configuration
const btnStyle = {
  bgcolor: THEME_COLOR, color: '#fff', fontWeight: 800, borderRadius: '12px', py: 1.5, textTransform: 'none', fontSize: '0.95rem',
  '&:hover': { bgcolor: '#c93b18', boxShadow: `0 0 20px ${THEME_COLOR}55` }
};

export default HtmlGame;