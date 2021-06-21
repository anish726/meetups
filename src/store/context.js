import {useState, createContext} from 'react'

const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite: (favoritesMeetup) => {},
    removeFavorite: (id) => {},
    itemIsFavorite: (id) => {}
});


 export const FavoritesContextProvider = (props) =>{

    const [userFavorites,setUserFavorites] = useState([]);

    function addFavorites (favoritesMeetup){
        setUserFavorites((prev) => {
            return prev.concat(favoritesMeetup);
        })

    }
    function removeFavorites  (id){
        setUserFavorites((prev) => {
            return prev.filter(meetup => meetup.id !== id)
        });

    }
   

    function itemIsFavorites (id){
        return userFavorites.some(meetup => meetup.id === id)
    }
           
    const contexts = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite : addFavorites,
        removeFavorite: removeFavorites,
        itemIsFavorite: itemIsFavorites
    }; 




    return (
        <FavoritesContext.Provider value={contexts}>
            {props.children}
        </FavoritesContext.Provider>

    )
  }
    export default FavoritesContext;