import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import SignupPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Home from "./pages/Home";
import CreateEventPage from "./pages/CreateEventPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventList from "./components/EventList";
import Login from "./components/Login";

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}
function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.accessToken
}

function App() {
    const token = getToken();
    if (!token) {
        return <LoginPage setToken={setToken} />
    }
  return (
      <>
          <Navbar/>
      <div className="min-h-full h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">

              <BrowserRouter>
                  <Routes>
                      <Route path="/home" element={<Home/>}/>
                      <Route path="/login" element={<LoginPage/>} />
                      <Route path="/signup" element={<SignupPage/>} />
                      <Route path="/event/create" element={<CreateEventPage/>} />
                      <Route path="/events" element={<EventList/>} />
                  </Routes>
              </BrowserRouter>


          </div>

      </div>
          <Footer/>
        </>
  );
}

export default App;
