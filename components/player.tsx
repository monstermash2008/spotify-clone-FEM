/* eslint-disable jsx-a11y/aria-proptypes */
import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import { useEffect, useRef, useState } from "react";
import {
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import { useStoreActions } from "easy-peasy";

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0); // change default to index of activeSong
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);

  const setPlayState = (value) => {
    setPlaying(value);
  };

  return (
    <Box>
      <Box>{/* <ReactHowler playing={playing} src={activeSong?.url} /> */}</Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            icon={<MdShuffle />}
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            color={shuffle ? "white" : "gray.600"}
            onClick={() => setShuffle(!shuffle)}
          />
          <IconButton
            icon={<MdSkipPrevious />}
            outline="none"
            variant="link"
            aria-label="previous"
            fontSize="24px"
          />
          {playing ? (
            <IconButton
              icon={<MdOutlinePauseCircleFilled />}
              outline="none"
              variant="link"
              aria-label="pause"
              color="white"
              fontSize="40px"
              onClick={() => setPlayState(false)}
            />
          ) : (
            <IconButton
              icon={<MdOutlinePlayCircleFilled />}
              outline="none"
              variant="link"
              aria-label="play"
              color="white"
              fontSize="40px"
              onClick={() => setPlayState(true)}
            />
          )}

          <IconButton
            icon={<MdSkipNext />}
            outline="none"
            variant="link"
            aria-label="next"
            fontSize="24px"
          />
          <IconButton
            icon={<MdOutlineRepeat />}
            outline="none"
            variant="link"
            aria-label="repeat"
            fontSize="24px"
            color={repeat ? "white" : "gray.600"}
            onClick={() => setRepeat(!repeat)}
          />
        </ButtonGroup>
      </Center>

      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="xs">1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={300}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>

          <Box width="10%" textAlign="right">
            <Text fontSize="xs">321</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
