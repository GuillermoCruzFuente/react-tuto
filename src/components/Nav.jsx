//dependencies
import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

//styles
import '../styles/Nav.scss'

class Nav extends Component {
    // Remember change this values in Nav.scss file too
    MENU_CONTAINER_ENTER_TIME = 300     //Duration for the menu container enter animation
    MENU_CONTAINER_OUT_TIME = 500       //Duration for the out animation
    MENU_ITEMS_ENTER_TIME = 150         //Duration for the item enter animation
    MENU_ITEMS_OUT_TIME = 200           //Duration for the item out animation
    MENU_ITEMS_ENTER_AT_TIME = 200      //The time to initiate the animation after the menu container animation start, this should be less than MENU_CONTAINER_ENTER_TIME
    MENU_ITEMS_DELAY = 80              //Duration for delay between items

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
        setTimeout(() => {
            this.setState({
                animState: true
            })
        }, this.MENU_ITEMS_ENTER_AT_TIME);
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
                timeout={{ enter: this.MENU_ITEMS_ENTER_TIME + this.MENU_ITEMS_DELAY * i, exit: this.MENU_ITEMS_OUT_TIME }}
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
                    onEnter={this.handleOnEntered}
                    onExit={this.handleOnExit}
                    timeout={{ enter: this.MENU_CONTAINER_ENTER_TIME, exit: this.MENU_CONTAINER_OUT_TIME }}
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