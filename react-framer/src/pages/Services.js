import { motion } from "framer-motion";
import React from "react";
import { animationThree } from "../animations";
import Header from "../components/Header";
import Hero from "../components/Hero";
import image7 from "../images/image7.jpeg";
const Services = () => {
	return (
		<motion.div
			initial='out'
			animate='end'
			exit='out'
			variants={animationThree}>
			<Header />
			<Hero title='Birdus' description='Save Birds' image={image7} />
		</motion.div>
	);
};

export default Services;
