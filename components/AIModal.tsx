import React, { useState, useEffect, useRef } from 'react';
import { GeminiService } from '../services/geminiService';
import { AppItem, ChatMessage, Category } from '../types';
import AppCard from './AppCard';
import { TREE_DATA } from '../constants';

// Declare marked for TypeScript if loaded from CDN
declare const marked: {
    parse: (markdown: string) => string;
};

interface AIModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose }) => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [recommendations, setRecommendations] = useState<AppItem[]>([]);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const geminiService = useRef(new GeminiService());

    // Flatten data for context
    const allApps = useMemoAllApps();

    useEffect(() => {
        if (isOpen && messages.length === 0) {
             setMessages([{ role: 'ai', text: "Hello! I'm your digital guide to the UAE. Ask me anything about government services, transport, or life in the Emirates." }]);
        }
    }, [isOpen]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading, recommendations]);

    function useMemoAllApps() {
        // Create a flattened list of all apps for the AI context
        const apps: AppItem[] = [];
        TREE_DATA.forEach(cat => {
            if (cat.apps) apps.push(...cat.apps);
            if (cat.subTabs) {
                cat.subTabs.forEach(sub => {
                    sub.sections.forEach(sec => {
                        sec.apps.forEach(app => apps.push({ ...app, categoryName: cat.name }));
                    });
                });
            }
        });
        return apps;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setRecommendations([]); // Clear previous recommendations
        setIsLoading(true);

        try {
            const response = await geminiService.current.getRecommendation(userMsg, allApps);
            
            setMessages(prev => [...prev, { role: 'ai', text: response.answer }]);
            
            if (response.recommended_apps && response.recommended_apps.length > 0) {
                const recs = response.recommended_apps
                    .map(name => allApps.find(app => app.name === name))
                    .filter((app): app is AppItem => !!app);
                setRecommendations(recs);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', text: "I'm sorry, I encountered a temporary glitch. Please try asking again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-drop-in">
            <div className="modal-glass backdrop-blur-xl rounded-2xl w-full max-w-2xl h-[600px] shadow-2xl flex flex-col overflow-hidden relative border theme-border">
                {/* Header */}
                <div className="p-4 border-b theme-border flex justify-between items-center theme-panel">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <i className="fa-solid fa-wand-magic-sparkles text-white text-xs"></i>
                        </div>
                        <h3 className="font-semibold theme-text-main">UAE Smart Concierge</h3>
                    </div>
                    <button onClick={onClose} className="theme-text-sub hover:text-white transition-colors">
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-4 animate-drop-in ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${msg.role === 'ai' ? 'bg-indigo-600' : 'bg-gray-600'}`}>
                                <i className={`fa-solid ${msg.role === 'ai' ? 'fa-robot' : 'fa-user'} text-xs text-white`}></i>
                            </div>
                            <div 
                                className={`rounded-2xl p-4 text-sm leading-relaxed max-w-[85%] ${
                                    msg.role === 'ai' 
                                    ? 'theme-panel theme-text-main rounded-tl-none border theme-border' 
                                    : 'bg-blue-600/80 text-white rounded-tr-none'
                                }`}
                                dangerouslySetInnerHTML={{ 
                                    __html: msg.role === 'ai' && typeof marked !== 'undefined' 
                                        ? marked.parse(msg.text) 
                                        : msg.text 
                                }}
                            />
                        </div>
                    ))}

                    {/* Recommendations Rendered in Chat Flow */}
                    {recommendations.length > 0 && (
                        <div className="pl-12 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 animate-drop-in">
                            {recommendations.map((app, idx) => (
                                <AppCard key={idx} app={app} index={idx} />
                            ))}
                        </div>
                    )}

                    {isLoading && (
                        <div className="flex gap-4 animate-drop-in">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center">
                                <i className="fa-solid fa-robot text-xs text-white"></i>
                            </div>
                            <div className="theme-panel rounded-2xl rounded-tl-none p-4 w-24 flex items-center justify-center gap-1 border theme-border">
                                <div className="typing-dot w-2 h-2 bg-gray-400 rounded-full"></div>
                                <div className="typing-dot w-2 h-2 bg-gray-400 rounded-full"></div>
                                <div className="typing-dot w-2 h-2 bg-gray-400 rounded-full"></div>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 theme-panel border-t theme-border">
                    <form onSubmit={handleSubmit} className="relative">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="e.g., How do I renew my driving license?" 
                            className="w-full theme-panel border theme-border rounded-xl py-3 pl-4 pr-12 theme-text-main placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all bg-transparent"
                            autoFocus
                        />
                        <button type="submit" disabled={!input.trim() || isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center text-white transition-colors disabled:opacity-50">
                            <i className="fa-solid fa-paper-plane text-xs"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AIModal;
