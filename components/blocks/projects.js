import { useEffect, useRef, useState } from 'react'
import Container from '../container'
import Image from 'next/image';
import MindshareImage from '../../public/images/mindshare.jpg';
import DeliverooImage from '../../public/images/deliveroo.jpg';
import OcadoImage from '../../public/images/ocado.jpg';
import HHImage from '../../public/images/hh.jpg';
import SymbolImage from '../../public/images/symbol.jpg';
import SeImage from '../../public/images/se.jpg';
import MsixImage from '../../public/images/msix.jpg';
import HighriseImage from '../../public/images/highrise.jpg';

export default function Projects({}){

    const scrollContainer = useRef(0);
    const image = useRef(0);
    const [activeProject, setActiveProject] = useState({});

    const projects = [

        {title: 'Deliveroo', category: "Food Delivery service", url: 'https://deliveroorestaurantawards.com', image: DeliverooImage, technologies: ['Prismic', 'Node.js', 'Vue.js','Nuxt','GSAP', 'AWS']},
        {title: 'Mindshare', category: "Media agency", url: 'https://mindshareworld.com', image: MindshareImage, technologies: ['Wordpress API','Wordpress mutisite','Vue','Nuxt','GSAP', 'Microsoft Azure']},
        {title: 'Ocado', category: "Grocery delivery service", url: 'https://ocadorisingstarsawards.com', image: OcadoImage, technologies: ['Sanity', 'Vue','Nuxt','GSAP', 'AWS']},
        {title: 'Symbol', category: "Cryptocurrency", url: 'https://symbolplatform.com', image: SymbolImage, technologies: ['Wordpress API' ,'Vue.js','Nuxt.js','GSAP', 'AWS']},
        {title: 'Healthy Hospo', category: "Hospitality web app", url: 'https://healthyhospo.com', image: HHImage, technologies: ['Sanity', 'Node.js', 'Vue.js', 'Nuxt', 'GSAP', 'AWS']},
        {title: 'Secret Escapes', category: "Travel", url: 'https://careers.secretescapes.com', image: SeImage, technologies: ['Wordpress', 'AWS']},
        {title: 'Msix Pioneers', category: "Design Agency", url: 'https://pioneers.msixagency.com', image: MsixImage, technologies: ['React.js', 'Next.js', 'GSAP', 'Vercel']},
        {title: 'Darwinium', category: "Marketing Agency", url: 'https://darwinium.com', image: HHImage, technologies: ['Sanity', 'React.js', 'Next.js', 'GSAP', 'Vercel']},
        {title: 'Highrise', category: "Marketing Agency", url: 'https://highrise.com', image: HighriseImage, technologies: ['Sanity', 'Vue.js', 'Nuxt.js', 'GSAP', 'Vercel']}

    ]

    function hoverListItem(index){

        setActiveProject(projects[index]);

    }

    useEffect(()=>{

        initScrollFunctions();

        window.addEventListener('scroll',initScrollFunctions)

    },[])

    function initScrollFunctions(){

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollBottoom = scrollTop + window.innerHeight;
        const containerYOffset = getCoords(scrollContainer.current).top
        const containerHeight = scrollContainer.current.offsetHeight;
        const imageHeight = image.current.offsetHeight;
        const containerHeightWithOffset = containerYOffset + containerHeight + (window.innerHeight - imageHeight);

        if(scrollTop > containerYOffset && scrollBottoom < containerHeightWithOffset){

            image.current.classList.add('fixed','pr-6','top-0');
            image.current.classList.remove('absolute','bottom-0');

        }else if(scrollBottoom > containerHeightWithOffset){

            image.current.classList.add('absolute','bottom-0');
            image.current.classList.remove('fixed','top-0','pr-6');

        }else{

            image.current.classList.add('absolute','top-0');
            image.current.classList.remove('fixed','pr-6','bottom-0');

        }

        return scrollTop

    }

    function renderActiveProject(){


        if (activeProject && activeProject.title) {

            return (
                <div className="bg-black">

                    <div className="w-full rounded-lg overflow-hidden">
                        <Image src={activeProject.image} />
                    </div>

                    <div className="w-4/5 ml-auto mt-10 space-y-4"> 

                        <a target="_blank" href={activeProject.url}> <span className="text-xl mr-1">🌍</span> {activeProject.url}</a>

                        <h3 className="uppercase text-3xl">{activeProject.category}</h3>
                        
                        <ul className="">
                            <p>Tech stack:</p>    
                            {activeProject.technologies ? activeProject.technologies.map((technology, index)=>{return  <li  key={index}>{technology}</li>}) : null}
                        </ul>

                    </div>

                   

                </div>
            )

        }

    }

    function renderList(){

        return projects.map((project,index) => {
            return <li className="font-display-head text-[10vw] leading-tightish opacity-20 hover:opacity-100 cursor-pointer" style={{fontVariationSettings: '"wght" 850'}} onMouseEnter={() => hoverListItem(index)} key={index}>{project.title}</li>
        })
    }

    function getCoords(elem) { // crossbrowser version
        var box = elem.getBoundingClientRect();
    
        var body = document.body;
        var docEl = document.documentElement;
    
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    
        var top  = box.top +  scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
    
        return { top: Math.round(top), left: Math.round(left) };
    }
    

    return (
        <section className="min-h-screen bg-black font-serif text-white overflow-hidden z-10 relative">

            <Container>

                <div ref={ scrollContainer } className="relative flex flex-col">
{/* 
                    <div className="w-10/12 m-auto top-16 left-0 absolute">
                        <h3 className="text-2xl text-white">Projects</h3>
                    </div> */}
                
                    <div className="w-full md:w-6/12 py-48">

                        <ul className="relative z-10 scew-3d">

                            { renderList() }                        

                        </ul>

                    </div>

                    
                    <div ref={ image } className="w-6/12 top-0 right-0 transform-gpu">

                        { renderActiveProject () }

                    </div>

                </div>

            </Container>

        </section>
    )

}