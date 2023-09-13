import styles from './overlay.module.scss';
import cn from 'clsx'
import React, { useRef, useLayoutEffect } from "react";
import gsap from 'gsap'
import { useFrame } from "@react-three/fiber";
import {useScroll, Scroll } from "@react-three/drei";
import { useEffect } from 'react';

function Overlay() {
	const animTitle = useRef()
	useEffect(() => {
		window.addEventListener('scroll', function(){
			console.log('animTitle')
		})
	}, [])

  return (
    <Scroll html>
			<div className={styles.root}>
				<div className={cn(styles.section, styles.left)}>
					<div className={styles.textContainer}>
						<h2 className='animTitle' ref={animTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
						<p> Fuga, architecto! Minus perferendis dolore molestiae, quas, doloremque sequi optio vel natus, pariatur voluptatibus deserunt asperiores ipsa tempora est ipsam quis aperiam.</p>
					</div>
				</div>
				<div className={cn(styles.section, styles.right)}>
					<div className={styles.textContainer}>
						<h2 className='animTitle2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
						<p> Fuga, architecto! Minus perferendis dolore molestiae, quas, doloremque sequi optio vel natus, pariatur voluptatibus deserunt asperiores ipsa tempora est ipsam quis aperiam.</p>
					</div>
				</div>
				<div className={cn(styles.section, styles.left)}>
					<div className={styles.textContainer}>
						<h2 className='animTitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
						<p> Fuga, architecto! Minus perferendis dolore molestiae, quas, doloremque sequi optio vel natus, pariatur voluptatibus deserunt asperiores ipsa tempora est ipsam quis aperiam.</p>
					</div>
				</div>
			</div>
    </Scroll>
  );
}
export default Overlay;
