// Advanced Features JavaScript for Axentia Trading Platform
// Handles automated trading, social features, education, and API integration

class AdvancedFeaturesManager {
    constructor() {
        this.tradingBots = this.generateBotData();
        this.socialTraders = this.generateSocialData();
        this.tutorials = this.generateTutorialData();
        this.apiEndpoints = this.generateAPIData();
        
        this.init();
    }
    
    init() {
        this.initializeBotManager();
        this.initializeSocialTrading();
        this.initializeEducationCenter();
        this.initializeAPIDemo();
        this.initializeAnimations();
    }
    
    // Generate bot management data
    generateBotData() {
        return [
            {
                id: 'sma-crossover',
                name: 'SMA Crossover Bot',
                symbol: 'BTC/USD',
                timeframe: '15m',
                status: 'active',
                return24h: 12.4,
                totalReturn: 47.3,
                winRate: 73.4,
                profitFactor: 1.85,
                maxDrawdown: -2.1,
                totalTrades: 156,
                activeSince: '45 days ago'
            },
            {
                id: 'rsi-mean-reversion',
                name: 'RSI Mean Reversion',
                symbol: 'ETH/USD',
                timeframe: '1h',
                status: 'active',
                return24h: 8.7,
                totalReturn: 32.1,
                winRate: 68.9,
                profitFactor: 1.62,
                maxDrawdown: -3.4,
                totalTrades: 89,
                activeSince: '32 days ago'
            },
            {
                id: 'macd-signal',
                name: 'MACD Signal Bot',
                symbol: 'EUR/USD',
                timeframe: '4h',
                status: 'inactive',
                return24h: 0,
                totalReturn: 18.7,
                winRate: 65.2,
                profitFactor: 1.43,
                maxDrawdown: -4.8,
                totalTrades: 67,
                activeSince: 'Stopped 3 days ago'
            }
        ];
    }
    
    // Generate social trading data
    generateSocialData() {
        return [
            {
                id: 'marcus-trader',
                name: 'MarcusTrader',
                level: 'Pro Trader',
                followers: 2300,
                return30d: 127.3,
                avatar: 'MR',
                bgColor: 'from-green-400 to-green-600'
            },
            {
                id: 'anna-signals',
                name: 'AnnaSignals',
                level: 'Expert',
                followers: 1800,
                return30d: 89.4,
                avatar: 'AS',
                bgColor: 'from-blue-400 to-blue-600'
            },
            {
                id: 'crypto-tech',
                name: 'CryptoTech',
                level: 'Advanced',
                followers: 3100,
                return30d: 76.8,
                avatar: 'CT',
                bgColor: 'from-purple-400 to-purple-600'
            }
        ];
    }
    
    // Generate tutorial data
    generateTutorialData() {
        return [
            {
                id: 'technical-analysis',
                title: 'Introduction to Technical Analysis',
                description: 'Learn the fundamentals of chart reading and pattern recognition.',
                duration: '15 min',
                level: 'Beginner',
                views: 15234,
                progress: 0
            },
            {
                id: 'risk-management',
                title: 'Risk Management Best Practices',
                description: 'Essential risk management techniques for successful trading.',
                duration: '25 min',
                level: 'Intermediate',
                views: 8921,
                progress: 0
            },
            {
                id: 'algorithmic-trading',
                title: 'Building Your First Trading Bot',
                description: 'Step-by-step guide to creating automated trading strategies.',
                duration: '45 min',
                level: 'Advanced',
                views: 12567,
                progress: 0
            },
            {
                id: 'forex-fundamentals',
                title: 'Forex Trading Fundamentals',
                description: 'Understand currency pairs, economic indicators, and forex market dynamics.',
                duration: '30 min',
                level: 'Beginner',
                views: 9876,
                progress: 0
            }
        ];
    }
    
    // Generate API data
    generateAPIData() {
        return {
            restEndpoints: [
                {
                    method: 'GET',
                    endpoint: '/api/v1/market/ticker',
                    description: 'Get real-time price data for all trading pairs',
                    status: 'LIVE',
                    color: 'text-green-400'
                },
                {
                    method: 'POST',
                    endpoint: '/api/v1/orders',
                    description: 'Place new orders with advanced order types',
                    status: 'LIVE',
                    color: 'text-blue-400'
                },
                {
                    method: 'GET',
                    endpoint: '/api/v1/portfolio',
                    description: 'Access portfolio data and performance metrics',
                    status: 'LIVE',
                    color: 'text-yellow-400'
                },
                {
                    method: 'GET',
                    endpoint: '/api/v1/analytics',
                    description: 'Retrieve market analysis and trading signals',
                    status: 'LIVE',
                    color: 'text-purple-400'
                }
            ],
            websocketTopics: [
                {
                    name: 'Live Price Feeds',
                    description: 'Subscribe to real-time price updates with millisecond latency',
                    status: 'Connected',
                    latency: '45ms',
                    indicator: 'bg-green-500'
                },
                {
                    name: 'Order Book Streams',
                    description: 'Get real-time order book updates and market depth information',
                    status: 'Streaming',
                    latency: '32ms',
                    indicator: 'bg-green-500'
                },
                {
                    name: 'Portfolio Updates',
                    description: 'Receive instant notifications about portfolio changes',
                    status: 'Active',
                    latency: '28ms',
                    indicator: 'bg-green-500'
                }
            ]
        };
    }
    
    // Initialize bot manager
    initializeBotManager() {
        this.renderBotList();
        this.initializeBotControls();
    }
    
    // Render bot list
    renderBotList() {
        const botContainer = document.querySelector('#automated-trading .space-y-4');
        if (!botContainer) return;
        
        botContainer.innerHTML = this.tradingBots.map(bot => `
            <div class="flex items-center justify-between p-3 bg-gray-800 rounded bot-item" data-bot-id="${bot.id}">
                <div class="flex items-center space-x-3">
                    <div class="bot-status ${bot.status}"></div>
                    <div>
                        <div class="font-medium text-white">${bot.name}</div>
                        <div class="text-sm text-gray-400">${bot.symbol} • ${bot.timeframe}</div>
                    </div>
                </div>
                <div class="text-right">
                    <div class="font-mono ${bot.return24h >= 0 ? 'text-green-400' : 'text-red-400'} text-sm">
                        ${bot.return24h >= 0 ? '+' : ''}${bot.return24h}%
                    </div>
                    <div class="text-xs text-gray-400">24h Return</div>
                </div>
            </div>
        `).join('');
        
        // Add click handlers for bot items
        document.querySelectorAll('.bot-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const botId = e.currentTarget.dataset.botId;
                this.showBotDetails(botId);
            });
        });
    }
    
    // Initialize bot controls
    initializeBotControls() {
        const createBotBtn = document.querySelector('button:contains("Create New Bot")');
        if (createBotBtn) {
            createBotBtn.addEventListener('click', () => {
                this.showBotBuilder();
            });
        }
    }
    
    // Show bot details
    showBotDetails(botId) {
        const bot = this.tradingBots.find(b => b.id === botId);
        if (!bot) return;
        
        // Create modal or detailed view
        this.showModal(`Bot Details: ${bot.name}`, `
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <h6 class="font-medium text-white mb-2">Performance</h6>
                        <div class="text-sm text-gray-400 space-y-1">
                            <div>Total Return: <span class="font-mono text-green-400">+${bot.totalReturn}%</span></div>
                            <div>Win Rate: <span class="font-mono text-white">${bot.winRate}%</span></div>
                            <div>Profit Factor: <span class="font-mono text-white">${bot.profitFactor}</span></div>
                            <div>Max Drawdown: <span class="font-mono text-red-400">${bot.maxDrawdown}%</span></div>
                        </div>
                    </div>
                    <div>
                        <h6 class="font-medium text-white mb-2">Trading Stats</h6>
                        <div class="text-sm text-gray-400 space-y-1">
                            <div>Total Trades: <span class="font-mono text-white">${bot.totalTrades}</span></div>
                            <div>Active Since: <span class="text-white">${bot.activeSince}</span></div>
                            <div>Status: <span class="${bot.status === 'active' ? 'text-green-400' : 'text-gray-400'}">${bot.status.toUpperCase()}</span></div>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-2 mt-6">
                    <button class="btn-primary flex-1 py-2 rounded text-sm" onclick="advancedFeatures.toggleBot('${bot.id}')">
                        ${bot.status === 'active' ? 'Stop Bot' : 'Start Bot'}
                    </button>
                    <button class="btn-secondary flex-1 py-2 rounded text-sm">View Strategy</button>
                </div>
            </div>
        `);
    }
    
    // Toggle bot status
    toggleBot(botId) {
        const bot = this.tradingBots.find(b => b.id === botId);
        if (!bot) return;
        
        bot.status = bot.status === 'active' ? 'inactive' : 'active';
        this.renderBotList();
        this.showNotification(`Bot ${bot.name} ${bot.status === 'active' ? 'started' : 'stopped'}`, 'success');
    }
    
    // Show bot builder
    showBotBuilder() {
        this.showModal('Strategy Builder', `
            <div class="space-y-6">
                <div class="tutorial-step p-4 rounded">
                    <h6 class="font-medium text-white mb-2">Step 1: Select Indicators</h6>
                    <div class="grid grid-cols-2 gap-2 mt-2">
                        <label class="flex items-center space-x-2 text-sm">
                            <input type="checkbox" class="text-yellow-400">
                            <span>SMA (20)</span>
                        </label>
                        <label class="flex items-center space-x-2 text-sm">
                            <input type="checkbox" class="text-yellow-400">
                            <span>RSI (14)</span>
                        </label>
                        <label class="flex items-center space-x-2 text-sm">
                            <input type="checkbox" class="text-yellow-400">
                            <span>MACD</span>
                        </label>
                        <label class="flex items-center space-x-2 text-sm">
                            <input type="checkbox" class="text-yellow-400">
                            <span>Bollinger Bands</span>
                        </label>
                    </div>
                </div>
                
                <div class="tutorial-step p-4 rounded">
                    <h6 class="font-medium text-white mb-2">Step 2: Define Entry Rules</h6>
                    <textarea class="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white text-sm" rows="3" placeholder="Example: SMA(20) crosses above SMA(50) AND RSI < 30"></textarea>
                </div>
                
                <div class="tutorial-step p-4 rounded">
                    <h6 class="font-medium text-white mb-2">Step 3: Risk Management</h6>
                    <div class="grid grid-cols-2 gap-4">
                        <input type="number" placeholder="Stop Loss (%)" class="p-2 bg-gray-800 border border-gray-600 rounded text-white text-sm">
                        <input type="number" placeholder="Take Profit (%)" class="p-2 bg-gray-800 border border-gray-600 rounded text-white text-sm">
                    </div>
                </div>
                
                <div class="tutorial-step p-4 rounded">
                    <h6 class="font-medium text-white mb-2">Step 4: Backtest & Deploy</h6>
                    <div class="flex space-x-2">
                        <button class="btn-secondary flex-1 py-2 rounded text-sm">Backtest</button>
                        <button class="btn-primary flex-1 py-2 rounded text-sm">Deploy Live</button>
                    </div>
                </div>
            </div>
        `);
    }
    
    // Initialize social trading
    initializeSocialTrading() {
        this.renderTopTraders();
        this.initializeCopyTrading();
    }
    
    // Render top traders
    renderTopTraders() {
        const tradersContainer = document.querySelector('#social-trading .space-y-4');
        if (!tradersContainer) return;
        
        tradersContainer.innerHTML = this.socialTraders.map(trader => `
            <div class="flex items-center justify-between p-3 bg-gray-800 rounded trader-item" data-trader-id="${trader.id}">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-r ${trader.bgColor} flex items-center justify-center">
                        <span class="text-white font-bold text-sm">${trader.avatar}</span>
                    </div>
                    <div>
                        <div class="font-medium text-white">${trader.name}</div>
                        <div class="text-sm text-gray-400">${trader.level} • ${trader.followers.toLocaleString()} Followers</div>
                    </div>
                </div>
                <div class="text-right">
                    <div class="font-mono text-green-400 text-sm">+${trader.return30d}%</div>
                    <div class="text-xs text-gray-400">30d Return</div>
                </div>
            </div>
        `).join('');
        
        // Add click handlers
        document.querySelectorAll('.trader-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const traderId = e.currentTarget.dataset.traderId;
                this.showTraderProfile(traderId);
            });
        });
    }
    
    // Initialize copy trading
    initializeCopyTrading() {
        const copyBtn = document.querySelector('button:contains("Start Copy Trading")');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                this.startCopyTrading();
            });
        }
    }
    
    // Show trader profile
    showTraderProfile(traderId) {
        const trader = this.socialTraders.find(t => t.id === traderId);
        if (!trader) return;
        
        this.showModal(`Trader Profile: ${trader.name}`, `
            <div class="space-y-6">
                <div class="flex items-center space-x-4">
                    <div class="w-16 h-16 rounded-full bg-gradient-to-r ${trader.bgColor} flex items-center justify-center">
                        <span class="text-white font-bold text-lg">${trader.avatar}</span>
                    </div>
                    <div>
                        <h4 class="text-xl font-semibold text-white">${trader.name}</h4>
                        <p class="text-gray-400">${trader.level}</p>
                        <p class="text-sm text-gray-400">${trader.followers.toLocaleString()} followers</p>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-4 bg-gray-800 rounded">
                        <div class="text-2xl font-bold text-green-400">+${trader.return30d}%</div>
                        <div class="text-sm text-gray-400">30-Day Return</div>
                    </div>
                    <div class="text-center p-4 bg-gray-800 rounded">
                        <div class="text-2xl font-bold text-white">${trader.followers.toLocaleString()}</div>
                        <div class="text-sm text-gray-400">Followers</div>
                    </div>
                </div>
                
                <div class="flex space-x-2">
                    <button class="btn-primary flex-1 py-2 rounded text-sm" onclick="advancedFeatures.followTrader('${trader.id}')">
                        Follow Trader
                    </button>
                    <button class="btn-secondary flex-1 py-2 rounded text-sm">View Portfolio</button>
                </div>
            </div>
        `);
    }
    
    // Start copy trading
    startCopyTrading() {
        const traderSelect = document.querySelector('select');
        const amountInput = document.querySelector('input[placeholder=\"$1,000\"]');
        const maxLossInput = document.querySelector('input[placeholder=\"10\"]');
        
        if (!traderSelect || !amountInput || !maxLossInput) return;
        
        const traderId = 'marcus-trader'; // Default to top trader
        const amount = parseFloat(amountInput.value) || 1000;
        const maxLoss = parseFloat(maxLossInput.value) || 10;
        
        // Simulate copy trading setup
        this.showNotification(`Copy trading started with ${traderSelect.options[traderSelect.selectedIndex].text} for $${amount}`, 'success');
        
        // Update UI to show active copy trading
        setTimeout(() => {
            this.updateCopyTradingStatus(traderId, amount, maxLoss);
        }, 1000);
    }
    
    // Follow trader
    followTrader(traderId) {
        const trader = this.socialTraders.find(t => t.id === traderId);
        if (!trader) return;
        
        trader.followers += 1;
        this.renderTopTraders();
        this.showNotification(`Now following ${trader.name}`, 'success');
        this.closeModal();
    }
    
    // Initialize education center
    initializeEducationCenter() {
        this.renderTutorials();
        this.initializeVideoCarousel();
    }
    
    // Render tutorials
    renderTutorials() {
        // Tutorial rendering is handled by HTML, but we can add interactivity
        const tutorialButtons = document.querySelectorAll('button:contains("Start Tutorial")');
        tutorialButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const tutorial = this.tutorials[index];
                this.startTutorial(tutorial);
            });
        });
    }
    
    // Start tutorial
    startTutorial(tutorial) {
        this.showModal(`Tutorial: ${tutorial.title}`, `
            <div class="space-y-4">
                <div class="bg-gray-800 p-4 rounded">
                    <h5 class="font-medium text-white mb-2">Tutorial Overview</h5>
                    <p class="text-sm text-gray-400 mb-3">${tutorial.description}</p>
                    <div class="flex justify-between text-xs text-gray-500">
                        <span>Duration: ${tutorial.duration}</span>
                        <span>Level: ${tutorial.level}</span>
                        <span>Views: ${tutorial.views.toLocaleString()}</span>
                    </div>
                </div>
                
                <div class="bg-gray-900 p-4 rounded">
                    <h6 class="font-medium text-white mb-2">Tutorial Content</h6>
                    <div class="space-y-2 text-sm text-gray-300">
                        <div>📖 Introduction and Overview</div>
                        <div>🎯 Key Concepts and Theory</div>
                        <div>💻 Practical Examples</div>
                        <div>📝 Quiz and Assessment</div>
                        <div>🎓 Certification</div>
                    </div>
                </div>
                
                <div class="flex space-x-2">
                    <button class="btn-primary flex-1 py-2 rounded text-sm" onclick="advancedFeatures.beginTutorial('${tutorial.id}')">
                        Begin Tutorial
                    </button>
                    <button class="btn-secondary flex-1 py-2 rounded text-sm">Add to Watchlist</button>
                </div>
            </div>
        `);
    }
    
    // Begin tutorial
    beginTutorial(tutorialId) {
        this.showNotification('Tutorial started! Check your learning dashboard for progress.', 'success');
        this.closeModal();
        
        // Simulate tutorial progress
        setTimeout(() => {
            this.updateTutorialProgress(tutorialId, 25);
        }, 2000);
    }
    
    // Update tutorial progress
    updateTutorialProgress(tutorialId, progress) {
        const tutorial = this.tutorials.find(t => t.id === tutorialId);
        if (tutorial) {
            tutorial.progress = progress;
            console.log(`Tutorial ${tutorialId} progress: ${progress}%`);
        }
    }
    
    // Initialize video carousel
    initializeVideoCarousel() {
        // Splide initialization is handled in the HTML script tag
        // Add click handlers for video thumbnails
        const videoCards = document.querySelectorAll('.splide__slide');
        videoCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                this.playVideo(index);
            });
        });
    }
    
    // Play video
    playVideo(videoIndex) {
        const tutorial = this.tutorials[videoIndex];
        this.showModal(`Video: ${tutorial.title}`, `
            <div class="text-center">
                <div class="bg-gray-800 h-64 rounded mb-4 flex items-center justify-center">
                    <span class="text-6xl">▶️</span>
                </div>
                <h4 class="text-xl font-semibold text-white mb-2">${tutorial.title}</h4>
                <p class="text-gray-400 mb-4">${tutorial.description}</p>
                <div class="flex justify-center space-x-2">
                    <button class="btn-primary px-4 py-2 rounded text-sm">Play Video</button>
                    <button class="btn-secondary px-4 py-2 rounded text-sm">Download Transcript</button>
                </div>
            </div>
        `);
    }
    
    // Initialize API demo
    initializeAPIDemo() {
        this.renderAPIEndpoints();
        this.initializeAPIControls();
    }
    
    // Render API endpoints
    renderAPIEndpoints() {
        // API endpoints are rendered in HTML
        // Add interactive features
        const apiButtons = document.querySelectorAll('button:contains("View Full Documentation"), button:contains("Generate API Key")');
        apiButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.showAPIDocumentation();
            });
        });
    }
    
    // Initialize API controls
    initializeAPIControls() {
        // Add copy functionality to code examples
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            const copyBtn = document.createElement('button');
            copyBtn.textContent = 'Copy';
            copyBtn.className = 'absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-xs';
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(block.textContent);
                this.showNotification('Code copied to clipboard!', 'success');
            });
            
            block.parentElement.style.position = 'relative';
            block.parentElement.appendChild(copyBtn);
        });
    }
    
    // Show API documentation
    showAPIDocumentation() {
        this.showModal('API Documentation', `
            <div class="space-y-4 max-h-96 overflow-y-auto">
                <div class="bg-gray-800 p-4 rounded">
                    <h5 class="font-medium text-white mb-2">Authentication</h5>
                    <p class="text-sm text-gray-400">All API requests require a valid API key in the Authorization header.</p>
                </div>
                
                <div class="bg-gray-800 p-4 rounded">
                    <h5 class="font-medium text-white mb-2">Rate Limits</h5>
                    <p class="text-sm text-gray-400">Standard tier: 1000 requests/minute • Premium tier: 5000 requests/minute</p>
                </div>
                
                <div class="bg-gray-800 p-4 rounded">
                    <h5 class="font-medium text-white mb-2">WebSocket Limits</h5>
                    <p class="text-sm text-gray-400">Standard tier: 10 concurrent connections • Premium tier: 50 concurrent connections</p>
                </div>
                
                <div class="bg-gray-800 p-4 rounded">
                    <h5 class="font-medium text-white mb-2">Support</h5>
                    <p class="text-sm text-gray-400">Email: api-support@axentia.com • Discord: Axentia API Community</p>
                </div>
            </div>
        `);
    }
    
    // Initialize animations
    initializeAnimations() {
        // Animate feature cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }
            });
        }, observerOptions);
        
        // Observe all feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            observer.observe(card);
        });
        
        // Animate strategy cards
        const strategyCards = document.querySelectorAll('.strategy-card');
        strategyCards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                anime({
                    targets: card,
                    scale: 1.02,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                anime({
                    targets: card,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            });
        });
    }
    
    // Show modal
    showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50';
        modal.innerHTML = `
            <div class="bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-semibold text-white">${title}</h3>
                    <button class="text-gray-400 hover:text-white" onclick="advancedFeatures.closeModal()">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="text-gray-300">${content}</div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Animate modal in
        anime({
            targets: modal,
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
        
        anime({
            targets: modal.querySelector('.bg-gray-900'),
            scale: [0.9, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
        
        // Store reference for closing
        this.currentModal = modal;
    }
    
    // Close modal
    closeModal() {
        if (this.currentModal) {
            anime({
                targets: this.currentModal,
                opacity: [1, 0],
                duration: 200,
                easing: 'easeInQuad',
                complete: () => {
                    document.body.removeChild(this.currentModal);
                    this.currentModal = null;
                }
            });
        }
    }
    
    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-24 right-6 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
        
        if (type === 'success') {
            notification.classList.add('bg-green-500', 'text-white');
        } else if (type === 'error') {
            notification.classList.add('bg-red-500', 'text-white');
        } else {
            notification.classList.add('bg-blue-500', 'text-white');
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Update copy trading status
    updateCopyTradingStatus(traderId, amount, maxLoss) {
        // This would update the UI to show active copy trading
        console.log(`Copy trading active: Following ${traderId} with $${amount}, max loss ${maxLoss}%`);
    }
}

// Initialize advanced features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.advancedFeatures = new AdvancedFeaturesManager();
});

// Global functions for onclick handlers
window.advancedFeatures = window.advancedFeatures || {};
window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};