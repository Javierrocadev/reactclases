import { Component } from 'react';
import SumaHijo from './SumaHijo';
class Suma extends Component {
    numeros = [3, 6, 34]
    state = {
        suma: 0
    }
    //metodo para que reciba el numero seleccionado desde
    //el hijo y lo pase
    mostrarNumero = (numeroSeleccionado) => {
        this.setState((prevState) => ({
            suma: prevState.suma + parseInt(numeroSeleccionado)
        }));
    }
    render() {
        return (
            <div>
                <h1>suma padre</h1>
                <h2 style={{ backgroundColor: "yellow" }}>la suma de los num es: {this.state.suma}</h2>
                {
                    this.numeros.map((numero, index) => {
                        return (<SumaHijo numero={numero} key={index} mostrarNumero={this.mostrarNumero} />)
                    })
                }
            </div>
        )

    }
}
export default Suma;