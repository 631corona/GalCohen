import styled from 'styled-components';

const Card = styled.div`
    box-shadow: 2px 1px 3px pink; 
    width: 60%;
    height: 100%;
    padding: 10px;
    margin:auto; 
    margin-top: 20px;
    background:  rgb(250, 178, 168);
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const rowDirectionCard = styled(Card)`
    flex-flow: column;
    `

export default Card;