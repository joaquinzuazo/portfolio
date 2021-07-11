//import { Carousel  } from 'antd';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";


const CarrouselBo=()=>{
    return(
        <div className='carrousel-index'>
        <Carousel className='carrousel'>
            <Carousel.Item>
                <Link to="/projects/universidad">
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/images/UB7.jpg`}
                        alt="Universidad de Belgrano"
                    />
                    <Carousel.Caption>
                        <h3 style={{'color':'white'}}>Universidad de Belgrano</h3>
                        <p>Edición de video / Camarógrafo.</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to="/projects/fc">
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/images/libertadores.jpg`}
                        alt="FC Diez Media (Conmebol)"
                    />

                    <Carousel.Caption>
                        <h3 style={{'color':'white'}}>FC Diez Media (Conmebol)</h3>
                        <p>Edición de video.</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to="/projects/ingame">
                    <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/images/ingame.png`}
                    alt="Ingame"
                    />

                    <Carousel.Caption>
                    <h3 style={{'color':'white'}}>Ingame</h3>
                    <p>Diseño de producto | Producción audiovisual | Dirección de cámaras.</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to="/projects/gobcaba">
                    <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/images/deportesba.JPG`}
                    alt="Gobierno de la Ciudad Autónoma de Buenos Aires"
                    />

                    <Carousel.Caption>
                    <h3 style={{'color':'white'}}>Gobierno de la Ciudad Autónoma de Buenos Aires</h3>
                    <p>Realizador Audiovisual | Edición | Camarógrafo | Fotógrafo.</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default CarrouselBo