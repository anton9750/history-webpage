import { Routes, Route } from 'react-router-dom'
import { Layout, Protected } from './partials/Layout'
import Home from './pages/Home'
import Read from './pages/Read'
import Characters from './pages/Characters'
import Images from './pages/Images'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Files from './pages/Files'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="read" element={<Read />} />
        <Route path="characters" element={<Characters />} />
        <Route path="images" element={<Images />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Protected><Dashboard /></Protected>} />
        <Route path="files" element={<Protected><Files /></Protected>} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
