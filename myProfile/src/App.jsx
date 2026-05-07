import './App.css'
import Layout from './components/Layout'
import Home from './components/navigations/Home'
import About from './components/navigations/About'
import MyStudents from './components/navigations/MyStudents'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Education from './components/navigations/Education'
import Projects from './components/Projects'
import MyWorkshops from './components/MyWorkshops'
import CourseViewer from './components/navigations/CourseViewer'

function App() {

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />     
          <Route path="about" element={<About />} /> 
          <Route path='/students' element={<MyStudents/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/workshop' element={<MyWorkshops/>}/>
          <Route path='/study' element={<CourseViewer/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
