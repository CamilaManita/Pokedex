import { Link } from 'react-router-dom';
import './Langing.module.css'

const Landing = () => {

    return (
        <body className='landingFondo'>
            <div>
                <h1> Press start to start your pokedex </h1>
                <button>
                    <Link to='/home'>Home</Link>
                </button>
            </div>
        </body>
    )
}

export default Landing;