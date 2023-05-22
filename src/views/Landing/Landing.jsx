import { Link } from 'react-router-dom';
import style from './Langing.module.css';

const Landing = () => {

    return (
            <div className={style.body}>
                <img src='https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-Background-PNG.png' className={style.logo}/>
                <img src='https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-1.png' className={style.imagen} />
                <button className={style.boton}>
                    <Link to='/home' className={style.link}>Start</Link>
                </button>
            </div>

    )
}

export default Landing;