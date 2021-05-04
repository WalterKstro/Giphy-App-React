import './HeaderGiphy.css'
import brand from '../../react.svg'

const GiphyHeader = () => {
    return (
        <header className="header">
           <h1>Giphy App</h1> 
           <figure className="figure">
               <img src={brand} alt="logo react"></img>
           </figure>
        </header>
    )
}


export default GiphyHeader