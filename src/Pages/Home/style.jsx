import styled from 'styled-components';
import { device } from '../media';

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #0388a6;
`;

export const StyleH2 = styled.h2`
  color: black;
  font-size: 2rem;
  font-weight: 800;
`;

export const StyledInput = styled.input`
  margin: 0.5rem;
  font-size: 1.5rem;
`;

export const StyledInputSubmit = styled.input`
  padding: 0 0.1rem;
  margin: 0.5rem;
  font-size: 1.5rem;
  background-color: #fdd5af;
  cursor: pointer;
`;

export const StyledSelect = styled.select`
  padding: 0.1rem;
  background-color: #feead7;
  font-size: 1.5rem;
`;

export const StyDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  @media ${device.mobileL} {
    grid-template-columns: auto;
    gap: 0.5rem;
  }
`;

export const StyH4 = styled.h4`
  font-size: 1.2rem;
  font-weight: 900;
  color: black;
  background: none;
`;

export const StyButton = styled.button`
  font-size: 1.2rem;
  font-weight: 900;
  padding: 0.3rem;
  background-color: #efe2be;
`;

export const DivBot = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  text-align: center;
  background: radial-gradient(#0081a7, #94d2bd);
`;

export const DivCard = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  text-align: center;
  background-color: transparent;
`;

export default StyleDiv;
