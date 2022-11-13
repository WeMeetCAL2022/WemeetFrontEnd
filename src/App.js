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
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
      <>
          <Navbar/>
      <div className="min-h-full h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">

              <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Home/>}/>
                      <Route path="/home" element={<Home/>}/>
                      <Route path="/login" element={<LoginPage/>} />
                      <Route path="/signup" element={<SignupPage/>} />
                      <Route path="/events" element={
                          <PrivateRoute>
                                <EventList/>
                            </PrivateRoute>
                        } />

                  <Route path="/event/create" element={
                      <PrivateRoute>
                      <CreateEventPage/>
                        </PrivateRoute>
                          } />

                    </Routes>
              </BrowserRouter>


          </div>

      </div>
          <Footer/>
        </>
  );
}

export default App;
