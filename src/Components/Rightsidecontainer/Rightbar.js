import React from 'react'
import "./rightbar.css"
import ads from "../Images/ads.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";

export default function Rightbar() {
  return (
    <div className='rightbar'>
         <div className='rightcontainer'>
           <div className='adsContainer'>
             <div>
                <img src={`${image1}`} className="adsimg" alt="" />
            </div>
             <div> 
                <p style={{ textAlign: 'start', marginLeft: '10px', marginTop:0}}>CodeDemy</p>
                <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop:"-16px"}}>Buy codedemy course</p>
            </div>
          </div> 
           <div className='adsContainer'>
             <div>
                <img src={`${image2}`} className="adsimg" alt="" />
            </div>
             <div> 
                <p style={{ textAlign: 'start', marginLeft: '10px', marginTop:0}}>CodeDemy</p>
                <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop:"-16px"}}>Buy codedemy course</p>
            </div>
          </div> 
         </div>

         <div className='rightcontainer2'>
              <p>Suggested for you</p>
              <div>
                <img src={`${ads}`} className='Profileimage' alt=''/>
                <p>Suman</p>
              </div>
         </div>

    </div>
  )
}
