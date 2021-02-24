import styled from 'styled-components';

const CardImg = styled.div`
    width: 25%;
    height: 90%;
    margin-top: 20px;
    background: url(${props => props.img});
    background-size: cover;
    object-fit: cover;
`
export default CardImg;