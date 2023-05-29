"use client";

import React, { useEffect, useRef } from 'react';

interface CanvasImage {
  imgPath: string
}

const ImageOverlay = ({ imgPath }: CanvasImage) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d');
    if (!context) return

    const baseImage = new Image();
    baseImage.src = 'assets/profile/nellfs.png';

    const overlayImage = new Image();
    overlayImage.src = imgPath;

    // Variables to track the position of the overlay image
    let overlayX = 0;
    let overlayY = 0;

    const drawCanvas = () => {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the base image on the canvas
      context.drawImage(baseImage, 0, 0);

      // Draw the overlay image at the current position
      context.drawImage(overlayImage, overlayX, overlayY, 32, 32);
    };

    const handleMouseMove = (event: any) => {
      // Update the position of the overlay image based on mouse movement
      const rect = canvas.getBoundingClientRect();
      overlayX = event.clientX - rect.left;
      overlayY = event.clientY - rect.top;

      drawCanvas();
    };

    baseImage.onload = () => {
      // Set canvas dimensions to match the base image
      canvas.width = baseImage.width;
      canvas.height = baseImage.height;

      // Draw the canvas initially
      drawCanvas();

      // Add mouse move event listener to update the overlay position
      canvas.addEventListener('mousemove', handleMouseMove);
    };

    return () => {
      // Clean up by removing the event listener when component unmounts
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ImageOverlay;

