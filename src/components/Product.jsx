import '../css/Product.css'
export default function Product({setCartItems, cartItems, productData}) {
    function addOneItem(event) {
        const cartCopy = [...cartItems];
        cartCopy.push(event.target.id);
        setCartItems(cartCopy);
        const amountOfThatProductInCart = cartCopy.filter(str => str === productData.productID).length
        const amountOfThatProductInInventory = productData.inventoryBalance;
        const productBtn = document.getElementById(productData.productID)
        
        if(amountOfThatProductInCart >= amountOfThatProductInInventory){
            productBtn.setAttribute('disabled', 'disabled')
        }
        // console.log(cartItems);
        
    }
    const imgStyle = {
        backgroundImage: 'url(' + productData.productImg + ')'
      };
    return (
        <div className='product'>
            <div className='imgDiv'style={imgStyle}></div>
            <section>
                <h2>{productData.productName}</h2>
                <p>{productData.price}</p>
                <div className='inStockAndAddToCart'>
                    <p>{productData.inventoryBalance} in stock</p>
                    {productData.inventoryBalance === 0 && 
                        <button onClick={addOneItem} id={productData.productID} disabled='disabled'>Add to Cart</button>
                    }
                    {productData.inventoryBalance > 0 && 
                        <button onClick={addOneItem} id={productData.productID} disabled=''>Add to Cart</button>
                    }
                </div>
            </section>

        </div>

)
}
// async function removeOneFromInventory(itemID) {
//     // console.log(inventoryObj[itemID])
//     // inventoryBalance--;
//     // console.log(itemID)
//     // const url2 = 'https://avanceradjs-slutprojekt-fs-default-rtdb.europe-west1.firebasedatabase.app/warehouse.json';
    
//     // const res = await fetch(url2);
//     // const dat = await res.json();
//     // const inventoryObj2 = dat;
//     console.log(inventoryBalance);
//     console.log(itemID);
//     inventoryObj[itemID]--;
//      console.log(inventoryObj[itemID]);
//     // const updatedInventoryBalance = {itemID: inventoryBalance}
//     // console.log(updatedInventoryBalance)
//     const url = "https://avanceradjs-slutprojekt-fs-default-rtdb.europe-west1.firebasedatabase.app/warehouse.json";
    
//     const newObj = {};
//     newObj[itemID] = 5;
//     console.log('newObj', newObj);
    // const options = {
    //     method: 'PATCH',
    //     body: JSON.stringify(newObj),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    // }
//     const response = await fetch(url, options);
//     const data = await response.json();
//     console.log(data);
// }