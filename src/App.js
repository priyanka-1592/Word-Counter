import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] =useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls)=>{
    console.log('Class to add:', cls, 'Type:', typeof cls);
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
  
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor= '#042743';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
    document.title = "TextUtils - Light Mode";
  }
}
 
  return (
   <>
  <Navbar title="Word-Counter" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading="Try Word-Counter" />
  </div>
  </>
  );
}

export default App;

  