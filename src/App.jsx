import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App 