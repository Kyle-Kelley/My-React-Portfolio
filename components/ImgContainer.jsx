import React from 'react';
import ImgCard from './ImgCard';
import baliCafe from 'public/bali-cafe.JPG';
import beachPic from 'public/beach.JPG';
import cyclingTrip from 'public/cycling-trip.JPG';
import familyRoadTrip from 'public/family-road-trip.jpg';
import Headshot from 'public/headshot.png';
import paintball from 'public/paintball.jpg';
import pballGun from 'public/pball-gun.jpg';
import spartanBoys from 'public/spartan-boys.JPG';

const ImgContainer = () => {
    return(
        <div>
            <ImgCard src={baliCafe} alt='me at a Bali cafe' />
            <ImgCard src={beachPic} alt='pic on the beach' />
            <ImgCard src={cyclingTrip} alt='end of cycling trip' />
            <ImgCard src={familyRoadTrip} alt='me, brynn, and frank in the car' />
            <ImgCard src={Headshot} alt='my headshot' />
            <ImgCard src={paintball} alt='playing paintball' />
            <ImgCard src={pballGun} alt='with paintball gun' />
            <ImgCard src={spartanBoys} alt='me and the guys after a race' />
        </div>
    )
}

export default ImgContainer;