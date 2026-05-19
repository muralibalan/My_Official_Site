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

import TerminalIcon from '@mui/icons-material/Terminal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const THEME_COLOR = '#00ff9d';
const SECONDARY_COLOR = '#00c2ff';

/* C LANGUAGE QUESTIONS */

const cTasks = [

  {
    id: 1,
    title: "History of C",
    question: "C language-ai uruvakkina person yaaru?",
    options: [
      "Dennis Ritchie",
      "James Gosling",
      "Guido van Rossum",
      "Bjarne Stroustrup"
    ],
    answer: "Dennis Ritchie",
    explain:
      "Dennis Ritchie Bell Labs-la C language develop panninar."
  },

  {
    id: 2,
    title: "Purpose of C",
    question: "C language mainly etharku use pannuvanga?",
    options: [
      "Graphic Design",
      "System Programming",
      "Video Editing",
      "SEO"
    ],
    answer: "System Programming",
    explain:
      "Operating systems matrum low-level software develop panna C use pannuvanga."
  },

  {
    id: 3,
    title: "C Features",
    question: "C language-oda mukkiya feature edhu?",
    options: [
      "Machine Dependent",
      "Portable",
      "Slow Execution",
      "No Functions"
    ],
    answer: "Portable",
    explain:
      "C programs multiple platforms-la run panna mudiyum."
  },

  {
    id: 4,
    title: "Header File",
    question: "Input/output operations-ku use pannura header file edhu?",
    options: [
      "math.h",
      "stdio.h",
      "string.h",
      "ctype.h"
    ],
    answer: "stdio.h",
    explain:
      "stdio.h standard input/output functions provide pannum."
  },

  {
    id: 5,
    title: "Main Function",
    question: "C program execution start aagura function edhu?",
    options: [
      "run()",
      "start()",
      "main()",
      "execute()"
    ],
    answer: "main()",
    explain:
      "main() function-lendhu thaan execution start aagum."
  },

  {
    id: 6,
    title: "printf Function",
    question: "Output print panna entha function use pannuvanga?",
    options: [
      "cout",
      "printf()",
      "print()",
      "echo()"
    ],
    answer: "printf()",
    explain:
      "printf() formatted output display panna use pannuvanga."
  },

  {
    id: 7,
    title: "scanf Function",
    question: "User input eduka entha function use pannuvanga?",
    options: [
      "input()",
      "cin",
      "scanf()",
      "read()"
    ],
    answer: "scanf()",
    explain:
      "scanf() keyboard-lendhu values read pannum."
  },

  {
    id: 8,
    title: "Escape Sequence",
    question: "New line create panna entha escape sequence use pannuvanga?",
    options: [
      "\\t",
      "\\n",
      "\\a",
      "\\b"
    ],
    answer: "\\n",
    explain:
      "\\n cursor next line-ku move pannum."
  },

  {
    id: 9,
    title: "Tab Escape",
    question: "Horizontal tab space create panna entha escape sequence use pannuvanga?",
    options: [
      "\\n",
      "\\t",
      "\\a",
      "\\0"
    ],
    answer: "\\t",
    explain:
      "\\t horizontal tab spacing create pannum."
  },

  {
    id: 10,
    title: "Variables",
    question: "Value store panna C-la enna use pannuvanga?",
    options: [
      "Loop",
      "Function",
      "Variable",
      "Header"
    ],
    answer: "Variable",
    explain:
      "Variables data store panna use pannuvanga."
  },

  {
    id: 11,
    title: "Keywords",
    question: "C language-la predefined reserved words-ku enna peyar?",
    options: [
      "Functions",
      "Variables",
      "Keywords",
      "Operators"
    ],
    answer: "Keywords",
    explain:
      "Keywords special reserved meaning irukkura words."
  },

  {
    id: 12,
    title: "Integer Type",
    question: "Whole numbers store panna entha datatype use pannuvanga?",
    options: [
      "float",
      "char",
      "int",
      "double"
    ],
    answer: "int",
    explain:
      "int datatype integers store panna use pannuvanga."
  },

  {
    id: 13,
    title: "Character Type",
    question: "Single character store panna entha datatype use pannuvanga?",
    options: [
      "char",
      "string",
      "int",
      "float"
    ],
    answer: "char",
    explain:
      "char single characters store panna use pannuvanga."
  },

  {
    id: 14,
    title: "Float Type",
    question: "Decimal numbers store panna commonly entha datatype use pannuvanga?",
    options: [
      "int",
      "float",
      "char",
      "void"
    ],
    answer: "float",
    explain:
      "float decimal values store panna use pannuvanga."
  },

  {
    id: 15,
    title: "Arithmetic Operator",
    question: "Addition operation-ku entha operator use pannuvanga?",
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
    id: 16,
    title: "Relational Operator",
    question: "Equal comparison panna entha operator use pannuvanga?",
    options: [
      "=",
      "==",
      "!=",
      ">="
    ],
    answer: "==",
    explain:
      "== values equal-aa irukka check pannum."
  },

  {
    id: 17,
    title: "Logical AND",
    question: "Logical AND operation-ku entha operator use pannuvanga?",
    options: [
      "||",
      "&&",
      "!",
      "&"
    ],
    answer: "&&",
    explain:
      "&& rendu conditions-um true irundha true return pannum."
  },

  {
    id: 18,
    title: "Increment Operator",
    question: "Variable value 1 increase panna entha operator use pannuvanga?",
    options: [
      "--",
      "++",
      "+=",
      "**"
    ],
    answer: "++",
    explain:
      "++ increment operator value 1 increase pannum."
  },

  {
    id: 19,
    title: "Ternary Operator",
    question: "Short if-else syntax-ku entha operator use pannuvanga?",
    options: [
      "::",
      "?:",
      "&&",
      "=="
    ],
    answer: "?:",
    explain:
      "Ternary operator compact condition syntax."
  },

  {
    id: 20,
    title: "Bitwise Operator",
    question: "Bit-level operations panna entha operator category use pannuvanga?",
    options: [
      "Logical",
      "Arithmetic",
      "Bitwise",
      "Conditional"
    ],
    answer: "Bitwise",
    explain:
      "Bitwise operators binary bits mela operations perform pannum."
  },

  {
    id: 21,
    title: "If Statement",
    question: "Condition check panna entha statement use pannuvanga?",
    options: [
      "loop",
      "if",
      "switch",
      "goto"
    ],
    answer: "if",
    explain:
      "if statement condition true-na execute aagum."
  },

  {
    id: 22,
    title: "Else Statement",
    question: "if false aana alternative block-ku enna use pannuvanga?",
    options: [
      "otherwise",
      "elseif",
      "else",
      "alternate"
    ],
    answer: "else",
    explain:
      "else alternative execution path provide pannum."
  },

  {
    id: 23,
    title: "Switch Case",
    question: "Multiple choices handle panna entha statement use pannuvanga?",
    options: [
      "if",
      "switch",
      "for",
      "while"
    ],
    answer: "switch",
    explain:
      "switch multiple conditions easy-aa handle pannum."
  },

  {
    id: 24,
    title: "For Loop",
    question: "Known iterations-ku commonly entha loop use pannuvanga?",
    options: [
      "while",
      "for",
      "do while",
      "goto"
    ],
    answer: "for",
    explain:
      "for loop repeated iterations-ku use pannuvanga."
  },

  {
    id: 25,
    title: "While Loop",
    question: "Condition true varaikum execute aagura loop edhu?",
    options: [
      "switch",
      "for",
      "while",
      "if"
    ],
    answer: "while",
    explain:
      "while condition true varaikum run aagum."
  },
  {
  id: 26,
  title: "Do While Loop",
  question: "Minimum oru thadava execute aagura loop edhu?",
  options: [
    "for",
    "while",
    "do while",
    "switch"
  ],
  answer: "do while",
  explain:
    "do while condition check panna munadi execute aagum."
},

{
  id: 27,
  title: "Break Statement",
  question: "Loop-ah immediate-aa stop panna entha statement use pannuvanga?",
  options: [
    "continue",
    "stop",
    "break",
    "exit"
  ],
  answer: "break",
  explain:
    "break loop execution-ah terminate pannum."
},

{
  id: 28,
  title: "Continue Statement",
  question: "Current iteration skip panna entha statement use pannuvanga?",
  options: [
    "break",
    "skip",
    "continue",
    "goto"
  ],
  answer: "continue",
  explain:
    "continue current iteration skip panni next-ku pogum."
},

{
  id: 29,
  title: "Goto Statement",
  question: "Program control specific label-ku jump panna entha statement use pannuvanga?",
  options: [
    "switch",
    "goto",
    "jump",
    "move"
  ],
  answer: "goto",
  explain:
    "goto statement labeled section-ku control move pannum."
},

{
  id: 30,
  title: "Function",
  question: "Reusable code block-ku enna peyar?",
  options: [
    "Variable",
    "Loop",
    "Function",
    "Operator"
  ],
  answer: "Function",
  explain:
    "Functions reusable logic blocks create pannum."
},

{
  id: 31,
  title: "Built-in Function",
  question: "C library already provide pannura functions-ku enna peyar?",
  options: [
    "Recursive Functions",
    "Built-in Functions",
    "Pointer Functions",
    "Loop Functions"
  ],
  answer: "Built-in Functions",
  explain:
    "printf(), scanf() maari predefined functions built-in functions."
},

{
  id: 32,
  title: "User Defined Function",
  question: "Programmer create pannura functions-ku enna peyar?",
  options: [
    "Built-in",
    "Recursive",
    "User Defined Functions",
    "Automatic Functions"
  ],
  answer: "User Defined Functions",
  explain:
    "Developer create pannura custom functions user-defined functions."
},

{
  id: 33,
  title: "Recursive Function",
  question: "Thanneye than call pannura function-ku enna peyar?",
  options: [
    "Loop Function",
    "Built-in Function",
    "Recursive Function",
    "Nested Function"
  ],
  answer: "Recursive Function",
  explain:
    "Recursive function thanneye than repeatedly call pannum."
},

{
  id: 34,
  title: "Call by Value",
  question: "Original variable change aagaama copy pass pannura method edhu?",
  options: [
    "Call by Reference",
    "Call by Address",
    "Call by Value",
    "Pointer Call"
  ],
  answer: "Call by Value",
  explain:
    "Call by value original data modify pannaadhu."
},

{
  id: 35,
  title: "Call by Reference",
  question: "Original variable address pass pannura method edhu?",
  options: [
    "Call by Value",
    "Call by Reference",
    "Direct Call",
    "Recursive Call"
  ],
  answer: "Call by Reference",
  explain:
    "Call by reference original values modify panna allow pannum."
},

{
  id: 36,
  title: "Factorial Program",
  question: "5! factorial value enna?",
  options: [
    "25",
    "60",
    "120",
    "150"
  ],
  answer: "120",
  explain:
    "5! = 5×4×3×2×1 = 120."
},

{
  id: 37,
  title: "Natural Numbers Sum",
  question: "First 5 natural numbers sum enna?",
  options: [
    "10",
    "15",
    "20",
    "25"
  ],
  answer: "15",
  explain:
    "1+2+3+4+5 = 15."
},

{
  id: 38,
  title: "GCD",
  question: "Greatest Common Divisor short form enna?",
  options: [
    "GCD",
    "LCM",
    "HCF",
    "MOD"
  ],
  answer: "GCD",
  explain:
    "GCD rendu numbers-oda highest common divisor."
},

{
  id: 39,
  title: "Power Calculation",
  question: "2 power 3 value enna?",
  options: [
    "6",
    "8",
    "9",
    "12"
  ],
  answer: "8",
  explain:
    "2^3 = 2×2×2 = 8."
},

{
  id: 40,
  title: "Array Introduction",
  question: "Same datatype multiple values store panna enna use pannuvanga?",
  options: [
    "Function",
    "Array",
    "Pointer",
    "Structure"
  ],
  answer: "Array",
  explain:
    "Array same datatype multiple values contiguous-aa store pannum."
},

{
  id: 41,
  title: "1D Array",
  question: "Single row values store pannura array type edhu?",
  options: [
    "2D Array",
    "1D Array",
    "Pointer Array",
    "Matrix"
  ],
  answer: "1D Array",
  explain:
    "1D arrays single dimension data structure."
},

{
  id: 42,
  title: "2D Array",
  question: "Rows and columns structure-ku entha array use pannuvanga?",
  options: [
    "1D Array",
    "2D Array",
    "Pointer",
    "String"
  ],
  answer: "2D Array",
  explain:
    "2D arrays matrix structure create pannum."
},

{
  id: 43,
  title: "String",
  question: "C-la strings internally enna type array-aa store aagum?",
  options: [
    "int array",
    "float array",
    "char array",
    "double array"
  ],
  answer: "char array",
  explain:
    "Strings null terminated char arrays."
},

{
  id: 44,
  title: "strlen Function",
  question: "String length calculate panna entha function use pannuvanga?",
  options: [
    "strcpy()",
    "strlen()",
    "strcmp()",
    "strcat()"
  ],
  answer: "strlen()",
  explain:
    "strlen() total characters count return pannum."
},

{
  id: 45,
  title: "strcpy Function",
  question: "One string-ah another string-ku copy panna entha function use pannuvanga?",
  options: [
    "strcat()",
    "strcmp()",
    "strcpy()",
    "strlen()"
  ],
  answer: "strcpy()",
  explain:
    "strcpy() source string-ah destination-ku copy pannum."
},

{
  id: 46,
  title: "strcat Function",
  question: "Rendu strings combine panna entha function use pannuvanga?",
  options: [
    "strcmp()",
    "strcat()",
    "strcpy()",
    "strlen()"
  ],
  answer: "strcat()",
  explain:
    "strcat() strings concatenate pannum."
},

{
  id: 47,
  title: "strcmp Function",
  question: "Rendu strings compare panna entha function use pannuvanga?",
  options: [
    "strcmp()",
    "strcat()",
    "strlen()",
    "strrev()"
  ],
  answer: "strcmp()",
  explain:
    "strcmp() strings equal-aa irukka compare pannum."
},

{
  id: 48,
  title: "strrev Function",
  question: "String reverse panna entha function use pannuvanga?",
  options: [
    "strcpy()",
    "strrev()",
    "strcmp()",
    "strlen()"
  ],
  answer: "strrev()",
  explain:
    "strrev() string reverse order-ku convert pannum."
},

{
  id: 49,
  title: "strlwr Function",
  question: "Uppercase text lowercase convert panna entha function use pannuvanga?",
  options: [
    "strupr()",
    "strlwr()",
    "tolower()",
    "strcmp()"
  ],
  answer: "strlwr()",
  explain:
    "strlwr() lowercase conversion panna use pannuvanga."
},

{
  id: 50,
  title: "strupr Function",
  question: "Lowercase text uppercase convert panna entha function use pannuvanga?",
  options: [
    "strlwr()",
    "toupper()",
    "strupr()",
    "strcmp()"
  ],
 answer: "strupr()",
  explain:
    "strupr() uppercase conversion panna use pannuvanga."
},
{
  id: 51,
  title: "Structure",
  question: "Different datatype values single unit-la store panna enna use pannuvanga?",
  options: [
    "Array",
    "Pointer",
    "Structure",
    "Loop"
  ],
  answer: "Structure",
  explain:
    "Structure multiple datatype values group panna use pannuvanga."
},

{
  id: 52,
  title: "Union",
  question: "Same memory location share pannura datatype collection-ku enna peyar?",
  options: [
    "Structure",
    "Union",
    "Array",
    "Enum"
  ],
  answer: "Union",
  explain:
    "Union members same memory share pannum."
},

{
  id: 53,
  title: "Enum",
  question: "Named constants create panna entha keyword use pannuvanga?",
  options: [
    "struct",
    "union",
    "enum",
    "typedef"
  ],
  answer: "enum",
  explain:
    "enum named integer constants define panna use pannuvanga."
},

{
  id: 54,
  title: "typedef",
  question: "Existing datatype-ku new name create panna entha keyword use pannuvanga?",
  options: [
    "define",
    "typedef",
    "alias",
    "rename"
  ],
  answer: "typedef",
  explain:
    "typedef datatype alias create panna use pannuvanga."
},

{
  id: 55,
  title: "Pointer",
  question: "Memory address store panna enna use pannuvanga?",
  options: [
    "Array",
    "Pointer",
    "Function",
    "Loop"
  ],
  answer: "Pointer",
  explain:
    "Pointers memory addresses store pannum."
},

{
  id: 56,
  title: "Pointer Symbol",
  question: "Pointer declare panna entha symbol use pannuvanga?",
  options: [
    "#",
    "*",
    "&",
    "@"
  ],
  answer: "*",
  explain:
    "* symbol pointer declaration-ku use pannuvanga."
},

{
  id: 57,
  title: "Address Operator",
  question: "Variable address access panna entha operator use pannuvanga?",
  options: [
    "*",
    "#",
    "&",
    "%"
  ],
  answer: "&",
  explain:
    "& operator variable memory address return pannum."
},

{
  id: 58,
  title: "Dereference Operator",
  question: "Pointer stored address value access panna entha operator use pannuvanga?",
  options: [
    "&",
    "*",
    "%",
    "#"
  ],
  answer: "*",
  explain:
    "* dereference operator actual value access pannum."
},

{
  id: 59,
  title: "Null Pointer",
  question: "Valid memory address point pannaatha pointer-ku enna peyar?",
  options: [
    "Wild Pointer",
    "Null Pointer",
    "Void Pointer",
    "Dangling Pointer"
  ],
  answer: "Null Pointer",
  explain:
    "Null pointer invalid/no memory reference indicate pannum."
},

{
  id: 60,
  title: "Void Pointer",
  question: "Any datatype address store panna capable pointer edhu?",
  options: [
    "int pointer",
    "float pointer",
    "void pointer",
    "char pointer"
  ],
  answer: "void pointer",
  explain:
    "Void pointer generic memory address hold pannum."
},

{
  id: 61,
  title: "Wild Pointer",
  question: "Initialize pannaama use pannura pointer-ku enna peyar?",
  options: [
    "Dangling Pointer",
    "Null Pointer",
    "Wild Pointer",
    "Void Pointer"
  ],
  answer: "Wild Pointer",
  explain:
    "Wild pointers random memory reference panna chance irukkum."
},

{
  id: 62,
  title: "Dangling Pointer",
  question: "Freed memory-ah point pannura pointer-ku enna peyar?",
  options: [
    "Wild Pointer",
    "Null Pointer",
    "Dangling Pointer",
    "Void Pointer"
  ],
  answer: "Dangling Pointer",
  explain:
    "Deleted memory reference panna dangling pointer use aagum."
},

{
  id: 63,
  title: "Pointer Arithmetic",
  question: "Pointers mela mathematical operations perform panna enna peyar?",
  options: [
    "Pointer Casting",
    "Pointer Arithmetic",
    "Pointer Loop",
    "Pointer Logic"
  ],
  answer: "Pointer Arithmetic",
  explain:
    "Pointer arithmetic memory navigation-ku use pannuvanga."
},

{
  id: 64,
  title: "Pointer to Pointer",
  question: "Another pointer address store pannura pointer-ku enna peyar?",
  options: [
    "Double Pointer",
    "Void Pointer",
    "Wild Pointer",
    "Null Pointer"
  ],
  answer: "Double Pointer",
  explain:
    "Pointer to pointer another pointer address hold pannum."
},

{
  id: 65,
  title: "Array of Pointers",
  question: "Multiple pointers store panna enna use pannuvanga?",
  options: [
    "Pointer Array",
    "Array of Pointers",
    "Nested Pointer",
    "Matrix Pointer"
  ],
  answer: "Array of Pointers",
  explain:
    "Array elements pointers-aa irukkum."
},

{
  id: 66,
  title: "malloc Function",
  question: "Dynamic memory allocate panna entha function use pannuvanga?",
  options: [
    "calloc()",
    "malloc()",
    "free()",
    "realloc()"
  ],
  answer: "malloc()",
  explain:
    "malloc() runtime memory allocation provide pannum."
},

{
  id: 67,
  title: "calloc Function",
  question: "Multiple memory blocks allocate panna entha function use pannuvanga?",
  options: [
    "malloc()",
    "calloc()",
    "free()",
    "alloc()"
  ],
  answer: "calloc()",
  explain:
    "calloc() initialized memory allocation pannum."
},

{
  id: 68,
  title: "realloc Function",
  question: "Already allocated memory resize panna entha function use pannuvanga?",
  options: [
    "malloc()",
    "calloc()",
    "realloc()",
    "resize()"
  ],
  answer: "realloc()",
  explain:
    "realloc() existing memory size modify pannum."
},

{
  id: 69,
  title: "free Function",
  question: "Allocated memory release panna entha function use pannuvanga?",
  options: [
    "delete()",
    "remove()",
    "free()",
    "clear()"
  ],
  answer: "free()",
  explain:
    "free() dynamic memory deallocate pannum."
},

{
  id: 70,
  title: "File Concept",
  question: "Permanent data storage-ku enna use pannuvanga?",
  options: [
    "Loop",
    "Function",
    "File",
    "Pointer"
  ],
  answer: "File",
  explain:
    "Files permanent data storage provide pannum."
},

{
  id: 71,
  title: "Stream",
  question: "Data flow between program and file/device-ku enna peyar?",
  options: [
    "Loop",
    "Stream",
    "Pointer",
    "Buffer"
  ],
  answer: "Stream",
  explain:
    "Streams input/output communication manage pannum."
},

{
  id: 72,
  title: "Text File",
  question: "Readable characters store pannura file type edhu?",
  options: [
    "Binary File",
    "Text File",
    "Object File",
    "Executable File"
  ],
  answer: "Text File",
  explain:
    "Text files human-readable characters store pannum."
},

{
  id: 73,
  title: "Binary File",
  question: "Machine-readable binary format-la store pannura file type edhu?",
  options: [
    "Text File",
    "Binary File",
    "String File",
    "Input File"
  ],
  answer: "Binary File",
  explain:
    "Binary files raw binary data store pannum."
},

{
  id: 74,
  title: "fopen Function",
  question: "File open panna entha function use pannuvanga?",
  options: [
    "open()",
    "fopen()",
    "fileopen()",
    "createfile()"
  ],
  answer: "fopen()",
  explain:
    "fopen() files open panna use pannuvanga."
},

{
  id: 75,
  title: "fclose Function",
  question: "Opened file close panna entha function use pannuvanga?",
  options: [
    "close()",
    "fileclose()",
    "fclose()",
    "endfile()"
  ],
 answer: "fclose()",
  explain:
    "fclose() file resources release pannum."
},
{
  id: 76,
  title: "fprintf Function",
  question: "Formatted data file-kulla write panna entha function use pannuvanga?",
  options: [
    "printf()",
    "fprintf()",
    "fwrite()",
    "fputs()"
  ],
  answer: "fprintf()",
  explain:
    "fprintf() formatted output-ah file-kulla write pannum."
},

{
  id: 77,
  title: "fscanf Function",
  question: "Formatted data file-lendhu read panna entha function use pannuvanga?",
  options: [
    "scanf()",
    "fscanf()",
    "fread()",
    "fgets()"
  ],
  answer: "fscanf()",
  explain:
    "fscanf() formatted file input read pannum."
},

{
  id: 78,
  title: "fgetc Function",
  question: "File-lendhu single character read panna entha function use pannuvanga?",
  options: [
    "getc()",
    "fgetc()",
    "fgets()",
    "fscanf()"
  ],
  answer: "fgetc()",
  explain:
    "fgetc() single character file-lendhu read pannum."
},

{
  id: 79,
  title: "fputc Function",
  question: "File-kulla single character write panna entha function use pannuvanga?",
  options: [
    "putc()",
    "fputc()",
    "fprintf()",
    "fputs()"
  ],
  answer: "fputc()",
  explain:
    "fputc() single character file-kulla write pannum."
},

{
  id: 80,
  title: "fgets Function",
  question: "File-lendhu complete line/string read panna entha function use pannuvanga?",
  options: [
    "fscanf()",
    "fgets()",
    "fgetc()",
    "gets()"
  ],
  answer: "fgets()",
  explain:
    "fgets() string or line read panna use pannuvanga."
},

{
  id: 81,
  title: "fputs Function",
  question: "String-ah file-kulla write panna entha function use pannuvanga?",
  options: [
    "fprintf()",
    "fputs()",
    "puts()",
    "fwrite()"
  ],
  answer: "fputs()",
  explain:
    "fputs() strings file-kulla write pannum."
},

{
  id: 82,
  title: "EOF",
  question: "File end represent panna common constant edhu?",
  options: [
    "NULL",
    "END",
    "EOF",
    "STOP"
  ],
  answer: "EOF",
  explain:
    "EOF-na End Of File."
},

{
  id: 83,
  title: "File Modes",
  question: "Read mode-la file open panna entha mode use pannuvanga?",
  options: [
    "\"w\"",
    "\"a\"",
    "\"r\"",
    "\"rb\""
  ],
  answer: "\"r\"",
  explain:
    "\"r\" mode file read panna use pannuvanga."
},

{
  id: 84,
  title: "Write Mode",
  question: "File write panna entha mode use pannuvanga?",
  options: [
    "\"r\"",
    "\"w\"",
    "\"a\"",
    "\"rb\""
  ],
  answer: "\"w\"",
  explain:
    "\"w\" mode new file write/create pannum."
},

{
  id: 85,
  title: "Append Mode",
  question: "Existing file end-la data add panna entha mode use pannuvanga?",
  options: [
    "\"w\"",
    "\"r\"",
    "\"a\"",
    "\"rw\""
  ],
  answer: "\"a\"",
  explain:
    "\"a\" append mode existing data preserve pannum."
},

{
  id: 86,
  title: "Preprocessor",
  question: "#include maari directives handle pannura stage-ku enna peyar?",
  options: [
    "Compiler",
    "Linker",
    "Preprocessor",
    "Loader"
  ],
  answer: "Preprocessor",
  explain:
    "Preprocessor compilation-ku munadi directives process pannum."
},

{
  id: 87,
  title: "Compiler",
  question: "C code-ah machine code-aa convert panna enna use pannuvanga?",
  options: [
    "Interpreter",
    "Compiler",
    "Editor",
    "Debugger"
  ],
  answer: "Compiler",
  explain:
    "Compiler source code-ah machine language-ku convert pannum."
},

{
  id: 88,
  title: "Comments",
  question: "Single-line comments-ku entha syntax use pannuvanga?",
  options: [
    "// comment",
    "/* comment */",
    "# comment",
    "<!-- -->"
  ],
  answer: "// comment",
  explain:
    "// syntax single-line comments create pannum."
},

{
  id: 89,
  title: "Multi-line Comment",
  question: "Multiple lines comments-ku entha syntax use pannuvanga?",
  options: [
    "// comment",
    "/* comment */",
    "# comment",
    "<comment>"
  ],
  answer: "/* comment */",
  explain:
    "/* */ multi-line comments create pannum."
},

{
  id: 90,
  title: "sizeof Operator",
  question: "Datatype size bytes-la calculate panna entha operator use pannuvanga?",
  options: [
    "length",
    "count",
    "sizeof",
    "memory"
  ],
  answer: "sizeof",
  explain:
    "sizeof datatype or variable memory size return pannum."
},

{
  id: 91,
  title: "Character ASCII",
  question: "'A' character ASCII value enna?",
  options: [
    "64",
    "65",
    "66",
    "67"
  ],
  answer: "65",
  explain:
    "ASCII table-la capital A value 65."
},

{
  id: 92,
  title: "Modulo Operator",
  question: "Remainder calculate panna entha operator use pannuvanga?",
  options: [
    "/",
    "%",
    "*",
    "+"
  ],
  answer: "%",
  explain:
    "% modulo operator remainder return pannum."
},

{
  id: 93,
  title: "Infinite Loop",
  question: "End illaama continuous-aa run aagura loop-ku enna peyar?",
  options: [
    "Nested Loop",
    "Infinite Loop",
    "Conditional Loop",
    "Recursive Loop"
  ],
  answer: "Infinite Loop",
  explain:
    "Condition always true-na infinite loop create aagum."
},

{
  id: 94,
  title: "Nested Loop",
  question: "Oru loop-kulla another loop irundha athuku enna peyar?",
  options: [
    "Recursive Loop",
    "Infinite Loop",
    "Nested Loop",
    "Conditional Loop"
  ],
  answer: "Nested Loop",
  explain:
    "Nested loops multiple iterations manage pannum."
},

{
  id: 95,
  title: "Pass by Address",
  question: "Function-ku memory address pass panna mostly enna use pannuvanga?",
  options: [
    "Loop",
    "Pointer",
    "Array",
    "String"
  ],
  answer: "Pointer",
  explain:
    "Pointers memory address passing-ku use pannuvanga."
},

{
  id: 96,
  title: "Memory Leak",
  question: "Allocated memory free pannaama vittaal enna problem varum?",
  options: [
    "Syntax Error",
    "Memory Leak",
    "Infinite Loop",
    "Compilation Error"
  ],
  answer: "Memory Leak",
  explain:
    "Unused allocated memory release pannaama irundha memory leak varum."
},

{
  id: 97,
  title: "Segmentation Fault",
  question: "Invalid memory access panna common runtime error enna?",
  options: [
    "Syntax Error",
    "Segmentation Fault",
    "Linker Error",
    "Compile Error"
  ],
  answer: "Segmentation Fault",
  explain:
    "Wrong memory access segmentation fault create pannum."
},

{
  id: 98,
  title: "Dynamic Memory",
  question: "Runtime-la allocate pannura memory-ku enna peyar?",
  options: [
    "Static Memory",
    "Dynamic Memory",
    "Global Memory",
    "Stack Memory"
  ],
  answer: "Dynamic Memory",
  explain:
    "Dynamic memory runtime-la allocate aagum."
},

{
  id: 99,
  title: "Recursion Base Case",
  question: "Recursive function stop panna use pannura condition-ku enna peyar?",
  options: [
    "Loop Condition",
    "Exit Point",
    "Base Case",
    "Final Call"
  ],
  answer: "Base Case",
  explain:
    "Base case recursion infinite-aa pogama stop pannum."
},

{
  id: 100,
  title: "C Language Level",
  question: "C language mostly entha category-la varum?",
  options: [
    "Only High Level",
    "Only Low Level",
    "Middle Level Language",
    "Markup Language"
  ],
  answer: "Middle Level Language",
  explain:
    "C high-level and low-level features rendu-me support pannum."
}

];

function CGame() {

  const [currentTask, setCurrentTask] =
    useState(0);

  const [selectedOption, setSelectedOption] =
    useState(null);

  const [result, setResult] =
    useState(null);

  const [score, setScore] =
    useState(0);

  const task = cTasks[currentTask];

  /* FIREWORK */

  const handleFirework = () => {

    confetti({

      particleCount: 180,

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

    if (currentTask < cTasks.length - 1) {

      setCurrentTask(currentTask + 1);

      setSelectedOption(null);

      setResult(null);
    }
  };

  return (
    <Box
      sx={{
        background:
          'linear-gradient(135deg,#001510 0%,#001f2b 50%,#07141a 100%)',

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
              '0 0 25px rgba(0,255,157,0.35)',

            fontSize: {
              xs: '1.9rem',
              md: '2.8rem'
            }
          }}
        >
          C Language{' '}
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

            color: '#7fffd4',

            mb: 5,

            fontSize: '0.95rem'
          }}
        >
          Test your C programming basics,
          logic, syntax and core concepts!
        </Typography>

        {/* QUIZ PANEL */}

        <Paper
          sx={{
            p: {
              xs: 3,
              md: 5
            },

            background:
              'rgba(0,18,25,0.75)',

            borderRadius: '26px',

            border:
              '1px solid rgba(0,255,157,0.18)',

            backdropFilter: 'blur(20px)',

            boxShadow:
              '0 10px 40px rgba(0,255,157,0.12)'
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
              label={`QUESTION ${task.id} / ${cTasks.length}`}
              sx={{
                bgcolor: '#00141c',

                color: THEME_COLOR,

                border:
                  '1px solid #005f73',

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
                color: '#5eead4',

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

              let borderBoxColor = '#006d77';

              let bgBoxColor = '#001b24';

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
                          : '#002635',

                        transform:
                          'translateY(-2px)'
                      }
                    }}
                  >

                    <TerminalIcon
                      sx={{
                        color: isSelected
                          ? THEME_COLOR
                          : '#5eead4',

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
                      color: '#ccfbf1',

                      pl: 3.5,

                      lineHeight: 1.6
                    }}
                  >
                    {task.explain}
                  </Typography>

                </Box>

                {currentTask <
                  cTasks.length - 1 && (

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
                      color: '#99f6e4',

                      mt: 1,

                      pl: 3.5,

                      lineHeight: 1.6
                    }}
                  >
                    Concept-ah nalla yosichu
                    marubadiyum try pannunga 💻
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
    'linear-gradient(135deg,#00ff9d,#00c2ff)',

  color: '#001219',

  fontWeight: 800,

  borderRadius: '14px',

  py: 1.5,

  textTransform: 'none',

  fontSize: '0.95rem',

  boxShadow:
    '0 10px 25px rgba(0,255,157,0.35)',

  '&:hover': {

    background:
      'linear-gradient(135deg,#5eead4,#00c2ff)',

    boxShadow:
      '0 0 25px rgba(0,255,157,0.45)'
  }
};

export default CGame;