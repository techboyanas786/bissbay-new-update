import React from 'react';
import { motion } from 'framer-motion';

function Section({ 
  title, 
  children, 
  delay = 0,
  underlineWidth = '92%',
  underlineHeight = '4px',
  underlineColor = '#ff4200'
}) {
  return (
    <motion.section 
       
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <div style={{ width: 'fit-content' }} className="md:ml-6 mb-4 w-full mx-auto sm:mx-0">
          <motion.h2
            className="section-title !mb-0 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.div
            style={{
              height: underlineHeight,
              backgroundColor: underlineColor,
              borderRadius: '2px'
            }}
            className='w-full'
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
            viewport={{ once: true }}
          />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg md:p-6 p-2">
          {children}
        </div>
      </div>
    </motion.section>
  );
}

export default Section;