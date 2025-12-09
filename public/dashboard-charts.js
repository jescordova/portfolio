// Prevent multiple initializations
if (!window.dashboardChartsInitialized) {
    window.dashboardChartsInitialized = true;

    function initDashboardCharts() {
        // Check if Chart.js is loaded
        if (typeof Chart === 'undefined') {
            console.error('Chart.js not loaded');
            return;
        }

        // Revenue Chart
        const revenueCtx = document.getElementById('revenueChart');
        if (revenueCtx && !revenueCtx.dataset.initialized) {
            revenueCtx.dataset.initialized = 'true';

            new Chart(revenueCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
                    datasets: [{
                        label: 'Revenus (€)',
                        data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000, 32000, 40000, 38000, 45000],
                        borderColor: 'rgb(99, 102, 241)',
                        backgroundColor: 'rgba(99, 102, 241, 0.2)',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 3,
                        pointBackgroundColor: 'rgb(99, 102, 241)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        pointHoverRadius: 7
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                            titleColor: '#fff',
                            bodyColor: '#cbd5e1',
                            borderColor: 'rgba(99, 102, 241, 0.5)',
                            borderWidth: 1,
                            padding: 12,
                            displayColors: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)',
                                drawBorder: false
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.6)',
                                font: {
                                    size: 12
                                }
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)',
                                drawBorder: false
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.6)',
                                font: {
                                    size: 12
                                }
                            }
                        }
                    }
                }
            });
        }

        // Orders Chart
        const ordersCtx = document.getElementById('ordersChart');
        if (ordersCtx && !ordersCtx.dataset.initialized) {
            ordersCtx.dataset.initialized = 'true';

            new Chart(ordersCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Électronique', 'Vêtements', 'Maison', 'Sports', 'Livres'],
                    datasets: [{
                        data: [450, 280, 190, 150, 164],
                        backgroundColor: [
                            'rgb(99, 102, 241)',
                            'rgb(168, 85, 247)',
                            'rgb(236, 72, 153)',
                            'rgb(251, 146, 60)',
                            'rgb(34, 197, 94)'
                        ],
                        borderWidth: 0,
                        hoverOffset: 10
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: 'rgba(255, 255, 255, 0.8)',
                                padding: 20,
                                font: {
                                    size: 13
                                },
                                usePointStyle: true,
                                pointStyle: 'circle'
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                            titleColor: '#fff',
                            bodyColor: '#cbd5e1',
                            borderColor: 'rgba(99, 102, 241, 0.5)',
                            borderWidth: 1,
                            padding: 12
                        }
                    }
                }
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(initDashboardCharts, 300);
        });
    } else {
        setTimeout(initDashboardCharts, 300);
    }
}
