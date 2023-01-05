import React, { useEffect, useState } from 'react';
import { drumpads } from './drumPads';
import './DrumPad.css';

const DrumPad = () => {
    const [pressedKey, setPressedKey] = useState('');

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            playSound(e.key.toUpperCase())
        });
    }, []);

    const playSound = (e) => {
        const audio = document.getElementById(e)
        // console.log(audio)
        audio.play();
        setPressedKey(e);
    };

    return (
    <>
        <div className="header" style={{backgroundColor : '#31a5d6'}}><h2 className='p-2'>Drum Machine</h2></div>
        <div id='drum-machine' className='container' style={{ maxWidth: '550px' }}>
            <div id="display" className='row text-center' >
            <h3 id='activeKey' className='col-12 col-md-12 text-center mb-2' style={{backgroundColor : ''}}>{`You pressed: ${pressedKey}`}</h3>
                {
                    drumpads.map(drumpad => (
                        
                        <button
                            style={{ margin: '2px auto',
                            maxWidth : '33%'
                            }}
                            onClick={() => {
                                playSound(drumpad.text)
                            }}
                            key={drumpad.text}
                            id={drumpad.src}
                            className='buttons btn-hover color-1 drum-pad col-4 col-md-4 text-center pt-5 pb-5'
                        >
                            {drumpad.text}
                            <audio src={drumpad.src} id={drumpad.text} className='clip'></audio>
                        </button>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default DrumPad;