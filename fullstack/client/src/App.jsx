
import {Route, Routes} from "react-router-dom";
import CalenderPage from './pages/CalenderPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Layout from "./components/Layout";
import ProfilePage from './pages/ProfilePage';
import AdminCalender from "./pages/AdminCalender";
import { UserContextProvider } from "./UserContext";

function App() {


  return (
  <UserContextProvider>
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/calender' element={<CalenderPage />} />
          <Route path='/profile/:username' loader={({ params }) => {
           console.log(params.username);
  }}
  action={({ params }) => {}}
element={<ProfilePage />} />          
          <Route path='/admincalender'  element={<AdminCalender />} />
        </Route>
    </Routes> 
  </UserContextProvider>


  )
}

export default App
