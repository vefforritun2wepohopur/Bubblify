import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavBar/NavBar';


import About from './About/About';
import BubbleID from './BubbleID/BubbleID';
import Bundles from './Bundles/Bundles';
import Cart from './Cart/Cart';
import Home from './Home/Home';
import Products from './Products/Products';


const App = () => {
    return (

        <div>
            <NavigationBar />
            <div className="container">
                        <Switch>
                            <Route exact path="/" component={ Home } />
                            <Route path="/home" render={ () => <Redirect to="/" /> } />
                            <Route exact path="/products" component={ Products } />
                            <Route exact path="/bundles" component={ Bundles } />
                            <Route exact path="/about" component={ About } />
                            <Route exact path="/cart" component={ Cart } />
                            <Route exact path="/:bubbleId" component={ BubbleID } />
                            <Route path="*" render={() => <div>404 Not found</div>} />
                        </Switch>
            </div>
          
        </div>
    )
};

export default App;
