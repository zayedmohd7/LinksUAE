import React from 'react';
import { Category } from '../types';
import { TREE_DATA } from '../constants';

interface SidebarProps {
    activeCategory: string | null;
    onSelectCategory: (id: string) => void;
    onOpenAI: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory, onOpenAI }) => {
    return (
        <aside className="shelf-container w-64 h-full flex-shrink-0">
            <div className="shelf shelf-bg h-full flex flex-col justify-between py-6">
                
                {/* Logo */}
                <div className="px-6 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <i className="fa-solid fa-rocket text-white text-lg"></i>
                        </div>
                        <div>
                            <h1 className="font-bold text-lg leading-tight tracking-wide theme-text-main">
                                UAE<br />
                                <span className="font-light theme-text-sub text-sm">LaunchPad</span>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto px-4 space-y-1 no-scrollbar">
                    {TREE_DATA.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => onSelectCategory(cat.id)}
                            onMouseEnter={() => onSelectCategory(cat.id)}
                            className={`tab-item px-4 py-3 text-sm font-medium outline-none focus:outline-none flex items-center gap-3 transition-colors ${
                                activeCategory === cat.id ? 'active' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <div className="w-6 text-center">
                                <i className={`fa-solid ${cat.icon} ${cat.color} opacity-80 text-base`}></i>
                            </div> 
                            <span className="text-sm tracking-wide">{cat.name}</span>
                        </button>
                    ))}
                </div>
                
                {/* Bottom Action */}
                <div className="px-4 mt-4 pt-4 theme-border border-t space-y-3">
                    <button 
                        onClick={onOpenAI}
                        className="w-full group flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/5 hover:border-white/10 transition-all theme-hover"
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                            <i className="fa-solid fa-wand-magic-sparkles text-white text-xs animate-pulse-slow"></i>
                        </div>
                        <div className="text-left">
                            <span className="block text-xs text-indigo-400 font-medium">Smart Assistant</span>
                            <span className="block text-[10px] theme-text-sub">Ask anything...</span>
                        </div>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;