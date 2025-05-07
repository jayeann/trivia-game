type ChatBubbleProps = {
  message?: string;
};

const ChatBubble = ({ message }: ChatBubbleProps) => {
  if (!message) return null;
  return (
    <div
      className={`fixed break-words rounded-3xl left-20 bottom-40 bg-white text-3xl`}
    >
      <div className={`relative p-8 max-w-xs rounded-lg rounded-bl-none`}>
        {message ? message : "No hint avaible"}

        <div
          className="absolute -bottom-[10px] left-2"
          style={{
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "20px 20px 0 0",
            borderColor: "white transparent transparent transparent",
          }}
        />
      </div>
    </div>
  );
};

export default ChatBubble;
