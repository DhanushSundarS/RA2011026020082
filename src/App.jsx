import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/detail/:id' Component={Detail} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
