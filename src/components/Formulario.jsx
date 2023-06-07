import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";

function Formulario() {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    consultarAPI();
  }, [categoria]);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch('/api/noticias?category=' + categoria);
      const noticias = await respuesta.json();
      setNoticias(noticias);
    } catch (error) {
      alert("Error al obtener las noticias");
    }
  };
  

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Buscar por categorías</Form.Label>
          <Form.Select
            name={categoria}
            id="categoria"
            onChange={(e) => {
              setCategoria(e.target.value);
            }}
            value={categoria}
          >
            <option value="">Elija una categoria</option>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="environment">Medio Ambiente</option>
            <option value="food">Comida</option>
            <option value="health">Salud</option>
            <option value="politics">Política</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnología</option>
            <option value="top">Top noticias</option>
            <option value="tourism">Turismo</option>
            <option value="world">Mundo</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </>
  );
}

export default Formulario;
