import { Component } from 'react';
class SumaHijo extends Component {
    sumar = () => {
        var numero = this.props.numero;
        this.props.mostrarNumero(numero);
    }
    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>
                    {this.props.numero}
                </h1>
                <button onClick={() => this.sumar()}>Sumar</button>
            </div >
        )

    }
}
export default SumaHijo;