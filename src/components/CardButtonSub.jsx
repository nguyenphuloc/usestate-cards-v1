import styled from 'styled-components';

const ButtonSub = styled.button`
    color: #737373;
    border: none;
    width: 30px;
    height: 30px;
    margin-top:5px;
`
const CardButtonSub = (props) =>{
    const {handleQuantilySub} = props;
    return(
        <ButtonSub onClick={handleQuantilySub}>-</ButtonSub>
    )
}
export default CardButtonSub;