
import './App.css'
import LoginPage from './pages/LoginPage'
import IndexPage from './pages/IndexPage'
import {Routes,Route} from 'react-router-dom'
import Layout from './layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import {UserContextProvider} from './context/UserContext.jsx'


axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true;

function App() {
  
  

  return (
    <>
  <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Route>
    </Routes>
  </UserContextProvider>
   


    


    </>
  );
}

export default App
