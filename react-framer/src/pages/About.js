import { motion } from "framer-motion";
import React from "react";
import { animationTwo } from "../animations";
import Header from "../components/Header";
import Hero from "../components/Hero";
import image5 from "../images/image5.jpeg";

const About = () => {
	return (
		<motion.div initial='out' animate='in' exit='out' variants={animationTwo}>
			<Header />
			<Hero title='Birdus' description='Save Birds' image={image5} />
		</motion.div>
	);
};

export default About;
