import { format } from 'date-fns';

const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      )}
      
      <div className={`max-w-3xl ${isUser ? 'flex flex-col items-end' : ''}`}>
        <div 
          className={`px-4 py-3 rounded-2xl ${isUser 
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none' 
            : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}
        >
          <p className="whitespace-pre-wrap">{message.text}</p>
        </div>
        <div className={`text-xs mt-1 text-gray-500 ${isUser ? 'text-right' : 'text-left'}`}>
          {format(new Date(message.timestamp), 'h:mm a')}
        </div>
      </div>
      
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center ml-2 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;