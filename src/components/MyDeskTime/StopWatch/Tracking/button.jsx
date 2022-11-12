import { Box, Button } from '@chakra-ui/react';
import React from 'react';

function Buttons(props) {
  return (
    <Box>
      {(props.status === 0)? 
        <Button className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.start}>Start</Button> : ""
      }

      {(props.status === 1)? 
        <Box>
          <Button className="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}>Stop</Button>
          <Button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</Button>
        </Box> : ""
      }

     {(props.status === 2)? 
        <Box>
          <Button className="stopwatch-btn stopwatch-btn-gre"
                  onClick={props.resume}>Resume</Button>
          <Button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</Button>
        </Box> : ""
      }
     
    </Box>
  );
}

export default Buttons;