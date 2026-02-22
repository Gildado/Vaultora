import { ArrowRight, Flame, TrendingUp, Shield, Zap, Star, Users } from 'lucide-react'

interface LandingHeroProps {
    onLaunchApp: () => void
}

const stats = [
    { label: 'Total Value Locked', value: '$1.2M+', icon: <TrendingUp size={20} className="text-brand-400" /> },
    { label: 'Active Streakers', value: '8,400+', icon: <Users size={20} className="text-accent-purple" /> },
    { label: 'Avg Streak', value: '18 days', icon: <Flame size={20} className="text-streak-fire" /> },
    { label: 'Yield Distributed', value: '$48K+', icon: <Star size={20} className="text-accent-gold" /> },
]

const features = [
    {
        icon: <Flame size={24} className="text-streak-fire" />,
        title: 'Streak-Boosted Yield',
        description: 'Deposit daily and watch your yield multiplier grow. A 30-day streak earns 9.2% APY vs the base 8%.',
        gradient: 'from-orange-500/20 to-yellow-500/10',
    },
    {
        icon: <Shield size={24} className="text-brand-400" />,
        title: 'Streak Insurance',
        description: 'Stake STRK tokens to protect your streak from a single missed day. Never lose your hard-earned multiplier.',
        gradient: 'from-brand-500/20 to-accent-purple/10',
    },
    {
        icon: <Star size={24} className="text-accent-gold" />,
        title: 'NFT Achievement Badges',
        description: 'Earn on-chain proof of your dedication. 7-Day Warrior, 30-Day Beast, and 100-Day Legend badges await.',
        gradient: 'from-yellow-500/20 to-orange-500/10',
    },
    {
        icon: <Zap size={24} className="text-accent-cyan" />,
        title: 'XP & Level Progression',
        description: 'Earn XP on every deposit, milestone, and referral. Rise from Bronze to Diamond and unlock exclusive perks.',
        gradient: 'from-cyan-500/20 to-brand-500/10',
    },
]

const streakTable = [
    { days: '1–6 days', multiplier: '1.00×', apy: '8.00%', color: 'text-white/60' },
    { days: '7 days', multiplier: '1.05×', apy: '8.40%', color: 'text-accent-green' },
    { days: '30 days', multiplier: '1.15×', apy: '9.20%', color: 'text-accent-cyan' },
    { days: '100 days', multiplier: '1.40×', apy: '11.20%', color: 'text-accent-gold' },
]

export default function LandingHero({ onLaunchApp }: LandingHeroProps) {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-streak-fire/8 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8 animate-pulse-slow">
                        <Zap size={14} />
                        Built on Stellar Soroban
                    </div>

                    {/* Headline */}
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
                        Save Daily.
                        <br />
                        <span className="text-gradient-brand">Earn More.</span>
                        <br />
                        <span className="text-gradient-streak">Level Up.</span>
                    </h1>

                    <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Vaultora turns your savings habit into an addictive game. Deposit daily,
                        build streaks, and unlock multiplied DeFi yields — all powered by Soroban smart contracts.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onLaunchApp}
                            className="btn-primary text-lg py-4 px-8 shadow-glow-brand"
                        >
                            Launch App
                            <ArrowRight size={20} />
                        </button>
                        <a
                            href="https://github.com/your-org/Vaultora"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-lg py-4 px-8"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>

                {/* Floating streak display */}
                <div className="relative mt-16 animate-float">
                    <div className="glass-card p-6 flex items-center gap-4 shadow-glow-streak">
                        <div className="text-5xl animate-streak-fire">🔥</div>
                        <div className="text-left">
                            <p className="text-white/50 text-sm">Current Streak</p>
                            <p className="font-display text-3xl font-black text-white">30 Days</p>
                            <p className="text-accent-green text-sm font-semibold">+15% yield boost active</p>
                        </div>
                        <div className="ml-4 pl-4 border-l border-white/[0.1]">
                            <p className="text-white/50 text-sm">Effective APY</p>
                            <p className="font-display text-2xl font-bold text-gradient-gold">9.20%</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="border-y border-white/[0.06] bg-white/[0.02] py-8 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="flex justify-center mb-2">{stat.icon}</div>
                            <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                            <p className="text-white/50 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-14">
                    <h2 className="font-display text-4xl font-bold text-white mb-4">Why Vaultora?</h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        We combined behavioral psychology with DeFi mechanics to make saving irresistible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature) => (
                        <div key={feature.title} className={`glass-card-hover p-8 bg-gradient-to-br ${feature.gradient}`}>
                            <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="font-display text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Streak Multiplier Table */}
            <section className="max-w-4xl mx-auto px-4 pb-20">
                <div className="glass-card p-8">
                    <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Streak Multiplier Table</h2>
                    <p className="text-white/50 text-center mb-8 text-sm">Base APY: 8% | The longer your streak, the more you earn</p>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/[0.1]">
                                    <th className="text-left py-3 px-4 text-white/40 text-sm font-medium">Streak Length</th>
                                    <th className="text-center py-3 px-4 text-white/40 text-sm font-medium">Multiplier</th>
                                    <th className="text-right py-3 px-4 text-white/40 text-sm font-medium">Effective APY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {streakTable.map((row, i) => (
                                    <tr key={row.days} className={`border-b border-white/[0.05] ${i === streakTable.length - 1 ? '' : ''}`}>
                                        <td className="py-4 px-4 text-white font-medium">{row.days}</td>
                                        <td className={`py-4 px-4 text-center font-bold ${row.color}`}>{row.multiplier}</td>
                                        <td className={`py-4 px-4 text-right font-display font-bold text-lg ${row.color}`}>{row.apy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 text-center">
                        <button onClick={onLaunchApp} className="btn-primary">
                            Start Your Streak Today
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/[0.06] py-8 px-4 text-center text-white/30 text-sm">
                <p>© 2025 Vaultora · Built on <span className="text-brand-400">Stellar Soroban</span> · MIT License</p>
            </footer>
        </div>
    )
}
