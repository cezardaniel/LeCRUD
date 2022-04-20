
import background from "./components/form/styles/img/img.jpg";
import Form from './components/form/index.js'
import './App.css';

function App() {
  return (
  <div style={{ 
      backgroundImage: `url(${background})` 
    }}>
    <Form></Form>
  </div>
  );
}

export default App;
