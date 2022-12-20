import React, { useState } from 'react';
import Myrouter from './router';

import gloabContext from './utils/context'
import SliderBar from './components/SliderBar/SliderBar';

function App() {

  let [isShow, setShow] = useState(false)
  return (
    <div className="App">
      <gloabContext.Provider value={{
        isShow: isShow, fun: (data) => {
          setShow(data)
        }
      }}>
        <Myrouter></Myrouter>
        {isShow && <SliderBar />}

      </gloabContext.Provider>

    </div>
  );
}

export default App;
