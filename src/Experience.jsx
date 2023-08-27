import {MeshWobbleMaterial, Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { Headphone } from './Headphone.jsx'
import {Reacto} from './Reacto.jsx'


export default function Experience()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')


    return <>
        <Environment preset="city" />

        <color args={ [ '#8a6803' ] } attach="background" />

        <PresentationControls 
        global 
        rotation={ [ 0.13, 0.1, 0 ] }
        polar={ [ - 0.4, 0.2 ] }
        azimuth={ [ - 1, 0.75 ] }
        config={ { mass: 2, tension: 400 } }
        snap={ { mass: 4, tension: 400 } }>
            <Float rotationIntensity={ 0.4 } >
            <rectAreaLight
                width={ 2.5 }
                height={ 1.65 }
                intensity={ 65 }
                color={ '#ffdb70' }
                rotation={ [ - 0.1, Math.PI, 0 ] }
                position={ [ 0, 0.55, - 1.15 ] }
            />
            <Suspense fallback={<Html center>Loading...</Html>}>
                <primitive
                    object={ computer.scene }
                    position-y={ - 1.2 }
                    rotation-x={ 0.13 }
                >
                    <Html 
                    transform 
                    wrapperClass="htmlScreen"
                    distanceFactor={ 1.17 }
                    position={ [ 0, 1.56, - 1.4 ] }
                    rotation-x={ - 0.256 }>

                    
                        <iframe src="https://farihane.com/" />
                    </Html>
                </primitive>
            </Suspense>
            <Text 
                font="./bangers-v20-latin-regular.woff"
                fontSize={ 1 }
                position={ [ 2, 0.75, 0.75 ] }
                rotation-y={ - 1.25 }
                maxWidth={ 2 }
                textAlign='center'>
                    Farihane ZANNOU
                    <MeshWobbleMaterial factor={0.3} speed={5} />
            </Text>

            <Headphone scale={ 0.5 } position={ [ -2, -0.5, -1 ] } rotation-y={ - 2.5 } />

            <Reacto scale={ 0.3 }
             position={ [ 1, -1, 2 ] }
             rotation-y={ - 2.5 } />
            
            </Float>
        </PresentationControls>
        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}