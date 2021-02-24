import styled from 'styled-components';

const Title = styled.div`
    color: #000000;
    font-size: 40px;
`
const CardTitle = (props) => {
    return(
        <Title>{props.title}</Title>
    )
}

export default CardTitle;