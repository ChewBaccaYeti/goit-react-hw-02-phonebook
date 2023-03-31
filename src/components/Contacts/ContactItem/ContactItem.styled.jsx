import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const Thumb = styled.div`
  padding: 5px;
  background-color: #b70a0a;

  :hover {
    background-color: #fc035e;
  }
  :active {
    background-color: #fc8003;
  }
`;
