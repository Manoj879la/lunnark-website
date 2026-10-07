"use client";
import { Canvas,useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function LightRig(){
 const group=useRef<THREE.Group>(null);
 useFrame(({clock,pointer})=>{
  if(!group.current)return;
  group.current.rotation.y+=.0015;
  group.current.rotation.x=THREE.MathUtils.lerp(group.current.rotation.x,pointer.y*.08,.025);
  group.current.rotation.z=THREE.MathUtils.lerp(group.current.rotation.z,pointer.x*-.05,.025);
  group.current.scale.setScalar(1+Math.sin(clock.elapsedTime*.7)*.025);
 });
 return <group ref={group}><mesh><torusGeometry args={[1.65,.018,24,160]}/><meshStandardMaterial color="#d8c09a" metalness={.85} roughness={.22} emissive="#d8c09a" emissiveIntensity={.22}/></mesh><mesh><sphereGeometry args={[.13,32,32]}/><meshStandardMaterial color="#fff3d4" emissive="#fff3d4" emissiveIntensity={5} toneMapped={false}/></mesh><pointLight color="#d8c09a" intensity={3.5} distance={8}/></group>;
}
export function LightingScene(){
 return <div className="webgl-scene" aria-hidden="true"><Canvas camera={{position:[0,0,6],fov:35}} dpr={[1,1.5]}><ambientLight intensity={.08}/><LightRig/></Canvas></div>;
}
