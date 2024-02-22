import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import React, { useState } from 'react';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const menuHeader = [
  {
    imageName: 'logo.png',
    subheading1: 'Delicious Japanese Recipes',
    subheading2: 'The Best Choice at UT!'
  }
]

function App() {
  const [cart, setCart] = useState(menuItems.map(item => ({ ...item, quantity: 0 })));
  const [subtotal, setSubtotal] = useState(0);

  const addToCart = (itemId) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
        (item.id === itemId) ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateSubtotal(updatedCart);
      return updatedCart;
    });
  };
  
  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
        (item.id === itemId && item.quantity > 0) ? { ...item, quantity: item.quantity - 1 } : item
      );
      updateSubtotal(updatedCart);
      return updatedCart;
    });
  };
  
  const clearCart = () => {
    setCart(prevCart => prevCart.map(item => ({ ...item, quantity: 0 })));
    setSubtotal(0);
  };

  const updateSubtotal = (updatedCart) => {
    const total = updatedCart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setSubtotal(total);
  };
  
  const placeOrder = () => {
    const orderedItems = cart.filter(item => item.quantity > 0);
    if (orderedItems.length === 0) {
      alert('No items in the cart.');
    } else {
      const orderSummary = orderedItems.map(item => `${item.quantity} x ${item.title}`).join('\n');
      alert(`Order Placed!\n\n${orderSummary}\n\nTotal: $${subtotal.toFixed(2)}`);
      clearCart();
    }
  };

  return (
    <div>
      {menuHeader.map((header) => (
        <Header
          imageName={header.imageName}
          subheading1={header.subheading1}
          subheading2={header.subheading2}
        />
      ))}
      <div className="menu">
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            title={menuItem.title}
            description={menuItem.description}
            imageName={menuItem.imageName}
            price={menuItem.price}
            quantity={cart.find(item => item.id === menuItem.id).quantity}
            onAdd={() => addToCart(menuItem.id)}
            onRemove={() => removeFromCart(menuItem.id)}
          />
        ))}
      </div>

      <div className="cart" >
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <button 
          className="rounded-3" 
          style={{ backgroundColor: '#ADD8E6' }} 
          onClick={placeOrder}
          >Order
        </button>
        <button className="rounded-3" onClick={clearCart}>Clear all</button>
      </div>
    </div>
  );
}


export default App;
