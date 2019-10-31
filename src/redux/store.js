import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/root';


export const configStore = (preloadedState) => {
    const middlware = [
        thunk
    ]

    const middlwareEnhancer = applyMiddleware(...middlware);
    
    const enhancer = [
        middlwareEnhancer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ]

    const composEnhancer = compose(...enhancer);
    const store = createStore(rootReducer, composEnhancer);
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers/root', () => store.replaceReducer(rootReducer))
    }
    return store;
}