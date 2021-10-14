import Container from '../container'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

export default function about({}){

    const text = useRef();
    const textContainer = useRef();

    // useEffect(()=>{
    //     initScrollAnimation();
    // },[])

    // function initScrollAnimation(){
        
    //     gsap.registerPlugin(ScrollTrigger);   

    //     gsap.from(text.current, {
    //         scrollTrigger: {
    //             trigger:textContainer.current,
    //             scrub: 0.5,
    //             start: 'top bottom-=200px',
    //             // end: 'bottom top+=300px',
    //         },
    //         y: 100,
    //         opacity: 0,
    //     })

    // }

    return (
        <section ref={textContainer}  className="min-h-screen  text-white relative z-10 font-serif flex flex-col md:flex-row md:justify-center md:items-center py-14 md:py-0">

            <Container>

                <div className="w-10/12 m-auto top-16 left-6 absolute">
                    <h3 className="text-2xl text-white">About me<span className="relative top-[1px] left-1">👨🏽‍🦲</span></h3>
                </div>

                <div className="md:w-8/12 lg:w-6/12 m-auto">

                    <div ref={text} className="text-xl leading-relaxed relative p">

                        <div className="blur-3xl opacity-70 bg-black absolute top-0 left-0 h-full w-full"></div>

                        <div className="z-10 relative space-y-6 p-10">

                            <p>I'm a freelance full-stack Web Developer with a passion for Javascript who has recently moved from London, England to Berlin. I'm keen to expand my network to find new opportunities to work on exciting projects and find like minded people to collaborate with. I'm currently looking for freelance roles in the tech industry, but I'm open to any opportunity to learn and grow.</p>

                            <p>With nearly 10 years professional experience, I've worked on a range of tech stacks in both an Agency and Product enviroment and am happy working independantally or as part of a team</p>

                            <p>I have dual British-German citizenship with the right to work in both the UK and EU.</p>

                            <p>Outside of Web Development, other areas of tech that I'm interested in include Cryptocurrency, Arduino and gaming.</p>

                            <p>If you'd like to get in touch, email me at <a data-hover-icon="envelope.png" href="mailto:hello@teweb.dev">hello@teweb.dev</a></p>

                        </div>
                        

                    </div>

                </div>

            </Container>

        </section>
    )

}