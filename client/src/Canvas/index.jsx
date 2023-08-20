import Form  from './Form';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { useSnapshot } from 'valtio';
import state from '../store';
const CanvasModel = () => {
  const snap =useSnapshot(state);
  return (
    <AnimatePresence>
    {!snap.intro&&(
        <>
           <motion.div
            className="content-center"
            {...fadeAnimation}
          >
            <motion.div
            {...slideAnimation('right')}
            >
            <center><Form/></center>
            </motion.div>
            
            
          </motion.div>
        </>
    )}
    </AnimatePresence>
  )
}

export default CanvasModel