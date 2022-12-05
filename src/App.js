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
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import EditEventPage from "./pages/EditEventPage";
import InviteEventPage from "./pages/InviteEventPage";

function App() {
  return (
    <div class="flex flex-col h-screen justify-between">
        <Navbar/>
        <div className="mb-auto flex items-center justify-center">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={
                        <PublicRoute>
                            <LoginPage/>
                        </PublicRoute>
                    } />
                    <Route path="/signup" element={
                        <PublicRoute>
                            <SignupPage/>
                        </PublicRoute>
                    } />
                    <Route path="/events" element={
                        <PrivateRoute>
                            <EventList isMyEvent={false}/>
                        </PrivateRoute>
                    } />
                    <Route path="/myevents" element={
                        <PrivateRoute>
                            <EventList isMyEvent={true}/>
                        </PrivateRoute>
                    } />

                    <Route path="/event/create" element={
                        <PrivateRoute>
                            <CreateEventPage/>
                        </PrivateRoute>
                    } />
                    <Route path={"/event/modify/:id"} element={
                        <PrivateRoute>
                            <EditEventPage/>
                        </PrivateRoute>
                    } />
                    <Route path={"/event/invite/:id"} element={
                        <PrivateRoute>
                            <InviteEventPage/>
                        </PrivateRoute>
                    } />
                    <Route path="*" element={<Home/>}/>                    
                </Routes>
            </BrowserRouter>
        </div>
        <Footer/>
    </div>
  );
}

export default App;