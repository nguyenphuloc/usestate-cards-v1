import styled from 'styled-components';

const ButtonSum = styled.button`
    color: #737373;
    border: none;
    width: 30px;
    height: 30px;
    margin-top: 5px;
`
const CardButtonSum = (props) =>{
    const {handleQuantilySub} = props;
    return(
        <ButtonSum onClick={handleQuantilySub}>+</ButtonSum>
    )
}
export default CardButtonSum;