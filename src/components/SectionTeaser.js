import React from 'react'

const SectionTeaser = () => {
    return (
        <section className="teaser">
            <img src="/assets/images/hero-teaser1.svg" className="hero1" alt="" />
            <img src="/assets/images/hero-teaser2.svg" className="hero2" alt="" />
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-12 align-self-center">        
                        <div className="col-lg-4 mx-auto"> 
                            <h3 className="title-section">TEASER KoPSi 2021</h3>   
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <iframe src="https://www.youtube.com/embed/nfVsYJCJW5A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>                                                             
                    </div>                                       
                </div>
            </div>
            
        </section>
    )
}

export default SectionTeaser
