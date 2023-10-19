import './App.css';

import Mensaje from './Mensaje.js';

function App() {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando"/>
      <Mensaje color="yellow" message="En un curso"/>
      <Mensaje color="blue" message="De react"/>
      <Mensaje color="#16b8f7" message="Hola esto debe ser un color azul claro"/>
    </div>
  );
}

export default App;
