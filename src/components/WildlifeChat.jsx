import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../utils/gemini';

const WildlifeChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        type: 'bot',
        text: "👋 Hello! I'm your wildlife expert assistant. I can help you learn about Indian wildlife, national parks, conservation efforts, and plan your wildlife adventures! What would you like to know?"
      }]);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage = {
      type: 'user',
      text: inputText.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(userMessage.text);
      
      // Add a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const aiResponse = {
        type: 'bot',
        text: response
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Chat Error:', error);
      const errorResponse = {
        type: 'bot',
        text: "I apologize, but I'm having trouble accessing my knowledge base. Please try again in a moment."
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`wildlife-chat-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '🦁'}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Wildlife Expert</h3>
            <p>Ask me about Indian wildlife!</p>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                <span className="message-icon">
                  {msg.type === 'user' ? '👤' : '🦁'}
                </span>
                <div className="message-text">{msg.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <span className="message-icon">🦁</span>
                <div className="message-text">
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about wildlife..."
              rows="1"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
            >
              📤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WildlifeChat;
