//rafce

import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ChatBox from "../component/ChatBox";
import MyChat from "../component/MyChat";
import SideDrawer from "../component/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex"  justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChat fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;



////////////////////////////////////////////////////////mera nhi hai ye
// import { Box, Flex } from "@chakra-ui/react";
// import { useState } from "react";
// import ChatBox from "../component/ChatBox";
// import MyChat from "../component/MyChat";
// import SideDrawer from "../component/miscellaneous/SideDrawer";
// import { ChatState } from "../Context/ChatProvider";

// const Chatpage = () => {
//   const [fetchAgain, setFetchAgain] = useState(false);
//   const { user } = ChatState();

//   return (
//     <Box width="100%" height="100vh" p="10px">
//       <Flex height="100%" gap="10px">
//         {/* ✅ Sidebar (Fixed Width) */}
//         {user && (
//           <Box width="20%" minW="250px">
//             <SideDrawer />
//           </Box>
//         )}

//         {/* ✅ Chat Area (Full Width) */}
//         <Flex width="80%" height="100%" flexDirection="column" gap="10px">
//           {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
//           {user && <MyChat fetchAgain={fetchAgain} />}
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

// export default Chatpage;
