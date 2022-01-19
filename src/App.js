import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("dark mode is been enable", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("light mode is been enable", "success")

    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtilies" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes> */}
          <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
