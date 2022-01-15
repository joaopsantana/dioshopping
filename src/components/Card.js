import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();

    return(
        <div className="card me-4 mt-2" style={{"width": "18rem"}}>
            <img src={product.image} alt={product.name_product} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{children}</h5>
                <p className="card-text">R$ {product.price.toFixed(2)}</p>
                <button className="btn btn-danger" onClick={() => dispatch(cartActions.Add(cart, product))}>Comprar</button>
            </div>
        </div>       
    )
}

export default Card;