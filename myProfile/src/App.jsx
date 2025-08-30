import './App.css'
import Layout from './components/Layout'
import Home from './components/navigations/Home'
import About from './components/navigations/About'
import Skills from './components/navigations/Skill'
import Resume from './components/navigations/Resume'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />     
          <Route path="about" element={<About />} /> 
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
