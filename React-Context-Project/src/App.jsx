// import { useState } from 'react'
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header/Header';
import LoginForm  from "./components/Auth/LoginForm";
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserProvider>
      <CartProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <Header />
                    
          <main className="max-w-7xl mx-auto p-6">
            <LoginForm/>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ProductList/>
              </div>
              <div>
                <Cart/>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </CartProvider>
    </UserProvider>


  );
}

export default App
