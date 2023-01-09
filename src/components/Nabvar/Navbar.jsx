import Categorias from "../Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
    <div class="nav-container">
        <div class="brand-section">
            <a href="index.html"><img src="https://i.pinimg.com/originals/49/96/47/49964743826f910c6d579cb41e843ed3.png" alt="Logo" class="brand-img"/></a>
            <a href="index.html"><h2 class="brand-txt">Ninten<span class="shop">Shop</span></h2></a>
        </div>
        <Categorias/>
        <CartWidget/>
    </div>
);
}

export default Navbar;