import { React, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useSnapshot } from "valtio";

export default function Insect(props) {
  const { nodes } = useGLTF("/Insect/scene.gltf");
  const snap = useSnapshot(props.colors);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
    }
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);

  return (
    <group
      {...props}
      dispose={null}
      scale={[0.04, 0.04, 0.04]}
      rotation={[-0.1, 2, 0.5]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => {
        if (e.intersections.length === 0) {
          setHovered(null);
        }
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        props.updateCurrent(e.object.material.name);
      }}
      onPointerMissed={() => {
        props.updateCurrent(null);
      }}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-12.03, 1.13, 6.07]}
            rotation={[-0.96, -0.94, -0.86]}
            scale={[0.32, 0.43, 0.32]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder3_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-10.47, 1.04, 8.07]}
            rotation={[-1.88, -1.05, -1.63]}
            scale={[0.32, 0.43, 0.32]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder4_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-10.11, 1.45, 7.9]}
            rotation={[0.09, 0.15, 0.24]}
            scale={[0.32, 0.43, 0.32]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder5_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-10.6, 1.02, 6.98]}
            rotation={[0.09, 0.15, 0.24]}
            scale={[0.32, 0.43, 0.32]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder6_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.43, 5.53, 11.07]}
            rotation={[0, -1.23, -0.19]}
            scale={[0.79, 0.61, 3.6]}
          >
            <mesh castShadow geometry={nodes.pCube1_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.11, 6.41, 12.38]}
            rotation={[-2.59, -1.19, -2.65]}
            scale={0.13}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder8_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group position={[-1000.12, -5.58, 0.77]} />
          <group
            position={[-31.41, 10.29, 10.45]}
            rotation={[2.5, -0.14, -3.01]}
            scale={0.31}
          >
            <mesh castShadow geometry={nodes.eye_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-27.44, 6.32, 14.67]}
            rotation={[2.27, -0.44, 2.19]}
            scale={0.31}
          >
            <mesh castShadow geometry={nodes.eye1_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-22.53, 6.63, 11.98]}
            rotation={[-2.79, -1.17, -2.2]}
            scale={0.13}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder9_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-22.19, 6.12, 10.74]}
            rotation={[1.57, 0, -0.62]}
            scale={[0.63, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell1_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-11.21, 2.6, 2.3]}
            rotation={[1.64, -0.02, -0.12]}
            scale={[0.23, 0.79, 0.57]}
          >
            <mesh castShadow geometry={nodes.shell2_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-12.16, 2.84, 2.39]}
            rotation={[1.89, 1.1, -0.27]}
            scale={[0.23, 0.79, 0.57]}
          >
            <mesh castShadow geometry={nodes.shell3_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-11.05, 1.83, 2.1]}
            rotation={[1.35, -1.17, -0.32]}
            scale={[0.22, 0.79, 0.57]}
          >
            <mesh castShadow geometry={nodes.shell4_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-11, 1.71, -0.64]}
            rotation={[1.35, -1.17, -0.22]}
            scale={[0.22, 0.79, 0.57]}
          >
            <mesh castShadow geometry={nodes.shell5_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-12.16, 2.8, -0.4]}
            rotation={[1.71, 1.12, -0.11]}
            scale={[0.23, 0.79, 0.57]}
          >
            <mesh castShadow geometry={nodes.shell6_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-11.04, 2.82, -0.41]}
            rotation={[1.64, -0.02, 0.01]}
            scale={[0.23, 0.79, 0.57]}
          >
            <mesh castShadow geometry={nodes.shell7_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-9.87, 3.49, -5.05]}
            rotation={[1.82, 0.02, 0.32]}
            scale={[0.25, 0.57, 0.41]}
          >
            <mesh castShadow geometry={nodes.shell8_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-11.34, 3.64, -5.49]}
            rotation={[0.08, 1.24, 1.8]}
            scale={[0.25, 0.57, 0.41]}
          >
            <mesh castShadow geometry={nodes.shell9_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-9.02, 2.28, -5.48]}
            rotation={[2.79, -0.87, 0.89]}
            scale={[0.25, 0.57, 0.41]}
          >
            <mesh castShadow geometry={nodes.shell10_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-7.67, 7.23, -9.86]}
            rotation={[1.77, 0.38, -2.12]}
            scale={[0.32, 0.75, 0.54]}
          >
            <mesh castShadow geometry={nodes.shell11_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-5.55, 8.11, -10.99]}
            rotation={[1.77, 0.38, -2.12]}
            scale={[0.32, 0.75, 0.54]}
          >
            <mesh castShadow geometry={nodes.shell12_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-5.19, 6.78, -11.31]}
            rotation={[0.44, 0.57, -1.49]}
            scale={[0.32, 0.75, 0.54]}
          >
            <mesh castShadow geometry={nodes.shell13_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-7.35, 5.79, -10.07]}
            rotation={[0.28, 0.59, -1.39]}
            scale={[0.32, 0.75, 0.54]}
          >
            <mesh castShadow geometry={nodes.shell14_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-6.98, 7.43, -8.41]}
            rotation={[2.58, -0.3, -2.2]}
            scale={[0.32, 0.75, 0.54]}
          >
            <mesh castShadow geometry={nodes.shell15_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-4.93, 8.42, -9.87]}
            rotation={[2.57, -0.14, -2.15]}
            scale={[0.32, 0.75, 0.54]}
          >
            <mesh castShadow geometry={nodes.shell16_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[4.46, 8.21, -11.17]}
            rotation={[1.96, -0.28, -0.31]}
            scale={[0.4, 1.13, 0.81]}
          >
            <mesh castShadow geometry={nodes.shell17_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[2.81, 9.08, -10.43]}
            rotation={[2.4, 0.83, -0.41]}
            scale={[0.4, 1.13, 0.81]}
          >
            <mesh castShadow geometry={nodes.shell18_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[3.92, 6.54, -11.56]}
            rotation={[0.08, -1.25, -2.05]}
            scale={[0.4, 1.13, 0.81]}
          >
            <mesh castShadow geometry={nodes.shell19_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[4.62, 5.19, -9.39]}
            rotation={[-0.11, -1.32, -2.26]}
            scale={[0.4, 1.13, 0.81]}
          >
            <mesh castShadow geometry={nodes.shell20_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[5.46, 6.59, -8.32]}
            rotation={[2.05, -0.31, -0.2]}
            scale={[0.4, 1.13, 0.81]}
          >
            <mesh castShadow geometry={nodes.shell21_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[3.93, 7.36, -7.36]}
            rotation={[2.27, 0.85, -0.19]}
            scale={[0.4, 1.13, 0.81]}
          >
            <mesh castShadow geometry={nodes.shell22_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[5.22, 3.29, -0.87]}
            rotation={[1.65, -0.2, 0.39]}
            scale={[0.49, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell23_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[3.36, 3.17, 3.45]}
            rotation={[1.7, -0.16, 0.7]}
            scale={[0.49, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell24_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[0.42, 2.35, 6.72]}
            rotation={[1.96, -0.42, 0.89]}
            scale={[0.49, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell25_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[4.2, 1.4, -1.35]}
            rotation={[2.88, -1.24, 1.2]}
            scale={[0.49, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell26_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[0.24, 0.5, 6.53]}
            rotation={[2.93, -0.7, 1.45]}
            scale={[0.49, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell27_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[2.44, 0.67, 3.04]}
            rotation={[-3.05, -0.89, 1.66]}
            scale={[0.49, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell28_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-10.31, 1.47, 14.88]}
            rotation={[2.93, -0.62, 1.61]}
            scale={[0.48, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell29_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-9.35, 3.6, 15.25]}
            rotation={[1.91, -0.22, 1.21]}
            scale={[0.48, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell30_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-9.64, 4.99, 13.19]}
            rotation={[0.35, 0.37, 1.36]}
            scale={[0.48, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell31_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-2.74, 4.05, 6.42]}
            rotation={[-0.4, 0.68, 1.8]}
            scale={[0.49, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell32_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[0.13, 4.23, 3.15]}
            rotation={[-0.02, 0.92, 1.65]}
            scale={[0.49, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell33_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[2.71, 4.06, -0.65]}
            rotation={[0.36, 1.05, 1.23]}
            scale={[0.49, 1.46, 1.05]}
          >
            <mesh castShadow geometry={nodes.shell34_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.45, 5.7, 9.7]}
            rotation={[-1.76, 0.65, 1.88]}
            scale={[0.34, 0.47, 0.19]}
          >
            <mesh castShadow geometry={nodes.pCube2_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.42, 5.8, 7.98]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube3_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.39, 5.8, 8.04]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube4_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.62, 5.8, 8.04]}
            rotation={[-Math.PI, -0.24, -Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube5_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.63, 5.8, 7.97]}
            rotation={[-Math.PI, -0.24, -Math.PI / 2]}
            scale={[0.04, 0.14, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube6_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.33, 5.8, 8.15]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube7_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.3, 5.8, 8.22]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube8_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.14, 5.8, 8.5]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube9_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.1, 5.8, 8.56]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube10_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.19, 5.8, 8.39]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube11_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.23, 5.8, 8.32]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube12_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.77, 5.8, 9.18]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube13_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.73, 5.8, 9.25]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube14_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.82, 5.8, 9.07]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube15_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.86, 5.8, 9.01]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube16_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.92, 5.8, 8.9]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube17_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.96, 5.8, 8.83]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube18_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.01, 5.8, 8.73]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube19_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.05, 5.8, 8.66]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube20_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.63, 5.8, 8.14]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube21_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.6, 5.8, 8.24]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube22_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.57, 5.8, 8.32]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube23_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.57, 5.8, 8.41]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube2_low1_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.55, 5.8, 8.52]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube2_low2_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.54, 5.8, 8.59]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube2_low3_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.54, 5.8, 8.68]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube27_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.51, 5.8, 8.75]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube28_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.5, 5.8, 8.86]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube29_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.49, 5.8, 8.92]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube30_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.45, 5.8, 9.03]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube31_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.44, 5.8, 9.1]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube32_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.41, 5.8, 9.2]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube33_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.4, 5.8, 9.27]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube34_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.45, 5.76, 9.7]}
            rotation={[1.47, -0.08, 1.54]}
            scale={[0.34, 0.47, 0.19]}
          >
            <mesh castShadow geometry={nodes.pCube35_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.27, 5.72, 9.7]}
            rotation={[1.47, -0.08, -1.68]}
            scale={[0.34, 0.47, 0.19]}
          >
            <mesh castShadow geometry={nodes.pCube36_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.28, 5.64, 9.7]}
            rotation={[-1.45, -0.01, -1.33]}
            scale={[0.34, 0.47, 0.19]}
          >
            <mesh castShadow geometry={nodes.pCube37_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.23, 5.74, 8.32]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube3_low1_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.19, 5.72, 8.39]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube39_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.14, 5.71, 8.5]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube40_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.1, 5.71, 8.56]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube41_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.05, 5.71, 8.66]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube42_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.01, 5.71, 8.73]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube43_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.96, 5.71, 8.83]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube44_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.92, 5.71, 8.9]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube45_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.86, 5.71, 9.01]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube46_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.82, 5.71, 9.07]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube47_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.77, 5.71, 9.18]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube48_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.73, 5.71, 9.25]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube49_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.96, 5.65, 8.83]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube50_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.92, 5.63, 8.9]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube51_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.86, 5.63, 9.01]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube52_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.82, 5.63, 9.07]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube53_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.77, 5.63, 9.18]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube54_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-24.73, 5.63, 9.25]}
            rotation={[0, 0.24, Math.PI / 2]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube55_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.57, 5.74, 8.39]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube56_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.55, 5.74, 8.5]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube57_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.54, 5.74, 8.56]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube58_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.54, 5.74, 8.66]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube59_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.51, 5.74, 8.73]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube60_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.5, 5.74, 8.83]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube61_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.49, 5.74, 8.9]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube62_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.45, 5.74, 9.01]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube63_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.44, 5.74, 9.07]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube64_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.41, 5.74, 9.18]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube65_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.4, 5.74, 9.25]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube66_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.4, 5.68, 9.25]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube67_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.41, 5.68, 9.18]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube68_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.44, 5.68, 9.07]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube69_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.45, 5.68, 9.01]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube70_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.49, 5.68, 8.9]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube71_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.5, 5.68, 8.83]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube72_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.51, 5.69, 8.73]}
            rotation={[3.07, -0.61, -1.61]}
            scale={[0.05, 0.15, 0.06]}
          >
            <mesh castShadow geometry={nodes.pCube73_low_lambert1_0.geometry}>
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <mesh castShadow geometry={nodes.pCylinder11_low_lambert1_0.geometry}>
            <meshStandardMaterial color={snap.body} name="body" />
          </mesh>
          <group
            position={[-13.28, 10.84, 9.75]}
            rotation={[0, 0, 0.1]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder13_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-12.49, 5.7, 9.75]}
            rotation={[0, 0, -0.37]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder14_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-12.49, 5.73, 10.26]}
            rotation={[0, 0, -0.37]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder15_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-13.14, 10.59, 10.26]}
            rotation={[0, 0, 0.07]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder16_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-14.68, 13.05, 9.98]}
            rotation={[0, 0, 0.33]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder17_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-12.43, 5.72, 9.98]}
            rotation={[0, 0, -0.37]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder18_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-12.43, 5.72, 10.11]}
            rotation={[0, 0, -0.37]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder19_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-12.89, 10.13, 10.11]}
            rotation={[0, 0, 0.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder20_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.79, 14.16, 7.76]}
            rotation={[-0.15, 0.06, 0.49]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder21_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-14.31, 8.67, 4.24]}
            rotation={[0.07, 0.51, -0.14]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder22_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-13, 5.7, 9.87]}
            rotation={[0, 0, -0.37]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder23_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-12.65, 5.7, 9.87]}
            rotation={[0, 0, -0.37]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder24_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-12.78, 5.7, 9.75]}
            rotation={[0, 0, -0.37]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder25_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-12.71, 5.73, 10.07]}
            rotation={[0, 0, -0.37]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder26_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-12.4, 5.7, 9.57]}
            rotation={[0, 0, -0.37]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder27_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-26.26, 10.32, 20.5]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder28_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-26.37, 10.31, 20.17]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder29_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-26.14, 10.32, 20.17]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder30_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.89, 10.31, 20.32]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder31_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-26.48, 10.33, 20.62]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder32_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-26.14, 10.31, 20.62]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder33_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.97, 10.33, 20.5]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder34_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-26.19, 10.32, 20.82]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder35_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.91, 10.33, 20.85]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder36_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.91, 10.32, 20.73]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder37_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.97, 10.33, 21.01]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder38_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-26.24, 10.32, 21.17]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder39_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.8, 10.33, 20.73]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder40_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-26.39, 10.33, 20.85]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder41_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.74, 10.31, 21.01]}
            rotation={[-2.07, -1.15, -2.03]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder42_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.27, 8.44, 19.42]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder43_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.27, 8.52, 19.42]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder44_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.27, 8.59, 19.42]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder45_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.25, 8.59, 19.58]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder46_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.25, 8.52, 19.58]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder47_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.25, 8.41, 19.58]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder48_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.28, 8.41, 19.91]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder49_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.28, 8.52, 19.91]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder50_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.28, 8.59, 19.91]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder51_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.3, 8.59, 19.75]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder52_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.3, 8.52, 19.75]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder53_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.3, 8.44, 19.75]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder54_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.35, 8.4, 20.25]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder55_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.35, 8.5, 20.25]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder56_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.35, 8.57, 20.25]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder57_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.36, 8.57, 20.09]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder58_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.36, 8.5, 20.09]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder59_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-31.36, 8.42, 20.09]}
            rotation={[1.61, -0.55, 1.79]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder60_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.54, 6.09, 0.64]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder76_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.54, 6.04, 0.63]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder77_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.46, 6.04, 0.73]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder78_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.46, 6.09, 0.74]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder79_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.29, 6.07, 0.89]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder80_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.29, 6.12, 0.91]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder81_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.39, 6.06, 0.82]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder82_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.39, 6.11, 0.83]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder83_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.39, 5.97, 0.82]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder84_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.29, 5.97, 0.92]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder85_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.8, 5.97, 1.38]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder86_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.79, 6.07, 1.35]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder87_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.79, 6.12, 1.36]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder88_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.9, 6.11, 1.29]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder89_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.9, 6.06, 1.28]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder90_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.9, 5.97, 1.28]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder91_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.96, 6.04, 1.19]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder92_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.96, 6.09, 1.2]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder93_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.05, 6.09, 1.1]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder94_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-16.05, 6.04, 1.09]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder95_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.42, 6.03, 1.75]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder96_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.47, 6.1, 1.72]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder97_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.47, 6.15, 1.74]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder98_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.51, 6.15, 1.66]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder99_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.57, 6.09, 1.65]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder100_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.54, 6, 1.65]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder101_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.64, 6.07, 1.56]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder102_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.64, 6.13, 1.57]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder103_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.72, 6.13, 1.47]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder104_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.72, 6.07, 1.46]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder105_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.44, 5.79, 1.67]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder106_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.44, 5.88, 1.65]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder107_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.44, 5.93, 1.66]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder108_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.54, 5.93, 1.59]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder109_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.54, 5.87, 1.57]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder110_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.54, 5.78, 1.57]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder111_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.61, 5.85, 1.48]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder112_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.61, 5.91, 1.5]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder113_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.69, 5.91, 1.39]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder114_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-15.69, 5.85, 1.38]}
            rotation={[1.8, -0.19, -1.12]}
            scale={[0.27, 0.02, 0.27]}
          >
            <mesh
              castShadow
              geometry={nodes.pCylinder115_low_lambert1_0.geometry}
            >
              <meshStandardMaterial color={snap.shell} name="shell" />
            </mesh>
          </group>
          <group
            position={[-25.62, 7.77, -1000.45]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Insect/scene.gltf");
