import React, {Component} from 'react';
import './App.css';

class Game extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h3>
                        Play The Game
                    </h3>
                </header>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Game/>
                </header>
            </div>
        );
    }
}

export default App;
