import CardButtonSub from './CardButtonSub';
import CardButtonSum from './CardButtonSum';
import CardContainer from './CardContainer';
import CardContent from './CardContent';
import CardImg from './CardImg';
import CardInformation from './CardInformation';
import CardNumber from './CardNumber';
import CardPrice from './CardPrice';
import CardQuantily from './CardQuantily';
import CardSex from './CardSex';
import CardTitle from './CardTitle';
import Quantily from './Quantily';

const Cards = (props) => {
    const {img, title, sex, infor, quantily, number, handleQuantilySub, handleQuantilySum, price} = props;
    return (
        <CardContainer>
            <CardImg img={img}/>
            <CardContent>
                <CardTitle title={title}/>
                <CardSex sex={sex}/>
                <CardInformation infor={infor}/>
                <CardQuantily>
                    <CardButtonSub handleQuantilySub={handleQuantilySub}/>
                    <Quantily quantily={quantily}/>
                    <CardNumber number={number}/>
                    <CardButtonSum handleQuantilySub={handleQuantilySum}/>
                </CardQuantily>
            </CardContent>
            <CardPrice price={price}/>
        </CardContainer>
    )
}

export default Cards;