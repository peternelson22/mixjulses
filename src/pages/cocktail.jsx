import { useLoaderData, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleContailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleContailUrl}${id}`);
  return { data, id };
};

const Cocktail = () => {
  const { data, id } = useLoaderData();

  if (!data) return <Navigate to='/' />;

  const singleContail = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleContail;

  const validIngredients = Object.keys(singleContail)
    .filter(
      (key) => key.startsWith('strIngredient') && singleContail[key] !== null
    )
    .map((key) => singleContail[key]);

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name : </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category : </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info : </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass : </span>
            {glass}
          </p>

          <p>
            <span className='drink-data'>ingredient : </span>
            {validIngredients.map((ingredient, index) => (
              <span key={ingredient} className='ing'>
                {ingredient}
                {index < validIngredients.length - 1 ? ',' : ''}
              </span>
            ))}
          </p>
          <p>
            <span className='drink-data'>instructions : </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;