 import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/context'
function MainNavigation() {

   const FavoritesCtx = useContext(FavoritesContext); 
    return (
      <header className={classes.header}>
          <div className={classes.logo}>React Meetups  </div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">All Meetups</Link>
                      </li>
                      <li>
                          <Link to="/new-meetup">New Meetups</Link>
                      </li>
                      <li>
                          <Link to="/favorites">Favorites
    <span className={classes.badge}>{FavoritesCtx.totalFavorites}</span></Link>
                      </li>
                  </ul>
              </nav>
        
      </header>
    )
}

export default MainNavigation;
