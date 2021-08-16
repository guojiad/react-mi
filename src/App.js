// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div>
//       <Header/>
//       <Home/>
//       <Footer/>
//     </div>
//   );
// }


// 创建“外壳”组件APP
// import React from 'react';
import React,{Component} from 'react';
// const {Component} = React;
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

// 创建并暴露App组件
// class App extends React.Component
export default class App extends Component{
    render(){
        return(
            <div className="app">
                <Header/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}

// 暴露App组件
// export default App




























// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>