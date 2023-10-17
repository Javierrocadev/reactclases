import { Component } from "react";
import HijoDeporte from "./HijoDeporte";
class PadreDeportes extends Component {
    deportes = ["Futbol", "Golf", "Hockey", "Tennis", "Volleyball"]
    //necesitamos una variable para saber el deporte favorito
    //dicha variable sea dinemica dependiendo del hijo seleccionado
    state = {
        favorito: ""
    }
    //necesitamos un metodo que recibira el deporte seleccionado
    //desde el hijo ----necesitamos recibir el deporte seleccionado
    mostrarFavorito = (deporteSeleccionado) => {
        //modificamos el state para indicar el favorito
        this.setState({
            favorito: deporteSeleccionado
        })
    }
    render() {
        return (
            <div>
                <h1 style={{ color: "green" }}>Padre Deportes</h1>
                <h2 style={{ backgroundColor: "yellow" }}>
                    Su deporte favorito es: {this.state.favorito}
                </h2>
                {
                    //recorrer todos los deportes y creamos
                    //etiquetas <HijoDeportes /> enviando el nombre
                    this.deportes.map((deporte, index) => {
                        return (<HijoDeporte nombre={deporte} key={index} mostrarFavorito={this.mostrarFavorito} />)
                    })
                }
            </div>
        )
    }
}
export default PadreDeportes;