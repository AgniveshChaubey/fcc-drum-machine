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
        <div id='drum-machine' className='container'>
            <div id="display" className='row'>
                {
                    drumpads.map(drumpad => (
                        <button
                        onFocus={false}
                            onClick={() => {
                                playSound(drumpad.text)
                            }}
                            key={drumpad.text}
                            id={drumpad.src}
                            className='drum-pad col col-md-4 col-lg-4 text-center border'
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