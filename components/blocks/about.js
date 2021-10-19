import Container from '../container'
import { useRef } from 'react';

export default function about({bgClass, textClass, altBgClass, altTextClass}){

    const text = useRef();
    const textContainer = useRef();

    return (
        <section ref={textContainer}  className={`min-h-screen ${textClass} relative z-10 font-serif flex flex-col md:flex-row md:justify-center md:items-center`}>

            <Container>

                <div className="w-10/12 m-auto top-32 left-6 absolute z-20" >
                    <h3 className="text-2xl">About me<span className="relative top-[1px] left-1">👨🏽‍🦲</span></h3>
                </div>

                <div className="md:w-10/12 lg:w-8/12 m-auto">

                    <div ref={text} className="text-xl leading-relaxed relative py-20 my-40">

                        <div className={`blur-3xl opacity-70 ${bgClass} absolute top-0 left-0 h-full w-full`}></div>

                        <div className="z-10 relative space-y-6 md:p-10">

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