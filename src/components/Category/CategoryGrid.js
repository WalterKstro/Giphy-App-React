import useFetch from '../../hooks/useFetch'
import './CategoryGrid.css'
import CategoryItem from './CategoryItem'



const GridCategory = ({ category }) => {

    const {data:items, loading} = useFetch(category)

    return (
        <div className="category_item">
            <p className="category_title">Category: <strong>{ category }</strong></p>
            {loading && <p className="loadding">Loadding data ...</p>}
            {
                items.map( item => (
                    <CategoryItem 
                        key={item.id} 
                        {...item}
                    />
                ))
            }
        </div>
    )
}


export default GridCategory
