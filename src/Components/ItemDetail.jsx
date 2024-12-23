import styles from "../styles/ItemDetailContainer.module.css"
import ItemCount from "./ItemCount"

function ItemDetail ({detail}){
    return(
        <div>
            <img className={styles.imagenProduct} src={detail?.images[0]} alt={detail?.title} />
            <h3>{detail?.title}</h3>
            <p>{detail?.description}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail