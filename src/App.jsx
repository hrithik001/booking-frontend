
import './App.css'
import LoginPage from './pages/LoginPage'
import IndexPage from './pages/IndexPage'
import {Routes,Route} from 'react-router-dom'
import Layout from './layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:4000'

function App() {
  

  return (
    <>

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Route>
    </Routes>

   


    


    </>
  );
}

export default App
