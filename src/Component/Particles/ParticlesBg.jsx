import React from 'react';
import ParticlesJson from './ParticlesJson';
import Particles from 'react-particles';


const ParticlesBg = () => {
    return (
        <div>
            <Particles params={ParticlesJson}></Particles>
        </div>
    );
};

export default ParticlesBg;