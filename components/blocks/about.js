import Container from '../container'

export default function about({}){

    return (
        <section className="min-h-screen bg-white relative z-10 font-serif">

            <Container>

                <div className="pt-16 pb-32">

                    <div className="w-10/12 m-auto pb-16">
                        <h3 className="text-2xl">About 
                        
                        {/* 👨🏽‍🦲 */}
                        
                        </h3>
                    </div>

                    <div className="w-8/12 md:w-6/12 m-auto  flex flex-col justify-center items-center">
                        <div className="space-y-6">
                            <p>I'm a freelance full-stack Web Developer with a passion for Javascript who has recently moved from London, England to Berlin. I'm keen to expand my network to find new opportunities to work on exciting projects and find like minded people to collaborate with.</p>

                            <p>Outside of Web Development, other areas of tech that I'm interested in include Cryptocurrency, Arduino and gaming.</p>
                        </div>
                    </div>
                </div>

            </Container>

        </section>
    )

}