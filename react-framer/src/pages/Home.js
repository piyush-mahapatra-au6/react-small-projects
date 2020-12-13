import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import image6 from "../images/image6.jpeg";
import { motion } from "framer-motion";
import { animateOne, transition } from "../animations";

const Home = () => {
	return (
		<motion.div
			initial='out'
			animate='in'
			exit='out'
			variants={animateOne}
			transition={transition}>
			<Header />
			<Hero title='Birdus' description='Save Birds' image={image6} />
		</motion.div>
	);
};

export default Home;
