import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Avatar } from "@material-ui/core";
/*import "./testimonial.css"*/

export default function Testimonial() {
  return (
      <div style={
          {display: "flex" ,
          justifyContent: "center",
          marginTop: 50
          }}>
    <div className="testimonial" style={{width: '50%',textAlign: "center"}}>
        <h1 style={{marginTop:20}}>Testimonial</h1>
      <Slider  autoplay={true} autoplaySpeed={3000} dots>
          <Card img="./img\av1.jpg"/>
          <Card img="./img\av2.jpg"/>
          <Card img=" ./img\av3.jpg"/>
          <Card img="./img\av4.jpg"/>
          
      </Slider>
    </div>
    </div>
  )
}

const Card =({img})=>{
    return(

     <div style={{

         display: "flex",
         alignItems: "center",
         textAlign: "center",
         flexDirection: "column",
         color: "gray"

         }}>
         
          <Avatar
           imgProps={{style: {borderRadius:"50%"}}}
          src={img} style={{
              width:120, 
              height:120,
              border:"1px solid lightgray",
              padding: 7,
              marginBottom: 30
              
              }} /> 
          <p style={{fontStyl:"italic", marginTop: 25 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Aut quia ratione nulla velit voluptates adipisci blanditiis voluptas atque et, 
               quo iusto numquam aperiam? Quae saepe modi a dicta laboriosam ex!</p>

               <p><span style={{fontweight:500, color:"green"}}> Osman Ahemed </span> , Media Analyst </p>
     
     <br/>
     <br/>
     <br/>
     <br/>
     </div>
 
    )
}