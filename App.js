import logo from './logo.svg';
import './App.css';
import './MyComponents/Header.js';
import Header from './MyComponents/Header.js';
import Footer from "./MyComponents/Footer.js";
import Tbody from "./MyComponents/Tbody.js";
import Todo from "./MyComponents/Todo.js";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go on with great good",
      desc: "just be with it"
    },

    {
      sno: 2,
      title: "Go on",
      desc: "just be with it"
    },

    {
      sno: 3,
      title: "great good",
      desc: "just be with it"
    }
  ]
  
  return (
    <>
    <Header />
    <Tbody />
    <Todo />
    <Footer />
    </>
    
  );
}

export default App;
