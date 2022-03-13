
import '../styles/Header.css'
import Feature from './Feature'

const features = [
    {
        id: 1,
        title: 'Fast',
        imgUrl: '/src/static/img/icons/running-fast.svg',
        imgAlt: 'a person running really fast',
        description: 'Our experience give us the most efficient and fast development'
    },
    {
        id: 2,
        title: 'Reliability',
        imgUrl: '/src/static/img/icons/lock.svg',
        imgAlt: 'a lock that looks really hard to break',
        description: 'Always with best practices and attention to details'
    },
    {
        id: 3,
        title: 'Modern desing',
        imgUrl: '/src/static/img/icons/design.svg',
        imgAlt: 'design things',
        description: 'A great product need a great design'
    },
    {
        id: 4,
        title: 'Modern technologies',
        imgUrl: '/src/static/img/icons/updated.svg',
        imgAlt: 'update universal icon',
        description: 'We are in constant improvement and innovation'
    }
]

function Header() {

    let mFeatures = features.map(feature => {
        return <Feature key={feature.id} feature={feature} />
    })

    return (
        <header>
            <h1 className='header-title'>Hi! let's gonna make something cool</h1>
            <p className='header-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum vel nam modi. Dolore similique sit laborum voluptas maxime asperiores!</p>
            <div className="features-container">
                {mFeatures}
            </div>
        </header>
    )
}

export default Header