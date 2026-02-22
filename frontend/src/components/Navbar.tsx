import { Zap, BarChart2, Trophy, Star } from 'lucide-react'

type Page = 'home' | 'dashboard' | 'leaderboard' | 'badges'

interface NavbarProps {
    currentPage: Page
    onNavigate: (page: Page) => void
    walletConnected: boolean
    walletAddress: string
    onConnectWallet: () => void
    onDisconnect: () => void
}

export default function Navbar({
    currentPage,
    onNavigate,
    walletConnected,
    walletAddress,
    onConnectWallet,
    onDisconnect,
}: NavbarProps) {
    const navItems: { label: string; page: Page; icon: React.ReactNode }[] = [
        { label: 'Dashboard', page: 'dashboard', icon: <BarChart2 size={16} /> },
        { label: 'Leaderboard', page: 'leaderboard', icon: <Trophy size={16} /> },
        { label: 'Badges', page: 'badges', icon: <Star size={16} /> },
    ]

    const shortAddress = walletAddress
        ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`
        : ''

    return (
        <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-dark-950/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => onNavigate('home')}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-glow-brand group-hover:shadow-glow-purple transition-all duration-300">
                        <Zap size={16} className="text-white" />
                    </div>
                    <span className="font-display font-bold text-lg text-white">
                        Vaultora<span className="text-gradient-brand"></span>
                    </span>
                </button>

                {/* Nav links */}
                {walletConnected && (
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.page}
                                onClick={() => onNavigate(item.page)}
                                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentPage === item.page
                                        ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30'
                                        : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                                    }`}
                            >
                                {item.icon}
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* Wallet */}
                <div className="flex items-center gap-3">
                    {walletConnected ? (
                        <div className="flex items-center gap-2">
                            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.1]">
                                <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse-slow" />
                                <span className="text-sm font-mono text-white/80">{shortAddress}</span>
                            </div>
                            <button onClick={onDisconnect} className="btn-ghost text-sm">
                                Disconnect
                            </button>
                        </div>
                    ) : (
                        <button onClick={onConnectWallet} className="btn-primary text-sm py-2 px-4">
                            Connect Wallet
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}
