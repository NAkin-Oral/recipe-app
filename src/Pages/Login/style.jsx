import styled from 'styled-components';

const StyledLogin = styled.form`
  background-color: #228176;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 28rem;
  height: 28rem;
  opacity: 0.8;
`;

export const LoginH1 = styled.h1`
  font-size: 2rem;
  color: white;
`;
export const LoginImg = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const LoginInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #1a2f38;
  border: none;
  color: white;
  &.submit {
    cursor: pointer;
  }
  &.submit:hover {
    transform: scale(0.95);
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #023373;
  height: 100vh;
  background-image: url('https://picsum.photos/1600/900');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default StyledLogin;
