import { Box } from "@chakra-ui/layout";
import { BsFillPlayFill } from "react-icons/bs";
import { IconButton, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";

const SongTable = ({ songs }) => {
  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <Box marginBottom="30px">
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            aria-label="Play"
            colorScheme="green"
            size="lg"
            isRound
          />
        </Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {songs.map((song, index) => (
              <Tr
                sx={{
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
                key={song.id}
                cursor="cursor"
              >
                <Td>{index + 1}</Td>
                <Td>{song.name}</Td>
                <Td>{song.createdAt.toString()}</Td>
                <Td>{song.duration}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default SongTable;
