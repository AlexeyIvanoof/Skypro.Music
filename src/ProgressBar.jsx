import { formatTime } from "./helpers";
import { styled } from "styled-components";
import { useState } from "react";

export const StyledProgressInput = styled.input`
  --progress-height: 8px;
  --progress-color: #b672ff;
  --progress-color: ${(props) => props.$color ?? "#b672ff"};

  --progress-bg-color: #2e2e2e;

  margin: 0;
  width: 100%;
  height: var(--progress-height);
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-bg-color);
  }
  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax var(--progress-color);
  }

  &::-webkit-slider-runnable-track {
    background: var(--progress-bg-color);
  }

  /* FF */
  &::-moz-range-track {
    width: 100%;
    height: var(--progress-height);
    background: var(--progress-bg-color);
    border: none;
    border-radius: 0px;
  }
  &::-moz-range-thumb {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: transparent;
  }
  &::-moz-range-progress {
    background-color: var(--progress-color);
    height: var(--progress-height);
  }
`;

export const DurationBlock = styled.div`
text-align: right;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgb(105, 105, 105);
`

export default function ProgressBar({  duration, currentTime,  handleDurationChange   }) {

  //const [currentTime, setCurrentTime] = useState(0);
  //const duration = 230;

    return (<>
        <StyledProgressInput
          type="range"
          min={'0'}
          max={duration.toString()}
          value={currentTime}
          step={0.01}    
          onChange={handleDurationChange}
          $color="#B672FF;" 
             />
          <DurationBlock>
              {formatTime(currentTime)} / {formatTime(duration)}
          </DurationBlock></>
      );
    
    }
    