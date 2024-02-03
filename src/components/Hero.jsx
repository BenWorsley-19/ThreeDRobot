import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, slideIn } from '../utils/motion';
import {RobotCanvas, EarthCanvas } from './canvas';

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  // changes the isMobile state based on the window size
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches); 
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <>
       <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`h-screen max-w-7xl mx-auto relative z-0`}
        >
            <motion.div
              variants={slideIn('left', 'tween', 0.2, 1)}
              className='h-[35%]'
            >
              <RobotCanvas isMobile={isMobile} />
            </motion.div>
            <motion.div
              variants={slideIn('right', 'tween', 0.2, 1)}
              className='h-[65%] mt-0'
            >
              <EarthCanvas isMobile={isMobile} />
            </motion.div>  
        </motion.section>
    </>
  )
}

export default Hero