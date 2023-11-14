import styled from "styled-components";

export const ProductosWrapper = styled.div`
padding-top:30px ;
display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  margin: 15px auto;
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  max-width: 1300px;
  padding: 1rem 0;
`;