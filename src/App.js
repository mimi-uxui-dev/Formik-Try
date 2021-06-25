import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import './App.css'

export default function App() {

    let b1 = "https://lmg-labmanager.s3.amazonaws.com/assets/articleNo/23273/aImg/43155/bioconservation-m.png" 
    let b2 = "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2019/12/field-rice-1538200_960_720-900x450.jpg"
    let b3 = "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/8/29/w900X450/jh.jpg"

    let i1 = "https://ntprd.org/wp-content/uploads/2016/11/Spfld_RodHat_Snyder1-400x300.jpg"
    let i2 = "http://2.bp.blogspot.com/-Y24k59f5iY4/TlqrrWqYilI/AAAAAAAAX68/v5KWPrFwGOA/s1600/scenery%2Bpictures%2Bof%2Bnature-3.jpg"
    let i3 = "https://cdn.dribbble.com/users/5702112/screenshots/15218836/media/dabfdc10d4fe84e1c79aa2942c68cc5e.jpg?compress=1&resize=400x300"

    const b =[ b1, b2, b3 ]

    const i = [
      { id: 1, 
        url: i1, 
        title: "Los Angeles", 
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." 
      },
      { id: 2, 
        url: i2, 
        title: "Miami", 
        desc: "In 2 publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." 
      },
      { id: 3, 
        url: i1, 
        title: "New York", 
        desc: "In 3 publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." 
      },
      { id: 2, 
        url: i2, 
        title: "DC", 
        desc: "In 2 publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." 
      },
      { id: 3, 
        url: i1, 
        title: "Forks WA", 
        desc: "In 3 publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." 
      }
    ]
  
    const settings = {
      autoplay: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1, 
      arrows: false
    };

    const settings2 = {
      autoplay: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1, 
      arrows: false
    };

    return (
      <div>
          <Slider  className='backSlider' {...settings}>
              { b.map(url => <img style={{ border:"3px solid yellow " }} key={url} src={url} alt="yehh" /> )  }
          </Slider>
        

          <Slider  className='innerSlider' {...settings2}>
              { i.map(data => <div className="innerSlide" key={data.id}>
                <img src={data.url} alt="yehh" /> 
                <div>
                  <h3>{ data.title }</h3>
                  <p> {data.desc} </p>
                </div>
              </div>  )  }
          </Slider>
        
      </div>
    );
  
}