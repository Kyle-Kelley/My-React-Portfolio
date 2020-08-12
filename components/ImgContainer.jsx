import React from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';
import ImgCard from './ImgCard';

const MyContainer = styled(Container)({
    textAlign: 'center'
})

const ImgContainer = () => {
    return(
        <MyContainer>
            <ImgCard src='bali-cafe.JPG' alt='me at a Bali cafe' />
            <ImgCard src='beach.JPG' alt='pic on the beach' />
            <ImgCard src='cycling-trip.JPG' alt='end of cycling trip' />
            <ImgCard src='family-road-trip.jpg' alt='me, brynn, and frank in the car' />
            <ImgCard src='headshot.png' alt='my headshot' />
            <ImgCard src='paintball.jpg' alt='playing paintball' />
            <ImgCard src='pball-gun.jpg' alt='with paintball gun' />
            <ImgCard src='spartan-boys.JPG' alt='me and the guys after a race' />
        </MyContainer>
    )
}

export default ImgContainer;

