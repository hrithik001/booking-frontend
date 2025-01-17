
import './App.css'
import { API_URL } from './secret.js'
import LoginPage from './pages/LoginPage'
import IndexPage from './pages/IndexPage'
import {Routes,Route} from 'react-router-dom'
import Layout from './layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import {UserContextProvider} from './context/UserContext.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import PlacesPage from './pages/PlacesPage.jsx'
import AddNewPlaceForm from './pages/AddNewPlaceForm.jsx'
import SinglePlacePage from './pages/SinglePlacePage.jsx';
import BookingPage from './pages/BookingPage.jsx'
import BookingsPage from './pages/BookingsPage.jsx'


axios.defaults.baseURL = API_URL
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
        <Route path='/account' element={<ProfilePage/>}></Route>
        <Route path='/account/places' element={<PlacesPage/>}></Route>
        <Route path='/account/places/new' element={<AddNewPlaceForm/>}></Route>
        <Route path='/account/places/:id' element={<AddNewPlaceForm/>}></Route>
        <Route path='/account/bookings'element={<BookingsPage/>}></Route>
        <Route path='/account/bookings/:id'element={<BookingPage/>}></Route>
        <Route path='/places/:id' element={<SinglePlacePage/>}></Route>
       
      </Route>
    </Routes>
  </UserContextProvider>
   


    


    </>
  );
}

export default App
