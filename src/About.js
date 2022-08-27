import React from 'react'
import { motion } from "framer-motion";
import { Twitter } from '@mui/icons-material';
import Facebook from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  Link
} from "react-router-dom";
const About = () => {
  return (
    <div style={{
      height: "540px", width: "100%",
      backgroundColor: "#F0FFF0"
    }}><div style={{ width: "50%", height: "540px", float: "left"
  }}>
        <h1 style={{ textAlign: "center", marginTop: "100px" }}><b>Hello, we are Gymso</b></h1>
        <p style={{ marginLeft: "192px", marginTop: "35px", fontSize: "21px", color: "grey" }}>You are NOT allowed to redistribute this HTML<br /> template downloadable ZIP file on any template<br /> collection site. You are allowed to use this template <br />for your personal or business websites.</p>
        <p style={{ marginLeft: "192px", fontSize: "21px", color: "grey" }}>If you have any question regarding <Link to="/" style={{ color: "black" }}><motion.label whileHover={{ color: "red" }}>Gymso Fitness HTML template</motion.label></Link>, you can <br /><Link to="/" style={{ color: "black" }}><motion.label whileHover={{ color: "red" }}>contact Tooplate</motion.label></Link> immediately. Thank you.</p>

      </div>
      <div style={{ width: "50%", height: "540px", float: "right" }}>
        <div style={{ height: "400px", width: "300px", marginTop: "60px", marginLeft: "10px" ,backgroundColor:"white",float:"left"}}>
          <img src="team-image.jpg" alt="..." style={{ height: "300px", width: "100%" }} />
          <h2 style={{ width: "50%", float: "left",marginLeft:"40px",marginTop:"20px"}}>Mary Yan</h2>
          <Link to={{ pathname: '//twitter.com/search?q=%23GymSo&src=hash' }} target="_blank" style={{float: "right", color: "black",marginRight:"40px",marginTop:"30px"}}>
            <motion.label whileHover={{ scale: 1.1, color: "red" }}><Twitter></Twitter></motion.label>
          </Link>
          
          <h6 style={{ width: "50%", float: "left",marginLeft:"43px",color:"grey" }}>Yoga Instructor</h6>
          <Link to={{ pathname: '//twitter.com/search?q=%23GymSo&src=hash' }} target="_blank" style={{float: "right",color:"black",marginRight:"40px"}}>
            <motion.label whileHover={{ scale: 1.1, color: "red" }}><InstagramIcon></InstagramIcon> </motion.label>
          </Link>
        </div>
        <div style={{ height: "400px", width: "300px", marginTop: "60px", marginLeft: "60px" ,backgroundColor:"white",float:"right",marginRight:"90px"}}>
          <img src="team-image01.jpg" alt="..." style={{ height: "300px", width: "100%" }} />
          <h2 style={{ width: "50%", float: "left",marginLeft:"40px",marginTop:"20px"}}>Catherina</h2>
          <Link to={{ pathname: '//twitter.com/search?q=%23GymSo&src=hash' }} target="_blank" style={{float: "right", color: "black",marginRight:"40px",marginTop:"30px" }}>
            <motion.label whileHover={{ scale: 1.1, color: "red" }}><InstagramIcon></InstagramIcon></motion.label>
          </Link>
          
          <h6 style={{ width: "50%", float: "left",marginLeft:"45px",color:"grey" }}>Body trainer</h6>
          <Link to={{ pathname: '//twitter.com/search?q=%23GymSo&src=hash' }} target="_blank" style={{float: "right",color:"black",marginRight:"40px"}}>
            <motion.label whileHover={{ scale: 1.1, color: "red" }}><Facebook></Facebook></motion.label>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About