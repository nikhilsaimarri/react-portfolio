// import { useState, useRef, useEffect } from 'react';
// import { FaCommentDots, FaPaperPlane, FaTimes, FaRobot, FaUser } from 'react-icons/fa';
//
// const Chatbot = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [messages, setMessages] = useState([
//         { text: "Hi! I'm Nikhil's virtual assistant. Ask me about his skills, projects, or how to contact him!", sender: "bot" }
//     ]);
//     const [input, setInput] = useState("");
//     const [isTyping, setIsTyping] = useState(false);
//     const messagesEndRef = useRef(null);
//
//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     };
//
//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);
//
//     const getBotResponse = (message) => {
//         const lowerMsg = message.toLowerCase();
//
//         if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
//             return "Hello there! How can I help you today?";
//         } else if (lowerMsg.includes("skill") || lowerMsg.includes("stack") || lowerMsg.includes("technology")) {
//             return "Nikhil is proficient in Java, Spring Boot, React, AWS, and Python. He loves full-stack development!";
//         } else if (lowerMsg.includes("project") || lowerMsg.includes("work")) {
//             return "He has built impressive projects like an AI-powered financial platform and a Chatbot using GraphQL. Check out the Projects section!";
//         } else if (lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("hire")) {
//             return "You can reach him via the Contact form or email him directly. He is currently open to new opportunities!";
//         } else if (lowerMsg.includes("resume") || lowerMsg.includes("cv")) {
//             return "You can download his resume from the 'About' section of this site.";
//         } else {
//             return "I'm not sure about that, but I'm still learning! Try asking about 'skills', 'projects', or 'contact'.";
//         }
//     };
//
//     const handleSend = (e) => {
//         e.preventDefault();
//         if (!input.trim()) return;
//
//         const newMessages = [...messages, { text: input, sender: "user" }];
//         setMessages(newMessages);
//         setInput("");
//         setIsTyping(true);
//
//         setTimeout(() => {
//             const botReply = getBotResponse(input);
//             setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
//             setIsTyping(false);
//         }, 800);
//     };
//
//     return (
//         <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
//             {/* Chat Window */}
//             {isOpen && (
//                 <div className="bg-white dark:bg-gray-800 w-80 sm:w-96 h-[32rem] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-4 duration-300">
//
//                     {/* Header with Gradient */}
//                     <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white flex justify-between items-center">
//                         <div className="flex items-center gap-3">
//                             <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                                 <FaRobot className="text-white" size={20} />
//                             </div>
//                             <div>
//                                 <h3 className="font-bold text-lg">Nikhil&apos;s Assistant</h3>
//                                 <p className="text-xs text-blue-100">Online now</p>
//                             </div>
//                         </div>
//                         <button
//                             onClick={() => setIsOpen(false)}
//                             className="hover:bg-white/20 p-2 rounded-lg transition-colors"
//                         >
//                             <FaTimes size={18} />
//                         </button>
//                     </div>
//
//                     {/* Messages Area with Gradient Background */}
//                     <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
//                         {messages.map((msg, index) => (
//                             <div
//                                 key={index}
//                                 className={`mb-4 flex items-end gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
//                             >
//                                 {msg.sender === "bot" && (
//                                     <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
//                                         <FaRobot className="text-white" size={14} />
//                                     </div>
//                                 )}
//                                 <div
//                                     className={`max-w-[75%] p-3 rounded-2xl text-sm shadow-sm ${
//                                         msg.sender === "user"
//                                             ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-sm"
//                                             : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-sm border border-gray-200 dark:border-gray-600"
//                                     }`}
//                                 >
//                                     {msg.text}
//                                 </div>
//                                 {msg.sender === "user" && (
//                                     <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
//                                         <FaUser className="text-white" size={12} />
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//
//                         {/* Typing Indicator */}
//                         {isTyping && (
//                             <div className="flex items-end gap-2 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
//                                 <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
//                                     <FaRobot className="text-white" size={14} />
//                                 </div>
//                                 <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-sm border border-gray-200 dark:border-gray-600 shadow-sm">
//                                     <div className="flex gap-1">
//                                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//                                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
//                                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                         <div ref={messagesEndRef} />
//                     </div>
//
//                     {/* Input Area with Enhanced Styling */}
//                     <form onSubmit={handleSend} className="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700 flex items-center gap-2">
//                         <input
//                             type="text"
//                             className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
//                             placeholder="Type your message..."
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                         />
//                         <button
//                             type="submit"
//                             className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//                             disabled={!input.trim()}
//                         >
//                             <FaPaperPlane size={16} />
//                         </button>
//                     </form>
//                 </div>
//             )}
//
//             {/* Enhanced Toggle Button with Multiple Animations */}
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={`bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-xl transition-all transform hover:scale-110 flex items-center justify-center relative group ${
//                     !isOpen ? 'animate-bounce' : ''
//                 }`}
//                 style={!isOpen ? { animationDuration: '2s', animationIterationCount: 'infinite' } : {}}
//             >
//                 {!isOpen && (
//                     <>
//                         <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
//                         {/* Ripple Effect */}
//                         <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></span>
//                     </>
//                 )}
//                 {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} className="relative z-10" />}
//
//                 {/* Tooltip */}
//                 {!isOpen && (
//                     <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
//                         Chat with me! 💬
//                     </span>
//                 )}
//             </button>
//         </div>
//     );
// };
//
// export default Chatbot;





//
//
//
import { useState, useRef, useEffect } from 'react';

import {  FaPaperPlane, FaTimes, FaRobot, FaUser, FaSpinner } from 'react-icons/fa';


const AIGeminiChatbot = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [messages, setMessages] = useState([

        {

            text: "Hi! I'm Nikhil's AI-powered assistant using Google Gemini. I can answer detailed questions about his skills, experience, projects, and qualifications. How can I help you today?",

            sender: "bot"

        }

    ]);

    const [input, setInput] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef(null);


    // Scroll to bottom of chat

    const scrollToBottom = () => {

        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

    };


    useEffect(() => {

        scrollToBottom();

    }, [messages]);


    // Portfolio context for the AI

    const portfolioContext = `

You are an AI assistant for Nikhil Sai Marri's portfolio. Here's his information:


ABOUT:

- Full Stack Software Engineer with 2+ years of experience

- Located in Warrensburg, Missouri, US

- Email: nikhilsaimarri@gmail.com

- Phone: +1 (660) 441-0849

- LinkedIn: linkedin.com/in/nikhilsaimarri

- GitHub: github.com/nikhilsaimarri


EDUCATION:

- Master of Science in Computer Science - University of Central Missouri (2023-2024, GPA: 3.5/4.0)

- Bachelor of Technology in Computer Science - Amrita Vishwa Vidyapeetham (2018-2022, GPA: 8.4/10)


TECHNICAL SKILLS:

- Languages: Java, Python, JavaScript, TypeScript, SQL, HTML5, CSS3

- Frontend: React.js, Angular, Vue.js, Redux, Next.js, Bootstrap, Material-UI, Tailwind CSS

- Backend: Spring Boot, Spring MVC, Spring Security, Hibernate, RESTful APIs, Microservices, Node.js

- Databases: PostgreSQL, MySQL, MongoDB, Redis, Oracle

- Cloud & DevOps: AWS (EC2, S3, Lambda, RDS), Azure, Docker, Kubernetes, Jenkins, GitLab CI/CD, Terraform

- Testing: JUnit, Mockito, Selenium, Jest, Postman

- Tools: Git, Maven, Gradle, Apache Kafka, RabbitMQ, Elasticsearch, GraphQL

- AI/ML: TensorFlow, OpenAI API, Langchain, RAG, Prompt Engineering


KEY PROJECTS:

1. Job Matching Platform with AI

   - React, Node.js, Python, Spring Boot, PostgreSQL, AWS Lambda, OpenAI API

   - Built job recommendation system using GPT-4 for resume analysis

   - Handles 1,000 requests daily with 250ms average response time

   - Langchain semantic search improved matching accuracy by 40%


2. Online Store Microservices App

   - Spring Boot, Angular, MongoDB, Redis, Kafka, Kubernetes, Jenkins

   - 6 microservices handling 5,000 concurrent users

   - Kafka reduced order fulfillment time by 50%

   - Redis caching reduced database hits by 60%


3. DevOps Pipeline Setup

   - Jenkins, Docker, Kubernetes, Terraform, AWS, SonarQube

   - Terraform reduced infrastructure setup from 4 hours to 10 minutes

   - Full CI/CD pipeline with automated testing

   - Zero-downtime deployments with Kubernetes


Answer questions professionally and accurately based on this information. If asked about something not in this context, politely say you don't have that information but encourage them to contact Nikhil directly.

`;


    // Call Gemini API

    const callGeminiAPI = async (userMessage) => {

        const API_KEY = 'AIzaSyA0qGrXxGEy4Yq1UNG4vMW--MF4HWPbXFw'; // Replace with actual key


        try {

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`, {

                method: 'POST',

                headers: {

                    'Content-Type': 'application/json',

                },

                body: JSON.stringify({

                    contents: [{

                        parts: [{

                            text: `${portfolioContext}\n\nUser Question: ${userMessage}\n\nProvide a helpful, professional response based on the portfolio information above.`

                        }]

                    }],

                    generationConfig: {

                        temperature: 0.7,

                        topK: 40,

                        topP: 0.95,

                        maxOutputTokens: 1024,

                    }

                })

            });


            const data = await response.json();


            if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {

                return data.candidates[0].content.parts[0].text;

            } else {

                throw new Error('Invalid response from Gemini API');

            }

        } catch (error) {

            console.error('Gemini API Error:', error);

            return "I apologize, but I'm having trouble connecting to my AI service right now. Please try asking a simpler question, or feel free to contact Nikhil directly at nikhilsaimarri@gmail.com";

        }

    };


    // Fallback responses if API key is not configured

    const getFallbackResponse = (message) => {

        const lowerMsg = message.toLowerCase();


        if (lowerMsg.includes("skill") || lowerMsg.includes("technology") || lowerMsg.includes("stack")) {

            return "Nikhil has extensive skills in:\n\n🚀 **Full Stack Development**: React, Angular, Vue.js, Spring Boot, Node.js\n☁️ **Cloud & DevOps**: AWS, Azure, Docker, Kubernetes, Jenkins\n💾 **Databases**: PostgreSQL, MySQL, MongoDB, Redis\n🤖 **AI/ML**: TensorFlow, OpenAI API, Langchain\n\nHe has 2+ years of experience building scalable applications!";

        }


        if (lowerMsg.includes("project") || lowerMsg.includes("work") || lowerMsg.includes("experience")) {

            return "Nikhil has worked on impressive projects:\n\n1️⃣ **Job Matching Platform with AI** - Uses GPT-4 for intelligent job recommendations, handles 1,000 daily requests\n\n2️⃣ **E-commerce Microservices** - Built with 6 microservices, supports 5,000 concurrent users\n\n3️⃣ **DevOps Pipeline** - Reduced infrastructure setup time by 96% using Terraform\n\nCheck out his Projects section for more details!";

        }


        if (lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("reach") || lowerMsg.includes("hire")) {

            return "📧 **Email**: nikhilsaimarri@gmail.com\n📱 **Phone**: +1 (660) 441-0849\n💼 **LinkedIn**: linkedin.com/in/nikhilsaimarri\n🔗 **GitHub**: github.com/nikhilsaimarri\n\nNikhil is currently open to new opportunities and would love to hear from you!";

        }


        if (lowerMsg.includes("education") || lowerMsg.includes("degree") || lowerMsg.includes("university")) {

            return "🎓 **Education**:\n\n**Master of Science in Computer Science**\nUniversity of Central Missouri (2023-2024)\nGPA: 3.5/4.0\n\n**Bachelor of Technology in Computer Science**\nAmrita Vishwa Vidyapeetham (2018-2022)\nGPA: 8.4/10";

        }


        if (lowerMsg.includes("location") || lowerMsg.includes("where")) {

            return "📍 Nikhil is currently based in **Warrensburg, Missouri, United States**. He's open to remote opportunities and relocation for the right role!";

        }


        if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey")) {

            return "Hello! 👋 I'm here to help you learn about Nikhil's qualifications and experience. You can ask me about:\n\n• Technical skills and expertise\n• Project experience\n• Education background\n• How to contact him\n\nWhat would you like to know?";

        }


        return "I can help you learn about Nikhil's skills, projects, education, and how to contact him. Try asking specific questions like:\n\n• 'What technologies does he know?'\n• 'Tell me about his projects'\n• 'What's his education background?'\n• 'How can I contact him?'\n\nWhat would you like to know?";

    };


    const handleSend = async (e) => {

        e.preventDefault();

        if (!input.trim() || isLoading) return;


        const userMessage = input.trim();


        // Add user message

        setMessages(prev => [...prev, { text: userMessage, sender: "user" }]);

        setInput("");

        setIsLoading(true);


        // Check if API key is configured

        const hasAPIKey = true;


        try {

            let botReply;

            if (hasAPIKey) {

                // Use Gemini API

                botReply = await callGeminiAPI(userMessage);

            } else {

                // Use fallback responses

                await new Promise(resolve => setTimeout(resolve, 800));

                botReply = getFallbackResponse(userMessage);

            }


            setMessages(prev => [...prev, { text: botReply, sender: "bot" }]);

        } catch (error) {

            setMessages(prev => [...prev, {

                text: "I apologize for the inconvenience. Please try again or contact Nikhil directly at nikhilsaimarri@gmail.com",

                sender: "bot"

            }]);

        } finally {

            setIsLoading(false);

        }

    };


    return (

        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">

            {/* Chat Window */}

            {isOpen && (

                <div className="bg-white dark:bg-gray-800 w-80 sm:w-96 h-[32rem] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-4 duration-300">


                    {/* Header with AI Badge */}

                    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 text-white flex justify-between items-center relative overflow-hidden">

                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>

                        <div className="flex items-center gap-3 relative z-10">

                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse-glow">

                                <FaRobot className="text-white" size={20} />

                            </div>

                            <div>

                                <h3 className="font-bold text-lg">AI Assistant</h3>

                                <div className="flex items-center gap-2">

                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

                                    <p className="text-xs text-blue-100">Powered by Gemini AI</p>

                                </div>

                            </div>

                        </div>

                        <button

                            onClick={() => setIsOpen(false)}

                            className="hover:bg-white/20 p-2 rounded-lg transition-colors relative z-10"

                        >

                            <FaTimes size={18} />

                        </button>

                    </div>


                    {/* Messages Area */}

                    <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

                        {messages.map((msg, index) => (

                            <div

                                key={index}

                                className={`mb-4 flex items-end gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}

                            >

                                {msg.sender === "bot" && (

                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">

                                        <FaRobot className="text-white" size={14} />

                                    </div>

                                )}

                                <div

                                    className={`max-w-[75%] p-3 rounded-2xl text-sm shadow-sm ${

                                        msg.sender === "user"

                                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm"

                                            : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-sm border border-gray-200 dark:border-gray-600"

                                    }`}

                                    style={{ whiteSpace: 'pre-line' }}

                                >

                                    {msg.text}

                                </div>

                                {msg.sender === "user" && (

                                    <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">

                                        <FaUser className="text-white" size={12} />

                                    </div>

                                )}

                            </div>

                        ))}


                        {/* Typing Indicator */}

                        {isLoading && (

                            <div className="flex items-end gap-2 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">

                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">

                                    <FaRobot className="text-white" size={14} />

                                </div>

                                <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-sm border border-gray-200 dark:border-gray-600 shadow-sm">

                                    <div className="flex gap-1">

                                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>

                                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>

                                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>

                                    </div>

                                </div>

                            </div>

                        )}

                        <div ref={messagesEndRef} />

                    </div>


                    {/* Input Area */}

                    <form onSubmit={handleSend} className="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700 flex items-center gap-2">

                        <input

                            type="text"

                            className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"

                            placeholder="Ask me anything about Nikhil..."

                            value={input}

                            onChange={(e) => setInput(e.target.value)}

                            disabled={isLoading}

                        />

                        <button

                            type="submit"

                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"

                            disabled={!input.trim() || isLoading}

                        >

                            {isLoading ? <FaSpinner className="animate-spin" size={16} /> : <FaPaperPlane size={16} />}

                        </button>

                    </form>

                </div>

            )}


            {/* Enhanced Toggle Button with AI Badge */}

            <button

                onClick={() => setIsOpen(!isOpen)}

                className={`relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white p-4 rounded-full shadow-xl transition-all transform hover:scale-110 flex items-center justify-center group ${

                    !isOpen ? 'animate-bounce' : ''

                }`}

                style={!isOpen ? { animationDuration: '2s', animationIterationCount: 'infinite' } : {}}

            >

                {!isOpen && (

                    <>

                        {/* AI Badge */}

                        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg animate-pulse">

                            AI

                        </span>

                        {/* Ripple Effect */}

                        <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75"></span>

                    </>

                )}

                {isOpen ? <FaTimes size={24} className="relative z-10" /> : <FaRobot size={24} className="relative z-10" />}


                {/* Tooltip */}

                {!isOpen && (

                    <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">

                        Ask AI about Nikhil! 🤖

                    </span>

                )}

            </button>

        </div>

    );

};


export default AIGeminiChatbot;














//
// curl \
//   -H 'Content-Type: application/json' \
//   -d '{"contents":[{"parts":[{"text":"Say hello"}]}]}' \
//   -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyA0qGrXxGEy4Yq1UNG4vMW--MF4HWPbXFw'
//
