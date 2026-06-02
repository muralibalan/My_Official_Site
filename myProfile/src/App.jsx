import React, { useState, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

// 1. Core Structural Layout & Login
import Layout from './components/Layout';
import Login from './components/navigations/Login';

// 💡 SAFE LAZY LOADING ENHANCEMENT (Chunk Crash-proof Logic)
const safeLazy = (importFn) => {
  return React.lazy(async () => {
    try {
      return await importFn();
    } catch (error) {
      if (error.name === 'ChunkLoadError' || error.message.includes('Loading chunk')) {
        window.location.reload(); // Puthu build chunk-ah fetch panna auto refresh
      }
      throw error;
    }
  });
};

// 2. Navigation Components - Safe Lazy Loaded
const Home = safeLazy(() => import('./components/navigations/Home'));
const About = safeLazy(() => import('./components/navigations/About'));
const MyStudents = safeLazy(() => import('./components/navigations/MyStudents'));
const Education = safeLazy(() => import('./components/navigations/Education'));
const Projects = safeLazy(() => import('./components/Projects'));
const MyWorkshops = safeLazy(() => import('./components/MyWorkshops'));
const CourseViewer = safeLazy(() => import('./components/navigations/CourseViewer'));

// 3. Educational Games Components - Safe Lazy Loaded
const LoopGame = safeLazy(() => import('./components/games/LoopGame'));
const VariableGame = safeLazy(() => import('./components/games/VariableGame'));
const ArrayAccessGame = safeLazy(() => import('./components/games/ArrayAccessGame'));
const SortingGame = safeLazy(() => import('./components/games/SortingGame'));
const MernSnake = safeLazy(() => import('./components/games/MernSnakeFull'));
const FlamesGame = safeLazy(() => import('./components/games/FlamesGame'));
const HOFGame = safeLazy(() => import('./components/games/HOFGame'));
const TimersGame = safeLazy(() => import('./components/games/TimersGame'));
const ConditionsGame = safeLazy(() => import('./components/games/ConditionsGame'));
const FunctionsGame = safeLazy(() => import('./components/games/FunctionsGame'));
const RegexGame = safeLazy(() => import('./components/games/RegexGame'));
const EventLoopGame = safeLazy(() => import('./components/games/EventLoopGame'));
const StudentCardList = safeLazy(()=> import('./components/StudentCardList'));
const TextToSpeech = safeLazy(()=> import('./components/games/TextToSpeech'));
const UniversalQuizGame = safeLazy(()=> import('./components/games/UniversalQuizGame'));
const StateboardMegaQuiz = safeLazy(()=> import('./components/games/StateboardMegaQuiz'));
const EnglishQuizWidget = safeLazy(()=> import('./components/games/EnglishQuizWidget'));

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
    <CircularProgress sx={{ color: '#00ff66' }} />
  </Box>
);

function App() {
  // 💥 மாற்றப்பட்ட பகுதி: பூலியன் ஸ்டேட்டிற்குப் பதிலாக Object ஆக மாற்றப்பட்டுள்ளது.
  const [auth, setAuth] = useState({ loggedIn: false, course: '' });

  return (
    <BrowserRouter>
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
            
            {/* Safe Lazy Loaded Educational Game Routes */}
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
            <Route path='speech' element={<TextToSpeech />} />
            <Route path='quizgame' element={<UniversalQuizGame />} />
            <Route path='stateboard' element={<StateboardMegaQuiz />} />
            <Route path='learneng' element={<EnglishQuizWidget />} />

            {/* 💥 Protected Route Logic - மாற்றப்பட்ட பகுதி */}
            <Route
              path='study'
              element={
                auth.loggedIn ? (
                  // CourseViewer-க்கு auth (கோர்ஸ் விபரங்கள்) மற்றும் setAuth அனுப்பப்படுகிறது
                  <CourseViewer auth={auth} setAuth={setAuth} />
                ) : (
                  // Login-க்கு செட் செய்வதற்குரிய பங்க்ஷன் அனுப்பப்படுகிறது
                  <Login setAuth={setAuth} />
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