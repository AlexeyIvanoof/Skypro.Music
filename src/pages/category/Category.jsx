import { useParams } from 'react-router-dom';
import * as S from './styles';
import { categoryArr } from '../../components/utilits/categoryes';

export  function Category() {
  const params = useParams();

  const curentcategory = categoryArr.find((category) => category.id === Number(params.id));

  return (
    <S.CategoryBlock>
      <h1>CategoryPage {curentcategory.id}</h1>
      <img src={curentcategory.img} alt={curentcategory.alt} />
    </S.CategoryBlock>
  )
}