import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

// 1. Core Structural Layout & Login (Idhai straight-aa vechukalam seamless rendering-ku)
import Layout from './components/Layout';
import Login from './components/navigations/Login';

// 2. Navigation Components - Lazy Loaded
const Home = lazy(() => import('./components/navigations/Home'));
const About = lazy(() => import('./components/navigations/About'));
const MyStudents = lazy(() => import('./components/navigations/MyStudents'));
const Education = lazy(() => import('./components/navigations/Education'));
const Projects = lazy(() => import('./components/Projects'));
const MyWorkshops = lazy(() => import('./components/MyWorkshops'));
const CourseViewer = lazy(() => import('./components/navigations/CourseViewer'));

// 3. Educational Games Components - Lazy Loaded (Intha chunk bundle size-ah romba kuraikkum!)
const LoopGame = lazy(() => import('./components/games/LoopGame'));
const VariableGame = lazy(() => import('./components/games/VariableGame'));
const ArrayAccessGame = lazy(() => import('./components/games/ArrayAccessGame'));
const SortingGame = lazy(() => import('./components/games/SortingGame'));
const MernSnake = lazy(() => import('./components/games/MernSnakeFull'));
const FlamesGame = lazy(() => import('./components/games/FlamesGame'));
const HOFGame = lazy(() => import('./components/games/HOFGame'));
const TimersGame = lazy(() => import('./components/games/TimersGame'));
const ConditionsGame = lazy(() => import('./components/games/ConditionsGame'));
const FunctionsGame = lazy(() => import('./components/games/FunctionsGame'));
const RegexGame = lazy(() => import('./components/games/RegexGame'));
const EventLoopGame = lazy(() => import('./components/games/EventLoopGame'));
const HtmlGame = lazy(() => import('./components/games/HtmlGame'));
const CssGame = lazy(() => import('./components/games/CssGame'));
const JsGame = lazy(() => import('./components/games/JsGame'));
const StudentCardList = lazy(()=> import('./components/StudentCardList'));
const TextToSpeech = lazy(()=> import('./components/games/TextToSpeech'))

// Global Fallback Loader Component
const PageLoader = () => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '70vh',
      flexDirection: 'column',
      gap: 2
    }}
  >
    <CircularProgress sx={{ color: '#00ff66' }} /> {/* Neon Green theme fallback */}
  </Box>
);

function App() {
  // Login status-ai track panna indha state mukkiyam
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {/* Suspense fallback kulla routing podradhalaa, dynamic chunks download aagum bohuthu loader th தெரியும் */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='students' element={<MyStudents />} />
            <Route path='education' element={<Education />} />
            <Route path='projects' element={<Projects />} />
            <Route path='workshop' element={<MyWorkshops />} />
            <Route path='mystudents' element={<StudentCardList />} />
            
            {/* Lazy Loaded Educational Game Routes */}
            <Route path='loopgame' element={<LoopGame />} />
            <Route path='variablegame' element={<VariableGame />} />
            <Route path='arraygame' element={<ArrayAccessGame />} />
            <Route path='sortgame' element={<SortingGame />} />
            <Route path='Mernsnake' element={<MernSnake />} />
            <Route path='flames' element={<FlamesGame />} />
            <Route path='hof' element={<HOFGame />} />
            <Route path='timergame' element={<TimersGame />} />
            <Route path='conditiongame' element={<ConditionsGame />} />
            <Route path='functiongame' element={<FunctionsGame />} />
            <Route path='regex' element={<RegexGame />} />
            <Route path='eventloop' element={<EventLoopGame />} />
            <Route path='htmlgame' element={<HtmlGame />} />
            <Route path='jsgame' element={<JsGame />} />
            <Route path='cssgame' element={<CssGame />} />
            <Route path='speech' element={<TextToSpeech />} />

            {/* Protected Route Logic */}
            <Route
              path='study'
              element={
                isLoggedIn ? (
                  <CourseViewer setAuth={setIsLoggedIn} />
                ) : (
                  <Login setAuth={setIsLoggedIn} />
                )
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;