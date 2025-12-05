import React, { useState, useEffect, useMemo, useRef } from 'react';
import Sidebar from './components/Sidebar';
import AppGrid from './components/AppGrid';
import AIModal from './components/AIModal';
import { TREE_DATA } from './constants';
import { Theme, AppItem } from './types';
import AppCard from './components/AppCard';

const App: React.FC = () => {
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [theme, setTheme] = useState<Theme>('midnight');
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const [isAIModalOpen, setIsAIModalOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Initial Theme Load
    useEffect(() => {
        const savedTheme = localStorage.getItem('uae-launchpad-theme') as Theme;
        if (savedTheme) setTheme(savedTheme);
    }, []);

    // Apply Theme
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('uae-launchpad-theme', theme);
    }, [theme]);

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // CMD/CTRL + F to focus search
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'f') {
                e.preventDefault();
                searchInputRef.current?.focus();
            }

            // Type to search (if not already focused on input)
            if (
                e.key.length === 1 && 
                !e.ctrlKey && !e.metaKey && !e.altKey && 
                document.activeElement?.tagName !== 'INPUT' && 
                document.activeElement?.tagName !== 'TEXTAREA' &&
                !isAIModalOpen
            ) {
                 searchInputRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isAIModalOpen]);

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        setIsThemeMenuOpen(false);
    };

    // Flatten data for search
    const allApps = useMemo(() => {
        const apps: (AppItem & { categoryName: string })[] = [];
        TREE_DATA.forEach(cat => {
            if (cat.apps) cat.apps.forEach(app => apps.push({...app, categoryName: cat.name}));
            if (cat.subTabs) {
                cat.subTabs.forEach(sub => {
                    sub.sections.forEach(sec => {
                        sec.apps.forEach(app => apps.push({ ...app, categoryName: cat.name }));
                    });
                });
            }
        });
        return apps;
    }, []);

    // Filter Logic
    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return null;
        const term = searchQuery.toLowerCase().trim();
        
        const filtered = allApps.filter(app => {
            const tagString = app.tags ? app.tags.join(' ') : '';
            return app.name.toLowerCase().includes(term) || 
                   app.desc.toLowerCase().includes(term) ||
                   tagString.toLowerCase().includes(term);
        });

        // Group by Category
        const grouped: Record<string, AppItem[]> = {};
        const seenNames = new Set<string>();

        filtered.forEach(app => {
            if (!seenNames.has(app.name)) {
                seenNames.add(app.name);
                if (!grouped[app.categoryName!]) {
                    grouped[app.categoryName!] = [];
                }
                grouped[app.categoryName!].push(app);
            }
        });
        
        return grouped;
    }, [searchQuery, allApps]);

    const activeCategory = TREE_DATA.find(c => c.id === activeCategoryId);

    return (
        <div className="flex h-screen w-full relative">
            
            {/* Theme Toggler */}
            <div className="fixed top-6 right-8 z-50">
                <button 
                    onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                    className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-md border border-white/10 text-gray-300 hover:text-white hover:bg-slate-700/80 shadow-lg flex items-center justify-center transition-all"
                >
                    <i className="fa-solid fa-palette"></i>
                </button>

                {isThemeMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-xl theme-panel shadow-2xl backdrop-blur-xl border border-white/10 overflow-hidden animate-drop-in">
                        <div className="p-3 space-y-1">
                            {['midnight', 'daylight', 'sunset', 'ocean'].map((t) => (
                                <button 
                                    key={t}
                                    onClick={() => handleThemeChange(t as Theme)}
                                    className="w-full text-left px-3 py-2 rounded-lg theme-hover theme-text-sub hover:text-white flex items-center gap-3 transition-colors capitalize"
                                >
                                    <div className={`w-4 h-4 rounded-full border ${
                                        t === 'midnight' ? 'bg-[#0f172a] border-gray-600' :
                                        t === 'daylight' ? 'bg-[#f8fafc] border-gray-300' :
                                        t === 'sunset' ? 'bg-[#2a0a18] border-pink-900' :
                                        'bg-[#042f2e] border-teal-900'
                                    }`}></div>
                                    <span className="text-sm">{t}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Sidebar */}
            <Sidebar 
                activeCategory={activeCategoryId} 
                onSelectCategory={(id) => {
                    setActiveCategoryId(id);
                    setSearchQuery(''); // Clear search on nav
                }} 
                onOpenAI={() => setIsAIModalOpen(true)}
            />

            {/* Main Content */}
            <main className="flex-1 h-full overflow-y-auto relative bg-transparent scroll-smooth no-scrollbar">
                
                {/* Search Bar */}
                <div className="sticky top-0 z-40 w-full flex justify-center pt-6 pb-2 px-8 pointer-events-none">
                    <div className="pointer-events-auto w-full max-w-xl relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <i className="fa-solid fa-search theme-text-sub group-hover:text-blue-400 transition-colors"></i>
                        </div>
                        <input 
                            ref={searchInputRef}
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Quick search apps, services... (Cmd/Ctrl + F)" 
                            className="w-full search-input-glass backdrop-blur-md rounded-full py-3 pl-11 pr-6 text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all transform hover:scale-[1.01]"
                        />
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500 -z-10"></div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-8 pb-32 pt-4">
                    
                    {/* View: Empty State */}
                    {!activeCategoryId && !searchQuery && (
                        <div className="flex flex-col items-center justify-center h-[60vh] theme-text-sub transition-opacity duration-500 animate-drop-in">
                            <div className="w-24 h-24 rounded-full theme-panel flex items-center justify-center mb-6 ring-1 theme-border">
                                <i className="fa-solid fa-layer-group text-4xl opacity-40"></i>
                            </div>
                            <h2 className="text-xl font-semibold theme-text-main mb-2">Welcome to UAE LaunchPad</h2>
                            <p className="text-sm font-light max-w-xs text-center">Select a category from the sidebar or use the search bar above to explore.</p>
                        </div>
                    )}

                    {/* View: Search Results */}
                    {searchQuery && searchResults && (
                        <div className="animate-drop-in">
                            <h2 className="col-span-full text-2xl font-bold mb-6 theme-text-main pl-2 border-l-4 border-blue-500">
                                Search Results
                            </h2>
                            {Object.keys(searchResults).length === 0 ? (
                                <p className="theme-text-sub pl-4">No matching apps found.</p>
                            ) : (
                                Object.keys(searchResults).map(catName => (
                                    <div key={catName}>
                                        <h3 className="text-lg font-semibold theme-text-sub mt-8 mb-4 pl-2 flex items-center">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                                            {catName}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {searchResults[catName].map((app, idx) => (
                                                <AppCard key={idx} app={app} index={idx} />
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* View: Active Category */}
                    {activeCategory && !searchQuery && (
                        <AppGrid category={activeCategory} />
                    )}

                </div>
            </main>

            <AIModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
        </div>
    );
};

export default App;