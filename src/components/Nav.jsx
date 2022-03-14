//dependencies
import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

//styles
import '../styles/Nav.css'

class Nav extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuState: false
        }
    }

    changeMenuState = () => {
        this.menuState = !this.menuState

        this.setState({
            menuState: this.menuState
        })
        
        let html = document.getElementsByTagName('html')[0];

        this.menuState ? html.style.overflowY = 'hidden' : html.style.overflowY = 'auto'
    }

    render() {

        return (
            <nav>
                <a id='nav-link' href='/' >../codeMe</a>

                <button id='nav-button' onClick={this.changeMenuState}>menu</button>

                <CSSTransition
                in={this.state.menuState}
                timeout={300}
                classNames="menu"
                unmountOnExit
                >
                    <div id='menu-container'>
                        <ol>
                            <li>
                                <a href="#" onClick={this.changeMenuState}>home</a>
                            </li>

                            <li>
                                <a href="#" onClick={this.changeMenuState}>about</a>
                            </li>

                            <li>
                                <a href="#" onClick={this.changeMenuState}>contact</a>
                            </li>
                        </ol>
                    </div>
                </CSSTransition>
            </nav>
        )
    }
}

export default Nav