import React from 'react';
import store from './redux';
import { Provider } from 'react-redux';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    )
  }
}

export default App;