import '../css/App.css'
import Product from './Product'
import ShoppingCart from './ShoppingCart'
import PurchaseComplete from './PurchaseComplete'
import PurchaseFailed from './PurchaseFailed'
import NavBar from './NavBar'
import Footer from './footer'

import { useEffect, useState } from 'react'

export default function App() {

    const [cartItems, setCartItems] = useState([]);
    const [whatToDisplay, setWhatToDisplay] = useState('products');
    const [status, setStatus] = useState('');
    const [databaseData, setDatabaseData] = useState();

    async function getDatabaseData() {
        if(whatToDisplay === 'products'){

            setStatus('loading');
            const url = 'https://avanceradjs-slutprojekt-fs-default-rtdb.europe-west1.firebasedatabase.app/warehouse.json';
            const response = await fetch(url);
            const data = await response.json();
            if (typeof data === 'object' && data.artisanalPaper.inventoryBalance >= 0) {
                setStatus('success');
                setDatabaseData(data);
    
            }
        }
    }

    useEffect(() => {
        getDatabaseData();
    }, [whatToDisplay]);
    return (

        <div className='body'>
            <div className='navBar' >
                <NavBar cartItems={cartItems} setWhatToDisplay={setWhatToDisplay} />
            </div>

            {status === 'success' && whatToDisplay === 'products' &&
                <div className='flexBox'>
                    <section>
                        <Product setCartItems={setCartItems} cartItems={cartItems} productData={databaseData.artisanalPaper} />
                        <Product setCartItems={setCartItems} cartItems={cartItems} productData={databaseData.regularA4} />
                        <Product setCartItems={setCartItems} cartItems={cartItems} productData={databaseData.qualityPen} />
                    </section>
                    <section>
                        <Product setCartItems={setCartItems} cartItems={cartItems} productData={databaseData.pencils} />
                        <Product setCartItems={setCartItems} cartItems={cartItems} productData={databaseData.pencilSharpener} />
                        <Product setCartItems={setCartItems} cartItems={cartItems} productData={databaseData.pencilsWhiteToGray} />
                    </section>
                </div>
            }
            {status === 'success' && whatToDisplay === 'shoppingCart' &&
                <div className='flexBox'>

                    <ShoppingCart setDatabaseData={setDatabaseData} cartItems={cartItems} setCartItems={setCartItems} setWhatToDisplay={setWhatToDisplay} databaseData={databaseData} />
                </div>
            }
            {status === 'success' && whatToDisplay === 'purchaseComplete' &&
                <div className='flexBox'>
                    <PurchaseComplete />
                </div>
            }
            {status === 'success' && whatToDisplay === 'purchaseFailed' &&
                <div className='flexBox'>
                    <PurchaseFailed />
                </div>
            }
            <Footer />
        </div>


    )
}
