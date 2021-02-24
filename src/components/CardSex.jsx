import styled from 'styled-components';

const Sex = styled.div`
    color: #737373;
    font-size: 30px;
`
const CardSex = (props) =>{
    return(
        <Sex>{props.sex}</Sex>
    )
}
export default CardSex;