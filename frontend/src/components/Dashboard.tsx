import { useState } from 'react'
import {
    ArrowDownCircle, ArrowUpCircle, Flame, Zap, TrendingUp,
    Clock, ChevronDown, Info
} from 'lucide-react'
import StreakCard from './StreakCard'

interface DashboardProps {
    walletAddress: string
}

// Mock data — replace with real contract calls
const mockData = {
    balance: 1_250.00,
    yieldEarned: 42.18,
    streak: 30,
    multiplier: 1.15,
    baseApy: 8,
    effectiveApy: 9.2,
    xp: 1840,
    level: 'Silver',
    nextLevel: 'Gold',
    xpToNextLevel: 2000,
    streakDeadline: '21h 34m',
    depositHistory: [
        { date: 'Feb 22', amount: 50, status: 'success' },
        { date: 'Feb 21', amount: 50, status: 'success' },
        { date: 'Feb 20', amount: 75, status: 'success' },
        { date: 'Feb 19', amount: 50, status: 'success' },
        { date: 'Feb 18', amount: 100, status: 'success' },
    ],
}

const levelColors: Record<string, string> = {
    Bronze: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    Silver: 'text-slate-300 bg-slate-400/10 border-slate-400/30',
    Gold: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    Diamond: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
}

const levelEmojis: Record<string, string> = {
    Bronze: '🥉', Silver: '🥈', Gold: '🥇', Diamond: '💎'
}

export default function Dashboard({ walletAddress }: DashboardProps) {
    const [depositAmount, setDepositAmount] = useState('')
    const [withdrawAmount, setWithdrawAmount] = useState('')
    const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw'>('deposit')
    const [txLoading, setTxLoading] = useState(false)

    const shortAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    const xpPercent = (mockData.xp / mockData.xpToNextLevel) * 100

    const handleAction = () => {
        setTxLoading(true)
        setTimeout(() => setTxLoading(false), 2000)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="font-display text-3xl font-bold text-white">Dashboard</h1>
                    <p className="text-white/40 text-sm mt-1 font-mono">{shortAddress}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent-green/10 border border-accent-green/20">
                    <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    <span className="text-accent-green text-sm font-medium">Testnet Connected</span>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Streak + Stats */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Streak Timer Banner */}
                    <div className="glass-card p-4 flex items-center justify-between bg-gradient-to-r from-streak-fire/10 to-streak-glow/5 border-streak-fire/20">
                        <div className="flex items-center gap-3">
                            <div className="text-3xl animate-streak-fire">🔥</div>
                            <div>
                                <p className="text-white font-semibold">Streak Window Closing</p>
                                <p className="text-white/50 text-sm">Deposit to keep your 30-day streak alive</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center gap-1.5 text-streak-fire font-display font-bold text-xl">
                                <Clock size={16} />
                                {mockData.streakDeadline}
                            </div>
                            <p className="text-white/40 text-xs">remaining</p>
                        </div>
                    </div>

                    {/* Streak Card */}
                    <StreakCard streak={mockData.streak} multiplier={mockData.multiplier} deadline={mockData.streakDeadline} />

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="stat-card">
                            <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Balance</p>
                            <p className="font-display text-2xl font-bold text-white">${mockData.balance.toLocaleString()}</p>
                            <p className="text-white/30 text-xs">USDC</p>
                        </div>
                        <div className="stat-card">
                            <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Yield Earned</p>
                            <p className="font-display text-2xl font-bold text-accent-green">+${mockData.yieldEarned}</p>
                            <p className="text-white/30 text-xs">All time</p>
                        </div>
                        <div className="stat-card">
                            <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Effective APY</p>
                            <p className="font-display text-2xl font-bold text-gradient-gold">{mockData.effectiveApy}%</p>
                            <div className="flex items-center gap-1">
                                <TrendingUp size={12} className="text-accent-green" />
                                <p className="text-accent-green text-xs">vs {mockData.baseApy}% base</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Level</p>
                            <p className="font-display text-2xl font-bold text-white">
                                {levelEmojis[mockData.level]} {mockData.level}
                            </p>
                            <p className="text-white/30 text-xs">{mockData.xp} XP</p>
                        </div>
                    </div>

                    {/* XP Progress */}
                    <div className="glass-card p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Zap size={18} className="text-brand-400" />
                                <span className="font-semibold text-white">XP Progress</span>
                            </div>
                            <span className={`badge border ${levelColors[mockData.level]}`}>
                                {levelEmojis[mockData.level]} {mockData.level}
                            </span>
                        </div>

                        <div className="flex justify-between text-sm text-white/50 mb-2">
                            <span>{mockData.xp} XP</span>
                            <span>{mockData.xpToNextLevel} XP → {levelEmojis[mockData.nextLevel]} {mockData.nextLevel}</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill bg-gradient-to-r from-brand-500 to-accent-purple"
                                style={{ width: `${xpPercent}%` }}
                            />
                        </div>
                        <p className="text-white/30 text-xs mt-2">{mockData.xpToNextLevel - mockData.xp} XP until {mockData.nextLevel}</p>
                    </div>

                    {/* Recent Deposits */}
                    <div className="glass-card p-6">
                        <h3 className="font-display font-bold text-white mb-4">Recent Deposits</h3>
                        <div className="space-y-3">
                            {mockData.depositHistory.map((tx, i) => (
                                <div key={i} className="flex items-center justify-between py-2 border-b border-white/[0.05] last:border-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-accent-green/10 flex items-center justify-center">
                                            <ArrowDownCircle size={16} className="text-accent-green" />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-medium">Deposit</p>
                                            <p className="text-white/40 text-xs">{tx.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white font-semibold text-sm">+${tx.amount} USDC</p>
                                        <p className="text-accent-green text-xs">+10 XP</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Deposit/Withdraw Panel */}
                <div className="space-y-6">
                    {/* Action Panel */}
                    <div className="glass-card p-6">
                        {/* Tabs */}
                        <div className="flex gap-1 p-1 rounded-lg bg-black/20 mb-6">
                            {(['deposit', 'withdraw'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${activeTab === tab
                                            ? 'bg-brand-500 text-white shadow'
                                            : 'text-white/40 hover:text-white/70'
                                        }`}
                                >
                                    {tab === 'deposit' ? '↓ Deposit' : '↑ Withdraw'}
                                </button>
                            ))}
                        </div>

                        {activeTab === 'deposit' ? (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-white/50 text-sm mb-2">Amount (USDC)</label>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        value={depositAmount}
                                        onChange={(e) => setDepositAmount(e.target.value)}
                                        className="input-field text-xl font-display font-bold"
                                    />
                                </div>

                                <div className="flex gap-2">
                                    {[25, 50, 100, 250].map((preset) => (
                                        <button
                                            key={preset}
                                            onClick={() => setDepositAmount(String(preset))}
                                            className="flex-1 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/60 text-xs hover:bg-white/[0.1] hover:text-white transition-all"
                                        >
                                            ${preset}
                                        </button>
                                    ))}
                                </div>

                                {/* Yield preview */}
                                {depositAmount && (
                                    <div className="p-3 rounded-xl bg-accent-green/8 border border-accent-green/20">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-white/50">Estimated Annual Yield</span>
                                            <span className="text-accent-green font-semibold">
                                                +${((parseFloat(depositAmount) || 0) * mockData.effectiveApy / 100).toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/50">APY (with streak)</span>
                                            <span className="text-white font-semibold">{mockData.effectiveApy}%</span>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center gap-2 p-3 rounded-xl bg-brand-500/8 border border-brand-500/20">
                                    <Flame size={14} className="text-streak-fire" />
                                    <p className="text-white/60 text-xs">
                                        This deposit will extend your <span className="text-streak-fire font-semibold">30-day streak</span>
                                    </p>
                                </div>

                                <button
                                    onClick={handleAction}
                                    disabled={!depositAmount || txLoading}
                                    className="btn-primary w-full py-4 text-base"
                                >
                                    {txLoading ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Confirming...
                                        </span>
                                    ) : (
                                        <>
                                            <ArrowDownCircle size={18} />
                                            Deposit & Extend Streak
                                        </>
                                    )}
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-white/50 text-sm mb-2">Amount (USDC)</label>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        value={withdrawAmount}
                                        onChange={(e) => setWithdrawAmount(e.target.value)}
                                        className="input-field text-xl font-display font-bold"
                                    />
                                </div>

                                <div className="p-3 rounded-xl bg-orange-500/8 border border-orange-500/20 flex items-start gap-2">
                                    <Info size={14} className="text-orange-400 mt-0.5 shrink-0" />
                                    <p className="text-white/60 text-xs">
                                        Withdrawal fee: <span className="text-orange-400 font-semibold">0.3%</span>.
                                        Withdrawing will NOT reset your streak.
                                    </p>
                                </div>

                                <button
                                    onClick={handleAction}
                                    disabled={!withdrawAmount || txLoading}
                                    className="btn-secondary w-full py-4 text-base"
                                >
                                    {txLoading ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Confirming...
                                        </span>
                                    ) : (
                                        <>
                                            <ArrowUpCircle size={18} />
                                            Withdraw
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Streak Insurance CTA */}
                    <div className="glass-card p-6 bg-gradient-to-br from-brand-500/10 to-accent-purple/5">
                        <h3 className="font-display font-bold text-white mb-2 flex items-center gap-2">
                            🛡️ Streak Insurance
                        </h3>
                        <p className="text-white/50 text-sm mb-4">
                            Stake STRK tokens to protect your 30-day streak from 1 missed day.
                        </p>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-white/50 text-sm">Status</span>
                            <span className="badge bg-orange-500/10 text-orange-400 border border-orange-500/20">Inactive</span>
                        </div>
                        <button className="btn-secondary w-full text-sm">
                            Activate Insurance
                            <ChevronDown size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
