import styles from "../Styles/ItemDetail.module.css"
import ItemCount from "./ItemCount"

function ItemDetail ({detail}){
    return(
        <div className={styles.fondoDiv}>
            <img className={styles.imagenProduct}src={detail?.images[0]} alt={detail?.title} />
            <h2 className={styles.colorSubtitulos}>{detail?.title}</h2>
            <h5 className={styles.ancho}>{detail?.description}</h5>
            <ItemCount />
        </div>
    )
}

export default ItemDetail