import { Twitter } from '@mui/icons-material';
import Facebook from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "framer-motion";
import { color } from '@mui/system';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import "./Navbar.css";
import React from 'react'
import {
  Link
} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ marginLeft: "160px", color: "white" }}>
            <motion.label whileHover={{color: "red" }}><h2><FitnessCenterIcon fontSize='large'></FitnessCenterIcon>Gymso Fitness</h2></motion.label>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "250px", color: "white" }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "white" }}>
                  <motion.label whileHover={{ scale: 1.3, color: "red" }}>Home</motion.label>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About" style={{ color: "white", marginLeft: "30px" }}><motion.label whileHover={{ scale: 1.3, color: "red" }}>About Us</motion.label></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/classes" style={{ color: "white", marginLeft: "30px" }}><motion.label whileHover={{ scale: 1.3, color: "red" }}>Classes</motion.label></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schedules" style={{ color: "white", marginLeft: "30px" }}><motion.label whileHover={{ scale: 1.3, color: "red" }}>Schedules</motion.label></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ color: "white", marginLeft: "30px" }}><motion.label whileHover={{ scale: 1.3, color: "red" }}>Contact</motion.label></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={ { pathname: '//www.facebook.com/tooplate/photos/gymso-fitness-html-templatehttpswwwtooplatecomview2119-gymso-fitness/2062824137153860/' } } target="_blank" style={{ color: "white", marginLeft: "20px" }}>
                  <motion.label whileHover={{ scale: 1.3, color: "red" }}><Facebook></Facebook></motion.label>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={ { pathname: '//twitter.com/search?q=%23GymSo&src=hash' } } target="_blank" style={{ color: "white", marginLeft: "20px" }}>
                  <motion.label whileHover={{ scale: 1.3, color: "red" }}><Twitter></Twitter></motion.label>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={ { pathname: '//www.instagram.com/explore/tags/gymso/?hl=en' } } target="_blank" style={{ color: "white", marginLeft: "20px" }}>
                  <motion.label whileHover={{ scale: 1.3, color: "red" }}><InstagramIcon></InstagramIcon></motion.label>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar