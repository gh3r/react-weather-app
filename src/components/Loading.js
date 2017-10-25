import React from 'react';
import Anime from 'react-anime';

const Loading = (props) => {
  const text = props.text || 'Loading ...'
  const easingType = props.easing || 'easeOutExpo';
  const loop = props.loop || true;
  const letterArray = text.split('');

  return (
    <div className='loading-container'>
      <Anime
        opacity={0}
        duration={1000}
        easing={easingType}
        delay={1000}
        loop={loop}
      >
        <Anime
          scale={[4, 1]}
          opacity={[0, 1]}
          translateZ={0}
          easing={easingType}
          duration={1300}
          delay={(el, index) => 70 * index}
          loop={loop}
        >
          {letterArray.map(letter => {
            return <span className='loading-letter'>{letter}</span>
          })}
        </Anime>
      </Anime>
    </div>
  )
};

export default Loading;
