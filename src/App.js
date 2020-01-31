import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const slider = (
  <AwesomeSlider animateion="foldOutAnimation" cssModule={ AwesomeSliderStyles }>
    <div>Landing Page</div>
    <div>About Page</div>
    <div>Contact Page</div>
  </AwesomeSlider>
)

function App() {
  return (
    <div>
      { slider }
    </div>
  );
}

export default App;
