import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

class App extends Component {
    render() {
        return (
            <Provder store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
            </Provder>
        );
    }
}

export default App;