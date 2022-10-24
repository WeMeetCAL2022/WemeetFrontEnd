
import './App.css';
import LoginForm from "./components/LoginForm";
import SignIn from "./components/SignIn";
import CreateEvent from "./components/CreateEvent";

function App() {
  return (
      <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <LoginForm />
          <SignIn />
          <CreateEvent />
      </>
  );
}

export default App;
