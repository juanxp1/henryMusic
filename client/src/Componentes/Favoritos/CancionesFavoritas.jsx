import styles from "./Favorites.module.css"
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeFavorite } from "../../redux/actions"

export default function CharacterFavorites({character}){
    let dispatch = useDispatch()
    const handleChangeFav = ()=> dispatch(removeFavorite(character.id))
    
    return(
        <div className={styles.character_item}>
            <div className={styles.character_info}>

                <div className={styles.fav_subcontainer}>
                    <img src={require("../../assets/delete_blue.png")} alt="delete btn"
                    onClick={handleChangeFav}/>
                </div>

                <Link to={`/characters/${character.id}`}><img src={character?.image}
                 className={styles.char_img}  alt=""/></Link>
                
                <h2 className={styles.character_name}>{character?.name}</h2>
           
            </div>
        </div>
    )
}