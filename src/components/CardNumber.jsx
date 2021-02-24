import styled from 'styled-components';

const Number = styled.div`
    color: #737373;
    font-size: 30px;
`
const CardNumber = (props) =>{
    return(
        <Number>{props.number}</Number>
    )
}
export default CardNumber;