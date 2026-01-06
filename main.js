// Axentia Trading Platform - Main JavaScript Functionality
// Professional trading platform with real-time data simulation and interactive features

class AxentiaTradingPlatform {
    constructor() {
        this.charts = {};
        this.marketData = this.generateMarketData();
        this.portfolioData = this.generatePortfolioData();
        this.isRealTimeActive = true;
        
        this.init();
    }
    
    init() {
        this.initializeAnimations();
        this.initializeCharts();
        this.initializeInteractions();
        this.startRealTimeUpdates();
        this.initializeTypedText();
        this.initializeParticleBackground();
        this.initializeMobileFeatures();
    }
    
    // Generate realistic market data
    generateMarketData() {
        const cryptoPairs = [
            { symbol: 'BTC/USD', name: 'Bitcoin', price: 43567.89, change: 2.34, volume: '1.2B' },
            { symbol: 'ETH/USD', name: 'Ethereum', price: 2654.32, change: 1.87, volume: '892M' },
            { symbol: 'XRP/USD', name: 'Ripple', price: 0.6234, change: -0.45, volume: '234M' },
            { symbol: 'LTC/USD', name: 'Litecoin', price: 67.89, change: 3.21, volume: '156M' },
            { symbol: 'ADA/USD', name: 'Cardano', price: 0.4876, change: 1.23, volume: '98M' },
            { symbol: 'DOT/USD', name: 'Polkadot', price: 7.65, change: -1.34, volume: '76M' },
            { symbol: 'LINK/USD', name: 'Chainlink', price: 14.32, change: 2.67, volume: '134M' },
            { symbol: 'UNI/USD', name: 'Uniswap', price: 6.78, change: 0.89, volume: '89M' }
        ];
        
        const forexPairs = [
            { symbol: 'EUR/USD', name: 'Euro/USD', price: 1.0876, change: -0.12, volume: '2.1B' },
            { symbol: 'GBP/USD', name: 'British Pound/USD', price: 1.2654, change: 0.45, volume: '1.8B' },
            { symbol: 'USD/JPY', name: 'USD/Japanese Yen', price: 149.23, change: -0.08, volume: '1.9B' },
            { symbol: 'AUD/USD', name: 'Australian Dollar/USD', price: 0.6543, change: 0.67, volume: '876M' },
            { symbol: 'USD/CHF', name: 'USD/Swiss Franc', price: 0.8923, change: -0.23, volume: '654M' },
            { symbol: 'USD/CAD', name: 'USD/Canadian Dollar', price: 1.3456, change: 0.12, volume: '743M' }
        ];
        
        return { crypto: cryptoPairs, forex: forexPairs };
    }
    
    // Generate portfolio data
    generatePortfolioData() {
        return {
            totalValue: 127543.21,
            totalReturn: 27543.21,
            sharpeRatio: 1.85,
            maxDrawdown: -5.2,
            positions: [
                { asset: 'BTC/USD', type: 'LONG', amount: 0.25, entry: 42500, pnl: 267.50 },
                { asset: 'ETH/USD', type: 'LONG', amount: 2.5, entry: 2600, pnl: 135.80 },
                { asset: 'EUR/USD', type: 'SHORT', amount: 10000, entry: 1.0890, pnl: -145.20 }
            ]
        };
    }
    
    // Initialize animations
    initializeAnimations() {
        // Animate portfolio value counter
        const portfolioValue = document.getElementById('portfolio-value');
        if (portfolioValue) {
            anime({
                targets: portfolioValue,
                innerHTML: [0, 127543.21],
                duration: 2000,
                round: 1,
                easing: 'easeOutExpo',
                update: function(anim) {
                    portfolioValue.innerHTML = '$' + Math.round(anim.animatables[0].target.innerHTML).toLocaleString();
                }
            });
        }
        
        // Animate metric cards on scroll
        const metricCards = document.querySelectorAll('.metric-card, .metric-highlight');
        if (metricCards.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: entry.target,
                            translateY: [30, 0],
                            opacity: [0, 1],
                            duration: 800,
                            easing: 'easeOutExpo',
                            delay: anime.stagger(100)
                        });
                    }
                });
            });
            
            metricCards.forEach(card => observer.observe(card));
        }
        
        // Animate trading cards
        const tradingCards = document.querySelectorAll('.trading-card, .portfolio-card, .analytics-card');
        if (tradingCards.length > 0) {
            anime({
                targets: tradingCards,
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutExpo',
                delay: anime.stagger(150)
            });
        }
    }
    
    // Initialize charts
    initializeCharts() {
        this.initMainChart();
        this.initAdvancedChart();
        this.initPerformanceChart();
        this.initAllocationChart();
    }
    
    // Main trading chart
    initMainChart() {
        const chartElement = document.getElementById('main-chart');
        if (!chartElement) return;
        
        const chart = echarts.init(chartElement);
        this.charts.main = chart;
        
        // Generate realistic candlestick data
        const data = this.generateCandlestickData();
        
        const option = {
            backgroundColor: 'transparent',
            grid: {
                left: '10%',
                right: '10%',
                top: '15%',
                bottom: '15%'
            },
            xAxis: {
                type: 'category',
                data: data.map(item => item.date),
                axisLine: { lineStyle: { color: '#708090' } },
                axisLabel: { color: '#ffffff', fontSize: 10 }
            },
            yAxis: {
                type: 'value',
                scale: true,
                axisLine: { lineStyle: { color: '#708090' } },
                axisLabel: { color: '#ffffff', fontSize: 10 },
                splitLine: { lineStyle: { color: '#2a2a2a', type: 'dashed' } }
            },
            series: [{
                type: 'candlestick',
                data: data.map(item => [item.open, item.close, item.low, item.high]),
                itemStyle: {
                    color: '#228b22',
                    color0: '#dc143c',
                    borderColor: '#228b22',
                    borderColor0: '#dc143c'
                }
            }],
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(26, 26, 26, 0.9)',
                borderColor: '#d4af37',
                textStyle: { color: '#ffffff' }
            }
        };
        
        chart.setOption(option);
        
        // Make chart responsive
        window.addEventListener('resize', () => chart.resize());
    }
    
    // Advanced trading chart with indicators
    initAdvancedChart() {
        const chartElement = document.getElementById('advanced-chart');
        if (!chartElement) return;
        
        const chart = echarts.init(chartElement);
        this.charts.advanced = chart;
        
        const data = this.generateCandlestickData(100);
        const rsiData = this.generateIndicatorData(data, 'rsi');
        const macdData = this.generateMACDData(data);
        
        const option = {
            backgroundColor: 'transparent',
            grid: [
                { left: '10%', right: '10%', top: '10%', height: '50%' },
                { left: '10%', right: '10%', top: '65%', height: '15%' },
                { left: '10%', right: '10%', top: '85%', height: '15%' }
            ],
            xAxis: [
                { type: 'category', data: data.map(item => item.date), gridIndex: 0, axisLabel: { show: false } },
                { type: 'category', data: data.map(item => item.date), gridIndex: 1, axisLabel: { color: '#ffffff', fontSize: 10 } },
                { type: 'category', data: data.map(item => item.date), gridIndex: 2, axisLabel: { color: '#ffffff', fontSize: 10 } }
            ],
            yAxis: [
                { type: 'value', gridIndex: 0, axisLabel: { color: '#ffffff', fontSize: 10 }, splitLine: { lineStyle: { color: '#2a2a2a' } } },
                { type: 'value', gridIndex: 1, axisLabel: { color: '#ffffff', fontSize: 10 }, splitLine: { lineStyle: { color: '#2a2a2a' } } },
                { type: 'value', gridIndex: 2, axisLabel: { color: '#ffffff', fontSize: 10 }, splitLine: { lineStyle: { color: '#2a2a2a' } } }
            ],
            series: [
                {
                    type: 'candlestick',
                    data: data.map(item => [item.open, item.close, item.low, item.high]),
                    itemStyle: {
                        color: '#228b22',
                        color0: '#dc143c',
                        borderColor: '#228b22',
                        borderColor0: '#dc143c'
                    },
                    xAxisIndex: 0,
                    yAxisIndex: 0
                },
                {
                    type: 'line',
                    data: rsiData,
                    lineStyle: { color: '#d4af37', width: 2 },
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    name: 'RSI'
                },
                {
                    type: 'bar',
                    data: macdData.map(item => item.macd),
                    itemStyle: { color: '#228b22' },
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    name: 'MACD'
                }
            ],
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(26, 26, 26, 0.9)',
                borderColor: '#d4af37',
                textStyle: { color: '#ffffff' }
            },
            legend: {
                data: ['Price', 'RSI', 'MACD'],
                textStyle: { color: '#ffffff' },
                top: '5%'
            }
        };
        
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    }
    
    // Portfolio performance chart
    initPerformanceChart() {
        const chartElement = document.getElementById('performance-chart');
        if (!chartElement) return;
        
        const chart = echarts.init(chartElement);
        this.charts.performance = chart;
        
        const dates = this.generateDateRange(30);
        const portfolioData = this.generatePerformanceData(dates, 127543.21);
        const benchmarkData = this.generatePerformanceData(dates, 100000, 0.8);
        
        const option = {
            backgroundColor: 'transparent',
            grid: {
                left: '10%',
                right: '10%',
                top: '15%',
                bottom: '15%'
            },
            xAxis: {
                type: 'category',
                data: dates,
                axisLine: { lineStyle: { color: '#708090' } },
                axisLabel: { color: '#ffffff', fontSize: 10 }
            },
            yAxis: {
                type: 'value',
                axisLine: { lineStyle: { color: '#708090' } },
                axisLabel: { color: '#ffffff', fontSize: 10 },
                splitLine: { lineStyle: { color: '#2a2a2a', type: 'dashed' } }
            },
            series: [
                {
                    type: 'line',
                    data: portfolioData,
                    lineStyle: { color: '#d4af37', width: 3 },
                    itemStyle: { color: '#d4af37' },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0, y: 0, x2: 0, y2: 1,
                            colorStops: [
                                { offset: 0, color: 'rgba(212, 175, 55, 0.3)' },
                                { offset: 1, color: 'rgba(212, 175, 55, 0.05)' }
                            ]
                        }
                    },
                    name: 'Portfolio'
                },
                {
                    type: 'line',
                    data: benchmarkData,
                    lineStyle: { color: '#708090', width: 2, type: 'dashed' },
                    itemStyle: { color: '#708090' },
                    name: 'Benchmark'
                }
            ],
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(26, 26, 26, 0.9)',
                borderColor: '#d4af37',
                textStyle: { color: '#ffffff' }
            },
            legend: {
                data: ['Portfolio', 'Benchmark'],
                textStyle: { color: '#ffffff' },
                top: '5%'
            }
        };
        
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    }
    
    // Asset allocation pie chart
    initAllocationChart() {
        const chartElement = document.getElementById('allocation-chart');
        if (!chartElement) return;
        
        const chart = echarts.init(chartElement);
        this.charts.allocation = chart;
        
        const data = [
            { value: 45.2, name: 'Bitcoin (BTC)', itemStyle: { color: '#d4af37' } },
            { value: 25.8, name: 'Ethereum (ETH)', itemStyle: { color: '#228b22' } },
            { value: 18.5, name: 'Forex Pairs', itemStyle: { color: '#c0c0c0' } },
            { value: 10.5, name: 'Cash & Others', itemStyle: { color: '#dc143c' } }
        ];
        
        const option = {
            backgroundColor: 'transparent',
            series: [{
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '50%'],
                data: data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(212, 175, 55, 0.5)'
                    }
                },
                label: {
                    color: '#ffffff',
                    fontSize: 12
                },
                labelLine: {
                    lineStyle: { color: '#708090' }
                }
            }],
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(26, 26, 26, 0.9)',
                borderColor: '#d4af37',
                textStyle: { color: '#ffffff' },
                formatter: '{a} <br/>{b}: {c}% ({d}%)'
            }
        };
        
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    }
    
    // Initialize interactions
    initializeInteractions() {
        // Market tab switching
        const marketTabs = document.querySelectorAll('.market-tab');
        marketTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                marketTabs.forEach(t => t.classList.remove('active', 'bg-yellow-400', 'text-black'));
                marketTabs.forEach(t => t.classList.add('bg-gray-700', 'text-gray-300'));
                
                e.target.classList.remove('bg-gray-700', 'text-gray-300');
                e.target.classList.add('active', 'bg-yellow-400', 'text-black');
                
                this.updateMarketList(e.target.dataset.market);
            });
        });
        
        // Order type buttons
        const orderTypeBtns = document.querySelectorAll('.order-type-btn');
        orderTypeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (!e.target.classList.contains('active')) {
                    orderTypeBtns.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                }
            });
        });
        
        // Technical indicator buttons
        const indicatorBtns = document.querySelectorAll('.indicator-btn');
        indicatorBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.classList.toggle('active');
                this.updateIndicators();
            });
        });
        
        // Time filter buttons
        const timeFilters = document.querySelectorAll('.time-filter');
        timeFilters.forEach(filter => {
            filter.addEventListener('click', (e) => {
                timeFilters.forEach(f => f.classList.remove('active'));
                e.target.classList.add('active');
                this.updateTimePeriod(e.target.dataset.period);
            });
        });
        
        // Filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.updateFilter(e.target.dataset.filter);
            });
        });
        
        // Market item clicks
        const marketItems = document.querySelectorAll('.market-item');
        marketItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const symbol = e.currentTarget.dataset.symbol;
                this.selectMarketSymbol(symbol);
            });
        });
        
        // Position close buttons
        const closeButtons = document.querySelectorAll('.position-item button');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.closePosition(e.target);
            });
        });
        
        // Order cancel buttons
        const cancelButtons = document.querySelectorAll('.position-row button');
        cancelButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.cancelOrder(e.target);
            });
        });
    }
    
    // Update market list based on selected tab
    updateMarketList(marketType) {
        // This would update the market list with different assets
        console.log(`Switching to ${marketType} markets`);
    }
    
    // Update technical indicators
    updateIndicators() {
        const activeIndicators = document.querySelectorAll('.indicator-btn.active');
        console.log('Active indicators:', Array.from(activeIndicators).map(btn => btn.dataset.indicator));
    }
    
    // Update time period
    updateTimePeriod(period) {
        console.log(`Updating time period to: ${period}`);
        // This would update all charts and data based on the selected time period
    }
    
    // Update filter
    updateFilter(filter) {
        console.log(`Applying filter: ${filter}`);
        // This would filter the market scanner results
    }
    
    // Select market symbol
    selectMarketSymbol(symbol) {
        console.log(`Selected symbol: ${symbol}`);
        // This would update the main trading chart with the selected symbol
        
        // Update active market item
        document.querySelectorAll('.market-item').forEach(item => {
            item.classList.remove('bg-gray-700');
        });
        document.querySelector(`[data-symbol="${symbol}"]`).classList.add('bg-gray-700');
    }
    
    // Close position
    closePosition(button) {
        const positionItem = button.closest('.position-item');
        anime({
            targets: positionItem,
            translateX: 300,
            opacity: 0,
            duration: 500,
            easing: 'easeInExpo',
            complete: () => {
                positionItem.remove();
                this.showNotification('Position closed successfully', 'success');
            }
        });
    }
    
    // Cancel order
    cancelOrder(button) {
        const orderRow = button.closest('.position-row');
        anime({
            targets: orderRow,
            translateX: 300,
            opacity: 0,
            duration: 500,
            easing: 'easeInExpo',
            complete: () => {
                orderRow.remove();
                this.showNotification('Order cancelled successfully', 'success');
            }
        });
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
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Initialize typed text effect
    initializeTypedText() {
        const typedElement = document.getElementById('typed-text');
        if (typedElement) {
            new Typed('#typed-text', {
                strings: [
                    'Execute trades with institutional-grade precision',
                    'Monitor portfolio performance in real-time',
                    'Access advanced analytics and market insights',
                    'Trade crypto, forex, and commodities seamlessly'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }
    
    // Initialize particle background
    initializeParticleBackground() {
        const particleBg = document.getElementById('particle-bg');
        if (!particleBg) return;
        
        // Create canvas for particle background
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        particleBg.appendChild(canvas);
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        const particleCount = 50;
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
        
        // Animate particles
        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
                ctx.fill();
            });
            
            requestAnimationFrame(animateParticles);
        };
        
        animateParticles();
        
        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // Start real-time updates
    startRealTimeUpdates() {
        setInterval(() => {
            if (this.isRealTimeActive) {
                this.updateMarketPrices();
                this.updatePortfolioMetrics();
            }
        }, 2000);
    }
    
    // Update market prices
    updateMarketPrices() {
        // Simulate price updates
        Object.values(this.marketData).forEach(marketCategory => {
            marketCategory.forEach(pair => {
                const change = (Math.random() - 0.5) * 0.02; // ±1% change
                pair.price *= (1 + change);
                pair.change += change * 100;
                
                // Update UI elements
                const priceElements = document.querySelectorAll(`[data-symbol="${pair.symbol.replace('/', '')}"] .font-mono`);
                priceElements.forEach(el => {
                    if (el.textContent.includes('$')) {
                        el.textContent = `$${pair.price.toFixed(2)}`;
                        el.className = pair.change > 0 ? 'font-mono text-green-400' : 'font-mono text-red-400';
                    }
                });
            });
        });
    }
    
    // Update portfolio metrics
    updatePortfolioMetrics() {
        // Simulate portfolio value changes
        const change = (Math.random() - 0.5) * 0.01; // ±0.5% change
        this.portfolioData.totalValue *= (1 + change);
        
        // Update portfolio value display
        const portfolioElements = document.querySelectorAll('.font-mono');
        portfolioElements.forEach(el => {
            if (el.textContent.includes('$127') || el.textContent.includes('Portfolio Value')) {
                el.textContent = `$${this.portfolioData.totalValue.toFixed(2)}`;
            }
        });
    }
    
    // Generate candlestick data
    generateCandlestickData(points = 50) {
        const data = [];
        let basePrice = 43500;
        const now = new Date();
        
        for (let i = 0; i < points; i++) {
            const date = new Date(now.getTime() - (points - i) * 3600000);
            const volatility = 0.02;
            const trend = Math.sin(i / 10) * 0.01;
            
            const open = basePrice * (1 + (Math.random() - 0.5) * volatility + trend);
            const close = open * (1 + (Math.random() - 0.5) * volatility * 0.5);
            const high = Math.max(open, close) * (1 + Math.random() * volatility * 0.5);
            const low = Math.min(open, close) * (1 - Math.random() * volatility * 0.5);
            
            data.push({
                date: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
                open: open.toFixed(2),
                close: close.toFixed(2),
                high: high.toFixed(2),
                low: low.toFixed(2)
            });
            
            basePrice = close;
        }
        
        return data;
    }
    
    // Generate RSI data
    generateIndicatorData(priceData, indicator) {
        if (indicator === 'rsi') {
            return priceData.map((_, i) => {
                return (30 + Math.random() * 40).toFixed(2); // RSI between 30-70
            });
        }
        return [];
    }
    
    // Generate MACD data
    generateMACDData(priceData) {
        return priceData.map((_, i) => ({
            macd: (Math.random() - 0.5) * 100,
            signal: (Math.random() - 0.5) * 80
        }));
    }
    
    // Generate date range
    generateDateRange(days) {
        const dates = [];
        const now = new Date();
        
        for (let i = days; i >= 0; i--) {
            const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
            dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
        }
        
        return dates;
    }
    
    // Initialize mobile-specific features
    initializeMobileFeatures() {
        this.initializeMobileMenu();
        this.initializeTouchInteractions();
        this.initializeCollapsibleSections();
        this.initializeSwipeGestures();
        this.initializeMobileOrderPanel();
        this.initializeQuickActions();
    }
    
    // Mobile menu toggle
    initializeMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navLinks.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            });
        }
    }
    
    // Touch interactions for mobile
    initializeTouchInteractions() {
        // Add touch feedback to buttons
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .order-type-btn, .market-item');
        
        buttons.forEach(button => {
            button.addEventListener('touchstart', () => {
                button.style.transform = 'scale(0.95)';
                button.style.opacity = '0.8';
            });
            
            button.addEventListener('touchend', () => {
                setTimeout(() => {
                    button.style.transform = '';
                    button.style.opacity = '';
                }, 150);
            });
        });
        
        // Touch-friendly chart interactions
        const chartContainers = document.querySelectorAll('.chart-container');
        chartContainers.forEach(container => {
            container.addEventListener('touchstart', (e) => {
                e.preventDefault();
                container.style.cursor = 'grabbing';
            });
            
            container.addEventListener('touchend', (e) => {
                e.preventDefault();
                container.style.cursor = 'grab';
            });
        });
    }
    
    // Collapsible sections for mobile
    initializeCollapsibleSections() {
        const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
        
        collapsibleHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const isCollapsed = content.classList.contains('collapsed');
                
                if (isCollapsed) {
                    content.classList.remove('collapsed');
                    header.classList.remove('collapsed');
                } else {
                    content.classList.add('collapsed');
                    header.classList.add('collapsed');
                }
            });
        });
    }
    
    // Swipe gestures for mobile navigation
    initializeSwipeGestures() {
        let startX = 0;
        let startY = 0;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Horizontal swipe
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe left - next tab
                    this.handleSwipeLeft();
                } else {
                    // Swipe right - previous tab
                    this.handleSwipeRight();
                }
            }
            
            startX = 0;
            startY = 0;
        });
    }
    
    // Handle swipe left gesture
    handleSwipeLeft() {
        const marketTabs = document.querySelectorAll('.market-tab');
        const activeTab = document.querySelector('.market-tab.active');
        const currentIndex = Array.from(marketTabs).indexOf(activeTab);
        
        if (currentIndex < marketTabs.length - 1) {
            marketTabs[currentIndex + 1].click();
        }
    }
    
    // Handle swipe right gesture
    handleSwipeRight() {
        const marketTabs = document.querySelectorAll('.market-tab');
        const activeTab = document.querySelector('.market-tab.active');
        const currentIndex = Array.from(marketTabs).indexOf(activeTab);
        
        if (currentIndex > 0) {
            marketTabs[currentIndex - 1].click();
        }
    }
    
    // Mobile order panel enhancements
    initializeMobileOrderPanel() {
        const orderPanel = document.querySelector('.order-panel');
        if (!orderPanel) return;
        
        // Add mobile-specific order validation
        const quantityInputs = orderPanel.querySelectorAll('input[type="number"]');
        quantityInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                const min = parseFloat(e.target.min) || 0;
                const max = parseFloat(e.target.max) || Infinity;
                
                if (value < min) {
                    e.target.value = min;
                } else if (value > max) {
                    e.target.value = max;
                }
            });
        });
        
        // Add haptic feedback simulation
        const orderButtons = orderPanel.querySelectorAll('.btn-primary, .btn-secondary');
        orderButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Simulate haptic feedback
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
                
                // Visual feedback
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = '';
                }, 100);
            });
        });
    }
    
    // Quick action buttons for mobile
    initializeQuickActions() {
        const quickActionBtns = document.querySelectorAll('.quick-action-btn');
        
        quickActionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const action = btn.dataset.action;
                this.handleQuickAction(action);
            });
        });
    }
    
    // Handle quick actions
    handleQuickAction(action) {
        const symbol = document.querySelector('.symbol-display')?.textContent || 'BTC/USD';
        const currentPrice = parseFloat(document.querySelector('.price-display')?.textContent.replace(/[$,]/g, '')) || 43567.89;
        
        switch (action) {
            case 'buy':
                this.showMobileOrderModal('buy', symbol, currentPrice);
                break;
            case 'sell':
                this.showMobileOrderModal('sell', symbol, currentPrice);
                break;
            case 'close':
                this.closeAllPositions();
                break;
            case 'reverse':
                this.reversePosition(symbol);
                break;
        }
    }
    
    // Show mobile order modal
    showMobileOrderModal(type, symbol, price) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="modal-content bg-gray-800 rounded-lg p-4 m-4 max-w-sm w-full">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-white">${type.toUpperCase()} ${symbol}</h3>
                    <button class="close-modal text-gray-400 hover:text-white">&times;</button>
                </div>
                <div class="mb-4">
                    <p class="text-sm text-gray-400">Current Price: <span class="text-white font-mono">$${price.toLocaleString()}</span></p>
                </div>
                <div class="mb-4">
                    <label class="block text-sm text-gray-400 mb-2">Quantity</label>
                    <input type="number" class="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white" placeholder="0.00" step="0.01">
                </div>
                <div class="flex gap-2">
                    <button class="flex-1 btn-primary py-2 rounded">${type.toUpperCase()}</button>
                    <button class="flex-1 btn-secondary py-2 rounded close-modal">Cancel</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal handlers
        modal.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
    
    // Close all positions
    closeAllPositions() {
        if (confirm('Close all open positions?')) {
            this.showNotification('All positions closed successfully', 'success');
        }
    }
    
    // Reverse position
    reversePosition(symbol) {
        this.showNotification(`Position reversed for ${symbol}`, 'success');
    }
    
    // Show mobile notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 z-50 p-3 rounded-lg text-white max-w-sm ${
            type === 'success' ? 'bg-green-600' : 
            type === 'error' ? 'bg-red-600' : 'bg-blue-600'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.transition = 'transform 0.3s ease';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Generate performance data
    generatePerformanceData(dates, startValue, volatility = 1.0) {
        let currentValue = startValue;
        const data = [startValue];
        
        for (let i = 1; i < dates.length; i++) {
            const change = (Math.random() - 0.5) * 0.02 * volatility;
            currentValue *= (1 + change);
            data.push(currentValue.toFixed(2));
        }
        
        return data;
    }
}

// Initialize the platform when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.axentiaPlatform = new AxentiaTradingPlatform();
});

// Handle page navigation
window.addEventListener('beforeunload', () => {
    // Clean up charts and event listeners
    if (window.axentiaPlatform) {
        Object.values(window.axentiaPlatform.charts).forEach(chart => {
            if (chart && chart.dispose) {
                chart.dispose();
            }
        });
    }
});