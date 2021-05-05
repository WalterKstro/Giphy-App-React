import PropTypes from 'prop-types';

const CategoryItem = ({url,title}) => {
    return (
        <div className="grid__item animate__animated animate__fadeInLeft">
            <figure>
                <img src={url} alt={title}/>
                <figcaption>
                    {title}
                </figcaption>
            </figure>
        </div>
    )
}

CategoryItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}


export default CategoryItem
