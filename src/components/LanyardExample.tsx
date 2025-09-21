import React from 'react';
import Lanyard from './Lanyard';

const LanyardExample: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
};

export default LanyardExample;