
import TimImage1 from '../../public/images/tim-1.jpg';
import TimImage2 from '../../public/images/tim-2.jpg';
import TimImage3 from '../../public/images/tim-3.jpg';
import TimImage4 from '../../public/images/tim-4.jpg';
import TimImage5 from '../../public/images/tim-5.jpg';
import TimImage6 from '../../public/images/tim-6.jpg';
import TimImage7 from '../../public/images/tim-7.jpg';
import TimImage8 from '../../public/images/tim-8.jpg';
import TimImage9 from '../../public/images/tim-9.jpg';
import TimImage10 from '../../public/images/tim-10.jpg';
import HeroImage from '../heroImage.js';
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Container from '../container'


export default function Hero({data}) {

  function initAnimation(){

    const images = document.querySelectorAll('.hero-image');
    
    const imagesArray = Array.from(images);

      const imageSteps = [];

      imageSteps[0] = [images[8], images[4]];
      imageSteps[1] = [ images[2], images[7]];
      imageSteps[2] = [images[5], images[9]];
      imageSteps[2] = [images[1]];
      imageSteps[3] = [images[3]];
      imageSteps[4] = [images[0],images[6]];

    const timeline = gsap.timeline({
      repeat: -1,
      paused: true
    });

    timeline.set(imagesArray,{
      opacity: 0
    })

    // const delay = 5;
    const delay = 0.6;

    for (let index = 0; index < imageSteps.length; index++) {
      
      const imageStep = imageSteps[index];

      timeline.to(imageStep, {
        opacity:1,
        duration: 0,
        onStart: () => {
          imageStep.forEach(image => {
            image.classList.add('animating');
          })
        }
      })
      .to(imageStep, {
        opacity:0,
        duration: 0,
        delay: delay,
        onComplete: () => {
          imageStep.forEach(image => {
            image.classList.remove('animating');
          })
        }
      })
      
    }

    timeline.play()

  }

  useEffect(() => {
    initAnimation()
  });

  return (
    <Container>
      <section className="min-h-screen bg-black text-white py-6 cursor-none relative mb-28">
        
        <div className="flex flex-row">
          <h1 style={{fontVariationSettings: '"wght" 850'}} className="font-display-head text-10xl leading-tighter z-10 relative">
            <span className="relative top-[15px]">
              <span className="relative right-[8px]">TIM</span>
              <br/>ELLIOTT 
            </span>
          </h1>

          <div className="w-24 relative right-[15%] top-6">
            <HeroImage  image={TimImage9} />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3">
          <HeroImage image={TimImage10} />
        </div>

        <div className="absolute top-6 right-0 h-4/12 w-5/12 flex flex-row space-x-10">

          <div className="flex flex-col w-4/6 space-y-10">

            <div className="ml-1/4">
                <HeroImage image={TimImage1} />
            </div>

            <div className="">
              <HeroImage image={TimImage7} />
            </div>

          </div>

          <div className="flex flex-col w-2/6 space-y-10">

            <div>
              <HeroImage image={TimImage2} />
            </div>

            <div>
              <HeroImage image={TimImage5} />
            </div>

          </div>

        </div>

        <div className="absolute bottom-6 left-0 h-1/2 w-4/12 flex flex-col space-y-10">

          <div className="flex flex-row space-x-10 h-4/6 w-full items-end">

            <div className="w-4/6 pt-[29px]">
                <HeroImage image={TimImage6} />
            </div>

            <div className="w-2/6">
              <HeroImage image={TimImage8} />
            </div>

          </div>

          <div className="flex flex-row space-x-10">

            <div className="w-2/6">
              <HeroImage image={TimImage3} />
            </div>

            <div className="w-4/6">
              <HeroImage image={TimImage4} />
            </div>

          </div>

        </div>

        <div className="absolute bottom-6 right-0 text-right text-3xl font-serif space-y-2 w-1/2 ">

          <div className="mb-20 space-y-2">
            <p>Full-stack web developer</p>
            <p>Made in London <span className="relative text-6xl top-[5px]">🇬🇧</span></p>
            <p>Based in Berlin <span className="relative text-6xl top-[5px]">🇩🇪</span></p>
          </div>
            
          <ul className="flex justify-between w-full text-lg">
            <li><a className="p-5 cursor-none" data-hover-icon="instagram.png" href="https://www.instagram.com/timothy_buktu_22/" target="_blank">Insta</a></li>
            <li><a className="p-5 cursor-none" data-hover-icon="github.png" href="https://github.com/telliott22" target="_blank">Github</a></li>
            <li><a className="p-5 cursor-none" data-hover-icon="envelope.png" href="mailto:tim@teweb.dev">Email</a></li>
            <li><a className="p-5 cursor-none" data-hover-icon="laptop.png" href="https://codepen.io/timothybuktu" target="_blank">Codepen</a></li>
            <li><a className="p-5 cursor-none" data-hover-icon="cv.png" href="">CV</a></li>
          </ul>
        </div>
      </section>
    </Container>
  )
}
