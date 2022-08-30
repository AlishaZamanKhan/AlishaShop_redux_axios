import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
	const cart = useSelector((state) => state.allProducts.cart);
    console.log("this is Cart",cart);
    const cartLength = cart.length;
    console.log("length.......", cartLength);

    // console.log(CartItems);
    // const totalCartItems = totalCartItems.length();
	return (
		<div className="ui fixed menu">
			<div className="ui container center">
				<h2>Alisha's Shop</h2>
			</div>
			<Link to={`/cart`}>{cartLength}  cart</Link>
		</div>
	);
};

export default Header;
