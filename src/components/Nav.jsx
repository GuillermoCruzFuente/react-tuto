import '../styles/Nav.css'

function Nav() {
    let menuState = false
    let a = () => {
        menuState = !menuState

        menuState ? document.getElementById('menu-container').style.right = '0' : document.getElementById('menu-container').style.right = '-100%'
    }

    return (
        <nav>
            <div id='nav-body'>
                <a className='nav-link' href='/' >../code</a>

                <button className='nav-button' onClick={a}>
                    menu
                </button>
            </div>

            <div id='menu-container'>
                <ol>
                    <li>
                        <a href="/">home</a>
                    </li>

                    <li>
                        <a href="/">about</a>
                    </li>

                    <li>
                        <a href="/">contact</a>
                    </li>
                </ol>
            </div>
        </nav>
    )
}

export default Nav