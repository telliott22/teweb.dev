import Image from 'next/image'

export default function heroImage({image}){

    function showImage(e){
        // if(!e.target.classList.contains('animating')){
        //     e.target.style.opacity = 1;
        // }
    }
    
    function hideImage(e){
        // if(!e.target.classList.contains('animating')){
        //     e.target.style.opacity = 0;
        // }
    }
    
    return(
        <div className="pointer rounded-lg overflow-hidden">
            <Image onMouseEnter={showImage} onMouseLeave={hideImage} className="hero-image opacity-0 pointer" layout="responsive" src={image} alt="Timo Elliott" />
        </div>
    )

}

