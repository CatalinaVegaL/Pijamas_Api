import React, { createContext, useState, useEffect } from "react";
import { Data } from "../data";

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [carrito, setCarrito] = useState([]);
	const [total, setTotal] = useState(0);

	//Evita inconvenientes con valores Undefined al llamar los productos del data
	useEffect(() => {
		const product = Data.items;
		if (product) {
			setProducts(product);
		} else {
			setProducts([]);
		}
	}, []);

	useEffect(() => {
		const getTotal = () => {
			const res = carrito.reduce((prev, item) => {
				return prev + item.price * item.cantidad;
			}, 0);
			setTotal(res);
		};
		getTotal(); 
	}, [carrito]);

	//Funcion que almacena el dato al carro de compras en el header
	const addCarrito = (id) => {
		const check = carrito.every((item) => {
			return item.id !== id;
		});
		if (check) {
			const data = products.filter((producto) => {
				return producto.id === id;
			});
			setCarrito([...carrito, ...data]);
		} else {
			alert("El producto ya se encuentra añadido al carro de compras");
		}
	};

	const value = {
		products: [products],
		// menu: [menu, setMenu],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
		total: [total, setTotal]
	};
	return (
		<DataContext.Provider value={value}>{props.children}</DataContext.Provider>
	);
};
