import React, { useState, useEffect } from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import pfp1 from "../images/pfp.png"
import pfp2 from "../images/pfp2.png"
import { motion } from "framer-motion"

function Home() {
  const images = [pfp1, pfp2]

  const [currentImage, setCurrentImage] = useState(0)

  const changeImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(changeImage, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="home--main">
        <h1>Symptom Checker</h1>
        <p>
          A symptom checker is a digital tool or application designed to help
          individuals assess and evaluate their health condition based on the
          symptoms they are experiencing. It is typically an interactive
          questionnaire or series of questions that guide users through a list
          of symptoms they may be encountering. The goal of a symptom checker is
          to provide users with potential explanations for their symptoms and
          offer suggestions for appropriate next steps, such as seeking medical
          attention or home remedies.
        </p>
        <button className="home-redirect">
          <Link to="/checker">Click Me</Link>
        </button>
        <img
          src={images[currentImage]}
          alt="imagesTransition"
          className="image-transition"
        />
      </div>
    </motion.div>
  )
}

export default Home
