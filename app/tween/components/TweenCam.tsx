import TWEEN from '@tweenjs/tween.js'
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState, useRef } from 'react';
import { useControls } from "leva";
import { OrbitControls } from "@react-three/drei";

export default function TweenCam() {

    //get the camera
    const { camera } = useThree();

    //declare the UI parameters
    const options = ["location 1", "location 2", "location 3", "location 4"];
    const { location } = useControls("Camera Locations", {
        location: {
            value: "location 1",
            options: options, 
        },
    });

    //define the cam locations
    const annotations = [
        {
            camPos: {
                x: 6.61,
                y: 3.89,
                z: 1.37,
            },
            lookAt: {
                x: 7.37,
                y: 3.27,
                z: 0.36,
            },
        },
        {
            camPos: {
                x: 7.13,
                y: 4.33,
                z: 1.98,
            },
            lookAt: {
                x: 8.32,
                y: 2.71,
                z: 1.33,
            },
        },
        {
            camPos: {
                x: 7.13,
                y: 1.15,
                z: 0.66,
            },
            lookAt: {
                x: 5.78,
                y: 0.89,
                z: 0.68,
            },
        },
        {
            camPos: {
                x: 13.05,
                y: 4.35,
                z: 5.06,
            },
            lookAt: {
                x: 11,
                y: 2.7,
                z: 3.42,
            },
        },
    ]

    const ref = useRef();

    useEffect(() => {
        const locIndex = options.indexOf(location);
        //console.log(locIndex);

         // change camera position
         const a = annotations[locIndex];

        // change target
        new TWEEN.Tween(ref.current.target)
        .to(
            {
                x: a.lookAt.x,
                y: a.lookAt.y,
                z: a.lookAt.z,
            },
            1000
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start()

        // change the camera position
        new TWEEN.Tween(camera.position)
        .to(
            {
                x: a.camPos.x,
                y: a.camPos.y,
                z: a.camPos.z,
            },
            1000
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start()

    },[location])

    useFrame(() => {
        TWEEN.update()
    })

    return (
    <>
        <OrbitControls ref={ref} />
    </>
    )
};
