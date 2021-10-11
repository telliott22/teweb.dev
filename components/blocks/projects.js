import { useEffect, useRef, useState } from 'react'
import Container from '../container'
import Image from 'next/image';
import MindshareImage from '../../public/images/mindshare.jpg';
import DeliverooImage from '../../public/images/deliveroo.jpg';

export default function Projects({}){

    const scrollContainer = useRef(0);
    const image = useRef(0);
    const [activeProject, setActiveProject] = useState({});

    const projects = [

        {title: 'Deliveroo',image: DeliverooImage},
        {title: 'Mindshare', image: MindshareImage},
        {title: 'Ocado',image: MindshareImage},
        {title: 'Symbol',image: MindshareImage},
        {title: 'Healthy Hospo',image: MindshareImage},
        {title: 'Secret Escapes',image: MindshareImage},
        {title: 'Msix Pioneers',image: MindshareImage},
        {title: 'Darwinium',image: MindshareImage},
        {title: 'Highrise',image: MindshareImage}

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
                <div>

                    <div className="w-full">

                        <Image src={activeProject.image} layout="responsive" />

                    </div>

                    <p>{activeProject.title}</p>
                    <h3>{activeProject.title}</h3>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed. Nisi lacus sed viverra tellus. Curabitur vitae nunc sed velit dignissim sodales ut. Mauris cursus mattis molestie a iaculis at. Enim diam vulputate ut pharetra sit amet aliquam id diam. Amet mattis vulputate enim nulla aliquet porttitor lacus.
                    </p>
                    
                    <p>
                     Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Egestas dui id ornare arcu odio. A scelerisque purus semper eget. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Sapien eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque.
                    </p>

                </div>
            )


            
        }
        


    }

    function renderList(){

        return projects.map((project,index) => {
            return <li className="font-display-head text-9xl leading-tightish opacity-20 hover:opacity-100" style={{fontVariationSettings: '"wght" 850'}} onMouseEnter={() => hoverListItem(index)} key={index}>{project.title}</li>
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
        <section className="min-h-screen bg-black font-serif text-white overflow-hidden">

            <Container>

                <div ref={ scrollContainer } className="relative">
                
                    <div className="w-6/12 py-48">

                        <ul className="relative z-10">

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