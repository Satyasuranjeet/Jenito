import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton } from '../components';
import state from '../store';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
const Home = () => {
    const snap = useSnapshot(state);
    const sett=()=>{
      if(window.innerWidth <=600)
        return "";
      else{
        return 'grid grid-cols-2 gap-4 content-start';
      }
    }
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
          <img 
              src='./threejs.gif'
              alt="logo"
              className="w-17 h-12 object-contain"
            />
          </motion.header>
      <motion.div className={sett()} {...headContainerAnimation}>
          <motion.div className="home-content " {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              Unleash your artistic vision using our state-of-the-art <strong>AI image generator</strong>{" "}.Join us in embracing innovation and start crafting captivating images now!
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
          <motion.div {...headContainerAnimation}>
             <img 
              src='./meta.png'
              alt="logo"
              className="w-fit object-contain"
            />
          </motion.div>
          </motion.div>
          </motion.section>
          
      )}
          </AnimatePresence>
  );
}

export default Home