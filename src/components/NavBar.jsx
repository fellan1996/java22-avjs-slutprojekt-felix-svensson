import '../css/NavBar.css'

export default function NavBar({cartItems, setWhatToDisplay}) {
    function handleClick(event) {
        setWhatToDisplay(event.target.className)
    }
    const logo = 'https://firebasestorage.googleapis.com/v0/b/avanceradjs-slutprojekt-fs.appspot.com/o/logo.jpg?alt=media&token=b48adc1d-de81-47b7-9549-f27e270d6005';
    
    return (

        <div className='navBar'>
            <button className='products' onClick={handleClick}>
                Products
            </button >

            <img src={logo} alt="Logo" />

            <button className='shoppingCart' id='shoppingCartBtn' onClick={handleClick}>
                <p className='shoppingCart' id='numOfItemsInCart'>{cartItems.length}</p>
            </button>
        </div>
    )
}