import { Component } from "react";

class HijoDeporte extends Component {
    // state = {
    //     mensaje: ""
    // }
    // mostrarFavorito = () => {
    //     this.setState({
    //         mensaje: "deporte favorito" + this.props.nombre
    //     })
    // }
    seleccionarFavorito = () => {
        //que necesitamos ???
        //capturar props para indicar el deporte seleccionado
        var deporte = this.props.nombre;
        //realizamos la llamada al padre enviando el deporte (parametro)
        this.props.mostrarFavorito(deporte);
    }
    render() {
        return (
            <div>
                <h1 style={{ color: "blue" }}>
                    {this.props.nombre}
                </h1>
                <button onClick={() => this.seleccionarFavorito()}>Seleccionar favorito</button>
                {/* <h2 style={{ backgroundColor: "green" }}>
                    {this.state.mensaje}
                </h2>
                <button onClick={() => this.mostrarFavorito()}>Seleccionar favorito</button> */}
            </div>
        )
    }
}
export default HijoDeporte;