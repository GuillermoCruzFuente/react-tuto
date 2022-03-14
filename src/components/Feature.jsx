import '../styles/Feature.css'

function Feature(props) {
    return (
        <article className='feature-container'>
            <div className='feature-title-container'>
                <img className='feature-img' src={props.feature.imgUrl} alt={props.feature.imgAlt} />
                <h1 className='feature-title'>{props.feature.title}</h1>
            </div>

            <p className='feature-description'>{props.feature.description}</p>
        </article>
    )
}

export default Feature