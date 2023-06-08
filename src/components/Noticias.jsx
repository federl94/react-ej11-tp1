import {Card} from "react-bootstrap";

function Noticias({imagen, titulo, descripcion, link}){
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className="mw-50" src={imagen || `https://picsum.photos/id/237/200/300`}/>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text className="text-truncate">
          {descripcion}
        </Card.Text>
        <a className="btn btn-primary mt-auto mb-3" href={link} target="_blank">
        Ver noticia
      </a>
      </Card.Body>
    </Card> 
    )
}

export default Noticias;