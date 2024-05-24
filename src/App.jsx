import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactPage from './pages/ContactPage/ContactPage'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
     <Routes>
      <Route path="/portfolio/" element={<HomePage />} />
      <Route path="/portfolio/about" element={<AboutPage />} />
      <Route path="/portfolio/projects" element={<ProjectsPage/>} />
      <Route path="/portfolio/contact" element={<ContactPage/>} />
     </Routes>
    </>
  )
}

export default App
