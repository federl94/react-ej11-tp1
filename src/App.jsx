import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from "./components/Formulario.jsx";
function App() {

  return (
    <>
    <div className='container-fluid'>
      <h1 className='text-center'>Noticias</h1>
      <hr />
    </div>
    <section>
      <Formulario></Formulario>
    </section>
    </>
  )
}

export default App
