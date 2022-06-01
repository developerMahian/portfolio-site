import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import Model from "./model/Dog";

const ThreeDModel = (props: { isMobile: boolean }) => {
  const { isMobile } = props;

  return (
    <>
      <Canvas
        camera={{ position: [16, 5, 12.25], fov: 30 }}
        style={{
          width: "100%",
          height: isMobile ? "70%" : "100%",
          zIndex: 1,
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight intensity={0.5} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={5} enableZoom={false} />
      </Canvas>
      <Loader />
    </>
  );
};

export default ThreeDModel;
