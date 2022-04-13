import React, {useState } from "react";
import ReactDOM from "react-dom";
import './styles/style.css';

function Form(){
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // User Login info
  const database = [
    {
      username: "dani",
      password: "scimmia"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Evita che la pagina si ricarichi
    event.preventDefault();
    //Crea le due variabili 
    var { uname, pass } = document.forms[0];
    // Cerco l'utente
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Password non trovata
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Utente non trovato
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Genero il messaggio d'errore
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

    return (
    
    <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          
        </div>
        
    </div>
    
    );
}
    const rootElement = document.getElementById("root");
    ReactDOM.render(<Form />, rootElement);
    export default Form;