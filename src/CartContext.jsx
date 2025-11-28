import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      return [];
    }
  });

  //Save The Cart on LocalStorage

  //Sync casrt to LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //Add item to Cart
  const addToCart = (item, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((ci) => ci.id === item.id);
      if (existingItem) {
        return prevCart.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + quantity } : ci
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  //Remove Item From Cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((ci) => ci.id !== itemId));
  };

  //Update Item Quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((ci) =>
        ci.id === itemId ? { ...ci, quantity: newQuantity } : ci
      )
    );
  };

  //Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  //Claculate total cost
  const getCartTotal = cart.reduce((count, ci) => count + ci.quantity, 0);

  //calculate Total Item In cart
  const cartCount = cart.reduce((count, ci) => count + ci.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("USECART MUST BE USED WITHIN A CARTPROVIDER.");
  }
  return context;
};
