
export default function HeroPost({data}) {
  return (
    <section className="h-screen bg-black text-white py-6 relative">
      <h1 style={{fontVariationSettings: '"wght" 850'}} className="font-display-head text-10xl leading-tighter">
        <span className="relative top-[15px]">
          <span className="relative right-[8px]">TIMO</span>
          <br/>ELLIOTT
        </span>
      </h1>

      <div className="absolute bottom-6 right-0 text-right text-4xl font-serif space-y-2 w-1/2 ">

        <div className="mb-20 space-y-2">
          <p>Full-stack web developer</p>
          <p>Made in London <span className="relative text-6xl top-[2px]">🇬🇧</span></p>
          <p>Based in Berlin <span className="relative text-6xl top-[2px]">🇩🇪</span></p>
        </div>
          
        <ul className="flex justify-between w-full text-xl">
          <li><a href="">Insta</a></li>
          <li><a href="">Github</a></li>
          <li><a href="">Email</a></li>
          <li><a href="">Codepen</a></li>
          <li><a href="">CV</a></li>
        </ul>
      </div>
    </section>
  )
}
