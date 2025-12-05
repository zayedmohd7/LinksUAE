import React, { useState, useEffect, useMemo } from 'react';
import { Category, AppItem, Section, SubTab } from '../types';
import AppCard from './AppCard';

interface AppGridProps {
    category: Category;
}

const AppGrid: React.FC<AppGridProps> = ({ category }) => {
    const [activeSubTabId, setActiveSubTabId] = useState<string | null>(null);
    const [govFilter, setGovFilter] = useState<string>('all');

    // Reset subtab and filter when category changes
    useEffect(() => {
        if (category.subTabs && category.subTabs.length > 0) {
            setActiveSubTabId(category.subTabs[0].id);
        } else {
            setActiveSubTabId(null);
        }
        setGovFilter('all');
    }, [category.id, category.subTabs]);

    // Handle Sub-Tab Selection
    const currentSubTab = category.subTabs?.find(st => st.id === activeSubTabId);

    // Logic to aggregate apps for "All" tabs or flattened views
    const getSectionsToRender = (): Section[] => {
        if (!category.subTabs) {
            // Direct Apps (like News or Shopping) -> Wrap in dummy section
             return category.apps ? [{ title: '', apps: category.apps }] : [];
        }

        if (!currentSubTab) return [];

        // Special Aggregation for 'All' tabs
        const isAllTab = currentSubTab.id.endsWith('_all') || currentSubTab.id === 'all_ent';

        if (isAllTab) {
            let sections: Section[] = [];
            category.subTabs.forEach(st => {
                 if (st.id !== currentSubTab.id && st.sections) {
                     sections.push(...st.sections);
                 }
            });
            return sections;
        }

        return currentSubTab.sections;
    };

    const sections = getSectionsToRender();

    // Filter Logic for Government
    const filteredSections = useMemo(() => {
        if (category.id !== 'gov' || govFilter === 'all') {
            return sections;
        }
        
        return sections.map(section => ({
            ...section,
            apps: section.apps.filter(app => app.location === govFilter)
        })).filter(section => section.apps.length > 0);
    }, [sections, category.id, govFilter]);

    const isGovCategory = category.id === 'gov';

    const renderGovFilter = () => {
        const filters = [
            { id: 'all', name: 'All Emirates' },
            { id: 'abudhabi', name: 'Abu Dhabi' },
            { id: 'dubai', name: 'Dubai' },
            { id: 'sharjah', name: 'Sharjah' },
            { id: 'ajman', name: 'Ajman' },
            { id: 'rak', name: 'Ras Al Khaimah' },
            { id: 'fujairah', name: 'Fujairah' },
            { id: 'uaq', name: 'UAQ' }
        ];

        return (
            <div className="flex flex-wrap gap-2 pb-4 pt-2 border-t theme-border animate-drop-in">
                {filters.map(f => (
                    <button
                        key={f.id}
                        onClick={() => setGovFilter(f.id)}
                        onMouseEnter={() => setGovFilter(f.id)}
                        className={`px-3 py-1 rounded-full text-xs font-medium border theme-border transition-colors ${
                            govFilter === f.id 
                            ? 'bg-blue-600 text-white border-blue-500' 
                            : 'theme-panel theme-text-sub hover:text-white'
                        }`}
                    >
                        {f.name}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className="w-full">
            {/* Main Category Header if no subtabs */}
            {!category.subTabs && (
                <h2 className="text-2xl font-bold mb-4 theme-text-main pl-2 border-l-4 border-blue-500 animate-drop-in">
                    {category.name}
                </h2>
            )}

            {/* Sticky Header for Subtabs */}
            {category.subTabs && (
                <div className="sticky top-0 z-10 pt-2 border-b theme-border mb-4 transition-colors backdrop-blur-md" style={{ backgroundColor: 'var(--bg-primary-transparent)' }}>
                    <div className="flex flex-wrap gap-2 pb-4">
                        {category.subTabs.map(sub => (
                            <button
                                key={sub.id}
                                onClick={() => setActiveSubTabId(sub.id)}
                                onMouseEnter={() => setActiveSubTabId(sub.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium outline-none focus:outline-none transition-colors border ${
                                    activeSubTabId === sub.id
                                    ? 'bg-blue-600 border-blue-500 text-white'
                                    : 'theme-panel border-transparent text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {sub.name}
                            </button>
                        ))}
                    </div>
                    {isGovCategory && renderGovFilter()}
                </div>
            )}

            {/* Content Grid */}
            <div className="pb-32">
                {filteredSections.length === 0 && (
                    <div className="theme-text-sub text-center py-10 italic">
                        No services found for this filter.
                    </div>
                )}

                {filteredSections.map((section, sIndex) => (
                    <div key={sIndex} className="mb-6">
                        {section.title && (
                            <h3 className="text-lg font-semibold theme-text-sub mt-4 mb-3 flex items-center animate-drop-in">
                                <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3"></span>
                                {section.title}
                            </h3>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {section.apps.map((app, aIndex) => (
                                <AppCard key={`${app.name}-${aIndex}`} app={app} index={aIndex} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppGrid;