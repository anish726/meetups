import {useContext} from 'react';
import FavoritesContext from '../store/context'
import MeetupList from '../components//layout/meetups/MeetupList'

function Favorites() {

    const favoritesCtx = useContext(FavoritesContext);

    let content;
    if(favoritesCtx.totalFavorites === 0){
        content = <p>You got no Favorites yest. Start adding some?</p>
    }
    else {
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }
    return (
  <section>
     {content}
  </section>
    )
}

export default Favorites;
