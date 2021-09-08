import React from 'react'

function AboutusContent() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 col-lg-5 text-center our-services-leftside-img">
          <img src="https://www.telegraph.co.uk/multimedia/archive/02519/laptop_2519575b.jpg" alt="myimage" className="img-fluid"/>
        </div>
        <div className="col-12 col-lg-7 our-services-list">
          <h3 className="mini-title">Available @ Google And IOS AND App Store only</h3>
          <h1 class="main-heading">How To use The App?</h1>
          {
              mydata?.map(data=>{
                return(

                  <div className="row our-services-info mt-2 mb-2" key={data.id}>
                    <div className="col-1 our-services-number">{data.id}</div>
                    <div className="col-10 our-services-data">
                      <h2>{data.title}</h2>
                      <p className="main-hero-para">
                        {data.info}
                      </p>
                    </div>
                </div>
                )
              })
          }
      </div>
    </div>
  </div>
  )
}
