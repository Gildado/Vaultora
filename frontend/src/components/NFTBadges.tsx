import { Star, Lock } from 'lucide-react'

interface NFTBadgesProps {
    walletAddress: string
}

interface Badge {
    id: string
    name: string
    description: string
    emoji: string
    streakRequired: number
    earned: boolean
    earnedDate?: string
    rarity: 'Common' | 'Rare' | 'Legendary'
    gradient: string
    borderColor: string
    glowColor: string
}

const badges: Badge[] = [
    {
        id: 'warrior',
        name: '7-Day Warrior',
        description: 'Maintained a 7-day consecutive deposit streak.',
        emoji: '🗡️',
        streakRequired: 7,
        earned: true,
        earnedDate: 'Feb 1, 2025',
        rarity: 'Common',
        gradient: 'from-emerald-500/20 to-green-500/10',
        borderColor: 'border-emerald-500/40',
        glowColor: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
    },
    {
        id: 'beast',
        name: '30-Day Beast',
        description: 'Survived 30 days of consistent daily saving.',
        emoji: '🐉',
        streakRequired: 30,
        earned: true,
        earnedDate: 'Feb 22, 2025',
        rarity: 'Rare',
        gradient: 'from-brand-500/20 to-accent-purple/10',
        borderColor: 'border-brand-500/40',
        glowColor: 'shadow-[0_0_25px_rgba(99,102,241,0.4)]',
    },
    {
        id: 'legend',
        name: '100-Day Legend',
        description: 'Achieved elite status with a 100-day unbroken streak.',
        emoji: '🏆',
        streakRequired: 100,
        earned: false,
        rarity: 'Legendary',
        gradient: 'from-yellow-500/10 to-orange-500/5',
        borderColor: 'border-yellow-500/20',
        glowColor: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]',
    },
    {
        id: 'early-adopter',
        name: 'Early Adopter',
        description: 'One of the first 1,000 users on StellarStreak.',
        emoji: '⚡',
        streakRequired: 0,
        earned: true,
        earnedDate: 'Jan 15, 2025',
        rarity: 'Rare',
        gradient: 'from-cyan-500/20 to-blue-500/10',
        borderColor: 'border-cyan-500/40',
        glowColor: 'shadow-[0_0_20px_rgba(34,211,238,0.3)]',
    },
    {
        id: 'referral-king',
        name: 'Referral King',
        description: 'Successfully referred 5 active users to the protocol.',
        emoji: '👑',
        streakRequired: 0,
        earned: false,
        rarity: 'Legendary',
        gradient: 'from-purple-500/10 to-pink-500/5',
        borderColor: 'border-purple-500/20',
        glowColor: '',
    },
    {
        id: 'diamond-hands',
        name: 'Diamond Hands',
        description: 'Held savings without withdrawal for 90 days.',
        emoji: '💎',
        streakRequired: 90,
        earned: false,
        rarity: 'Rare',
        gradient: 'from-sky-500/10 to-indigo-500/5',
        borderColor: 'border-sky-500/20',
        glowColor: '',
    },
]

const rarityColors: Record<string, string> = {
    Common: 'text-accent-green bg-accent-green/10 border-accent-green/20',
    Rare: 'text-brand-400 bg-brand-500/10 border-brand-500/20',
    Legendary: 'text-accent-gold bg-accent-gold/10 border-accent-gold/20',
}

export default function NFTBadges({ walletAddress: _walletAddress }: NFTBadgesProps) {
    const earned = badges.filter((b) => b.earned)
    const locked = badges.filter((b) => !b.earned)

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 animate-fade-in">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-sm font-medium mb-4">
                    <Star size={14} />
                    Achievement Badges
                </div>
                <h1 className="font-display text-4xl font-bold text-white mb-2">NFT Badges</h1>
                <p className="text-white/50">On-chain proof of your dedication. Tradeable on Stellar's NFT Marketplace.</p>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto">
                <div className="glass-card p-4 text-center">
                    <p className="font-display text-3xl font-black text-white">{earned.length}</p>
                    <p className="text-white/40 text-xs mt-1">Earned</p>
                </div>
                <div className="glass-card p-4 text-center">
                    <p className="font-display text-3xl font-black text-white/30">{locked.length}</p>
                    <p className="text-white/40 text-xs mt-1">Locked</p>
                </div>
                <div className="glass-card p-4 text-center">
                    <p className="font-display text-3xl font-black text-accent-gold">{badges.length}</p>
                    <p className="text-white/40 text-xs mt-1">Total</p>
                </div>
            </div>

            {/* Earned */}
            <h2 className="section-title mb-4">✅ Earned Badges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {earned.map((badge) => (
                    <div
                        key={badge.id}
                        className={`glass-card-hover p-6 bg-gradient-to-br ${badge.gradient} border ${badge.borderColor} ${badge.glowColor} relative overflow-hidden`}
                    >
                        <div className="absolute top-3 right-3">
                            <span className={`badge border ${rarityColors[badge.rarity]} text-xs`}>{badge.rarity}</span>
                        </div>

                        <div className="text-5xl mb-4 animate-float inline-block">{badge.emoji}</div>
                        <h3 className="font-display text-lg font-bold text-white mb-1">{badge.name}</h3>
                        <p className="text-white/50 text-sm mb-4 leading-relaxed">{badge.description}</p>

                        <div className="flex items-center justify-between">
                            <span className="text-white/30 text-xs">Earned {badge.earnedDate}</span>
                            <button className="text-xs btn-ghost py-1 px-2">Trade →</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Locked */}
            <h2 className="section-title mb-4 flex items-center gap-2">
                <Lock size={20} className="text-white/40" />
                <span className="text-white/60">Locked Badges</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {locked.map((badge) => (
                    <div
                        key={badge.id}
                        className={`glass-card p-6 bg-gradient-to-br ${badge.gradient} border ${badge.borderColor} opacity-50 relative`}
                    >
                        <div className="absolute top-3 right-3">
                            <span className={`badge border ${rarityColors[badge.rarity]} text-xs`}>{badge.rarity}</span>
                        </div>

                        <div className="text-5xl mb-4 grayscale">{badge.emoji}</div>
                        <h3 className="font-display text-lg font-bold text-white mb-1">{badge.name}</h3>
                        <p className="text-white/40 text-sm mb-4 leading-relaxed">{badge.description}</p>

                        {badge.streakRequired > 0 && (
                            <div className="flex items-center gap-1.5 text-white/30 text-xs">
                                <Lock size={12} />
                                Requires {badge.streakRequired}-day streak
                            </div>
                        )}

                        {badge.streakRequired === 0 && (
                            <div className="flex items-center gap-1.5 text-white/30 text-xs">
                                <Lock size={12} />
                                Complete challenge to unlock
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
