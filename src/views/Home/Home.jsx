import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

const Home = () => { 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    // cuando se monta, que haga el dispatch
    // useEffect() - useDispatch
    return (
        <div>
            <h1>
                Esta es la vista de home
            </h1>
            <CardsContainer/>
        </div>
    )
}

export default Home;