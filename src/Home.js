import React from 'react'
import {
  Link
} from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div style={{
      backgroundImage: "url('hero-bg.jpg')", backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', height: "637px", backgroundPosition: "center", width: "100%",
      color: "black",backgroundColor:"black", opacity: "0.8", position:"fixed",display:"block"
    }}>
      <h3 style={{ color: "grey", textAlign: "center", marginTop: "200px" }}>new way to build a healthy lifestyle!</h3>
      <h1 style={{ textAlign: "center", color: "white", fontSize: "60px" }}>UPGRADE YOUR BODY </h1>
      <h1 style={{ textAlign: "center", color: "white", fontSize: "60px" }}>AT GYMSO FITNESS</h1>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/" style={{ textAlign: "center", color: "white", marginLeft: "600px" }}><motion.label whileHover={{ scale: 1.3, color: "red" }}><b>GET STARTED</b></motion.label></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/" style={{ textAlign: "center", border: "2px solid red", color: "red", marginLeft: "35px" }}><motion.label whileHover={{ scale: 1.1, color: "white"}}><b>LEARN MORE</b></motion.label></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Home