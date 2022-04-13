import React, {useState } from "react";
import ReactDOM from "react-dom";
import './styles/style.css';
import { FiUser } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import { Input,Label} from "semantic-ui-react";
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
    <div className="box">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
           
          <Input labelPosition='right' type='text' placeholder='Amount'>
            <Label basic><FiUser></FiUser>
            <input type="text" name="uname" placeholder="Username" required></input>
            </Label>
          </Input>
          {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <Input labelPosition='right' type='text' placeholder='Amount'>
              <Label basic><BiLockAlt></BiLockAlt>
              <input type="password" name="pass" placeholder="Password" required />
              </Label>
            </Input>
            
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
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