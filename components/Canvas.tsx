'use client';
import { useEffect, useRef } from "react";

interface ICanvas {
  width: number;
  height: number;
}
const Canvas = (props: ICanvas) => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const mouseMoveListener = (e: any) => {
    if (canvasRef.current) {
      const boundingRect = canvasRef.current.getBoundingClientRect();
      console.log({ x: e.clientX - boundingRect.left, y: e.clientY - boundingRect.top })
    }
  }

  window.addEventListener("mousemove", mouseMoveListener)

  return (
    <canvas id="myCanvas" {...props} ref={canvasRef} />
  )
}

export default Canvas



