import styled from 'styled-components';

const Quanti = styled.div`
    color: #737373;
    font-size: 30px;
    margin-right: 8px;
`
const Quantily = (props) => {
    return(
        <Quanti>{props.quantily}</Quanti>
    )
}

export default Quantily;