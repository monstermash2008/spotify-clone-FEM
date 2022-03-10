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

const Player = () => {
  return (
    <Box>
      <Box>{/* <ReactHowler /> */}</Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            icon={<MdShuffle />}
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
          />
          <IconButton
            icon={<MdSkipPrevious />}
            outline="none"
            variant="link"
            aria-label="previous"
            fontSize="24px"
          />
          <IconButton
            icon={<MdOutlinePlayCircleFilled />}
            outline="none"
            variant="link"
            aria-label="play"
            color="white"
            fontSize="40px"
          />
          <IconButton
            icon={<MdOutlinePauseCircleFilled />}
            outline="none"
            variant="link"
            aria-label="pause"
            color="white"
            fontSize="40px"
          />
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
          />
        </ButtonGroup>
      </Center>
    </Box>
  );
};

export default Player;
