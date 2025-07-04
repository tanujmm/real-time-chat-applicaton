// import React, { useContext, useEffect, useRef, useState } from "react";
// import assets, { messagesDummyData } from "../assets/assets";
// import { formatMessageTime } from "../lib/utils";
// import { ChatContext } from "../../context/ChatContext";
// import { AuthContext } from "../../context/AuthContext";
// import toast from "react-hot-toast";

// const ChatContainer = () => {
//   const scrollEnd = useRef();

//   const { messages, selectedUser, setSelectedUser, sendMessage, getMessages } =
//     useContext(ChatContext);
//   const { authUser, onlineUsers } = useContext(AuthContext);

//   const [input, setInput] = useState("");

//   useEffect(() => {
//     if (selectedUser) {
//       getMessages(selectedUser._id);
//     }
//   }, [selectedUser]);

//   useEffect(() => {
//     if (scrollEnd.current && messages) {
//       scrollEnd.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (input.trim() === "") return null;
//     await sendMessage({ text: input.trim() });
//     setInput("");
//     // sendMessage(input)
//   };

//   const handleSendImage = async (e) => {
//     const file = e.target.files[0];
//     if (!file || !file.type.startsWith("image/")) {
//       toast.error("Select an image file");
//       return;
//     }
//     const reader = new FileReader();

//     reader.onloadend = async () => {
//       await sendMessage({ image: reader.result });
//       e.target.value = "";
//     };

//     reader.readAsDataURL(file);
//   };

//   return selectedUser ? (
//     <div className="h-full overflow-scroll relative backdrop-blur-lg">
//       <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
//         <img
//           src={selectedUser.profilePic || assets.avatar_icon}
//           alt=""
//           className="w-8 rounded-full"
//         />
//         <p className="flex-1 text-lg text-white flex items-center gap-2">
//           {selectedUser.fullName}

//           {onlineUsers.includes(selectedUser._id)}
//           <span className="w-2 h-2 rounded-full bg-green-500"></span>
//         </p>
//         <img
//           onClick={() => setSelectedUser(null)}
//           src={assets.arrow_icon}
//           alt=""
//           className="md:hidden max-w-7"
//         />
//         <img src={assets.help_icon} alt="" className="max-md:hidden max-w-5" />
//       </div>

//       <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex items-end gap-2 mb-4 ${
//               // msg.senderId !== "680f50e4f10f3cd28382ecf9" && "flow-row-reverse"
//               msg.senderId !== authUser._id && "flow-row-reverse"
//                 ? "justify-end"
//                 : "justify-start"
//             }`}
//           >
//             {msg.image ? (
//               <img
//                 src={msg.image}
//                 alt=""
//                 className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
//               />
//             ) : (
//               <p
//                 className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
//                   msg.senderId === `680f50e4f10f3cd28382ecf9`
//                     ? `rounded-br-none`
//                     : `rounded-bl-none`
//                 }`}
//               >
//                 {msg.text}
//               </p>
//             )}
//             <div className="text-center text-xs">
//               <img
//                 src={
//                   msg.senderId === "680f50e4f10f3cd28382ecf9"
//                     ? assets.avatar_icon
//                     : assets.profile_martin
//                 }
//                 className="w-7 rounded-full"
//                 alt=""
//               />
//               <p className="text-gray-500">
//                 {formatMessageTime(msg.createdAt)}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   ) : (
//     <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
//       <img src={assets.logo_icon} alt="" className="max-w-16" />
//       <p className="text-lg font-medium text-white">Chat anytime,anywhere</p>
//     </div>
//   );
// };

// export default ChatContainer;

// My Final-------------------

import React, { useContext, useEffect, useRef, useState } from "react";
import assets, { messagesDummyData } from "../assets/assets";
import { formatMessageTime } from "../lib/utils";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const ChatContainer = () => {
  const scrollEnd = useRef();

  const { messages, selectedUser, setSelectedUser, sendMessage, getMessages } =
    useContext(ChatContext);
  const { authUser, onlineUsers } = useContext(AuthContext);

  const [input, setInput] = useState("");

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser._id);
    }
  }, [selectedUser]);

  useEffect(() => {
    if (scrollEnd.current && messages) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return null;
    await sendMessage({ text: input.trim() });
    setInput("");
    // sendMessage(input)
  };

  const handleSendImage = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Select an image file");
      return;
    }
    const reader = new FileReader();

    reader.onloadend = async () => {
      await sendMessage({ image: reader.result });
      e.target.value = "";
    };

    reader.readAsDataURL(file);
  };

  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      {/* Header */}
      <div className="flex items-center gap-3 py-2 mx-4 border-b border-stone-500">
        {/* <div className="flex items-end gap-2 mb-4 justify-start"> */}
        <img
          src={selectedUser.profilePic || assets.avatar_icon}
          alt=""
          // className="w-8 rounded-full "
          className="w-9 h-9 rounded-full object-cover"
        />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          {selectedUser.fullName}
          {onlineUsers.includes(selectedUser._id) ? (
            <span className="w-2 h-2 rounded-full bg-green-500"></span> // Green dot if online
          ) : (
            <span className="w-2 h-2 rounded-full bg-gray-400"></span> // Gray dot if offline
          )}
        </p>

        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt="Back"
          className="md:hidden max-w-7 cursor-pointer"
        />
        <img
          src={assets.help_icon}
          alt="Help"
          className="max-md:hidden max-w-5"
        />
      </div>

      {/* Messages */}
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messages.map((msg, index) => {
          const rawSenderId = msg.senderId;
          const senderId =
            typeof rawSenderId === "object" && rawSenderId !== null
              ? rawSenderId._id
              : rawSenderId;

          const isSender = senderId === authUser._id;

          return (
            <div
              key={index}
              className={`flex items-end gap-2 mb-4 ${
                isSender ? "justify-end" : "justify-start"
              }`}
            >
              {/* Avatar (left for receiver) */}
              {!isSender && (
                <div className="text-center text-xs">
                  <img
                    src={selectedUser?.profilePic || assets.avatar_icon}
                    className="w-7 rounded-full"
                    alt="Receiver"
                  />
                  <p className="text-gray-500">
                    {formatMessageTime(msg.createdAt)}
                  </p>
                </div>
              )}

              {/* Message Content */}
              {msg.image ? (
                <img
                  src={msg.image}
                  alt="message"
                  className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden"
                />
              ) : (
                <p
                  className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg break-all text-white ${
                    isSender
                      ? "bg-violet-500/30 rounded-br-none"
                      : "bg-blue-500/30 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </p>
              )}

              {/* Avatar (right for sender) */}
              {isSender && (
                <div className="text-center text-xs">
                  <img
                    src={authUser?.profilePic || assets.avatar_icon}
                    className="w-7 rounded-full"
                    alt="Sender"
                  />
                  <p className="text-gray-500">
                    {formatMessageTime(msg.createdAt)}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        <div ref={scrollEnd}></div>
      </div>
      <div className="absolute botttom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
          <input
            type="text"
            placeholder="Send a Message"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={(e) => (e.key === "Enter" ? handleSendMessage(e) : null)}
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400"
          />
          <input
            onChange={handleSendImage}
            type="file"
            id="image"
            accept="image/png, image/jpeg"
            hidden
          />
          <label htmlFor="image">
            <img
              src={assets.gallery_icon}
              alt=""
              className="w-5 mr-2 cursor-pointer"
            />
          </label>
        </div>
        <img
          src={assets.send_button}
          className="w-7 cursor-pointer"
          onClick={handleSendMessage}
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.logo_icon} alt="Logo" className="max-w-16" />
      <p className="text-lg font-medium text-white">Chat anytime, anywhere</p>
    </div>
  );
};

export default ChatContainer;

// import React, { useEffect, useRef } from "react";
// import assets, { messagesDummyData } from "../assets/assets";
// import { formatMessageTime } from "../lib/utils";

// const ChatContainer = ({ selectedUser, setSelectedUser }) => {
//   const scrollEnd = useRef();

//   useEffect(() => {
//     if (scrollEnd.current) {
//       scrollEnd.current.scrollIntoView({ behavior: "smooth" });
//     }
//   });

//   return selectedUser ? (
//     <div className="h-full overflow-scroll relative backdrop-blur-lg">
//       {/* Header */}
//       <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
//         <img src={assets.profile_martin} alt="" className="w-8 rounded-full" />
//         <p className="flex-1 text-lg text-white flex items-center gap-2">
//           Martin Johnson
//           <span className="w-2 h-2 rounded-full bg-green-500"></span>
//         </p>
//         <img
//           onClick={() => setSelectedUser(null)}
//           src={assets.arrow_icon}
//           alt="Back"
//           className="md:hidden max-w-7 cursor-pointer"
//         />
//         <img
//           src={assets.help_icon}
//           alt="Help"
//           className="max-md:hidden max-w-5"
//         />
//       </div>

//       {/* Messages */}
//       <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
//         {messagesDummyData.map((msg, index) => {
//           const isSender = msg.senderId === "680f50e4f10f3cd28382ecf9";

//           return (
//             <div
//               key={index}
//               className={`flex items-end gap-2 mb-4 ${
//                 isSender ? "justify-end" : "justify-start"
//               }`}
//             >
//               {/* Avatar (left for receiver) */}
//               {!isSender && (
//                 <div className="text-center text-xs">
//                   <img
//                     src={assets.profile_martin}
//                     className="w-7 rounded-full"
//                     alt="Receiver"
//                   />
//                   <p className="text-gray-500">
//                     {formatMessageTime(msg.createdAt)}
//                   </p>
//                 </div>
//               )}

//               {/* Message Content */}
//               {msg.image ? (
//                 <img
//                   src={msg.image}
//                   alt="message"
//                   className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden"
//                 />
//               ) : (
//                 <p
//                   className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg break-all text-white ${
//                     isSender
//                       ? "bg-violet-500/30 rounded-br-none"
//                       : "bg-blue-500/30 rounded-bl-none"
//                   }`}
//                 >
//                   {msg.text}
//                 </p>
//               )}

//               {/* Avatar (right for sender) */}
//               {isSender && (
//                 <div className="text-center text-xs">
//                   <img
//                     src={assets.avatar_icon}
//                     className="w-7 rounded-full"
//                     alt="Sender"
//                   />
//                   <p className="text-gray-500">
//                     {formatMessageTime(msg.createdAt)}
//                   </p>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//         <div ref={scrollEnd}></div>
//       </div>
//       <div className="absolute botttom-0 left-0 right-0 flex items-center gap-3 p-3">
//         <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
//           <input
//             type="text"
//             placeholder="Send a Message"
//             className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400"
//           />
//           <input type="file" id="image" accept="image/png, image/jpeg" hidden />
//           <label htmlFor="image">
//             <img
//               src={assets.gallery_icon}
//               alt=""
//               className="w-5 mr-2 cursor-pointer"
//             />
//           </label>
//         </div>
//         <img src={assets.send_button} className="w-7 cursor-pointer" />
//       </div>
//     </div>
//   ) : (
//     <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
//       <img src={assets.logo_icon} alt="Logo" className="max-w-16" />
//       <p className="text-lg font-medium text-white">Chat anytime, anywhere</p>
//     </div>
//   );
// };

// export default ChatContainer;
