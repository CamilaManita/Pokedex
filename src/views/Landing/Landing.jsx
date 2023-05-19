import { Link } from 'react-router-dom';

const Landing = () => {

    return (
        <div>
            <h1> Press start to start your pokedex </h1>
            <button>
                <Link to='/home'>Home</Link>
            </button>
        </div>
    )
}

export default Landing;