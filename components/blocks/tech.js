import Marquee from "react-fast-marquee";


export default function Projects({}){


    const line1 = [
        'React', 'Next', 'Sanity' , 'Tailwind', 'Vue', 'Nuxt'
    ]
    const line2 = [
        'Laravel', 'Vercel', 'Adonis', 'AWS', 'PHP', 'GSAP'
    ]
    const line3 = [
        'WEBGL', 'Shopify', 'Vue', 'React', 'Tailwind', 'Wordpress'
    ]

    function printLine(line){

        const lineArray = line.map((item, index) => {
            return <span style={{fontVariationSettings: '"wght" 850'}} className="text-[10vw] inline-block text-white font-display-head leading-[0.88] mr-11" key={index}>{item.toUpperCase()}</span>
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
        <section className="min-h-screen bg-black text-black flex flex-col justify-center items-center z-10 relative">

            <div className="w-10/12 m-auto top-16 left-6 absolute">
                <h3 className="text-2xl text-white">Some tech I <span className="relative top-0 left-1">❤️</span></h3>
            </div>

            <div>

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