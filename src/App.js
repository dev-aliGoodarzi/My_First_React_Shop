//React
import React, { useEffect, useState } from 'react';
//React
//Images
//Images
//CSS
import "./App.css"
//CSS
//Modules
import { Routes, Route } from "react-router-dom"
//Modules
// Components 
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
// Components 
// CONTEXTS IMPORT 
import { CartItemsContext, LikedItemsContext, LikedItemsContextDispacher, SharedItemsContext, SharedItemsContextDispacher } from './Components/Contexts/Contexts';
import { CartItemsContextDispacher } from './Components/Contexts/Contexts';
import Footer from './Components/Footer/Footer';
// CONTEXTS IMPORT 
const App = () => {
    /* ********************METHODS********************* */
    const getItemsFromLocalStorage = (localStorageIndex) => {
        const localStorageIndexChecker = localStorage.getItem(localStorageIndex);
        const jsonFormater = JSON.parse(localStorageIndexChecker || "[]");
        if (jsonFormater) return jsonFormater;
        else return [];
    };
    const addItemsToLocalStorage = (localStorageKey, localStorageItems) => {
        const makeDataToString = JSON.stringify(localStorageItems)
        localStorage.setItem(localStorageKey, makeDataToString)
    }
    /* ********************METHODS********************* */
    /* ********************STATES********************* */
    const [likedItems, setLikedItems] = useState(getItemsFromLocalStorage('likedItems') || [])
    const [cartItems, setCartItems] = useState(getItemsFromLocalStorage('shoppingCart') || [])
    const [sharedItems, setSharedItems] = useState(getItemsFromLocalStorage('sharedItems') || [])
    const [scrollIndicatorWidth, setScrollIndicatorWidth] = useState(0)
    const [forceUpdateHeader, setForceUpdateHeader] = useState(true)
    /* ********************STATES********************* */

    /* *****************Life Cycles*************************** */
    // 
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollHeight = window.scrollY / (window.document.body.scrollHeight - window.innerHeight) * 100
            setScrollIndicatorWidth(scrollHeight)
        })
    }, [])
    useEffect(() => {
        addItemsToLocalStorage('likedItems', likedItems)
        setForceUpdateHeader((prev) => !prev)
    }, [likedItems])
    useEffect(() => {
        addItemsToLocalStorage('shoppingCart', cartItems)
        setForceUpdateHeader((prev) => !prev)
    }, [cartItems])
    useEffect(() => {
        addItemsToLocalStorage('sharedItems', sharedItems)
        setForceUpdateHeader((prev) => !prev)
    }, [sharedItems])
    /* *****************Life Cycles*************************** */
    return (
        <>
            <Header
                isFixed={scrollIndicatorWidth > 5 ? true : false}
                forceUpdate={forceUpdateHeader}
                cartItemsArray={cartItems}
                sharedItemsArray={sharedItems}
                likedItemsArray={likedItems}
                setCartItemsArray={setCartItems}
                setSharedItemsArray={setSharedItems}
                setLikedItemsArray={setLikedItems}
            />
            < Routes >
                <Route path='/' element={<CartItemsContext.Provider value={cartItems}>
                    <CartItemsContextDispacher.Provider value={setCartItems}>
                        <LikedItemsContext.Provider value={likedItems}>
                            <LikedItemsContextDispacher.Provider value={setLikedItems}>
                                <SharedItemsContext.Provider value={sharedItems} >
                                    <SharedItemsContextDispacher.Provider value={setSharedItems}>
                                        <Home />
                                    </SharedItemsContextDispacher.Provider>
                                </SharedItemsContext.Provider>
                            </LikedItemsContextDispacher.Provider>
                        </LikedItemsContext.Provider>
                    </CartItemsContextDispacher.Provider>
                </CartItemsContext.Provider>}>
                </Route>
            </Routes >
            <Footer />
        </>)
}




export default App