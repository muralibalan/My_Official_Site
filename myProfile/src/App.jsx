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
import Login from './components/navigations/Login' // Neenga separate-aa vachirukka file
import LoopGame from './components/LoopGame'
import VariableGame from './components/VariableGame'
import ArrayAccessGame from './components/ArrayAccessGame'
import SortingGame from './components/SortingGame'
import MernSnake from './components/MernSnakeFull'

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