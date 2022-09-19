import Banner from '../../img/twitter.png'
import './container.css'
import logo from '../../img/svgexport-3.svg'
export function Twitter(){
    return(
    <div className="container">
        <div className="img-banner">
        <img src={Banner} alt="" />
        <div className="logo">
        <img src={logo}alt="" />
        </div>
        </div>
    </div>
);
}