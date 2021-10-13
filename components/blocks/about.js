import Container from '../container'

export default function about({}){

    return (
        <section className="min-h-screen bg-white relative z-10 font-serif flex flex-col md:flex-row md:justify-center md:items-center py-14 md:py-0">

            <Container>
{/* 
                <div className="md:top-16 md:absolute md:left-6 pb-8  md:py-0">
                    <h3 className="text-2xl">About</h3>
                </div> */}

                <div className="md:w-8/12 lg:w-6/12 m-auto">

                    <div className="space-y-6 text-xl leading-relaxed">
                        <p>I'm a freelance full-stack Web Developer with a passion for Javascript who has recently moved from London, England to Berlin. I'm keen to expand my network to find new opportunities to work on exciting projects and find like minded people to collaborate with. I'm currently looking for freelance roles in the tech industry, but I'm open to any opportunity to learn and grow.</p>

                        <p>With nearly 10 years professional experience, I've worked on a range of tech stacks in both an Agency and Product enviroment and am happy working independantally or as part of a time</p>

                        <p>I have dual British-German citizenship with the right to work in both the UK and EU.</p>

                        <p>Outside of Web Development, other areas of tech that I'm interested in include Cryptocurrency, Arduino and gaming.</p>

                        <p>If you'd like to get in touch, email me at <a href="mailto:hello@teweb.dev">hello@teweb.dev</a></p>

                    </div>

                </div>

            </Container>

        </section>
    )

}