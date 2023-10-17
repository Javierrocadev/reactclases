import { Component } from "react";
class DibujosComplejosReact extends Component {
    //declaramos un array de nombres
    //dentro de state para que sea dinamico
    state = {
        nombres: ["Juan", "Pedro", "Maria", "Jose", "Mar"]
    }
    // nombres = ["Juan", "Pedro", "Maria", "Jose", "Mar"];
    //creamos un metodo para generar nuevo nombre
    generarNombre = () => {
        this.state.nombres.push("nuevo nombre");
        this.setState({
            nombres: this.state.nombres
        })
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>Dibujos complejos React Colection</h1>
                <button onClick={() => this.generarNombre()}>Generar nombre</button>
                {
                    //este codigo REACT debe contener un return
                    //y este codigo logico que utiliza la sintaxis JSX
                    //this.nombres.map((name, index)
                    this.state.nombres.map((name, index) => {
                        //nunca podemos dejar vacio este código, NUNCA
                        //DEBE CONTENER UN RETURN
                        return (<h3 style={{ color: "blue" }} key={index}>
                            {name}
                        </h3>)
                    })
                }
            </div>
        )
    }
}
export default DibujosComplejosReact;