import styled from "styled-components";

export const ProductoCard = styled.div`
background: var(--gray-bg);
width: 300px;
border-radius: 15px;
padding: 1rem;
img{
    width: 100%;
    margin-bottom: 1rem;
}
h2{
    font-weight: 600;
    margin: 0;
}

p{
    color: #666;
    font-size: 1.2rem;
}

@media (max-width: 768px) {
    width: 250px;
    text-align: left;
}

`