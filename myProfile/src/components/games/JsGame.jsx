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

import JavascriptIcon from '@mui/icons-material/Javascript';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const THEME_COLOR = '#f7df1e';
const SECONDARY_COLOR = '#f59e0b';

/* JAVASCRIPT QUESTIONS */

const jsTasks = [

  {
    id: 1,
    title: "JavaScript Introduction",
    question: "JavaScript mainly etharku use pannuvanga?",
    options: [
      "Database manage panna",
      "Web pages interactive aakka",
      "Server shutdown panna",
      "Image edit panna"
    ],
    answer: "Web pages interactive aakka",
    explain:
      "JavaScript webpage-ku interactivity add panna use aagum."
  },

  {
    id: 2,
    title: "JavaScript History",
    question: "JavaScript-ai create pannina developer yaaru?",
    options: [
      "Bill Gates",
      "Brendan Eich",
      "Tim Berners-Lee",
      "Mark Zuckerberg"
    ],
    answer: "Brendan Eich",
    explain:
      "Brendan Eich 1995-la JavaScript create panninar."
  },

  {
    id: 3,
    title: "ECMAScript",
    question: "JavaScript-oda official standardized version-ku enna peyar?",
    options: [
      "TypeScript",
      "NodeScript",
      "ECMAScript",
      "LiveScript"
    ],
    answer: "ECMAScript",
    explain:
      "ECMAScript JavaScript-oda official standard specification."
  },

  {
    id: 4,
    title: "JavaScript Engine",
    question: "Google Chrome browser use pannura JavaScript engine peyar enna?",
    options: [
      "SpiderMonkey",
      "V8",
      "Nitro",
      "Chakra"
    ],
    answer: "V8",
    explain:
      "Google Chrome V8 engine use pannudhu."
  },

  {
    id: 5,
    title: "Console Log",
    question: "Console-la output print panna entha method use pannuvanga?",
    options: [
      "print()",
      "console.log()",
      "write()",
      "show()"
    ],
    answer: "console.log()",
    explain:
      "console.log() debugging matrum outputs check panna use pannuvanga."
  },

  {
    id: 6,
    title: "Variable Declaration",
    question: "Modern JavaScript-la variable create panna common keyword edhu?",
    options: [
      "define",
      "let",
      "int",
      "string"
    ],
    answer: "let",
    explain:
      "let modern block-scoped variable keyword."
  },

  {
    id: 7,
    title: "Constant Variable",
    question: "Value change panna mudiyatha variable-ku entha keyword use pannuvanga?",
    options: [
      "let",
      "const",
      "var",
      "fixed"
    ],
    answer: "const",
    explain:
      "const immutable values create panna use pannuvanga."
  },

  {
    id: 8,
    title: "Old Variable Keyword",
    question: "Old JavaScript-la mostly use pannina variable keyword edhu?",
    options: [
      "let",
      "const",
      "var",
      "value"
    ],
    answer: "var",
    explain:
      "var old JavaScript variable declaration keyword."
  },

  {
    id: 9,
    title: "String Data Type",
    question: "Text values represent panna entha data type use pannuvanga?",
    options: [
      "boolean",
      "string",
      "number",
      "array"
    ],
    answer: "string",
    explain:
      "String text values store panna use pannuvanga."
  },

  {
    id: 10,
    title: "Boolean Type",
    question: "true or false values-ku entha data type use pannuvanga?",
    options: [
      "string",
      "boolean",
      "number",
      "object"
    ],
    answer: "boolean",
    explain:
      "Boolean only true or false values hold pannum."
  },

  {
    id: 11,
    title: "Undefined",
    question: "Value assign pannaama irukkura variable default value enna?",
    options: [
      "null",
      "0",
      "undefined",
      "false"
    ],
    answer: "undefined",
    explain:
      "Assign pannaatha variable undefined return pannum."
  },

  {
    id: 12,
    title: "Null",
    question: "Intentional empty value represent panna JavaScript-la enna use pannuvanga?",
    options: [
      "undefined",
      "false",
      "null",
      "0"
    ],
    answer: "null",
    explain:
      "null intentional empty value represent pannum."
  },

  {
    id: 13,
    title: "Addition Operator",
    question: "Addition panna entha operator use pannuvanga?",
    options: [
      "-",
      "+",
      "*",
      "/"
    ],
    answer: "+",
    explain:
      "+ operator addition-ku use pannuvanga."
  },

  {
    id: 14,
    title: "Strict Equality",
    question: "Value-um type-um compare panna entha operator use pannuvanga?",
    options: [
      "==",
      "===",
      "=",
      "!="
    ],
    answer: "===",
    explain:
      "=== strict equality type-um compare pannum."
  },

  {
    id: 15,
    title: "If Condition",
    question: "Conditional execution-ku entha keyword use pannuvanga?",
    options: [
      "loop",
      "if",
      "switch",
      "for"
    ],
    answer: "if",
    explain:
      "if condition true-na code execute aagum."
  },

  {
    id: 16,
    title: "Else Block",
    question: "if false aana alternative block-ku entha keyword use pannuvanga?",
    options: [
      "elseif",
      "alternate",
      "else",
      "otherwise"
    ],
    answer: "else",
    explain:
      "else alternative execution path create pannum."
  },

  {
    id: 17,
    title: "Switch Statement",
    question: "Multiple conditions handle panna entha statement use pannuvanga?",
    options: [
      "if",
      "switch",
      "loop",
      "map"
    ],
    answer: "switch",
    explain:
      "switch multiple cases easy-aa handle pannum."
  },

  {
    id: 18,
    title: "For Loop",
    question: "Known iteration count-ku commonly entha loop use pannuvanga?",
    options: [
      "while",
      "for",
      "switch",
      "if"
    ],
    answer: "for",
    explain:
      "for loop repeated iterations-ku use pannuvanga."
  },

  {
    id: 19,
    title: "While Loop",
    question: "Condition true varaikum run aagura loop edhu?",
    options: [
      "for",
      "map",
      "while",
      "switch"
    ],
    answer: "while",
    explain:
      "while condition true varaikum execute aagum."
  },

  {
    id: 20,
    title: "Function",
    question: "Reusable block of code-ku enna peyar?",
    options: [
      "variable",
      "loop",
      "function",
      "object"
    ],
    answer: "function",
    explain:
      "Function reusable logic block create pannum."
  },

  {
    id: 21,
    title: "Arrow Function",
    question: "Modern shorthand function syntax-ku enna peyar?",
    options: [
      "normal function",
      "arrow function",
      "callback",
      "method"
    ],
    answer: "arrow function",
    explain:
      "=> syntax use pannina adhu arrow function."
  },

  {
    id: 22,
    title: "Return Keyword",
    question: "Function value return panna entha keyword use pannuvanga?",
    options: [
      "send",
      "output",
      "return",
      "break"
    ],
    answer: "return",
    explain:
      "return function result return pannum."
  },

  {
    id: 23,
    title: "Array",
    question: "Multiple values single variable-la store panna enna use pannuvanga?",
    options: [
      "string",
      "array",
      "boolean",
      "null"
    ],
    answer: "array",
    explain:
      "Array multiple values ordered-aa store pannum."
  },

  {
    id: 24,
    title: "Push Method",
    question: "Array end-la new item add panna entha method use pannuvanga?",
    options: [
      "pop()",
      "push()",
      "shift()",
      "concat()"
    ],
    answer: "push()",
    explain:
      "push() array end-la values add pannum."
  },

  {
    id: 25,
    title: "Pop Method",
    question: "Array last item remove panna entha method use pannuvanga?",
    options: [
      "push()",
      "remove()",
      "pop()",
      "delete()"
    ],
    answer: "pop()",
    explain:
      "pop() last item remove pannum."
  },
  {
  id: 26,
  title: "Shift Method",
  question: "Array first item remove panna entha method use pannuvanga?",
  options: [
    "shift()",
    "push()",
    "pop()",
    "slice()"
  ],
  answer: "shift()",
  explain:
    "shift() array first element remove pannum."
},

{
  id: 27,
  title: "Unshift Method",
  question: "Array beginning-la item add panna entha method use pannuvanga?",
  options: [
    "push()",
    "shift()",
    "unshift()",
    "splice()"
  ],
  answer: "unshift()",
  explain:
    "unshift() array start-la items add pannum."
},

{
  id: 28,
  title: "Map Method",
  question: "Array values transform panna commonly entha method use pannuvanga?",
  options: [
    "map()",
    "find()",
    "push()",
    "slice()"
  ],
  answer: "map()",
  explain:
    "map() each item transform panni new array return pannum."
},

{
  id: 29,
  title: "Filter Method",
  question: "Specific condition match aagura items mattum get panna entha method use pannuvanga?",
  options: [
    "filter()",
    "push()",
    "map()",
    "join()"
  ],
  answer: "filter()",
  explain:
    "filter() condition based filtered array return pannum."
},

{
  id: 30,
  title: "Find Method",
  question: "Condition match aagura first item get panna entha method use pannuvanga?",
  options: [
    "find()",
    "filter()",
    "map()",
    "every()"
  ],
  answer: "find()",
  explain:
    "find() first matching item return pannum."
},

{
  id: 31,
  title: "Includes Method",
  question: "Specific value irukka check panna entha method use pannuvanga?",
  options: [
    "check()",
    "has()",
    "includes()",
    "find()"
  ],
  answer: "includes()",
  explain:
    "includes() value existence true/false return pannum."
},

{
  id: 32,
  title: "Slice Method",
  question: "Original array change pannaama portion copy panna entha method use pannuvanga?",
  options: [
    "splice()",
    "slice()",
    "cut()",
    "remove()"
  ],
  answer: "slice()",
  explain:
    "slice() original array modify pannaama copy create pannum."
},

{
  id: 33,
  title: "Splice Method",
  question: "Array items add/remove panna entha method use pannuvanga?",
  options: [
    "slice()",
    "splice()",
    "replace()",
    "delete()"
  ],
  answer: "splice()",
  explain:
    "splice() original array modify pannum."
},

{
  id: 34,
  title: "Object",
  question: "Key-value pair structure-ku JavaScript-la enna peyar?",
  options: [
    "array",
    "object",
    "string",
    "boolean"
  ],
  answer: "object",
  explain:
    "Objects key-value data structure use pannum."
},

{
  id: 35,
  title: "Object Access",
  question: "Object property access panna commonly entha operator use pannuvanga?",
  options: [
    "+",
    ".",
    "#",
    "@"
  ],
  answer: ".",
  explain:
    "Dot notation object properties access panna use pannuvanga."
},

{
  id: 36,
  title: "Template Literals",
  question: "String interpolation panna entha symbol use pannuvanga?",
  options: [
    "''",
    "\"\"",
    "``",
    "()"
  ],
  answer: "``",
  explain:
    "Backticks template literals create panna use pannuvanga."
},

{
  id: 37,
  title: "String Length",
  question: "String character count get panna entha property use pannuvanga?",
  options: [
    "size",
    "count",
    "length",
    "characters"
  ],
  answer: "length",
  explain:
    "length property string total characters return pannum."
},

{
  id: 38,
  title: "Uppercase Method",
  question: "Text uppercase convert panna entha method use pannuvanga?",
  options: [
    "upper()",
    "toUpperCase()",
    "capitalize()",
    "caseUpper()"
  ],
  answer: "toUpperCase()",
  explain:
    "toUpperCase() text uppercase convert pannum."
},

{
  id: 39,
  title: "Lowercase Method",
  question: "Text lowercase convert panna entha method use pannuvanga?",
  options: [
    "toLowerCase()",
    "small()",
    "lower()",
    "caseLower()"
  ],
  answer: "toLowerCase()",
  explain:
    "toLowerCase() lowercase text return pannum."
},

{
  id: 40,
  title: "Trim Method",
  question: "String extra spaces remove panna entha method use pannuvanga?",
  options: [
    "removeSpace()",
    "trim()",
    "cut()",
    "replace()"
  ],
  answer: "trim()",
  explain:
    "trim() start/end spaces remove pannum."
},

{
  id: 41,
  title: "Split Method",
  question: "String array-aa convert panna entha method use pannuvanga?",
  options: [
    "join()",
    "split()",
    "slice()",
    "break()"
  ],
  answer: "split()",
  explain:
    "split() separator based string divide pannum."
},

{
  id: 42,
  title: "Join Method",
  question: "Array values string-aa convert panna entha method use pannuvanga?",
  options: [
    "merge()",
    "join()",
    "concat()",
    "stringify()"
  ],
  answer: "join()",
  explain:
    "join() array items string-aa combine pannum."
},

{
  id: 43,
  title: "DOM Meaning",
  question: "DOM-oda full form enna?",
  options: [
    "Document Object Model",
    "Data Object Mapping",
    "Document Oriented Method",
    "Display Object Module"
  ],
  answer: "Document Object Model",
  explain:
    "DOM webpage structure browser-la represent pannum."
},

{
  id: 44,
  title: "Get Element By ID",
  question: "Specific ID element select panna entha method use pannuvanga?",
  options: [
    "query()",
    "getElementById()",
    "selectId()",
    "findElement()"
  ],
  answer: "getElementById()",
  explain:
    "getElementById() unique ID element select pannum."
},

{
  id: 45,
  title: "Query Selector",
  question: "CSS selector use panni element select panna entha method use pannuvanga?",
  options: [
    "querySelector()",
    "selectElement()",
    "find()",
    "target()"
  ],
  answer: "querySelector()",
  explain:
    "querySelector() CSS selectors use pannum."
},

{
  id: 46,
  title: "Inner HTML",
  question: "Element HTML content modify panna entha property use pannuvanga?",
  options: [
    "textContent",
    "innerHTML",
    "innerText",
    "value"
  ],
  answer: "innerHTML",
  explain:
    "innerHTML HTML structure modify panna use pannuvanga."
},

{
  id: 47,
  title: "Text Content",
  question: "Only plain text modify panna entha property safer-aa use pannuvanga?",
  options: [
    "innerHTML",
    "htmlText",
    "textContent",
    "appendHTML"
  ],
  answer: "textContent",
  explain:
    "textContent only text handle pannum."
},

{
  id: 48,
  title: "Create Element",
  question: "New HTML element create panna entha method use pannuvanga?",
  options: [
    "appendChild()",
    "createElement()",
    "newElement()",
    "buildElement()"
  ],
  answer: "createElement()",
  explain:
    "createElement() dynamic elements create panna use pannuvanga."
},

{
  id: 49,
  title: "Append Child",
  question: "New element DOM-kulla add panna entha method use pannuvanga?",
  options: [
    "appendChild()",
    "insertHTML()",
    "push()",
    "appendHTML()"
  ],
  answer: "appendChild()",
  explain:
    "appendChild() child nodes add panna use pannuvanga."
},

{
  id: 50,
  title: "Remove Element",
  question: "DOM element remove panna modern method edhu?",
  options: [
    "delete()",
    "remove()",
    "cut()",
    "destroy()"
  ],
 answer: "remove()",
 explain:
    "remove() DOM element delete panna use pannuvanga."
},
{
  id: 51,
  title: "Click Event",
  question: "Button click detect panna entha event use pannuvanga?",
  options: [
    "hover",
    "submit",
    "click",
    "change"
  ],
  answer: "click",
  explain:
    "click event mouse click interactions detect pannum."
},

{
  id: 52,
  title: "Input Event",
  question: "Input field value change aagumbodhu realtime detect panna entha event use pannuvanga?",
  options: [
    "click",
    "input",
    "hover",
    "focus"
  ],
  answer: "input",
  explain:
    "input event typing realtime changes detect pannum."
},

{
  id: 53,
  title: "Submit Event",
  question: "Form submit detect panna entha event use pannuvanga?",
  options: [
    "send",
    "submit",
    "push",
    "save"
  ],
  answer: "submit",
  explain:
    "submit event form submission handle pannum."
},

{
  id: 54,
  title: "Keydown Event",
  question: "Keyboard key press detect panna entha event use pannuvanga?",
  options: [
    "keypress",
    "keydown",
    "keyup",
    "typing"
  ],
  answer: "keydown",
  explain:
    "keydown keyboard key press detect pannum."
},

{
  id: 55,
  title: "Mouseover Event",
  question: "Mouse element mela varumbodhu trigger aagura event edhu?",
  options: [
    "click",
    "mouseover",
    "hover",
    "mouseenter"
  ],
  answer: "mouseover",
  explain:
    "mouseover mouse pointer enter aagumbodhu run aagum."
},

{
  id: 56,
  title: "addEventListener",
  question: "Events attach panna modern method edhu?",
  options: [
    "attachEvent()",
    "listenEvent()",
    "addEventListener()",
    "onEvent()"
  ],
  answer: "addEventListener()",
  explain:
    "addEventListener() multiple events safely attach panna use pannuvanga."
},

{
  id: 57,
  title: "Event Bubbling",
  question: "Child-lendhu parent-ku events propagate aagura process-ku enna peyar?",
  options: [
    "capturing",
    "delegation",
    "bubbling",
    "looping"
  ],
  answer: "bubbling",
  explain:
    "Event bubbling child-lendhu parent-ku move aagum."
},

{
  id: 58,
  title: "Event Capturing",
  question: "Parent-lendhu child-ku event travel aagura process-ku enna peyar?",
  options: [
    "bubbling",
    "capturing",
    "delegation",
    "targeting"
  ],
  answer: "capturing",
  explain:
    "Capturing phase parent-lendhu child-ku event move aagum."
},

{
  id: 59,
  title: "Stop Propagation",
  question: "Event bubbling stop panna entha method use pannuvanga?",
  options: [
    "preventDefault()",
    "stopPropagation()",
    "break()",
    "cancelEvent()"
  ],
  answer: "stopPropagation()",
  explain:
    "stopPropagation() event propagation stop pannum."
},

{
  id: 60,
  title: "Prevent Default",
  question: "Default browser behavior stop panna entha method use pannuvanga?",
  options: [
    "preventDefault()",
    "stopEvent()",
    "removeDefault()",
    "cancel()"
  ],
  answer: "preventDefault()",
  explain:
    "preventDefault() browser default actions prevent pannum."
},

{
  id: 61,
  title: "Event Delegation",
  question: "Parent element use panni multiple child events handle pannura technique-ku enna peyar?",
  options: [
    "Event Capturing",
    "Event Delegation",
    "Event Loop",
    "Event Binding"
  ],
  answer: "Event Delegation",
  explain:
    "Event delegation performance improve panna help pannum."
},

{
  id: 62,
  title: "Callback Function",
  question: "Another function-kulla argument-aa pass pannura function-ku enna peyar?",
  options: [
    "Arrow Function",
    "Callback Function",
    "Normal Function",
    "Async Function"
  ],
  answer: "Callback Function",
  explain:
    "Callback functions another function complete aagumbodhu execute aagum."
},

{
  id: 63,
  title: "setTimeout",
  question: "Specific delay apram code execute panna entha method use pannuvanga?",
  options: [
    "setLoop()",
    "delay()",
    "setTimeout()",
    "wait()"
  ],
  answer: "setTimeout()",
  explain:
    "setTimeout() delayed execution create pannum."
},

{
  id: 64,
  title: "setInterval",
  question: "Repeated intervals-la code execute panna entha method use pannuvanga?",
  options: [
    "repeat()",
    "loop()",
    "setInterval()",
    "timer()"
  ],
  answer: "setInterval()",
  explain:
    "setInterval() repeated execution create pannum."
},

{
  id: 65,
  title: "Promise",
  question: "Asynchronous result represent panna JavaScript-la enna use pannuvanga?",
  options: [
    "callback",
    "promise",
    "event",
    "loop"
  ],
  answer: "promise",
  explain:
    "Promises async operations handle panna use pannuvanga."
},

{
  id: 66,
  title: "Promise Success",
  question: "Promise success handle panna entha method use pannuvanga?",
  options: [
    "catch()",
    "then()",
    "finally()",
    "resolve()"
  ],
  answer: "then()",
  explain:
    "then() resolved promise results handle pannum."
},

{
  id: 67,
  title: "Promise Error",
  question: "Promise errors handle panna entha method use pannuvanga?",
  options: [
    "then()",
    "resolve()",
    "catch()",
    "error()"
  ],
  answer: "catch()",
  explain:
    "catch() async errors handle panna use pannuvanga."
},

{
  id: 68,
  title: "Async Function",
  question: "Asynchronous functions define panna entha keyword use pannuvanga?",
  options: [
    "await",
    "promise",
    "async",
    "delay"
  ],
  answer: "async",
  explain:
    "async keyword asynchronous function create pannum."
},

{
  id: 69,
  title: "Await Keyword",
  question: "Promise result wait panna entha keyword use pannuvanga?",
  options: [
    "pause",
    "wait",
    "await",
    "hold"
  ],
  answer: "await",
  explain:
    "await promise complete aagura varaikum wait pannum."
},

{
  id: 70,
  title: "Fetch API",
  question: "API calls panna modern JavaScript method edhu?",
  options: [
    "request()",
    "fetch()",
    "apiCall()",
    "http()"
  ],
  answer: "fetch()",
  explain:
    "fetch() modern HTTP requests handle panna use pannuvanga."
},

{
  id: 71,
  title: "JSON Meaning",
  question: "JSON-oda full form enna?",
  options: [
    "Java Syntax Object Notation",
    "JavaScript Object Notation",
    "Java Structured Output Network",
    "JavaScript Online Network"
  ],
  answer: "JavaScript Object Notation",
  explain:
    "JSON lightweight data exchange format."
},

{
  id: 72,
  title: "JSON Parse",
  question: "JSON string object-aa convert panna entha method use pannuvanga?",
  options: [
    "JSON.convert()",
    "JSON.parse()",
    "JSON.object()",
    "JSON.read()"
  ],
  answer: "JSON.parse()",
  explain:
    "JSON.parse() JSON string-ah JavaScript object-aa convert pannum."
},

{
  id: 73,
  title: "JSON Stringify",
  question: "JavaScript object JSON string-aa convert panna entha method use pannuvanga?",
  options: [
    "JSON.parse()",
    "JSON.stringify()",
    "JSON.object()",
    "JSON.encode()"
  ],
  answer: "JSON.stringify()",
  explain:
    "JSON.stringify() object-ah JSON text-aa convert pannum."
},

{
  id: 74,
  title: "Local Storage",
  question: "Browser-la permanent small data store panna enna use pannuvanga?",
  options: [
    "cookies",
    "localStorage",
    "database",
    "cache"
  ],
  answer: "localStorage",
  explain:
    "localStorage browser persistent storage provide pannum."
},

{
  id: 75,
  title: "Session Storage",
  question: "Browser tab close aagura varaikum data save panna enna use pannuvanga?",
  options: [
    "localStorage",
    "sessionStorage",
    "memoryStorage",
    "cacheStorage"
  ],
  answer: "sessionStorage",
  explain:
    "sessionStorage current session varaikum data maintain pannum."
},
{
  id: 76,
  title: "localStorage setItem",
  question: "localStorage-la data save panna entha method use pannuvanga?",
  options: [
    "saveItem()",
    "setItem()",
    "store()",
    "pushItem()"
  ],
  answer: "setItem()",
  explain:
    "setItem() key-value data localStorage-la save pannum."
},

{
  id: 77,
  title: "localStorage getItem",
  question: "localStorage-lendhu data retrieve panna entha method use pannuvanga?",
  options: [
    "fetchItem()",
    "getItem()",
    "readItem()",
    "findItem()"
  ],
  answer: "getItem()",
  explain:
    "getItem() stored values retrieve panna use pannuvanga."
},

{
  id: 78,
  title: "Remove Storage Item",
  question: "Specific localStorage item delete panna entha method use pannuvanga?",
  options: [
    "deleteItem()",
    "removeItem()",
    "clearItem()",
    "destroy()"
  ],
  answer: "removeItem()",
  explain:
    "removeItem() single storage key delete pannum."
},

{
  id: 79,
  title: "Clear Storage",
  question: "Entire localStorage clear panna entha method use pannuvanga?",
  options: [
    "deleteAll()",
    "removeAll()",
    "clear()",
    "resetStorage()"
  ],
  answer: "clear()",
  explain:
    "clear() entire storage data remove pannum."
},

{
  id: 80,
  title: "Regular Expression",
  question: "Pattern matching-ku JavaScript-la enna use pannuvanga?",
  options: [
    "Regex",
    "Loop",
    "Condition",
    "Selector"
  ],
  answer: "Regex",
  explain:
    "Regex pattern search matrum validations-ku use pannuvanga."
},

{
  id: 81,
  title: "Regex Test Method",
  question: "Regex pattern match aagudha check panna entha method use pannuvanga?",
  options: [
    "match()",
    "check()",
    "test()",
    "find()"
  ],
  answer: "test()",
  explain:
    "test() true/false pattern matching result return pannum."
},

{
  id: 82,
  title: "Regex Match Method",
  question: "Matched values get panna entha string method use pannuvanga?",
  options: [
    "find()",
    "search()",
    "match()",
    "includes()"
  ],
  answer: "match()",
  explain:
    "match() regex matched values return pannum."
},

{
  id: 83,
  title: "Email Validation",
  question: "Email format validate panna mostly enna use pannuvanga?",
  options: [
    "Array",
    "Regex",
    "Loop",
    "DOM"
  ],
  answer: "Regex",
  explain:
    "Regex email format validation-ku common-aa use pannuvanga."
},

{
  id: 84,
  title: "Event Loop",
  question: "Asynchronous tasks manage panna JavaScript use pannura mechanism-ku enna peyar?",
  options: [
    "Promise Queue",
    "Event Loop",
    "Callback Stack",
    "Thread Engine"
  ],
  answer: "Event Loop",
  explain:
    "Event Loop async operations handle panna mukkiyam."
},

{
  id: 85,
  title: "Single Thread",
  question: "JavaScript default-aa eppadi execute aagum?",
  options: [
    "Multi Thread",
    "Dual Thread",
    "Single Thread",
    "Background Thread"
  ],
  answer: "Single Thread",
  explain:
    "JavaScript single-threaded language."
},

{
  id: 86,
  title: "Synchronous JavaScript",
  question: "Line-by-line execution-ku enna peyar?",
  options: [
    "Asynchronous",
    "Synchronous",
    "Delayed",
    "Promise"
  ],
  answer: "Synchronous",
  explain:
    "Synchronous code sequential-aa execute aagum."
},

{
  id: 87,
  title: "Asynchronous JavaScript",
  question: "Waiting illaama background-la tasks handle panna enna peyar?",
  options: [
    "Synchronous",
    "Asynchronous",
    "Sequential",
    "Static"
  ],
  answer: "Asynchronous",
  explain:
    "Async JavaScript non-blocking operations handle pannum."
},

{
  id: 88,
  title: "Callback Hell",
  question: "Nested callbacks romba adhigam aagura problem-ku enna peyar?",
  options: [
    "Loop Hell",
    "Callback Hell",
    "Promise Loop",
    "Async Crash"
  ],
  answer: "Callback Hell",
  explain:
    "Too many nested callbacks code readability reduce pannum."
},

{
  id: 89,
  title: "API Meaning",
  question: "API-oda full form enna?",
  options: [
    "Application Programming Interface",
    "Advanced Program Internet",
    "Application Process Integration",
    "Automated Program Interface"
  ],
  answer: "Application Programming Interface",
  explain:
    "API applications-kulla communication establish pannum."
},

{
  id: 90,
  title: "HTTP GET",
  question: "Server-lendhu data fetch panna commonly entha HTTP method use pannuvanga?",
  options: [
    "POST",
    "PUT",
    "DELETE",
    "GET"
  ],
  answer: "GET",
  explain:
    "GET method data retrieve panna use pannuvanga."
},

{
  id: 91,
  title: "HTTP POST",
  question: "New data server-ku send panna entha HTTP method use pannuvanga?",
  options: [
    "GET",
    "POST",
    "DELETE",
    "FETCH"
  ],
  answer: "POST",
  explain:
    "POST method new data create panna use pannuvanga."
},

{
  id: 92,
  title: "Spread Operator",
  question: "Arrays/objects expand panna entha operator use pannuvanga?",
  options: [
    "++",
    "...",
    "=>",
    "&&"
  ],
  answer: "...",
  explain:
    "Spread operator values expand panna use pannuvanga."
},

{
  id: 93,
  title: "Destructuring",
  question: "Arrays/objects-lendhu values direct extract panna technique-ku enna peyar?",
  options: [
    "Splitting",
    "Destructuring",
    "Breaking",
    "Mapping"
  ],
  answer: "Destructuring",
  explain:
    "Destructuring values easy-aa extract panna help pannum."
},

{
  id: 94,
  title: "Optional Chaining",
  question: "Undefined errors avoid panna entha operator use pannuvanga?",
  options: [
    "??",
    "?.",
    "&&",
    "=>"
  ],
  answer: "?.",
  explain:
    "Optional chaining nested property safe access provide pannum."
},

{
  id: 95,
  title: "Ternary Operator",
  question: "Short if-else syntax-ku entha operator use pannuvanga?",
  options: [
    "??",
    "?:",
    "&&",
    "=>"
  ],
  answer: "?:",
  explain:
    "Ternary operator compact conditional syntax."
},

{
  id: 96,
  title: "Truthy Values",
  question: "JavaScript-la true maari behave pannura values-ku enna peyar?",
  options: [
    "Boolean Values",
    "Truthy Values",
    "Positive Values",
    "Conditional Values"
  ],
  answer: "Truthy Values",
  explain:
    "Truthy values conditions-la true-aa evaluate aagum."
},

{
  id: 97,
  title: "Falsy Values",
  question: "false maari evaluate aagura values-ku enna peyar?",
  options: [
    "Falsy Values",
    "Negative Values",
    "Null Values",
    "Broken Values"
  ],
  answer: "Falsy Values",
  explain:
    "0, null, undefined maari values falsy-aa evaluate aagum."
},

{
  id: 98,
  title: "Clean Code",
  question: "Readable meaningful variable names use pannura practice-ku enna importance?",
  options: [
    "Performance",
    "Clean Code",
    "DOM Access",
    "Optimization"
  ],
  answer: "Clean Code",
  explain:
    "Clean code readability matrum maintenance improve pannum."
},

{
  id: 99,
  title: "DRY Principle",
  question: "Duplicate code avoid panna software principle peyar enna?",
  options: [
    "FAST",
    "DRY",
    "SAFE",
    "LOOP"
  ],
  answer: "DRY",
  explain:
    "DRY-na Don't Repeat Yourself."
},

{
  id: 100,
  title: "JavaScript Framework",
  question: "Modern frontend UI build panna popular JavaScript library/framework edhu?",
  options: [
    "MongoDB",
    "Express",
    "React",
    "MySQL"
  ],
  answer: "React",
  explain:
    "React component-based frontend library."
},


];

function JsGame() {

  const [currentTask, setCurrentTask] =
    useState(0);

  const [selectedOption, setSelectedOption] =
    useState(null);

  const [result, setResult] =
    useState(null);

  const [score, setScore] =
    useState(0);

  const task = jsTasks[currentTask];

  /* FIREWORK */

  const handleFirework = () => {

    confetti({

      particleCount: 180,

      spread: 90,

      origin: { y: 0.6 },

      colors: [
        THEME_COLOR,
        '#ffffff',
        '#f59e0b'
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

    if (currentTask < jsTasks.length - 1) {

      setCurrentTask(currentTask + 1);

      setSelectedOption(null);

      setResult(null);
    }
  };

  return (
    <Box
      sx={{
        background:
          'linear-gradient(135deg,#1a1300 0%,#241800 50%,#111111 100%)',

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
              '0 0 25px rgba(247,223,30,0.35)',

            fontSize: {
              xs: '1.9rem',
              md: '2.8rem'
            }
          }}
        >
          JavaScript{' '}
          <span
            style={{
              color: THEME_COLOR,

              textShadow:
                `0 0 25px ${THEME_COLOR}`
            }}
          >
            Quiz Master
          </span>{' '}
          ⚡
        </Typography>

        {/* DESCRIPTION */}

        <Typography
          sx={{
            textAlign: 'center',

            color: '#f5d76e',

            mb: 5,

            fontSize: '0.95rem'
          }}
        >
          Test your JavaScript logic,
          DOM, functions and modern ES6 knowledge!
        </Typography>

        {/* QUIZ PANEL */}

        <Paper
          sx={{
            p: {
              xs: 3,
              md: 5
            },

            background:
              'rgba(33,24,0,0.75)',

            borderRadius: '26px',

            border:
              '1px solid rgba(247,223,30,0.18)',

            backdropFilter: 'blur(20px)',

            boxShadow:
              '0 10px 40px rgba(247,223,30,0.12)'
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
              label={`QUESTION ${task.id} / ${jsTasks.length}`}
              sx={{
                bgcolor: '#151000',

                color: THEME_COLOR,

                border:
                  '1px solid #574200',

                fontWeight: 700
              }}
            />

            <Typography
              sx={{
                color: THEME_COLOR,

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
                color: '#facc15',

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

              let borderBoxColor = '#5a4800';

              let bgBoxColor = '#211800';

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
                          : '#332300',

                        transform:
                          'translateY(-2px)'
                      }
                    }}
                  >

                    <JavascriptIcon
                      sx={{
                        color: isSelected
                          ? THEME_COLOR
                          : '#facc15',

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

          {/* RESULT */}

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
                      color: '#fef3c7',

                      pl: 3.5,

                      lineHeight: 1.6
                    }}
                  >
                    {task.explain}
                  </Typography>

                </Box>

                {currentTask <
                  jsTasks.length - 1 && (

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
                      color: '#fde68a',

                      mt: 1,

                      pl: 3.5,

                      lineHeight: 1.6
                    }}
                  >
                    Logic-ah nalla yosichu
                    marubadiyum try pannunga ⚡
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
    'linear-gradient(135deg,#f7df1e,#f59e0b)',

  color: '#111',

  fontWeight: 800,

  borderRadius: '14px',

  py: 1.5,

  textTransform: 'none',

  fontSize: '0.95rem',

  boxShadow:
    '0 10px 25px rgba(247,223,30,0.35)',

  '&:hover': {

    background:
      'linear-gradient(135deg,#ffe047,#f59e0b)',

    boxShadow:
      '0 0 25px rgba(247,223,30,0.45)'
  }
};

export default JsGame;