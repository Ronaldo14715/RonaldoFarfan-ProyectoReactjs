import CartWidget from "./CartWidget"

const Nav = () => {
    return (
        <nav className="navContainer">
            <a href="#"> <img src="./src/assets/img/logoCorcis.jpg" alt="logo" className="img-nav"/> </a>
            <ul className="list-nav">
                <li><a href="#" className="a-li-nav">INICIO</a></li>
                <li><a href="#" className="a-li-nav">PRODUCTOS</a></li>
                <li><a href="#" className="a-li-nav">SERVICIOS</a></li>
                <li><a href="#" className="a-li-nav">¿QUIENES SOMOS?</a></li>
                <li><a href="#" className="a-li-nav">LOGIN</a></li>
            </ul>
            <CartWidget counter={15} />
        </nav>
        
    )
}

export default Nav;