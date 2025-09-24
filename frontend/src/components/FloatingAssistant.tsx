import React, { useState } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

const FloatingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      message: "Hello! I'm your Ranchi Decor assistant. How can I help you with your interior solutions today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    "Request a Quote",
    "View Products",
    "Contact Information",
    "Gallery"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, { type: 'user', message: inputMessage }]);
      
      // Simulate bot response
      setTimeout(() => {
        let botResponse = "";
        if (inputMessage.toLowerCase().includes('quote')) {
          botResponse = "I'd be happy to help you get a quote! Please let me know which products you're interested in - flooring, carpets, wallpapers, blinds, or decorative panels?";
        } else if (inputMessage.toLowerCase().includes('product')) {
          botResponse = "We offer a wide range of premium products including flooring solutions, carpets & rugs, wallpapers, window blinds, decorative panels, and artificial greenery. Which category interests you most?";
        } else if (inputMessage.toLowerCase().includes('contact')) {
          botResponse = "You can reach us at +91-98765 43210 or email info@ranchidecor.com. We're located at 123 Main Road, Kanke, Ranchi, Jharkhand. Our business hours are Mon-Sat 9AM-7PM, Sunday 10AM-5PM.";
        } else {
          botResponse = "Thank you for your message! For detailed assistance, please call us at +91-98765 43210 or visit our showroom. Our team will be happy to help you with personalized solutions.";
        }
        
        setMessages(prev => [...prev, { type: 'bot', message: botResponse }]);
      }, 1000);
      
      setInputMessage('');
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`w-16 h-16 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 flex items-center justify-center ${
            isOpen ? 'scale-0' : 'scale-100 animate-pulse hover:animate-none'
          }`}
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border">
          {/* Header */}
          <div className="bg-red-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Ranchi Decor Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 ${
                  msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.type === 'user' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-red-500 text-white ml-auto'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="p-4 border-t">
              <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-red-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAssistant;