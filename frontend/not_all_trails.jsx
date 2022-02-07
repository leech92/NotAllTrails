import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (window.currentUser) {
        const preloadedState = {
            session: {currentUserId: window.currentUser.id},
            entities: {
                users: {[window.currentUser.id]: {
                    id: window.currentUser.id,
                    email: window.currentUser.email,
                    first_name: window.currentUser.first_name,
                    last_name: window.currentUser.last_name,
                    brief_bio: window.currentUser.brief_bio
                }}
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }else {
        store = configureStore();
    }

    window.getState = store.getState
    window.dispatch = store.dispatch
    
    const root = document.getElementById("root");

    ReactDOM.render(<Root store={store} />, root);
});