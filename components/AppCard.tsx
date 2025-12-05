import React from 'react';
import { AppItem } from '../types';

interface AppCardProps {
    app: AppItem;
    index: number;
    onClick?: () => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, index }) => {
    // Helper to get Google Favicon
    const getFavicon = (url: string) => {
        try {
            const hostname = new URL(url).hostname;
            return `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
        } catch (e) {
            return '';
        }
    };

    return (
        <a 
            href={app.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-row items-center p-3 rounded-xl cursor-pointer group animate-drop-in theme-panel border theme-border hover:border-blue-500/50"
            style={{ animationDelay: `${index * 0.03}s` }}
        >
            <div className="flex-shrink-0 mr-3">
                <div className="w-12 h-12 flex items-center justify-center">
                    <img 
                        src={getFavicon(app.url)} 
                        className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                        alt={app.name} 
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} 
                    />
                </div>
            </div>
            
            <div className="flex-1 min-w-0 flex flex-col justify-center text-left">
                <h3 className="text-sm font-bold theme-text-main group-hover:text-blue-400 transition-colors truncate mb-0.5 leading-tight">
                    {app.name}
                </h3>
                <p className="text-[10px] theme-text-sub font-medium truncate group-hover:text-blue-300 transition-colors leading-tight opacity-80">
                    {app.desc}
                </p>
            </div>
        </a>
    );
};

export default AppCard;