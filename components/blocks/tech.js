import Marquee from "react-fast-marquee";


export default function Projects({bgClass, textClass, altBgClass, altTextClass}){


    const line1 = [
        'React', 'Next', 'Sanity' , 'Tailwind', 'Vue', 'Nuxt'
    ]
    const line2 = [
        'Laravel', 'Vercel', 'Adonis', 'AWS', 'PHP', 'GSAP', 'Three.js'
    ]
    const line3 = [
        'WEBGL', 'Shopify', 'Vue', 'React', 'Tailwind', 'Wordpress'
    ]

    function printLine(line){

        const lineArray = line.map((item, index) => {
            return <span style={{fontVariationSettings: '"wght" 850'}} className={`text-[10vw] inline-block  font-display-head leading-[0.88] mr-11`} key={index}>{item.toUpperCase()}</span>
        })
        
        return (
            <div className="">
                { lineArray }
            </div>
            
        );
    }

    const marqueeConfig = {
        speed: 100,
        gradient:false
    }

    return (
        <section className={`md:min-h-screen ${bgClass} ${textClass} flex flex-col justify-center md:items-center z-10 relative`}>

            <div className="md:w-10/12 md:m-auto top-16 left-6 md:absolute pt-8 pl-6  md:p-0">
                <h3 className="text-2xl">Some tech I <span className="relative top-0 left-1">❤️</span></h3>
            </div>

            <div className="pt-20 pb-28 md:py-0 pointer-events-none"> 

                <Marquee {...marqueeConfig}>
                    {printLine(line1)}
                </Marquee>

                <Marquee {...marqueeConfig} direction="right">
                    {printLine(line2)}
                </Marquee>

                <Marquee {...marqueeConfig}>
                    {printLine(line3)}
                </Marquee>

            </div>


        </section>
    )

}