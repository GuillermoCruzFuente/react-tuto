//dependencies
import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

//styles
import '../styles/Nav.css'

class Nav extends Component {
    MENU_CONTAINER_TRANSITION_TIME = 200;
    MENU_ITEMS_DELAY = 50;

    menuItems = [
        {
            name: 'home',
            href: '#'
        },
        {
            name: 'about',
            href: '#'
        },
        {
            name: 'contact',
            href: '#'
        }
    ]

    constructor() {
        super()

        this.state = {
            menuState: false,
            animState: false
        }
    }

    handleOnEntered = () => {
        this.setState({
            animState: true
        })
    }

    handleOnExit = () => {
        this.setState({
            animState: false
        })
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
        let menuItemComponents = this.menuItems.map((item, i) => {
            return <CSSTransition
                key={item.name}
                in={this.state.animState}
                timeout={{ enter: this.MENU_CONTAINER_TRANSITION_TIME + this.MENU_ITEMS_DELAY * i, exit: this.MENU_CONTAINER_TRANSITION_TIME }}
                classNames="menu-item"
                mountOnEnter
                unmountOnExit>
                <li style={{ transitionDelay: `${this.MENU_ITEMS_DELAY * i}ms` }}>
                    <a href={item.href} onClick={this.changeMenuState}>{item.name}</a>
                </li>
            </CSSTransition>
        })

        return (
            <nav>
                <a id='nav-link' href='/' >../codeMe</a>

                <button id='nav-button' onClick={this.changeMenuState}>menu</button>

                <CSSTransition
                    in={this.state.menuState}
                    onEntered={this.handleOnEntered}
                    onExit={this.handleOnExit}
                    timeout={this.MENU_CONTAINER_TRANSITION_TIME}
                    classNames="menu"
                    mountOnEnter
                    unmountOnExit
                >
                    <div id='menu-container'>
                        <ol>
                            {menuItemComponents}
                        </ol>
                    </div>
                </CSSTransition>
            </nav>
        )
    }
}

export default Nav