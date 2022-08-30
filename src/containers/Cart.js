import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/actions/cartActions";

const Cart = () => {
    const products = useSelector((state) => state.allProducts.products);
	const cart = useSelector((state) => state.allProducts.cart);
    const dispatch = useDispatch();
    // console.log(cart);
    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    }

	return (
        <div className="cart-ui">
            <table className="table">
			<thead>
				
					<th>ID</th>
					<th>Name</th>
                    <th>Price</th>
                    <th>Button</th>
				
			</thead>

			{cart.map((item, key) => {
				return (
					<tr key={key}>
						<td className="table-data">{item.id}</td>
						<td className="table-data"><Link to={`/product/${item.id}`}>{item.title}</Link></td>
						<td className="table-data">{item.price}</td>
						<td className="table-data"><button onClick={() => handleRemove(item.id)}>remove</button></td>
					</tr>
				);
			})}
		</table>
        </div>
		
	);
};

export default Cart;
