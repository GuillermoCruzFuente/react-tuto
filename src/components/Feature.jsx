import '../styles/Feature.css'

function Feature(prop) {
    return (
        <article className='feature-container'>
            <div className='feature-title-container'>
                <img className='feature-img' src={prop.feature.imgUrl} alt={prop.feature.imgAlt} />
                <h1 className='feature-title'>{prop.feature.title}</h1>
            </div>

            <p className='feature-description'>{prop.feature.description}</p>
        </article>
    )
}

export default Feature