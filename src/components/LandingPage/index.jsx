import React from "react";
import "./style.css";
import iphone from "./iphone.jpg";
import gradient from "./gradient.jpg";
import Button from "../Common/Button";
import { motion } from "framer-motion";
const LandingPage = () => {
  return (
    <div className="flex-info">
      <div className="left">
        <motion.h1
          className="track-crypto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}>
          Track crypto through a public api in real time. Visit the dashbord to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}>
          <Button
            text={"DashBoard"}
            outlined={false}
            onClick={() => console.log("vlick")}
          />
          <Button
            text={"Share App"}
            outlined={true}
            onClick={() => console.log("vlick")}
          />
        </motion.div>
      </div>
      <div className="right">
        <motion.img
          className="iphone"
          src={iphone}
          initial={{ x: -10 }}
          animate={{ x: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            repeat: Infinity,
          }}
          alt="gradient"
        />
        <img className="gradient" src={gradient} alt="gradient" />
      </div>
    </div>
  );
};

export default LandingPage;
