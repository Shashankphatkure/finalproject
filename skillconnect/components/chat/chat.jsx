import { useEffect, useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const webSocket = new WebSocket('ws://localhost:8080');

    webSocket.onopen = () => {
      console.log('Connected to WebSocket server');
      setWs(webSocket);
    };

    webSocket.onmessage = (event) => {
      const messageText = event.data;
      const messageType = messageText.startsWith('https://') ? 'image' : 'text';
      setMessages((prevMessages) => [...prevMessages, { text: messageText, type: messageType, incoming: true }]);
    };
    

    webSocket.onclose = () => {
      console.log('Disconnected from WebSocket server');
      setWs(null);
    };

    return () => {
      if (webSocket) {
        webSocket.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() && ws) {
      const messageText = input;
      ws.send(messageText);
      setMessages((prevMessages) => [...prevMessages, { text: messageText, type: 'text', incoming: false }]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-y-auto p-4 space-y-4 bg-gray-100 rounded-lg shadow-lg">
      {messages.map((message, index) => (
  <div key={index} className={`p-2 rounded-lg ${message.incoming ? 'bg-white' : 'bg-blue-100'} shadow-md`}>
    {message.type === 'image' ? (
      <img src={message.text} alt="Chat image" className="w-full h-auto" />
    ) : (
      message.text
    )}
  </div>
))}

      </div>
      <div className="flex-grow flex flex-col justify-end">
        <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-lg">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-4 py-2 rounded-lg bg-gray-700 text-white"
            placeholder="Type a message or paste an image URL..."
          />
          <button
            onClick={sendMessage}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
