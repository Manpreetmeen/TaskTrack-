
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Addusers from './components/Addusers'
import UsersDetails from './components/UsersDetails'
import ApiData from './components/ApiData'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addusers/>}></Route>
        <Route path='/users' element={<UsersDetails/>}></Route>
        <Route path='/apiData' element={<ApiData/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
