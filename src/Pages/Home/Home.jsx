import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import StyleDiv, {
  StyledInput,
  StyledInputSubmit,
  StyledSelect,
  StyDiv,
  DivBot,
  StyleH2,
} from './style';

const Home = props => {
  const [fname, setFname] = useState('');
  const [foods, setFoods] = useState([]);
  const [meal, setMeal] = useState('breakfast');

  console.log(meal);

  props.funcNav(true);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${fname}&app_id=d7407412&app_key=15a112f56aa6b98a8cd03fa9138040dd&mealType=${meal}`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFoods(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    fetchData();
    setFname('');
  };

  return (
    <div style={{ backgroundColor: '#04D9C4', color: '#023373' }}>
      <StyleDiv>
        <StyleH2>Food App</StyleH2>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="food"
            id="food"
            value={fname}
            onChange={e => setFname(e.target.value)}
          />
          <StyledInputSubmit type="submit" value="Search" />
          <StyledSelect onChange={e => setMeal(e.target.value)}>
            <option value="breakfast">Breakfast</option>
            <option value="dinner">Dinner</option>
            <option defaultValue value="lunch">
              Lunch
            </option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </StyledSelect>
        </form>
      </StyleDiv>
      <StyDiv>
        {foods?.map((food, index) => {
          return (
            <DivBot key={index}>
              <RecipeCard food={food} />
            </DivBot>
          );
        })}
      </StyDiv>
    </div>
  );
};

export default Home;
