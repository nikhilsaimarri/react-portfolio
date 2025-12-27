import React, { useState, useRef, useEffect } from 'react';
import { FaCommentDots, FaPaperPlane, FaTimes } from 'react-icons/fa';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Nikhil's virtual assistant. Ask me about his skills, projects, or how to contact him!", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom of chat
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Simple keyword matching logic
    const getBotResponse = (message) => {
        const lowerMsg = message.toLowerCase();

        if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
            return "Hello there! How can I help you today?";
        } else if (lowerMsg.includes("skill") || lowerMsg.includes("stack") || lowerMsg.includes("technology")) {
            return "Nikhil is proficient in Java, Spring Boot, React, AWS, and Python. He loves full-stack development!";
        } else if (lowerMsg.includes("project") || lowerMsg.includes("work")) {
            return "He has built impressive projects like an AI-powered financial platform and a Chatbot using GraphQL. Check out the Projects section!";
        } else if (lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("hire")) {
            return "You can reach him via the Contact form or email him directly. He is currently open to new opportunities!";
        } else if (lowerMsg.includes("resume") || lowerMsg.includes("cv")) {
            return "You can download his resume from the 'About' section of this site.";
        } else {
            return "I'm not sure about that, but I'm still learning! Try asking about 'skills', 'projects', or 'contact'.";
        }
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const newMessages = [...messages, { text: input, sender: "user" }];
        setMessages(newMessages);
        setInput("");

        // Simulate bot thinking time
        setTimeout(() => {
            const botReply = getBotResponse(input);
            setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
        }, 600);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white dark:bg-gray-800 w-80 h-96 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden mb-4 transition-all duration-300">

                    {/* Header */}
                    <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                        <h3 className="font-bold">Chat with Nikhil's Bot</h3>
                        <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
                            <FaTimes />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                                        msg.sender === "user"
                                            ? "bg-blue-600 text-white rounded-br-none"
                                            : "bg-gray-200 dark:bg-gray-700 dark:text-gray-100 rounded-bl-none"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-3 bg-white dark:bg-gray-800 border-t dark:border-gray-700 flex items-center">
                        <input
                            type="text"
                            className="flex-1 border dark:border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                        >
                            <FaPaperPlane size={14} />
                        </button>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
            >
                {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
            </button>
        </div>
    );
};

export default Chatbot;