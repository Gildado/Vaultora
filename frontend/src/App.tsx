import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Leaderboard from './components/Leaderboard'
import NFTBadges from './components/NFTBadges'
import WalletConnect from './components/WalletConnect'
import LandingHero from './components/LandingHero'

type Page = 'home' | 'dashboard' | 'leaderboard' | 'badges'

function App() {
    const [currentPage, setCurrentPage] = useState<Page>('home')
    const [walletConnected, setWalletConnected] = useState(false)
    const [walletAddress, setWalletAddress] = useState<string>('')
    const [showWalletModal, setShowWalletModal] = useState(false)

    const handleWalletConnect = (address: string) => {
        setWalletAddress(address)
        setWalletConnected(true)
        setShowWalletModal(false)
        setCurrentPage('dashboard')
    }

    const handleDisconnect = () => {
        setWalletAddress('')
        setWalletConnected(false)
        setCurrentPage('home')
    }

    const handleLaunchApp = () => {
        if (walletConnected) {
            setCurrentPage('dashboard')
        } else {
            setShowWalletModal(true)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar
                currentPage={currentPage}
                onNavigate={setCurrentPage}
                walletConnected={walletConnected}
                walletAddress={walletAddress}
                onConnectWallet={() => setShowWalletModal(true)}
                onDisconnect={handleDisconnect}
            />

            <main className="flex-1">
                {currentPage === 'home' && (
                    <LandingHero onLaunchApp={handleLaunchApp} />
                )}
                {currentPage === 'dashboard' && walletConnected && (
                    <Dashboard walletAddress={walletAddress} />
                )}
                {currentPage === 'leaderboard' && (
                    <Leaderboard />
                )}
                {currentPage === 'badges' && (
                    <NFTBadges walletAddress={walletAddress} />
                )}
            </main>

            {showWalletModal && (
                <WalletConnect
                    onConnect={handleWalletConnect}
                    onClose={() => setShowWalletModal(false)}
                />
            )}
        </div>
    )
}

export default App
