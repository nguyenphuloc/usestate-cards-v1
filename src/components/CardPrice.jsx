import styled from 'styled-components';

const Price = styled.div`
    width: 25%;
    height: 100%;
    font-size: 35px;
    margin-top: 40px;
`
const CardPrice = (props) => {
    return(
        <Price>{props.price}</Price>
    )
}
export default CardPrice;