import { useState } from 'react'
import { X, Wallet, ExternalLink } from 'lucide-react'

interface WalletConnectProps {
    onConnect: (address: string) => void
    onClose: () => void
}

const wallets = [
    {
        id: 'freighter',
        name: 'Freighter',
        description: 'Most popular Stellar wallet',
        icon: '🚀',
        url: 'https://freighter.app',
    },
    {
        id: 'lobstr',
        name: 'LOBSTR',
        description: 'Simple & mobile-friendly',
        icon: '🦞',
        url: 'https://lobstr.co',
    },
    {
        id: 'xbull',
        name: 'xBull Wallet',
        description: 'Feature-rich DeFi wallet',
        icon: '🐂',
        url: 'https://xbull.app',
    },
    {
        id: 'demo',
        name: 'Demo Mode',
        description: 'Explore without a wallet',
        icon: '🎮',
        url: '',
    },
]

export default function WalletConnect({ onConnect, onClose }: WalletConnectProps) {
    const [connecting, setConnecting] = useState<string | null>(null)

    const handleConnect = async (walletId: string) => {
        setConnecting(walletId)

        // Simulate wallet connection — replace with real Stellar Wallets Kit integration
        await new Promise((r) => setTimeout(r, 1200))

        // Generate a mock address for demo purposes
        const mockAddr = 'G' + Array.from({ length: 55 }, () =>
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'[Math.floor(Math.random() * 32)]
        ).join('')

        onConnect(mockAddr)
        setConnecting(null)
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal */}
            <div className="relative glass-card w-full max-w-md p-8 animate-scale-in">
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 btn-ghost p-2 rounded-lg"
                >
                    <X size={18} />
                </button>

                <div className="text-center mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-4 shadow-glow-brand">
                        <Wallet size={24} className="text-white" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-white">Connect Wallet</h2>
                    <p className="text-white/50 text-sm mt-1">Choose your Stellar wallet to get started</p>
                </div>

                <div className="space-y-3">
                    {wallets.map((wallet) => (
                        <button
                            key={wallet.id}
                            onClick={() => handleConnect(wallet.id)}
                            disabled={!!connecting}
                            className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]
                         hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-glow-brand
                         transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                         active:scale-[0.99]"
                        >
                            <span className="text-3xl">{wallet.icon}</span>
                            <div className="flex-1 text-left">
                                <p className="text-white font-semibold">{wallet.name}</p>
                                <p className="text-white/40 text-sm">{wallet.description}</p>
                            </div>
                            {connecting === wallet.id ? (
                                <div className="w-5 h-5 border-2 border-brand-400/40 border-t-brand-400 rounded-full animate-spin" />
                            ) : wallet.url ? (
                                <ExternalLink size={14} className="text-white/20" />
                            ) : null}
                        </button>
                    ))}
                </div>

                <p className="text-white/25 text-xs text-center mt-6">
                    By connecting, you agree to our Terms of Service and Privacy Policy.
                    StellarStreak is non-custodial — your keys, your funds.
                </p>
            </div>
        </div>
    )
}
