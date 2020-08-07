import React from 'react';
import ImgCard from './ImgCard';



// const baliCafe = [{ src: 'bali-cafe.JPG' }]
// const beachPic = [{ src: 'beach.JPG' }];
// const cyclingTrip = [{ src: 'cycling-trip.JPG' }];
// const familyRoadTrip = [{ src: 'family-road-trip.jpg' }];
// const Headshot = [{ src: 'headshot.png' }];
// const paintball = [{ src: 'paintball.jpg' }];
// const pballGun = [{ src: 'pball-gun.jpg' }];
// const spartanBoys = [{ src: 'spartan-boys.JPG' }];


const ImgContainer = () => {
    return(
        <div>
            <ImgCard src='bali-cafe.JPG' alt='me at a Bali cafe' />
            <ImgCard src='beach.JPG' alt='pic on the beach' />
            <ImgCard src='cycling-trip.JPG' alt='end of cycling trip' />
            <ImgCard src='family-road-trip.jpg' alt='me, brynn, and frank in the car' />
            <ImgCard src='headshot.png' alt='my headshot' />
            <ImgCard src='paintball.jpg' alt='playing paintball' />
            <ImgCard src='pball-gun.jpg' alt='with paintball gun' />
            <ImgCard src='spartan-boys.JPG' alt='me and the guys after a race' />
        </div>
    )
}

export default ImgContainer;

// 'public/bali-cafe.JPG'
// 'public/beach.JPG'
// 'public/cycling-trip.JPG'
// 'public/family-road-trip.jpg'
// 'public/headshot.png'
// 'public/paintball.jpg'
// 'public/pball-gun.jpg'
// 'public/spartan-boys.JPG'