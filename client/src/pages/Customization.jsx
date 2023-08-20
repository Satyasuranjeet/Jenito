import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton } from '../components';
import config from '../config/config';
import state from '../store';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { fadeAnimation, slideAnimation } from '../config/motion';
const Customization = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
    {!snap.intro&&(
        <>
           <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton 
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
          
        </>
    )}
    </AnimatePresence>
  )
}

export default Customization