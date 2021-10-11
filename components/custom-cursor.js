import { useEffect,useState  } from 'react'

export default function CustomCursor({}){

    const [hoverIcon, setHoverIcon] = useState(1);

    useEffect(()=>{
        initCustomCursor();
    })

    function renderHoverIcon(){

        let hoverIconPath = 'finger.svg'

        if(hoverIcon){
            hoverIconPath = hoverIcon
        }

        return <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={'/icons/'+hoverIconPath} /> 
        
    }

    function initCustomCursor(){

        const customCursor = document.getElementById('customCursor');

        window.addEventListener('mousemove',function(e){

            const y = e.y - (customCursor.clientHeight / 2)
            const x = e.x - (customCursor.clientWidth / 2)

            customCursor.style.transform = `translate(${x}px,${y}px)`


            const target = e.target;

            const hoverIcon = target.getAttribute('data-hover-icon');

            if(hoverIcon){


                document.body.style.cursor = 'none';

                setHoverIcon(hoverIcon);

            }else{

                document.body.style.cursor = 'auto';
                setHoverIcon(null);

            }
        })

    }

    return (
        <div id="customCursor" className="none md:block fixed top-0 left-0 pointer-events-none h-10 w-10 z-20" >
            {renderHoverIcon()}
        </div>
    )
        
}