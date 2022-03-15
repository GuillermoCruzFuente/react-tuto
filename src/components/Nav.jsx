//dependencies
import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

//styles
import '../styles/Nav.css'

class Nav extends Component {
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

    constructor(props) {
        super(props)

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

    items() {
        let array = this.menuItems.map((item, i) => {
            <CSSTransition
                in={this.state.animState}
                timeout={{enter: 500 + 50*i, exit: 500}}
                // timeout={500 + 50 * i}
                classNames="menu-item"
                mountOnEnter
                unmountOnExit>
                <li style={{ transitionDelay: `${50 * i}ms` }}>
                    <a href={item.href} onClick={this.changeMenuState}>{item.name}</a>
                </li>
            </CSSTransition>
        })

        return array
    }

    render() {

        return (
            <nav>
                <a id='nav-link' href='/' >../codeMe</a>

                <button id='nav-button' onClick={this.changeMenuState}>menu</button>

                <CSSTransition
                    in={this.state.menuState}
                    onEntered={this.handleOnEntered}
                    onExit={this.handleOnExit}
                    timeout={300}
                    classNames="menu"
                    mountOnEnter
                    unmountOnExit
                >
                    <div id='menu-container'>
                        <ol>
                            <CSSTransition
                                in={this.state.animState}
                                timeout={500}
                                classNames="menu-item"
                                mountOnEnter
                                unmountOnExit
                            >
                                <li>
                                    <a href="#" onClick={this.changeMenuState}>home</a>
                                </li>
                            </CSSTransition>

                            <CSSTransition
                                in={this.state.animState}
                                timeout={600}
                                classNames="menu-item"
                                mountOnEnter
                                unmountOnExit
                            >

                                <li style={{transitionDelay: `${100}ms`}}>
                                    <a href="#" onClick={this.changeMenuState}>about</a>
                                </li>
                            </CSSTransition>

                            <CSSTransition
                                in={this.state.animState}
                                timeout={700}
                                classNames="menu-item"
                                mountOnEnter
                                unmountOnExit
                            >
                                <li style={{transitionDelay: `${200}ms`}}>
                                    <a href="#" onClick={this.changeMenuState}>contact</a>
                                </li>
                            </CSSTransition>
                        </ol>
                    </div>
                </CSSTransition>
            </nav>
        )
    }
}

export default Nav