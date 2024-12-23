import {useState, useEffect} from 'react';
import {useParams} from "react-router"
import ItemList from './ItemList'


function ItemListContainer() {

  const [items, setItems] = useState ([])
  const {category} = useParams()
  
  useEffect (() => {
    const allProducts = 'https://dummyjson.com/products'
    const categoryProducts = `https://dummyjson.com/products/category/${category}`

    fetch( category ? categoryProducts : allProducts)
      .then(res => res.json())
      .then(res => setItems(res.products));
  }, [category])

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer;