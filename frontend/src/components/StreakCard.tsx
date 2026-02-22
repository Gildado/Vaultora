import { Flame, Calendar, TrendingUp } from 'lucide-react'

interface StreakCardProps {
    streak: number
    multiplier: number
    deadline: string
}

const milestones = [
    { days: 7, label: '7-Day Warrior', emoji: '🗡️', color: 'bg-accent-green/20 border-accent-green/40 text-accent-green' },
    { days: 30, label: '30-Day Beast', emoji: '🐉', color: 'bg-brand-500/20 border-brand-500/40 text-brand-400' },
    { days: 100, label: '100-Day Legend', emoji: '🏆', color: 'bg-accent-gold/20 border-accent-gold/40 text-accent-gold' },
]

export default function StreakCard({ streak, multiplier, deadline }: StreakCardProps) {
    const nextMilestone = milestones.find((m) => m.days > streak) || milestones[milestones.length - 1]
    const prevMilestone = milestones.filter((m) => m.days <= streak).pop()
    const progressStart = prevMilestone?.days ?? 0
    const progressEnd = nextMilestone.days
    const progress = Math.min(((streak - progressStart) / (progressEnd - progressStart)) * 100, 100)

    // Build a 7-day grid
    const last7 = Array.from({ length: 7 }, (_, i) => ({
        day: i + 1,
        active: i < Math.min(streak, 7),
    }))

    return (
        <div className="glass-card p-6">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Current Streak</p>
                    <div className="flex items-end gap-2">
                        <span className="font-display text-6xl font-black text-white leading-none">{streak}</span>
                        <span className="font-display text-2xl font-bold text-white/40 mb-1">days</span>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-5xl animate-streak-fire mb-1">🔥</div>
                    <div className="flex items-center gap-1 justify-end">
                        <TrendingUp size={13} className="text-accent-green" />
                        <span className="text-accent-green font-bold text-sm">{multiplier}× multiplier</span>
                    </div>
                </div>
            </div>

            {/* 7-day dot grid */}
            <div className="mb-6">
                <p className="text-white/40 text-xs font-medium mb-3 flex items-center gap-1">
                    <Calendar size={12} />
                    Last 7 days
                </p>
                <div className="flex gap-2">
                    {last7.map((d) => (
                        <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                            <div
                                className={`w-full aspect-square rounded-lg flex items-center justify-center transition-all duration-300 ${d.active
                                        ? 'bg-gradient-streak shadow-glow-streak'
                                        : 'bg-white/[0.06] border border-white/[0.08]'
                                    }`}
                            >
                                {d.active ? (
                                    <Flame size={14} className="text-white" />
                                ) : (
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                )}
                            </div>
                            <span className="text-white/30 text-xs">D{d.day}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Progress to next milestone */}
            <div>
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/50">Progress to {nextMilestone.emoji} {nextMilestone.label}</span>
                    <span className="text-white/70 font-semibold">{streak}/{nextMilestone.days}</span>
                </div>
                <div className="progress-bar h-3">
                    <div
                        className="progress-fill bg-gradient-streak"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-white/30 text-xs mt-1.5">{nextMilestone.days - streak} more days until next badge</p>
            </div>

            {/* Achieved badges */}
            {prevMilestone && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {milestones
                        .filter((m) => m.days <= streak)
                        .map((m) => (
                            <span key={m.days} className={`badge border ${m.color}`}>
                                {m.emoji} {m.label}
                            </span>
                        ))}
                </div>
            )}
        </div>
    )
}
