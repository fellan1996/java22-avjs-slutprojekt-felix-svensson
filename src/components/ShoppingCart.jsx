export default function ShoppingCart({ cartItems, setWhatToDisplay, setCartItems, databaseData, setDatabaseData }) {
    let totalCost = 0;
    cartItems.forEach(item => {
        const costStr = databaseData[item].price.match(/\d+/)[0]
        totalCost += parseInt(costStr);
    });
    function emptyCart() {
        setCartItems([]);
        setWhatToDisplay('products');
    }
    function completePurchase() {
        async function updateDatabaseData(){
            const url = 'https://avanceradjs-slutprojekt-fs-default-rtdb.europe-west1.firebasedatabase.app/warehouse.json';
    
            const options = {
                method: 'PUT',
                body: JSON.stringify(dbCopy),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
            const response = await fetch(url, options);
            const data = await response.json();
            setDatabaseData(data);
        }
        const dbCopy = JSON.parse(JSON.stringify(databaseData));
        let counter = 0;
        
        cartItems.forEach(item => {
            if (dbCopy[item].inventoryBalance > 0) {
                dbCopy[item].inventoryBalance--;
                counter++;
            } 
        });
        if (counter === cartItems.length) {
            // await setDatabaseData(dbCopy);
            updateDatabaseData();
            setWhatToDisplay('purchaseComplete');
        }
        else {
            console.log('not enough inventory');
            setWhatToDisplay('purchaseFailed');
        }
        setCartItems([]);
    }

    return (
        <div className='shoppingCartFlexBox'>
            
            <h3>Your Shopping Cart</h3> 
            {cartItems.length === 0 && <p>No items in your cart</p>}
            
            {cartItems.length > 0 && cartItems.map(item => <p>{databaseData[item].productName}  {databaseData[item].price}</p>)}
            <h4>Total Cost: £{totalCost}</h4>
            {cartItems.length > 0 && <button onClick={completePurchase}>Purchase Items</button>}
            {cartItems.length > 0 && <button onClick={emptyCart}>empty cart</button>}
        </div>

    )
}