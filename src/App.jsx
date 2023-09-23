import { Routes, Route } from 'react-router'
import Navbar from '@/components/sections/Navbar'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import Register from '@/pages/Register'

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