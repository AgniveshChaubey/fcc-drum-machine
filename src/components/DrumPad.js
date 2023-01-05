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
        <div id='drum-machine' className='container' style={{ maxWidth: '550px' }}>
            <div id="display" className='row' >
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
                <h5 id='activeKey' className='text-center mt-2'>{pressedKey}</h5>
            </div>
        </div>
    )
}

export default DrumPad;