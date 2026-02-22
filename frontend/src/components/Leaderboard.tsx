import { Trophy, Flame, TrendingUp, Medal } from 'lucide-react'

interface LeaderEntry {
    rank: number
    address: string
    streak: number
    tvl: number
    xp: number
    level: string
    levelEmoji: string
}

const leaderboardData: LeaderEntry[] = [
    { rank: 1, address: 'GAXYZ...4N2P', streak: 142, tvl: 12500, xp: 18200, level: 'Diamond', levelEmoji: '💎' },
    { rank: 2, address: 'GBQWK...7RTM', streak: 118, tvl: 8750, xp: 14500, level: 'Diamond', levelEmoji: '💎' },
    { rank: 3, address: 'GCPLA...2FVX', streak: 95, tvl: 5200, xp: 11800, level: 'Gold', levelEmoji: '🥇' },
    { rank: 4, address: 'GDNRT...9KJW', streak: 82, tvl: 4100, xp: 9600, level: 'Gold', levelEmoji: '🥇' },
    { rank: 5, address: 'GEYP3...1BCS', streak: 67, tvl: 3200, xp: 7200, level: 'Gold', levelEmoji: '🥇' },
    { rank: 6, address: 'GFWMQ...5ZLT', streak: 55, tvl: 2800, xp: 5900, level: 'Silver', levelEmoji: '🥈' },
    { rank: 7, address: 'GGKSR...8YHN', streak: 44, tvl: 2100, xp: 4800, level: 'Silver', levelEmoji: '🥈' },
    { rank: 8, address: 'GHAZT...3PDE', streak: 38, tvl: 1750, xp: 4100, level: 'Silver', levelEmoji: '🥈' },
    { rank: 9, address: 'GIJRW...6QKF', streak: 31, tvl: 1400, xp: 3500, level: 'Silver', levelEmoji: '🥈' },
    { rank: 10, address: 'GJMXV...0TGA', streak: 27, tvl: 980, xp: 2900, level: 'Silver', levelEmoji: '🥈' },
]

const rankStyles: Record<number, string> = {
    1: 'text-yellow-400',
    2: 'text-slate-300',
    3: 'text-orange-400',
}

const rankBg: Record<number, string> = {
    1: 'bg-yellow-500/10 border-yellow-500/20',
    2: 'bg-slate-400/10 border-slate-400/20',
    3: 'bg-orange-500/10 border-orange-500/20',
}

const rankMedals: Record<number, string> = {
    1: '🥇', 2: '🥈', 3: '🥉',
}

export default function Leaderboard() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 animate-fade-in">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-sm font-medium mb-4">
                    <Trophy size={14} />
                    Global Rankings
                </div>
                <h1 className="font-display text-4xl font-bold text-white mb-2">Leaderboard</h1>
                <p className="text-white/50">The most dedicated savers on StellarStreak</p>
            </div>

            {/* Top 3 Podium */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                {/* 2nd place */}
                <div className={`glass-card p-4 text-center border ${rankBg[2]} flex flex-col justify-end mt-8`}>
                    <div className="text-3xl mb-2">🥈</div>
                    <p className="text-slate-300 font-display font-bold text-lg">2nd</p>
                    <p className="text-white/50 text-xs font-mono">{leaderboardData[1].address}</p>
                    <p className="text-white font-semibold mt-1">{leaderboardData[1].streak}🔥 days</p>
                </div>

                {/* 1st place */}
                <div className={`glass-card p-6 text-center border ${rankBg[1]} ring-2 ring-yellow-500/30`}>
                    <div className="text-5xl mb-2 animate-bounce-slow">👑</div>
                    <p className="text-yellow-400 font-display font-bold text-xl">1st</p>
                    <p className="text-white/50 text-xs font-mono">{leaderboardData[0].address}</p>
                    <p className="text-white font-semibold mt-1">{leaderboardData[0].streak}🔥 days</p>
                </div>

                {/* 3rd place */}
                <div className={`glass-card p-4 text-center border ${rankBg[3]} flex flex-col justify-end mt-8`}>
                    <div className="text-3xl mb-2">🥉</div>
                    <p className="text-orange-400 font-display font-bold text-lg">3rd</p>
                    <p className="text-white/50 text-xs font-mono">{leaderboardData[2].address}</p>
                    <p className="text-white font-semibold mt-1">{leaderboardData[2].streak}🔥 days</p>
                </div>
            </div>

            {/* Full Table */}
            <div className="glass-card overflow-hidden">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/[0.08] text-xs font-medium text-white/40 uppercase tracking-wider">
                    <div className="col-span-1">#</div>
                    <div className="col-span-4">Wallet</div>
                    <div className="col-span-2 text-center">Streak</div>
                    <div className="col-span-2 text-center">TVL</div>
                    <div className="col-span-2 text-center">XP</div>
                    <div className="col-span-1 text-center">Level</div>
                </div>

                {leaderboardData.map((entry) => (
                    <div
                        key={entry.rank}
                        className={`grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/[0.05] last:border-0 hover:bg-white/[0.03] transition-colors ${entry.rank <= 3 ? 'bg-gradient-to-r from-transparent' : ''
                            }`}
                    >
                        <div className="col-span-1 flex items-center">
                            {rankMedals[entry.rank] ? (
                                <span className="text-xl">{rankMedals[entry.rank]}</span>
                            ) : (
                                <span className={`font-bold text-sm ${rankStyles[entry.rank] || 'text-white/40'}`}>
                                    {entry.rank}
                                </span>
                            )}
                        </div>

                        <div className="col-span-4 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center mr-3 shrink-0">
                                <span className="text-xs font-bold">{entry.levelEmoji}</span>
                            </div>
                            <span className="text-white font-mono text-sm">{entry.address}</span>
                        </div>

                        <div className="col-span-2 flex items-center justify-center gap-1">
                            <Flame size={14} className="text-streak-fire" />
                            <span className="text-white font-bold">{entry.streak}</span>
                        </div>

                        <div className="col-span-2 flex items-center justify-center">
                            <span className="text-white/70">${(entry.tvl / 1000).toFixed(1)}K</span>
                        </div>

                        <div className="col-span-2 flex items-center justify-center gap-1">
                            <TrendingUp size={12} className="text-brand-400" />
                            <span className="text-brand-400 font-medium">{(entry.xp / 1000).toFixed(1)}K</span>
                        </div>

                        <div className="col-span-1 flex items-center justify-center">
                            <span title={entry.level}>{entry.levelEmoji}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-center">
                <p className="text-white/30 text-sm flex items-center justify-center gap-1">
                    <Medal size={14} />
                    Updated every 10 minutes · 8,400+ active participants
                </p>
            </div>
        </div>
    )
}
