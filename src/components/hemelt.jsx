
import React, { useRef, useLayoutEffect } from "react";
import gsap from 'gsap'
import { useFrame } from "@react-three/fiber";
import {useGLTF, useScroll } from "@react-three/drei";

export const HEIGHT = 2

export function Model({rotation, scale = 1.3}) {
	const helmet = useRef();  
	const tl = useRef()
  const { nodes, materials } = useGLTF("/mandalorian_helmet.glb");

	const scroll = useScroll()
	console.log(scroll)

	useFrame(() => {
		tl.current.seek(scroll.offset * tl.current.duration())
	})

	useLayoutEffect(() => {
		tl.current = gsap.timeline();
		tl.current.from(
			helmet.current.position,
			{
				duration: 0.5,
				z: -3,
			},
			1
		);
		tl.current.to(
			helmet.current.position,
			{
				duration: 0.5,
				x: -7,
			},
			0
		);
		tl.current.to(
			helmet.current.rotation,
			{
				duration: 0.5,
				y: -Math.PI / -2,
			},
			0
		);
		tl.current.to(
			helmet.current.position,
			{
				duration: 0.5,
				x: 5,
			},
			1
		);
		tl.current.to(
			helmet.current.rotation,
			{
				duration: 0.5,
				y: -Math.PI / 2,
			},
			1
		);

	}, [])

  return (
    <group dispose={null} ref={helmet} position={[3, 0, 1]}>
				<group rotation={[-Math.PI / 2, 0, rotation]} scale={scale} >
					<group rotation={[Math.PI / 2, 0, -0.1]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_5.geometry}
							material={materials.Black_Glass}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_6.geometry}
							material={materials.Black_inside}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_4.geometry}
							material={materials.Metal}
						/>
					</group>
				</group>
		</group>
  );
}

useGLTF.preload("/mandalorian_helmet.glb");

