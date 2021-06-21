import  { useContext } from 'react'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../../../store/context';

function MeetupItem(props) {
 

    const favoriteCtx = useContext(FavoritesContext);
    
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)

    const toggaleFavoritesHandler = () =>{

        if(itemIsFavorite){

            favoriteCtx.removeFavorite(props.id);
        }
        else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }



    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
    <address>{props.address}</address>
    <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
             <button onClick={toggaleFavoritesHandler}>
                 {itemIsFavorite ? 'Remove from favorite' : 'To favorites'}
                 </button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem