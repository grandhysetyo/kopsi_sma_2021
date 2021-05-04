import React from 'react'



const SectionIntro = () => {
    return (
        <section className="intro">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-6 align-self-center">
                        <h1>SELAMAT DATANG DI <br/> DUNIA PENELITIAN REMAJA</h1>
                        <a href="/" className="btn-masuk"> Masuk </a>
                        <a href="/" className="btn-daftar"> Daftar</a>
                    </div>
                    <div className="col-lg-6 align-self-center"> 
                        <img src="/assets/images/hero-intro.png" className="hero" alt="" /> 
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default SectionIntro