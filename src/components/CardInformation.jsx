import styled from 'styled-components';

const Information = styled.div`
    color: #737373;
    font-size: 30px;
`
const CardInformation = (props) => {
    return(
        <Information>{props.infor}</Information>
    )
}

export default CardInformation;