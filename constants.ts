import { Category } from "./types";

export const TREE_DATA: Category[] = [
    {
        id: 'ai',
        name: 'AI Tools',
        icon: 'fa-robot',
        color: 'text-emerald-400',
        subTabs: [
            {
                id: 'ai_all',
                name: 'All',
                sections: []
            },
            {
                id: 'ai_chat',
                name: 'Chat & Writing',
                sections: [
                    {
                        title: 'LLMs & Chatbots',
                        apps: [
                            { name: 'ChatGPT', url: 'https://chat.openai.com', desc: 'OpenAI\'s advanced chatbot', tags: ['ai', 'chat', 'gpt'] },
                            { name: 'Gemini', url: 'https://gemini.google.com', desc: 'Google\'s multimodal AI', tags: ['ai', 'google', 'chat'] },
                            { name: 'Claude', url: 'https://claude.ai', desc: 'Anthropic\'s helpful assistant', tags: ['ai', 'chat', 'anthropic'] },
                            { name: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'AI-powered search engine', tags: ['ai', 'search', 'research'] },
                            { name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com', desc: 'AI companion for web', tags: ['ai', 'microsoft', 'bing'] }
                        ]
                    },
                    {
                        title: 'Writing Assistants',
                        apps: [
                            { name: 'Jasper', url: 'https://www.jasper.ai', desc: 'Marketing copywriter', tags: ['ai', 'writing', 'marketing'] },
                            { name: 'Grammarly', url: 'https://www.grammarly.com', desc: 'AI writing assistance', tags: ['ai', 'grammar', 'text'] },
                            { name: 'Copy.ai', url: 'https://www.copy.ai', desc: 'Copywriting generator', tags: ['ai', 'writing', 'copy'] }
                        ]
                    }
                ]
            },
            {
                id: 'ai_image',
                name: 'Image & Art',
                sections: [
                    {
                        title: 'Generators',
                        apps: [
                            { name: 'Midjourney', url: 'https://www.midjourney.com', desc: 'Artistic image generation', tags: ['ai', 'art', 'image'] },
                            { name: 'DALL-E 3', url: 'https://openai.com/dall-e-3', desc: 'OpenAI image generator', tags: ['ai', 'image', 'art'] },
                            { name: 'Leonardo.ai', url: 'https://leonardo.ai', desc: 'Game assets & art', tags: ['ai', 'image', 'assets'] },
                            { name: 'Canva Magic', url: 'https://www.canva.com/magic', desc: 'AI design tools', tags: ['ai', 'design', 'social'] }
                        ]
                    }
                ]
            },
            {
                id: 'ai_prod',
                name: 'Productivity',
                sections: [
                    {
                        title: 'Workflow & Notes',
                        apps: [
                            { name: 'Notion AI', url: 'https://www.notion.so/product/ai', desc: 'Connected workspace AI', tags: ['ai', 'notes', 'docs'] },
                            { name: 'Otter.ai', url: 'https://otter.ai', desc: 'Meeting transcription', tags: ['ai', 'meeting', 'voice'] },
                            { name: 'Gamma', url: 'https://gamma.app', desc: 'AI presentation maker', tags: ['ai', 'slides', 'deck'] }
                        ]
                    }
                ]
            },
            {
                id: 'ai_dev',
                name: 'Coding',
                sections: [
                    {
                        title: 'Developer Tools',
                        apps: [
                            { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', desc: 'AI pair programmer', tags: ['ai', 'code', 'dev'] },
                            { name: 'Replit', url: 'https://replit.com', desc: 'Collaborative AI IDE', tags: ['ai', 'code', 'cloud'] },
                            { name: 'Cursor', url: 'https://cursor.sh', desc: 'AI-first code editor', tags: ['ai', 'editor', 'code'] }
                        ]
                    }
                ]
            },
            {
                id: 'ai_media',
                name: 'Video & Audio',
                sections: [
                    {
                        title: 'Creation Tools',
                        apps: [
                            { name: 'Runway', url: 'https://runwayml.com', desc: 'AI video generation', tags: ['ai', 'video', 'edit'] },
                            { name: 'Suno', url: 'https://suno.com', desc: 'Make music with AI', tags: ['ai', 'music', 'audio'] },
                            { name: 'ElevenLabs', url: 'https://elevenlabs.io', desc: 'AI voice generator', tags: ['ai', 'voice', 'tts'] },
                            { name: 'Descript', url: 'https://www.descript.com', desc: 'Video editing via text', tags: ['ai', 'video', 'edit'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'education',
        name: 'Education',
        icon: 'fa-graduation-cap',
        color: 'text-indigo-400',
        subTabs: [
            {
                id: 'edu_all',
                name: 'All',
                sections: []
            },
            {
                id: 'edu_abudhabi',
                name: 'Abu Dhabi',
                sections: [
                    {
                        title: 'Regulators & Schools',
                        apps: [
                            { name: 'ADEK', url: 'https://www.adek.gov.ae', desc: 'Abu Dhabi Dept of Education', tags: ['school', 'curriculum'] },
                            { name: 'Tamm Education', url: 'https://www.tamm.abudhabi/en/life-events/education', desc: 'School registration & services', tags: ['register', 'student'] }
                        ]
                    },
                    {
                        title: 'Universities',
                        apps: [
                            { name: 'UAE University', url: 'https://www.uaeu.ac.ae', desc: 'First national university', tags: ['degree', 'bachelor', 'master'] },
                            { name: 'Khalifa University', url: 'https://www.ku.ac.ae', desc: 'Science & Technology', tags: ['engineering', 'research'] },
                            { name: 'NYU Abu Dhabi', url: 'https://nyuad.nyu.edu', desc: 'Global research university', tags: ['arts', 'science'] },
                            { name: 'Zayed University', url: 'https://www.zu.ac.ae', desc: 'National university', tags: ['public'] },
                            { name: 'Sorbonne AD', url: 'https://www.sorbonne.ae', desc: 'French-speaking university', tags: ['law', 'humanities'] },
                            { name: 'Higher Colleges', url: 'https://hct.ac.ae', desc: 'HCT - Applied technology', tags: ['diploma', 'tech'] }
                        ]
                    }
                ]
            },
            {
                id: 'edu_dubai',
                name: 'Dubai',
                sections: [
                    {
                        title: 'Regulators & Schools',
                        apps: [
                            { name: 'KHDA', url: 'https://web.khda.gov.ae', desc: 'Knowledge & Human Development', tags: ['school', 'rating', 'attestation'] },
                            { name: 'School Directory', url: 'https://web.khda.gov.ae/en/Education-Directory/Schools', desc: 'Find schools in Dubai', tags: ['search', 'fees'] }
                        ]
                    },
                    {
                        title: 'Universities',
                        apps: [
                            { name: 'AUD', url: 'https://www.aud.edu', desc: 'American University in Dubai', tags: ['american', 'degree'] },
                            { name: 'UOWD', url: 'https://www.uowdubai.ac.ae', desc: 'Univ. of Wollongong', tags: ['australian'] },
                            { name: 'CUD', url: 'https://www.cud.ac.ae', desc: 'Canadian University Dubai', tags: ['canadian'] },
                            { name: 'Middlesex', url: 'https://www.mdx.ac.ae', desc: 'British university campus', tags: ['uk', 'london'] },
                            { name: 'Heriot-Watt', url: 'https://www.hw.ac.uk/dubai', desc: 'British university campus', tags: ['uk', 'scotland'] },
                            { name: 'RIT Dubai', url: 'https://www.rit.edu/dubai', desc: 'Rochester Institute of Tech', tags: ['us', 'tech'] }
                        ]
                    }
                ]
            },
            {
                id: 'edu_sharjah',
                name: 'Sharjah',
                sections: [
                        {
                        title: 'Regulators & Schools',
                        apps: [
                            { name: 'SPEA', url: 'https://spea.shj.ae', desc: 'Sharjah Private Education', tags: ['school', 'private'] }
                        ]
                    },
                    {
                        title: 'Universities',
                        apps: [
                            { name: 'AUS', url: 'https://www.aus.edu', desc: 'American Univ. of Sharjah', tags: ['american', 'engineering', 'architecture'] },
                            { name: 'Univ. of Sharjah', url: 'https://www.sharjah.ac.ae', desc: 'Comprehensive university', tags: ['medical', 'law'] },
                            { name: 'Skyline', url: 'https://www.skylineuniversity.ac.ae', desc: 'University College', tags: ['business', 'it'] }
                        ]
                    }
                ]
            },
            {
                id: 'edu_northern',
                name: 'Northern Emirates',
                sections: [
                    {
                        title: 'Universities',
                        apps: [
                            { name: 'Ajman University', url: 'https://www.ajman.ac.ae', desc: 'Private university in Ajman', tags: ['dentistry', 'pharmacy'] },
                            { name: 'GMU', url: 'https://gmu.ac.ae', desc: 'Gulf Medical University', tags: ['medicine', 'doctor'] },
                            { name: 'RAK MHSU', url: 'https://www.rakmhsu.ac.ae', desc: 'Medical & Health Sciences', tags: ['nursing'] },
                            { name: 'AURAK', url: 'https://aurak.ac.ae', desc: 'American Univ. of RAK', tags: ['american'] }
                        ]
                    }
                ]
            },
            {
                id: 'edu_platforms',
                name: 'Online Learning',
                sections: [
                    {
                        title: 'Professional Skills',
                        apps: [
                            { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning', desc: 'Business, Tech & Creative skills', tags: ['career', 'skills', 'certificate'] },
                            { name: 'Coursera', url: 'https://www.coursera.org', desc: 'Degrees & Certificates from Universities', tags: ['degree', 'university', 'certificate'] },
                            { name: 'Udemy', url: 'https://www.udemy.com', desc: ' vast library of courses', tags: ['skills', 'coding', 'business'] },
                            { name: 'edX', url: 'https://www.edx.org', desc: 'Courses from Harvard, MIT & more', tags: ['university', 'science', 'degree'] },
                            { name: 'Udacity', url: 'https://www.udacity.com', desc: 'Tech Nanodegrees', tags: ['coding', 'data', 'tech'] }
                        ]
                    },
                    {
                        title: 'Creative & General',
                        apps: [
                            { name: 'Skillshare', url: 'https://www.skillshare.com', desc: 'Creative classes for curious people', tags: ['design', 'photo', 'art'] },
                            { name: 'MasterClass', url: 'https://www.masterclass.com', desc: 'Learn from the world\'s best', tags: ['expert', 'cooking', 'writing'] },
                            { name: 'Khan Academy', url: 'https://www.khanacademy.org', desc: 'Free world-class education', tags: ['school', 'math', 'free'] },
                            { name: 'FutureLearn', url: 'https://www.futurelearn.com', desc: 'Online courses from top universities', tags: ['uk', 'degree', 'short course'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'entertainment',
        name: 'Entertainment',
        icon: 'fa-film',
        color: 'text-red-400',
        subTabs: [
            {
                id: 'all_ent',
                name: 'All',
                sections: []
            },
            {
                id: 'movies',
                name: 'Movies',
                sections: [
                    {
                        title: 'Cinemas',
                        apps: [
                            { name: 'VOX Cinemas', url: 'https://uae.voxcinemas.com', desc: 'Largest cinema exhibitor', tags: ['movie', 'film', 'theater', 'watch', 'popcorn'] },
                            { name: 'Reel Cinemas', url: 'https://reelcinemas.com', desc: 'The movie experience by Emaar', tags: ['movie', 'film', 'theater', 'dubai mall'] },
                            { name: 'Novo Cinemas', url: 'https://novocinemas.com', desc: 'A Great Time Out', tags: ['movie', 'film', 'theater'] },
                            { name: 'Roxy Cinemas', url: 'https://theroxycinemas.com', desc: 'Boutique cinema experience', tags: ['movie', 'film', 'luxury'] }
                        ]
                    }
                ]
            },
            {
                id: 'ott',
                name: 'OTT',
                sections: [
                    {
                        title: 'Streaming Platforms',
                        apps: [
                            { name: 'Netflix', url: 'https://www.netflix.com/ae', desc: 'Movies & TV Shows', tags: ['movie', 'stream'] },
                            { name: 'Amazon Prime', url: 'https://www.primevideo.com', desc: 'Originals & Movies', tags: ['movie', 'stream', 'amazon'] },
                            { name: 'Disney+', url: 'https://www.disneyplus.com', desc: 'Disney, Pixar, Marvel & Star Wars', tags: ['movie', 'stream'] },
                            { name: 'OSN+', url: 'https://osnplus.com', desc: 'Home of HBO & Paramount+', tags: ['movie', 'stream'] },
                            { name: 'Shahid', url: 'https://shahid.mbc.net', desc: 'Top Arabic content platform', tags: ['movie', 'stream'] },
                            { name: 'Starzplay', url: 'https://starzplay.com', desc: 'Live Sports & Hollywood', tags: ['movie', 'stream'] },
                            { name: 'TOD', url: 'https://www.tod.tv', desc: 'BeIN Sports & Entertainment', tags: ['sports', 'stream'] },
                            { name: 'Apple TV+', url: 'https://tv.apple.com', desc: 'Apple Originals', tags: ['movie', 'stream'] },
                            { name: 'Zee5', url: 'https://www.zee5.com/global', desc: 'South Asian Content', tags: ['bollywood', 'stream'] },
                            { name: 'SonyLIV', url: 'https://www.sonyliv.com', desc: 'Sports & Indian Entertainment', tags: ['cricket', 'stream'] }
                        ]
                    }
                ]
            },
            {
                id: 'attractions',
                name: 'Attractions',
                sections: [
                    {
                        title: 'Theme Parks & Landmarks',
                        apps: [
                            { name: 'Ferrari World', url: 'https://www.ferrariworldabudhabi.com', desc: 'Ferrari themed park', tags: ['park'] },
                            { name: 'IMG Worlds', url: 'https://www.imgworlds.com', desc: 'Indoor theme park', tags: ['park'] },
                            { name: 'Warner Bros.', url: 'https://www.wbworldabudhabi.com', desc: 'World of Warner Bros', tags: ['park'] },
                            { name: 'Dubai Parks', url: 'https://www.dubaiparksandresorts.com', desc: 'Motiongate, Legoland & more', tags: ['park'] },
                            { name: 'Global Village', url: 'https://www.globalvillage.ae', desc: 'Culture & Entertainment', tags: ['park'] },
                            { name: 'Burj Khalifa', url: 'https://www.burjkhalifa.ae', desc: 'Tallest building in the world', tags: ['visit'] },
                            { name: 'Louvre AD', url: 'https://www.louvreabudhabi.ae', desc: 'Art and civilization museum', tags: ['museum'] },
                            { name: 'Museum of Future', url: 'https://museumofthefuture.ae', desc: 'Innovation and technology', tags: ['museum'] }
                        ]
                    }
                ]
            },
            {
                id: 'events',
                name: 'Events',
                sections: [
                    {
                        title: 'Ticketing & Venues',
                        apps: [
                            { name: 'Platinumlist', url: 'https://platinumlist.net', desc: 'Events & Tickets', tags: ['ticket'] },
                            { name: 'Virgin Tickets', url: 'https://tickets.virginmegastore.me/ae', desc: 'Concerts & Festivals', tags: ['ticket'] },
                            { name: 'Coca-Cola Arena', url: 'https://www.coca-cola-arena.com', desc: 'Home of live entertainment', tags: ['venue'] },
                            { name: 'Dubai Opera', url: 'https://www.dubaiopera.com', desc: 'Performing arts centre', tags: ['venue'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'finance',
        name: 'Finance',
        icon: 'fa-wallet',
        color: 'text-green-400',
        subTabs: [
            {
                id: 'fin_all',
                name: 'All',
                sections: []
            },
            {
                id: 'fin_banks',
                name: 'Banks',
                sections: [
                    {
                        title: 'Commercial & Islamic',
                        apps: [
                            { name: 'FAB', url: 'https://www.bankfab.com', desc: 'First Abu Dhabi Bank', tags: ['bank', 'loan', 'commercial'] },
                            { name: 'Emirates NBD', url: 'https://www.emiratesnbd.com', desc: 'Banking Group MENAT', tags: ['bank', 'dubai'] },
                            { name: 'ADCB', url: 'https://www.adcb.com', desc: 'Abu Dhabi Commercial Bank', tags: ['bank', 'commercial'] },
                            { name: 'Dubai Islamic Bank', url: 'https://www.dib.ae', desc: 'First Islamic Bank', tags: ['bank', 'islamic'] },
                            { name: 'ADIB', url: 'https://www.adib.ae', desc: 'Abu Dhabi Islamic Bank', tags: ['bank', 'islamic'] },
                            { name: 'Central Bank', url: 'https://www.centralbank.ae', desc: 'UAE Central Bank', tags: ['regulator', 'monetary'] }
                        ]
                    },
                    {
                        title: 'Digital Banks',
                        apps: [
                            { name: 'Mashreq Neo', url: 'https://www.mashreqneo.com', desc: 'Full Digital Bank', tags: ['digital', 'bank'] },
                            { name: 'Wio Bank', url: 'https://wio.io', desc: 'Platform Banking', tags: ['digital', 'sme'] },
                            { name: 'YAP', url: 'https://www.yap.com', desc: 'Digital Banking App', tags: ['fintech', 'card'] }
                        ]
                    }
                ]
            },
            {
                id: 'fin_exchanges',
                name: 'Exchanges',
                sections: [
                    {
                        title: 'Local Markets',
                        apps: [
                            { name: 'DFM', url: 'https://www.dfm.ae', desc: 'Dubai Financial Market', tags: ['stock', 'market'] },
                            { name: 'ADX', url: 'https://www.adx.ae', desc: 'Abu Dhabi Securities Exchange', tags: ['stock', 'market'] },
                            { name: 'Nasdaq Dubai', url: 'https://www.nasdaqdubai.com', desc: 'International Financial Exchange', tags: ['stock', 'global'] }
                        ]
                    },
                    {
                        title: 'Commodities',
                        apps: [
                            { name: 'DGCX', url: 'https://www.dgcx.ae', desc: 'Dubai Gold & Commodities', tags: ['gold', 'trade'] }
                        ]
                    }
                ]
            },
            {
                id: 'fin_stocks',
                name: 'Stocks',
                sections: [
                    {
                        title: 'Trading Platforms',
                        apps: [
                            { name: 'xCube', url: 'https://xcube.ae', desc: 'Trade UAE Markets', tags: ['trading', 'app'] },
                            { name: 'International Securities', url: 'https://www.intlsecurities.ae', desc: 'Brokerage Services', tags: ['broker'] },
                            { name: 'Sarwa', url: 'https://www.sarwa.co', desc: 'Automated Investing', tags: ['invest', 'robo'] },
                            { name: 'Baraka', url: 'https://getbaraka.com', desc: 'Commission-free investing', tags: ['invest', 'us stocks'] }
                        ]
                    }
                ]
            },
            {
                id: 'fin_wallets',
                name: 'Wallets',
                sections: [
                    {
                        title: 'Digital Wallets & Pay',
                        apps: [
                            { name: 'e& money', url: 'https://www.eandmoney.com', desc: 'Super app for payments', tags: ['wallet', 'pay'] },
                            { name: 'Payit', url: 'https://www.payit.ae', desc: 'Digital Wallet by FAB', tags: ['wallet', 'transfer'] },
                            { name: 'Careem Pay', url: 'https://www.careem.com/en-ae/pay/', desc: 'Transfers & Payments', tags: ['wallet', 'bills'] },
                            { name: 'Botim', url: 'https://botim.me/pay', desc: 'Chat & Pay', tags: ['wallet', 'remittance'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'gov',
        name: 'Government',
        icon: 'fa-landmark',
        color: 'text-yellow-400',
        subTabs: [
            {
                id: 'gov_all',
                name: 'All Services',
                sections: []
            },
            {
                id: 'gov_police',
                name: 'Police',
                sections: [
                    {
                        title: 'Law Enforcement',
                        apps: [
                            { name: 'Ministry of Interior', url: 'https://www.moi.gov.ae', desc: 'Federal Interior Ministry', location: 'federal', tags: ['police', 'visa', 'federal'] },
                            { name: 'Abu Dhabi Police', url: 'https://www.adpolice.gov.ae', desc: 'AD Police GHQ', location: 'abudhabi', tags: ['police', 'fine', 'traffic'] },
                            { name: 'Dubai Police', url: 'https://www.dubaipolice.gov.ae', desc: 'Smart Police Services', location: 'dubai', tags: ['police', 'fine', 'certificate'] },
                            { name: 'Sharjah Police', url: 'https://www.shjpolice.gov.ae', desc: 'Sharjah Police HQ', location: 'sharjah', tags: ['police', 'fine'] },
                            { name: 'Ajman Police', url: 'https://www.ajmanpolice.gov.ae', desc: 'Ajman Police GHQ', location: 'ajman', tags: ['police', 'fine'] },
                            { name: 'RAK Police', url: 'https://www.rakpolice.gov.ae', desc: 'Ras Al Khaimah Police', location: 'rak', tags: ['police', 'fine'] },
                            { name: 'Fujairah Police', url: 'https://www.fujpolice.ae', desc: 'Fujairah Police GHQ', location: 'fujairah', tags: ['police', 'fine'] },
                            { name: 'UAQ Police', url: 'https://uaqpolice.ae', desc: 'Umm Al Quwain Police', location: 'uaq', tags: ['police', 'fine'] }
                        ]
                    }
                ]
            },
            {
                id: 'gov_unified',
                name: 'Unified Portals',
                sections: [
                    {
                        title: 'Digital Platforms',
                        apps: [
                            { name: 'U.AE', url: 'https://u.ae', desc: 'National Unified Portal', location: 'federal', tags: ['portal'] },
                            { name: 'TAMM', url: 'https://www.tamm.abudhabi', desc: 'Abu Dhabi Government', location: 'abudhabi', tags: ['portal'] },
                            { name: 'DubaiNow', url: 'https://www.dubai.gov.ae/dubaiaffairs', desc: 'Dubai One-Stop Shop', location: 'dubai', tags: ['portal', 'app'] },
                            { name: 'Digital Sharjah', url: 'https://www.sharjah.ae', desc: 'Sharjah Government', location: 'sharjah', tags: ['portal'] },
                            { name: 'AjmanOne', url: 'https://www.ajman.ae', desc: 'Ajman Government', location: 'ajman', tags: ['portal'] },
                            { name: 'RAK.ae', url: 'https://www.rak.ae', desc: 'RAK Government', location: 'rak', tags: ['portal'] }
                        ]
                    }
                ]
            },
            {
                id: 'gov_ministries',
                name: 'Ministries',
                sections: [
                    {
                        title: 'Federal Entities',
                        apps: [
                            { name: 'MOHAP', url: 'https://mohap.gov.ae', desc: 'Ministry of Health', location: 'federal', tags: ['health'] },
                            { name: 'MOFAIC', url: 'https://www.mofaic.gov.ae', desc: 'Foreign Affairs', location: 'federal', tags: ['visa', 'embassy'] },
                            { name: 'Ministry of Finance', url: 'https://www.mof.gov.ae', desc: 'Finance & Budget', location: 'federal', tags: ['tax'] },
                            { name: 'Ministry of Education', url: 'https://www.moe.gov.ae', desc: 'Education', location: 'federal', tags: ['school'] },
                            { name: 'MOHRE', url: 'https://www.mohre.gov.ae', desc: 'Human Resources', location: 'federal', tags: ['labor', 'work'] },
                            { name: 'Ministry of Justice', url: 'https://www.moj.gov.ae', desc: 'Justice & Courts', location: 'federal', tags: ['court'] },
                            { name: 'Energy & Infrastructure', url: 'https://www.moei.gov.ae', desc: 'Infrastructure', location: 'federal', tags: ['road'] }
                        ]
                    }
                ]
            },
            {
                id: 'gov_regulators',
                name: 'Regulators',
                sections: [
                    {
                        title: 'Authorities',
                        apps: [
                            { name: 'ICP', url: 'https://icp.gov.ae', desc: 'Identity & Citizenship', location: 'federal', tags: ['emirates id', 'visa'] },
                            { name: 'FTA', url: 'https://tax.gov.ae', desc: 'Federal Tax Authority', location: 'federal', tags: ['tax', 'vat'] },
                            { name: 'TDRA', url: 'https://www.tdra.gov.ae', desc: 'Telecom Regulator', location: 'federal', tags: ['telecom'] },
                            { name: 'GCAA', url: 'https://www.gcaa.gov.ae', desc: 'Civil Aviation', location: 'federal', tags: ['aviation'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'media',
        name: 'News',
        icon: 'fa-newspaper',
        color: 'text-purple-400',
        apps: [
            { name: 'Gulf News', url: 'https://gulfnews.com', desc: 'Daily English News', tags: ['news', 'paper'] },
            { name: 'Khaleej Times', url: 'https://www.khaleejtimes.com', desc: 'English Daily', tags: ['news', 'paper'] },
            { name: 'The National', url: 'https://www.thenationalnews.com', desc: 'Abu Dhabi News', tags: ['news', 'paper'] },
            { name: 'Al Bayan', url: 'https://www.albayan.ae', desc: 'Arabic Newspaper', tags: ['news', 'paper', 'arabic'] }
        ]
    },
    {
        id: 'shopping',
        name: 'Shopping',
        icon: 'fa-bag-shopping',
        color: 'text-pink-400',
        apps: [
            { name: 'Amazon.ae', url: 'https://www.amazon.ae', desc: 'Online Marketplace', tags: ['buy', 'delivery', 'shop'] },
            { name: 'Noon', url: 'https://www.noon.com', desc: 'Middle East Marketplace', tags: ['buy', 'delivery', 'shop'] },
            { name: 'Dubizzle', url: 'https://www.dubizzle.com', desc: 'Classifieds & Motors', tags: ['used', 'sell', 'cars', 'homes'] },
            { name: 'Talabat', url: 'https://www.talabat.com', desc: 'Food Delivery', tags: ['food', 'restaurant', 'order'] },
            { name: 'Carrefour', url: 'https://www.carrefouruae.com', desc: 'Grocery Delivery', tags: ['food', 'supermarket'] }
        ]
    },
    {
        id: 'social',
        name: 'Social',
        icon: 'fa-users',
        color: 'text-rose-500',
        subTabs: [
            {
                id: 'social_all',
                name: 'All',
                sections: []
            },
            {
                id: 'messaging',
                name: 'Messaging',
                sections: [
                    {
                        title: 'Chat Apps',
                        apps: [
                            { name: 'WhatsApp Web', url: 'https://web.whatsapp.com', desc: 'Most popular messenger', tags: ['chat', 'message'] },
                            { name: 'Telegram', url: 'https://web.telegram.org', desc: 'Secure messaging', tags: ['chat', 'secure'] },
                            { name: 'Messenger', url: 'https://www.messenger.com', desc: 'Facebook Messenger', tags: ['chat', 'facebook'] },
                            { name: 'Signal', url: 'https://signal.org', desc: 'Private messenger', tags: ['chat', 'secure'] },
                            { name: 'WeChat', url: 'https://web.wechat.com', desc: 'All-in-one app', tags: ['chat', 'china'] },
                            { name: 'Viber', url: 'https://www.viber.com', desc: 'Calls & Messages', tags: ['chat', 'call'] }
                        ]
                    },
                    {
                        title: 'VoIP & Video Calls',
                        apps: [
                            { name: 'BOTIM', url: 'https://botim.me', desc: 'UAE video calls', tags: ['call', 'video', 'voip'] },
                            { name: 'GoChat', url: 'https://www.gochat.ae', desc: 'Messenger & calls', tags: ['call', 'video', 'voip'] },
                            { name: 'Tawasal', url: 'https://tawasal.ae', desc: 'SuperApp messenger', tags: ['call', 'video'] },
                            { name: 'Skype', url: 'https://web.skype.com', desc: 'Video conferencing', tags: ['call', 'microsoft'] },
                            { name: 'IMO', url: 'https://imo.im', desc: 'Video calls', tags: ['call', 'video'] }
                        ]
                    }
                ]
            },
            {
                id: 'social_media',
                name: 'Social Media',
                sections: [
                    {
                        title: 'Networks',
                        apps: [
                            { name: 'Instagram', url: 'https://www.instagram.com', desc: 'Photos & reels', tags: ['photo', 'social'] },
                            { name: 'TikTok', url: 'https://www.tiktok.com', desc: 'Short-form video', tags: ['video', 'social'] },
                            { name: 'Facebook', url: 'https://www.facebook.com', desc: 'Connect with friends', tags: ['social', 'meta'] },
                            { name: 'X (Twitter)', url: 'https://twitter.com', desc: "What's happening", tags: ['news', 'social'] },
                            { name: 'Snapchat', url: 'https://www.snapchat.com', desc: 'Share the moment', tags: ['photo', 'chat'] },
                            { name: 'Threads', url: 'https://www.threads.net', desc: 'Text-based conversation', tags: ['social', 'meta'] },
                            { name: 'Pinterest', url: 'https://www.pinterest.com', desc: 'Visual discovery', tags: ['ideas', 'photo'] },
                            { name: 'Tumblr', url: 'https://www.tumblr.com', desc: 'Microblogging', tags: ['blog', 'art'] }
                        ]
                    },
                    {
                        title: 'Video',
                        apps: [
                            { name: 'YouTube', url: 'https://www.youtube.com', desc: 'Video sharing', tags: ['video', 'google'] }
                        ]
                    }
                ]
            },
            {
                id: 'community',
                name: 'Community',
                sections: [
                    {
                        title: 'Professional',
                        apps: [
                            { name: 'LinkedIn', url: 'https://www.linkedin.com', desc: 'Professional network', tags: ['job', 'career'] }
                        ]
                    },
                    {
                        title: 'Groups & Forums',
                        apps: [
                            { name: 'Reddit', url: 'https://www.reddit.com', desc: 'Network of communities', tags: ['forum', 'news'] },
                            { name: 'Discord', url: 'https://discord.com', desc: 'Talk & hang out', tags: ['chat', 'gaming'] },
                            { name: 'Quora', url: 'https://www.quora.com', desc: 'Q&A platform', tags: ['questions', 'knowledge'] },
                            { name: 'Meetup', url: 'https://www.meetup.com', desc: 'Find local groups', tags: ['events', 'social'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'sports',
        name: 'Sports',
        icon: 'fa-futbol',
        color: 'text-orange-500',
        subTabs: [
            {
                id: 'cricket',
                name: 'Cricket',
                sections: [
                    {
                        title: 'Scores & News',
                        apps: [
                            { name: 'ESPNcricinfo', url: 'https://www.espncricinfo.com', desc: 'Live scores & news', tags: ['cricket', 'score', 'news'] },
                            { name: 'Cricbuzz', url: 'https://www.cricbuzz.com', desc: 'Live cricket scores', tags: ['cricket', 'score', 'ipl'] },
                            { name: 'ICC', url: 'https://www.icc-cricket.com', desc: 'Official ICC Website', tags: ['cricket', 'world cup'] }
                        ]
                    },
                    {
                        title: 'Leagues & Boards',
                        apps: [
                            { name: 'ILT20', url: 'https://www.ilt20.ae', desc: 'International League T20', tags: ['cricket', 't20', 'league'] },
                            { name: 'Emirates Cricket', url: 'https://www.emiratescricket.com', desc: 'Governing Body', tags: ['cricket', 'board'] }
                        ]
                    },
                    {
                        title: 'Stadiums',
                        apps: [
                            { name: 'Dubai Int. Stadium', url: 'https://www.dsc.ae', desc: 'Sports City Venue', tags: ['stadium', 'cricket'] },
                            { name: 'Zayed Cricket Stadium', url: 'https://www.abudhabicricket.ae', desc: 'Abu Dhabi Cricket', tags: ['stadium', 'cricket'] }
                        ]
                    }
                ]
            },
            {
                id: 'football',
                name: 'Football',
                sections: [
                    {
                        title: 'Scores & News',
                        apps: [
                            { name: 'LiveScore', url: 'https://www.livescore.com', desc: 'Real-time scores', tags: ['football', 'score', 'live'] },
                            { name: 'Kooora', url: 'https://www.kooora.com', desc: 'Leading Arabic sports site', tags: ['football', 'arabic', 'score'] },
                            { name: 'Goal', url: 'https://www.goal.com', desc: 'Latest football news', tags: ['football', 'news', 'transfer'] },
                            { name: '365Scores', url: 'https://www.365scores.com', desc: 'Live scores & highlights', tags: ['football', 'score', 'video'] }
                        ]
                    },
                    {
                        title: 'Leagues & Federations',
                        apps: [
                            { name: 'UAE Pro League', url: 'https://www.uaeproleague.ae', desc: 'ADNOC Pro League Official Site', tags: ['football', 'soccer', 'league'] },
                            { name: 'UAE FA', url: 'https://www.uaefa.ae', desc: 'UAE Football Association', tags: ['football', 'national team'] }
                        ]
                    },
                    {
                        title: 'Top Clubs',
                        apps: [
                            { name: 'Al Ain FC', url: 'https://alainclub.ae', desc: 'The Boss - Al Ain', tags: ['club', 'football'] },
                            { name: 'Shabab Al Ahli', url: 'https://www.shababalahli.ae', desc: 'Dubai based club', tags: ['club', 'football'] },
                            { name: 'Al Jazira', url: 'https://www.jc.ae', desc: 'Pride of Abu Dhabi', tags: ['club', 'football'] },
                            { name: 'Al Nasr', url: 'https://www.alnasrclub.com', desc: 'Oldest club in UAE', tags: ['club', 'football'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'transport',
        name: 'Transport',
        icon: 'fa-plane',
        color: 'text-blue-400',
        subTabs: [
            {
                id: 'air',
                name: 'Air',
                sections: [
                    {
                        title: 'Airlines',
                        apps: [
                            { name: 'Emirates', url: 'https://www.emirates.com', desc: 'Fly Better', tags: ['flight', 'plane', 'travel', 'ticket', 'dubai airport'] },
                            { name: 'Etihad', url: 'https://www.etihad.com', desc: 'From Abu Dhabi to the World', tags: ['flight', 'plane', 'travel', 'abudhabi'] },
                            { name: 'FlyDubai', url: 'https://www.flydubai.com', desc: 'Low cost carrier', tags: ['flight', 'budget'] },
                            { name: 'Air Arabia', url: 'https://www.airarabia.com', desc: 'Sharjah based low cost', tags: ['flight', 'sharjah'] },
                            { name: 'Wizz Air AD', url: 'https://wizzair.com', desc: 'Ultra low cost carrier', tags: ['flight', 'cheap'] }
                        ]
                    },
                    {
                        title: 'Airports & Authorities',
                        apps: [
                            { name: 'Dubai Airports', url: 'https://www.dubaiairports.ae', desc: 'DXB & DWC', tags: ['arrival', 'departure'] },
                            { name: 'AD Airports', url: 'https://www.adairports.ae', desc: 'Abu Dhabi Airports', tags: ['arrival', 'departure'] },
                            { name: 'GCAA', url: 'https://www.gcaa.gov.ae', desc: 'Aviation Regulator', tags: ['drone', 'license'] }
                        ]
                    }
                ]
            },
            {
                id: 'road',
                name: 'Road',
                sections: [
                    {
                        title: 'Public Transport',
                        apps: [
                            { name: 'RTA', url: 'https://www.rta.ae', desc: 'Roads & Transport Authority', tags: ['bus', 'license', 'car'] },
                            { name: 'ITC Abu Dhabi', url: 'https://www.itc.gov.ae', desc: 'Integrated Transport Centre', tags: ['bus', 'parking'] },
                            { name: 'SRTA Sharjah', url: 'https://www.srta.gov.ae', desc: 'Sharjah Transport', tags: ['taxi', 'bus'] }
                        ]
                    },
                    {
                        title: 'Ride & Drive',
                        apps: [
                            { name: 'Careem', url: 'https://www.careem.com', desc: 'The everything app', tags: ['taxi', 'food', 'bike'] },
                            { name: 'Uber', url: 'https://www.uber.com/ae/en/', desc: 'Global ride hailing', tags: ['taxi', 'car'] },
                            { name: 'Dubai Taxi', url: 'https://www.dubaitaxi.ae', desc: 'DTC Services', tags: ['taxi', 'limo'] },
                            { name: 'Udrive', url: 'https://udrive.ae', desc: 'Pay-per-minute car rental', tags: ['rent', 'car', 'share'] },
                            { name: 'Ekar', url: 'https://ekar.app', desc: 'Self-drive mobility', tags: ['rent', 'car', 'share'] }
                        ]
                    },
                    {
                        title: 'Tolls',
                        apps: [
                            { name: 'Salik', url: 'https://www.salik.ae', desc: 'Dubai Toll Gates', tags: ['toll', 'tag'] },
                            { name: 'Darb', url: 'https://darb.itc.gov.ae', desc: 'Abu Dhabi Tolls', tags: ['toll', 'gate'] }
                        ]
                    }
                ]
            },
            {
                id: 'rail',
                name: 'Rail',
                sections: [
                    {
                        title: 'Networks',
                        apps: [
                            { name: 'Dubai Metro', url: 'https://www.rta.ae/wps/portal/rta/ae/public-transport/metro', desc: 'Driverless urban rail', tags: ['train', 'transport', 'nol'] },
                            { name: 'Etihad Rail', url: 'https://www.etihadrail.ae', desc: 'National Railway Network', tags: ['train', 'freight', 'passenger'] },
                            { name: 'Palm Monorail', url: 'https://www.palmmonorail.com', desc: 'Palm Jumeirah scenic route', tags: ['train', 'tourist'] },
                            { name: 'Dubai Tram', url: 'https://www.rta.ae', desc: 'Marina & Sufouh tram', tags: ['tram', 'train'] }
                        ]
                    }
                ]
            },
            {
                id: 'water',
                name: 'Water',
                sections: [
                    {
                        title: 'Marine Transport',
                        apps: [
                            { name: 'Dubai Ferry', url: 'https://www.rta.ae', desc: 'Scenic water transport', tags: ['boat', 'sea'] },
                            { name: 'Abra', url: 'https://www.rta.ae', desc: 'Traditional boat rides', tags: ['boat', 'creek'] }
                        ]
                    },
                    {
                        title: 'Ports',
                        apps: [
                            { name: 'DP World', url: 'https://www.dpworld.com', desc: 'Global trade enabler', tags: ['shipping', 'logistics'] },
                            { name: 'AD Ports', url: 'https://www.adports.ae', desc: 'Abu Dhabi Ports', tags: ['shipping', 'sea'] }
                        ]
                    }
                ]
            },
            {
                id: 'desert',
                name: 'Desert',
                sections: [
                    {
                        title: 'Adventures',
                        apps: [
                            { name: 'Arabian Adventures', url: 'https://www.arabian-adventures.com', desc: 'Desert Safaris & Tours', tags: ['safari', 'dune', 'tour'] },
                            { name: 'Platinum Heritage', url: 'https://www.platinum-heritage.com', desc: 'Luxury desert experiences', tags: ['safari', 'luxury'] },
                            { name: 'Desert Safari', url: 'https://www.raynatours.com', desc: 'Popular tours', tags: ['safari', 'sand'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'telecom',
        name: 'Utilities',
        icon: 'fa-bolt',
        color: 'text-cyan-400',
        apps: [
            { name: 'Etisalat', url: 'https://www.etisalat.ae', desc: 'e& Telecom Provider', tags: ['phone', 'internet', 'wifi'] },
            { name: 'Du', url: 'https://www.du.ae', desc: 'Emirates Integrated', tags: ['phone', 'internet', 'wifi'] },
            { name: 'DEWA', url: 'https://www.dewa.gov.ae', desc: 'Dubai Energy', tags: ['bill', 'electricity', 'water'] },
            { name: 'SEWA', url: 'https://www.sewa.gov.ae', desc: 'Sharjah Energy', tags: ['bill', 'electricity', 'water'] }
        ]
    }
];
