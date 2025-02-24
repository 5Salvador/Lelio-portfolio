import React from 'react'
import { motion } from "framer-motion"

const navbar = () => {
  return (
    <>
    <nav className='p-4 my-2 cursor-pointer border-b-4 border-gray-500'>
        <motion.p 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className='text-2xl font-bold  md:text-4xl text-center p-2 hover:text-blue-800 transition-all duration-300'>Lélio Chemane</motion.p>
    </nav>
    </>
  )
}

export default navbar