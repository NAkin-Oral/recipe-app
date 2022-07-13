import React from 'react';
import { DivCard, StyH4, StyButton } from './style';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ food }) => {
  const navigate = useNavigate();
  const {
    label,
    images: {
      SMALL: { url },
    },
  } = food.recipe;

  return (
    <DivCard style={{ border: 'none' }}>
      <StyH4>{label}</StyH4>
      <img src={url} alt="img" />
      <StyButton
        style={{ cursor: 'pointer' }}
        onClick={() => navigate(`/Details`, { state: food.recipe })}
      >
        View More
      </StyButton>
    </DivCard>
  );
};

export default RecipeCard;
