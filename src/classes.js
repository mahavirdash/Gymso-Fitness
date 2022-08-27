import React from 'react'

const classes = () => {
    return (
        <div>


       
            <section class="class section" id="class">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center mb-5">
                            <h6 data-aos="fade-up" style={{marginTop:"30px",fontSize: "25px",color:"grey"}}>Get A Perfect Body</h6>

                            <h2 data-aos="fade-up" data-aos-delay="200" style={{fontSize: "35px"}}><b>Our Training Classes</b></h2>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
                            <div class="class-thumb">
                                <img src="yoga-class.jpg" class="img-fluid" alt="Class"/>

                                    <div class="class-info">
                                        <h3 class="mb-1" style={{marginTop:"20px"}}>Yoga</h3>

                                        <span><strong  style={{color:"grey"}}>Trained by</strong> - Bella</span>

                                        <span class="class-price"style={{float:"right",borderRadius:"50%",backgroundColor:"red",marginRight:"20px",fontSize:"20px",padding:"3%",color:"white"}}><b>$50</b></span>

                                        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    </div>
                            </div>
                        </div>

                        <div class="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
                            <div class="class-thumb">
                                <img src="crossfit-class.jpg" class="img-fluid" alt="Class"/>

                                    <div class="class-info">
                                        <h3 class="mb-1" style={{marginTop:"20px"}}>Areobic</h3>

                                        <span ><strong style={{color:"grey"}}>Trained by</strong> - Mary</span>

                                        <span class="class-price" style={{float:"right",borderRadius:"50%",backgroundColor:"red",marginRight:"20px",fontSize:"20px",padding:"3%",color:"white"}}><b>$66</b></span>

                                        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    </div>
                            </div>
                        </div>

                        <div class="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
                            <div class="class-thumb">
                                <img src="cardio-class.jpg" class="img-fluid" alt="Class"/>

                                    <div class="class-info">
                                        <h3 class="mb-1" style={{marginTop:"20px"}}>Cardio</h3>

                                        <span><strong style={{color:"grey"}}>Trained by</strong> - Cathe</span>

                                        <span class="class-price" style={{float:"right",borderRadius:"50%",backgroundColor:"red",marginRight:"20px",fontSize:"20px",padding:"3%",color:"white"}}><b>$75</b></span>

                                        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default classes