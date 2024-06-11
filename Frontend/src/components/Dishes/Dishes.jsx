import {useEffect , useState} from "react";
import axios from "axios";
import {URL_Dishes} from "../../const/const.js";
import {Link , useParams} from "react-router-dom";

import styles from './Dishes.module.css'


function Dishes() {
    const category = useParams().category;
    const [dishes, setDishes] = useState([]);

    useEffect(()=> {
        axios.get(`${URL_Dishes}${category}`).then(res => {
            setDishes(res.data);
        })
    }, [dishes])


    return (
        <section className={styles.dishes}>
            <div className={styles.list}>

                {dishes.map(({id, title,  image}) => (
                    <div className={styles.item} key={id}>
                        <Link className={styles.link} to={`/recipe/${id}`}>

                            <img className={styles.image} src={image} alt={title}/>
                            <p className={styles.title}>{title}</p>


                        </Link>

                    </div>

                )) }



            </div>


        </section>
    )
}

export default Dishes;