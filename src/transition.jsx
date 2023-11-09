import { motion } from 'framer-motion'


const transition = (OgComponent) => {

  const ComponentWithTransition = () => {
    // Your transition logic or JSX here
    return <>
        <OgComponent />
      <motion.div
        className='slide-in'
        initial={{scaleY: 0}}
        animate={{scaleY:0}}
        exit={{scaleY: 1}}
        transition={{duration: 1, ease:[0.23, 1, 0.45,1]}}
    />
    <motion.div
        className='slide-out'
        initial={{scaleY: 1}}
        animate={{scaleY:0}}
        exit={{scaleY: 0}}
        transition={{duration: 1, ease:[0.23, 1, 0.45,1]}}
    />
      </>;
  };

  return ComponentWithTransition;

}

export default transition