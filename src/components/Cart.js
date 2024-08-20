import { useCart } from "react-use-cart";
import "./css/cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ImCart } from "react-icons/im";

function Cart(props) {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState("5");

  const {
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    isEmpty,
    totalItems,
  } = useCart();

  const handleSelect = (e) => {
    setResult(e.target.value);
  };

  const val = parseInt(result);
  if (isEmpty) {
    return (
      <div className="container_1" style={{ display: "none" }}>
        <div className="cartA">
          <h1>The cart is Empty</h1>
        </div>
      </div>
    );
  }
  const handleCart = () => {
    return setShow(!show);
  };

  return (
    <div className="cart">
      <div className="btncart">
        <button onClick={handleCart}>
          <ImCart className="cartlogo" />
          <span>{totalItems}</span>
        </button>
      </div>
      {show && (
        <div className="container_1">
          <div className="cartA">
            <div className="items-in-the-bag">
              <div className="cartB">
                <h1>Shopping Cart</h1>
                <p>{totalItems} items</p>
              </div>
              <div className="itemss">
                {items.map((item, index) => {
                  return (
                    <div key={index} className="cartC">
                      <div className="cimg">
                        <img src={item.img} alt="imh" />
                      </div>
                      <div className="text">
                        <h4>{item.brand}</h4>
                        <h3>{item.name}</h3>
                      </div>
                      <div className="cartD">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <div>{item.quantity}</div>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <p>${item.price}</p>
                      <div className="cartE">
                        <button
                          className="smallbtn"
                          onClick={() => removeItem(item.id)}
                        >
                          <FontAwesomeIcon icon={faX} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="backhomebtn">
                <button onClick={handleCart}>
                  <FontAwesomeIcon icon={faArrowLeft} /> Back to Home{" "}
                </button>
              </div>
            </div>
            <div className="carttotal">
              <div className="t">
                <div className="summary">
                  <h1>summary</h1>
                </div>
                <div className="subtotal">
                  <div className="item-price">
                    <h3>Items {totalItems}</h3>
                    <h3>${cartTotal}</h3>
                  </div>
                  <div className="choices">
                    <label>SHIPPING</label>
                    <select onChange={handleSelect}>
                      <option value="5">
                        Starndard-Delivery (7-10 Shipping days)- $5
                      </option>
                      <option value="9">
                        Special-Delivery (2-5 Shipping days)- $9
                      </option>
                    </select>
                    <label>GIVE CODE</label>
                    <input type="text" placeholder="  Enter your code" />
                  </div>
                  <div className="tpc">
                    <div className="tp">
                      <h3>Total Price</h3>
                      <h3>{`$ ${cartTotal + val}`}</h3>
                    </div>
                    <button className="btncheck" onClick={props.open}>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
