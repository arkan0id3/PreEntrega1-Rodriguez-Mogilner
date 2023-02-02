
import React from 'react';
import './App.css';
import CartWidget from './CartWidget/CartWidget';
import ItemListContainer from './ItemListContainer/ItemListContainer';
//Componentes
import Navbar from './Navbar/Navbar';

// class => className
// <input type="text"></input>  =>  <input type="text" />
// style ="nombrePropiedad: valor" => style={{"nombrePropiedad" : "valor"}}
// `${}`  =>   {}     para pasar código js al html ahora solo hacen falta {}
const App = () => {
  return (
    <>
      <Navbar nombre={"Cerveza Real"}/>
      <CartWidget cantCarrito={3}/>
      <ItemListContainer greeting={"Este es mi ItemListContainer"} />
    </>
  );
}

export default App;
