
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
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '../container'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Hero() {

  const [animated, setAnimated] = useState(false)
  const whiteBackground = useRef(null);
  const blackDot = useRef(null);
  const title = useRef(null);
  const text = useRef(null);
  const links = useRef(null);
  const hero = useRef(null);

  function initIntroAnimation(){

    document.documentElement.classList.add('overflow-hidden');
    
    

    const customCursor = document.querySelector('#customCursor');

    const delay = 0.6;

    const introAnimationTimeline = gsap.timeline({
      paused: true,
      onStart: () => {
        console.log('FIRING NOW')
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      },
      onComplete: () => {
        setAnimated(true)
        document.documentElement.classList.remove('overflow-hidden');
      }
    });

    introAnimationTimeline.to(blackDot.current,{
      scale: 50,
      ease: "power3.in",
    })
    .set(whiteBackground.current,{
     autoAlpha: 0,
    //  delay: 0.5
    })
    .set(title.current,{
      opacity: 1,
      delay: delay * 2
    })
    .set(text.current,{
      opacity: 1,
      delay: delay
      // y: -10,
      // stagger: 0.5
    })
    .set(links.current,{
      opacity: 1,
      // duration: 0.5,
      delay: delay
    })
    .set(customCursor,{
      opacity: 1,
      // duration: 0.5,
      delay: delay
    })

    setTimeout(()=>{
      introAnimationTimeline.play();
    },2500)

  }

  

  function initImageAnimation(){

    const images = document.querySelectorAll('.hero-image');
    
    const imageSteps = [];

    imageSteps[0] = [images[8], images[4]];
    imageSteps[1] = [images[2], images[7]];
    imageSteps[2] = [images[5], images[9]];
    imageSteps[2] = [images[1]];
    imageSteps[3] = [images[3]];
    imageSteps[4] = [images[0],images[6]];

    const timeline = gsap.timeline({
      repeat: -1,
      paused: true,
      
    });

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

    setTimeout(()=>{

      timeline.play()

    },6000)

  }

  useEffect(() => {
    initIntroAnimation()
    initImageAnimation()
  },[]);

  function loadingScreen(){

    if(animated === true){
      return null
    }else{

     return( 
     <div className="bg-white fixed top-0 left-0 z-50 h-screen w-screen" ref={whiteBackground}>

        <div className="animate-scale-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div ref={blackDot} className="bg-black h-[2vh] w-[2vw]"></div>
        </div>
       
      </div>
     )

    }

  }

  return (
    <Container>

      { loadingScreen() }

      <section ref={ hero } className="min-h-screen bg-black text-white py-6 relative mb-28">

        <div className="flex flex-row">
          <h1 style={{fontVariationSettings: '"wght" 850'}} className="font-display-head text-11xl md:text-10xl leading-tighter z-10 relative opacity-0 text-section" ref={ title } >
            <span className="relative top-[15px]">
              <span className="relative right-[8px]">TIM</span>
              <br/>ELLIOTT 
            </span>
          </h1>

          <div className="w-24 relative right-[15%] top-6">
            <HeroImage className="opacity-0"  image={TimImage9} />
          </div>
        </div>

        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3">
          <HeroImage className="opacity-0" image={TimImage10} />
        </div>

        <div className="fixed top-6 right-6 h-4/12 w-full md:w-5/12 flex flex-row space-x-10">

          <div className="flex flex-col w-4/6 space-y-10">

            <div className="ml-1/4">
                <HeroImage className="opacity-0" image={TimImage1} />
            </div>

            <div className="">
              <HeroImage className="opacity-0" image={TimImage7} />
            </div>

          </div>

          <div className="flex flex-col w-full md:w-2/6 space-y-10">

            <div>
              <HeroImage className="opacity-0" image={TimImage2} />
            </div>

            <div>
              <HeroImage className="opacity-0" image={TimImage5} />
            </div>

          </div>

        </div>

        <div className="fixed bottom-6 left-6 h-1/2 w-full md:w-4/12 flex flex-col space-y-10">

          <div className="flex flex-row space-x-10 h-4/6 w-full items-end">

            <div className="w-4/6 pt-[29px]">
                <HeroImage className="opacity-0" image={TimImage6} />
            </div>

            <div className="w-2/6">
              <HeroImage className="opacity-0" image={TimImage8} />
            </div>

          </div>

          <div className="flex flex-row space-x-10">

            <div className="w-2/6">
              <HeroImage className="opacity-0" image={TimImage3} />
            </div>

            <div className="w-4/6">
              <HeroImage className="opacity-0" image={TimImage4} />
            </div>

          </div>

        </div>

        <div className="absolute bottom-6 left-0 text-right text-3xl font-serif space-y-2 w-full md:w-1/2 md:right-0 md:left-auto text-section">

          <div className="mb-20 space-y-2 z-20  opacity-0" ref={text}>
            <p>Full-stack web developer</p>
            <p>Made in London <span className="relative text-6xl top-[5px]">🇬🇧</span></p>
            <p>Based in Berlin <span className="relative text-6xl top-[5px]">🇩🇪</span></p>
          </div>
            
          <ul className="flex justify-between flex-col md:flex-row space-y-2 md:space-y-0 w-full text-lg opacity-0" ref={ links }>
            <li><a className="p-5 cursor-none" data-hover-icon="instagram.png" href="https://www.instagram.com/timothy_buktu_22/" target="_blank">Insta</a></li>
            <li><a className="p-5 cursor-none" data-hover-icon="github.png" href="https://github.com/telliott22" target="_blank">Github</a></li>
            <li><a className="p-5 cursor-none" data-hover-icon="envelope.png" href="mailto:hello@teweb.dev">Email</a></li>
            <li><a className="p-5 cursor-none" data-hover-icon="laptop.png" href="https://codepen.io/timothybuktu" target="_blank">Codepen</a></li>
            <li><a className="p-5 cursor-none" data-hover-icon="cv.png" href="">CV</a></li>
          </ul>
        </div>
      </section>
    </Container>
  )
}
