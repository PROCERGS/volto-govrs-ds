

type CardTypes = {
    title: string;
    variant?: 'post' | 'admin' | 'news' | 'newsBottom';
    description?: string;
    image?: string;
    size?: 'round' | 'small';
    state?: boolean;
    href?: string;
}

function Post({title, variant, description, image, size, state, href} : CardTypes){
    return(
        <a className='govrs-card' href={href}>
            <div className='govrs-card-header'>
                <img src={image} alt="" />
                <div className='govrs-card-header-text'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <button className='govrs-card-header-menu' aria-label='Options'>
                    <span>⋮</span>
                </button>
            </div>
        </a>
    )
}

function Card({title, variant, description, image, size, state, href} : CardTypes){
    return(
        <Post title={title} variant={variant} description={description} image={image} size={size} state={state} href={href} />
    )
}


export default Card