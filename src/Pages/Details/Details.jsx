import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StyledDiv, {
  StyledButton,
  StyledMain,
  StyleH1,
  StyP,
  StyleDivFirst,
  StyH4,
  StyLi,
  StyledImg,
  Divbutton,
} from './style';
import diet from '../../Assets/diet.svg';

const Details = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    calories,
    totalWeight,
    label: mainlabel,
    totalNutrients: {
      CA: { label: calabel, quantity: caquantity },
      CHOCDF: { label: cholabel, quantity: choquantity },
      CHOLE: { label: chlabel, quantity: chquantity },
      ENERC_KCAL: { label: enlabel, quantity: enquantity },
    },
    digest,
    images: {
      REGULAR: { url },
    },
    ingredientLines,
  } = location.state;

  props.funcNav(true);

  return (
    <StyledDiv style={{ backgroundColor: '#04ADBF', color: '#023373' }}>
      <StyleDivFirst className="first">
        <StyleH1>{mainlabel}</StyleH1>
        <div>
          <img src={diet} alt="img" />
        </div>
      </StyleDivFirst>
      <StyledMain>
        <div>
          <StyH4>Nutrients</StyH4>
          <StyP>
            {calabel} : {Math.floor(caquantity)} g
          </StyP>
          <StyP>
            {cholabel} : {Math.floor(choquantity)} g
          </StyP>
          <StyP>
            {chlabel} : {Math.floor(chquantity)} mg
          </StyP>
          <StyP>
            {enlabel} : {Math.floor(enquantity)} kcal
          </StyP>
          <StyP>
            <b>Total Weight</b> : {Math.floor(totalWeight)}
          </StyP>
          <StyP>
            <b> Calories </b> : {Math.floor(calories)}
          </StyP>
          <StyP>
            {digest[0].label} : {Math.floor(digest[0].total)}
          </StyP>
          <StyP>
            {digest[2].label} : {Math.floor(digest[2].total)}
          </StyP>
        </div>
        <div>
          <StyledImg src={url} alt="img" />
        </div>
        <div>
          {ingredientLines.map(item => {
            return (
              <ul>
                <StyLi>{item}</StyLi>
              </ul>
            );
          })}
        </div>
      </StyledMain>
      <Divbutton className="buttons">
        <StyledButton onClick={() => navigate('/')}>Logout</StyledButton>
        <StyledButton primary onClick={() => navigate(-1)}>
          Go Back
        </StyledButton>
      </Divbutton>
    </StyledDiv>
  );
};

export default Details;
