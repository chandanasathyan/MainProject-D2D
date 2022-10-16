import React from 'react'
import "./Home.css"



const Home = () => {
   
  return (
   <>
<div style={{marginTop:"65px"}}>







<div class="uk-position-relative uk-visible-toggle uk-light"  tabindex="-1" uk-slideshow="ratio: false; autoplay: true;autoplay-interval: 1800;pause-on-hover: false">

    <ul class="uk-slideshow-items" uk-height-viewport="">
        <li>
            <img className=' slideimage1' src="https://media.istockphoto.com/photos/used-brushes-on-an-artists-palette-of-colorful-oil-paint-picture-id636761588?k=20&m=636761588&s=612x612&w=0&h=ew-Gc9JIh5PGLbxaW21a0Y4D_w7d1zsngEPX74e5HDs=" alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src="https://media.istockphoto.com/photos/used-brushes-on-an-artists-palette-of-colorful-oil-paint-picture-id636761588?k=20&m=636761588&s=612x612&w=0&h=ew-Gc9JIh5PGLbxaW21a0Y4D_w7d1zsngEPX74e5HDs=" alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src="https://media.istockphoto.com/photos/used-brushes-on-an-artists-palette-of-colorful-oil-paint-picture-id636761588?k=20&m=636761588&s=612x612&w=0&h=ew-Gc9JIh5PGLbxaW21a0Y4D_w7d1zsngEPX74e5HDs=" alt="" uk-cover/>
        </li>
    </ul>

    <a className='slidebuttons' class="uk-position-center-left uk-position-small uk-hidden-hover" href="#q" uk-slidenav-previous uk-slideshow-item="previous">  </a>
    <a className='slidebuttons'  class="uk-position-center-right uk-position-small uk-hidden-hover" href="#q" uk-slidenav-next uk-slideshow-item="next"> </a>

</div>














</div> 
   
   <img src="https://media.gettyimages.com/photos/low-angle-view-of-statue-against-sky-picture-id1277094370?s=612x612" alt="" srcset="" />
   
   </>
  )
}

export default Home