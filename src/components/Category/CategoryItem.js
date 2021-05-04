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

export default CategoryItem
