import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const WallpaperTool = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);

  const generateWallpaper = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/generate-wallpaper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.image) {
        // Ensure the image is a valid base64 string
        setImage(`data:image/png;base64,${data.image}`);
      } else {
        alert("Failed to generate wallpaper. Try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while generating the wallpaper. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Generate Your Wallpaper
      </motion.h1>

      <motion.input
        type="text"
        className="input input-bordered w-full mb-4"
        placeholder="Enter a prompt for the wallpaper"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <motion.button
        className="btn btn-primary"
        onClick={generateWallpaper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Generate
      </motion.button>

      {image && (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-lg font-bold mb-2">Generated Wallpaper:</h2>
          <motion.img
            src={image}
            alt="Generated Wallpaper"
            className="w-full rounded-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default WallpaperTool;
