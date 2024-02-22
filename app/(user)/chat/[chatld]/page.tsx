import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import { getServerSession } from "next-auth";
import React from "react";


async function ChatPage({ chatId }: { chatId: string }) {
  const session = await getServerSession(authOptions);

  if (chatId === undefined) {
    
    console.log("\n\n\nChat id is undefined !\n\n\n");
    
  }

  return (
    <div>
      {/*Admin Controls */}
      {/* ChatMembersBadge */}

      {/* ChatMessages */}
      <ChatInput chatId={chatId} />
    </div>
  );
}

export default ChatPage;
