
import '../styles/Header.css'
import Feature from './Feature'

import features from '../static/data/features'

function Header() {

    let mFeatures = features.map(feature => {
        return <Feature key={feature.id} feature={feature} />
    })

    return (
        <header>
            <div className="container">
                <h1 className='header-title'>Hi! let's gonna make something cool</h1>
                <p className='header-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum vel nam modi. Dolore similique sit laborum voluptas maxime asperiores!</p>
                
                <div className="features-container">
                    {mFeatures}
                </div>
            </div>
        </header>
    )
}

export default Header