import styled from 'styled-components';
import { device } from '../media';

export const StyledButton = styled.button`
  background-color: #5a5e87;
  color: #fff;
  border: 2px solid #bbb;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
    opacity: 0.8;
  }
`;

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 2px solid black;
  align-items: center;
  justify-items: center;
  height: 40rem;
  font-size: 1.4rem;
  @media ${device.tablet} {
    grid-template-columns: auto;
    img {
      width: 13rem;
    }
  }
  @media ${device.mobileL} {
    grid-template-columns: auto;
  }
  img {
    width: 13rem;
  }
`;

export const StyledImg = styled.img`
  width: auto;
`;

export const StyleH1 = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 800;
`;

export const StyleDivFirst = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  margin: 0;
`;

export const StyP = styled.p`
  font-size: 1.5rem;
`;

export const StyH4 = styled.h4`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const StyLi = styled.li`
  font-size: 1.5rem;
`;

const StyledDiv = styled.div`
  height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: hidden;
  &.buttons {
    justify-content: center;
  }
  img {
    width: 13rem;
  }
  @media (max-width: 768px) {
    text-align: center;
    word-wrap: break-word;
    font-size: 0.8rem;
    img {
      width: 9rem;
      padding-right: 1rem;
    }
  }
`;
export const Divbutton = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  text-align: center;
  background-color: transparent;
`;

export default StyledDiv;
