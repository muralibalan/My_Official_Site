import React, { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Home from './components/navigations/Home'
import About from './components/navigations/About'
import MyStudents from './components/navigations/MyStudents'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Education from './components/navigations/Education'
import Projects from './components/Projects'
import MyWorkshops from './components/MyWorkshops'
import CourseViewer from './components/navigations/CourseViewer'
import Login from './components/navigations/Login' 

import LoopGame from './components/games/LoopGame'
import VariableGame from './components/games/VariableGame'
import ArrayAccessGame from './components/games/ArrayAccessGame'
import SortingGame from './components/games/SortingGame'
import MernSnake from './components/games/MernSnakeFull'
import FlamesGame from './components/games/FlamesGame'
import HOFGame from './components/games/HOFGame'
import TimersGame from './components/games/TimersGame'
import ConditionsGame from './components/games/ConditionsGame'
import FunctionsGame from './components/games/FunctionsGame'
import RegexGame from './components/games/RegexGame'

function App() {
  // Login status-ai track panna indha state mukkiyam
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='students' element={<MyStudents />} />
          <Route path='education' element={<Education />} />
          <Route path='projects' element={<Projects />} />
          <Route path='workshop' element={<MyWorkshops />} />
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



          <Route
            path='study'
            element={
              isLoggedIn ? (
                <CourseViewer setAuth={setIsLoggedIn} /> // setAuth-ah anuppunga
              ) : (
                <Login setAuth={setIsLoggedIn} />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;