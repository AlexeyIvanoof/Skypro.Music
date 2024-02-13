import s from './Product.module.css'
import ProductItem from './ProductItem'

//Отображение списка товарв
export default function Product({ data, isLoading }) {
  return (
    <div className={s.mainContent}>
      <div className={s.cards}>
        {data?.length > 0 &&
          !isLoading &&
          data.map((item) => <ProductItem key={Math.random()} item={item} />)}
      </div>
    </div>
  )
}
