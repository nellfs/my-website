import { RefObject, useRef } from "react";

export function useOnDraw() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  function setCanvasRef(ref: RefObject<HTMLCanvasElement | null>) {
    if (!ref) return;
    canvasRef.current = ref.current;
  }

  return setCanvasRef
}
