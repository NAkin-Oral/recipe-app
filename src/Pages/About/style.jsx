import styled from 'styled-components';

const StyledDiv = styled.div`
  background: radial-gradient(#0081a7, #94d2bd);
  height: 94vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & div > img {
    width: 29rem;
  }
  & > p {
    font-weight: 700;
    font-size: 1.2rem;
  }
  & section {
    border: 2px solid #f4f1de;
    text-align: right;
    font-weight: 700;
    padding: 1rem;
  }
`;

export default StyledDiv;
