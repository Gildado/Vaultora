<div align="center">

<br/>

<!-- Logo placeholder -->
<img src="https://img.shields.io/badge/StellarStreak-DeFi%20Savings-blueviolet?style=for-the-badge&logo=stellar&logoColor=white" alt="StellarStreak Logo" />

<h1>⚡ StellarStreak</h1>
<h3>Gamified DeFi Savings Protocol on Stellar Soroban</h3>

<p><em>Save consistently. Earn more. Level up.</em></p>

<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Built on Stellar](https://img.shields.io/badge/Built%20on-Stellar%20Soroban-black?style=flat-square&logo=stellar)](https://soroban.stellar.org)
[![Rust](https://img.shields.io/badge/Language-Rust-orange?style=flat-square&logo=rust)](https://www.rust-lang.org/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=flat-square&logo=react)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

<br />

[Overview](#-overview) • [Features](#-features) • [Architecture](#-architecture) • [Smart Contracts](#-smart-contracts) • [Tokenomics](#-tokenomics) • [Getting Started](#-getting-started) • [Frontend](#-frontend) • [Roadmap](#-roadmap) • [Contributing](#-contributing)

</div>

---

## 🌟 Overview

**Vaultora** is a gamified DeFi savings protocol built on the **Stellar blockchain** using **Soroban smart contracts**. It transforms the often-boring habit of saving money into an addictive, rewarding experience by combining DeFi yield mechanics with **streak-based behavioral psychology**.

The core idea is simple: **deposit daily, maintain your streak, and earn multiplied yield rewards**. Miss a day, and your streak — and your boosted rewards — reset. This creates a powerful behavioral incentive that drives consistent saving habits, especially appealing to Gen Z crypto users, African retail savers, and anyone who enjoys gamified experiences.

### 🎯 The Problem We Solve

| Problem | Vaultora's Solution |
|---|---|
| People struggle with consistent savings | Daily streak mechanics create accountability |
| DeFi lacks behavioral incentives | Yield multipliers reward consistency |
| Youth prefer gamified experiences | XP, NFT badges, leaderboards & levels |
| Complex DeFi UX alienates beginners | Simple, intuitive dashboard |
| Streak protection is expensive | Stake STRK tokens for streak insurance |

---

## ✨ Features

### 🏦 Core Savings Vault
- Deposit and withdraw stablecoins (USDC, etc.)
- Base APY earned on all deposits
- Non-custodial: users retain full control of their funds
- Gas-efficient Soroban smart contract architecture

### 🔥 Streak Engine
- **Daily deposit streaks** with configurable windows
- Automatic streak tracking on-chain
- **Yield multipliers** that scale with streak length:

| Streak Milestone | Yield Multiplier | Example (8% Base APY) |
|---|---|---|
| 1–6 days | 1.00× (baseline) | 8.00% |
| **7 days** | **+5% boost** | **8.40%** |
| **30 days** | **+15% boost** | **9.20%** |
| **100 days** | **+40% boost** | **11.20%** |

> 🧮 **Formula:** `Effective APY = Base APY × (1 + streak_multiplier)`

### 🎮 Gamification Layer

#### XP System
| Action | XP Earned |
|---|---|
| Daily deposit | +10 XP |
| Streak milestone achieved | +50 XP |
| Successful referral | +100 XP |
| Early adopter bonus | +200 XP |

#### User Levels
| Level | XP Required | Perks |
|---|---|---|
| 🥉 Bronze | 0 – 499 XP | Base access |
| 🥈 Silver | 500 – 1,999 XP | Priority support |
| 🥇 Gold | 2,000 – 4,999 XP | Reduced withdrawal fee |
| 💎 Diamond | 5,000+ XP | Max yield multiplier, governance voting weight |

#### NFT Achievement Badges
- 🗡️ **"7-Day Warrior"** — Maintain a 7-day streak
- 🐉 **"30-Day Beast"** — Maintain a 30-day streak
- 🏆 **"100-Day Legend"** — Maintain a 100-day streak
- Badges are fully tradeable on Stellar's NFT marketplace

### 🛡️ Streak Insurance (Killer Feature)
Users can stake **STRK tokens** to protect their streak against a single missed day. This mechanism creates continuous token demand and allows users to maintain hard-earned multipliers through unavoidable disruptions.

### 📊 Leaderboard & Social
- Public leaderboard ranking users by streak length and TVL contributed
- Referral program rewarding users for onboarding new savers
- Social sharing of achievements and milestones

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        StellarStreak Protocol                    │
├──────────────────┬──────────────────┬──────────────────────────┤
│   Frontend (UI)  │   Backend/API    │   Soroban Smart Contracts │
│  React + Vite    │  Node.js/Express │                           │
│  TailwindCSS     │  PostgreSQL      │  ┌──────────────────────┐ │
│  Stellar Wallets │  Horizon API     │  │   SavingsVault.rs    │ │
│  (Freighter,     │  Event Indexer   │  │   StreakEngine.rs     │ │
│   Lobstr, etc.)  │                  │  │   RewardsNFT.rs      │ │
│                  │                  │  └──────────────────────┘ │
└──────────────────┴──────────────────┴──────────────────────────┘
                         │                        │
                    Horizon RPC            Soroban RPC
                         │                        │
                    ┌────▼────────────────────────▼────┐
                    │          Stellar Network           │
                    │   (Testnet / Mainnet)              │
                    └───────────────────────────────────┘
```

### Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Smart Contracts | Rust + Soroban SDK | On-chain vault, streak, NFT logic |
| Frontend | React + Vite + TypeScript | User dashboard and wallet interactions |
| Styling | TailwindCSS | Utility-first design system |
| Wallet Integration | Stellar Wallets Kit | Multi-wallet connect (Freighter, Lobstr, xBull) |
| Blockchain API | Stellar Horizon | Transaction history, balances |
| Off-chain Backend | Node.js + PostgreSQL | Caching, analytics, leaderboard |
| Asset | USDC on Stellar | Primary savings currency |

---

## 📁 Project Structure

```
Vaultora/
├── README.md                        ← You are here
│
├── contract/                        ← Soroban Smart Contracts (Rust)
│   └── soroban-hello-world/
│       ├── Cargo.toml               ← Workspace manifest
│       └── contracts/
│           ├── savings-vault/       ← Contract A: SavingsVault
│           │   ├── Cargo.toml
│           │   └── src/
│           │       └── lib.rs
│           ├── streak-engine/       ← Contract B: StreakEngine
│           │   ├── Cargo.toml
│           │   └── src/
│           │       └── lib.rs
│           └── rewards-nft/         ← Contract C: RewardsNFT
│               ├── Cargo.toml
│               └── src/
│                   └── lib.rs
│
├── frontend/                        ← React + Vite Frontend
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       ├── index.css
│       ├── components/
│       │   ├── Dashboard.tsx
│       │   ├── StreakCard.tsx
│       │   ├── Leaderboard.tsx
│       │   ├── NFTBadges.tsx
│       │   └── WalletConnect.tsx
│       ├── hooks/
│       │   ├── useWallet.ts
│       │   └── useStreak.ts
│       └── utils/
│           └── stellar.ts
│
└── backend/                         ← Off-chain API (Optional)
    ├── package.json
    ├── src/
    │   ├── index.ts
    │   ├── routes/
    │   └── db/
    └── schema.sql
```

---

## 📜 Smart Contracts

### Contract A: `SavingsVault`

The core savings vault that holds user funds, tracks balances, and distributes yield.

```rust
// Key functions
fn deposit(env: Env, user: Address, amount: i128);
fn withdraw(env: Env, user: Address, amount: i128);
fn calculate_yield(env: Env, user: Address) -> i128;
fn distribute_yield(env: Env);
fn get_balance(env: Env, user: Address) -> i128;
fn get_tvl(env: Env) -> i128;
```

**Storage:**
- `UserBalance(Address)` → `i128` — Each user's deposited balance
- `LastDepositTime(Address)` → `u64` — Unix timestamp of last deposit
- `TotalVaultBalance` → `i128` — Protocol TVL tracker

---

### Contract B: `StreakEngine`

Manages streak tracking, validation, and yield multiplier calculation entirely on-chain.

```rust
// Key functions
fn update_streak(env: Env, user: Address);
fn reset_streak(env: Env, user: Address);
fn get_streak(env: Env, user: Address) -> u32;
fn calculate_multiplier(env: Env, user: Address) -> u32;  // basis points (100 = 1x)
fn is_streak_valid(env: Env, user: Address) -> bool;
fn get_streak_deadline(env: Env, user: Address) -> u64;
```

**Streak Window Logic:**
```
Daily Streak:  deposit must occur within 26 hours of previous deposit
Weekly Streak: evaluated every 7 consecutive daily streaks
Reset trigger: deposit not made within window → streak = 0, multiplier = 1.00x
```

**Multiplier Table (on-chain):**
```rust
match streak_days {
    0..=6   => 10000,  // 1.00x (basis points)
    7..=29  => 10500,  // 1.05x (+5%)
    30..=99 => 11500,  // 1.15x (+15%)
    100..   => 14000,  // 1.40x (+40%)
}
```

---

### Contract C: `RewardsNFT`

Issues soulbound or tradeable NFT badges when users reach streak milestones.

```rust
// Key functions
fn mint_badge(env: Env, user: Address, level: BadgeLevel);
fn has_badge(env: Env, user: Address, level: BadgeLevel) -> bool;
fn get_user_badges(env: Env, user: Address) -> Vec<Badge>;
fn get_badge_metadata(env: Env, level: BadgeLevel) -> BadgeMetadata;
```

**Badge Levels:**
```rust
pub enum BadgeLevel {
    Warrior,   // 7-day streak
    Beast,     // 30-day streak
    Legend,    // 100-day streak
}
```

---

### Contract Interactions

```
User calls deposit()
       │
       ├──► SavingsVault.deposit()
       │        ├── Records balance
       │        └── Emits deposit event
       │
       └──► StreakEngine.update_streak()
                ├── Validates timing window
                ├── Increments streak counter
                ├── Recalculates multiplier
                └── Checks milestone → RewardsNFT.mint_badge()
```

---

## 💰 Tokenomics

### STRK Token

| Property | Value |
|---|---|
| Token Name | StellarStreak Token |
| Symbol | STRK |
| Standard | Stellar Asset / SEP-0041 |
| Total Supply | TBD (governance vote) |

### Utility
1. **Yield Boosting** — Stake STRK to access additional yield on top of streak multipliers
2. **Governance** — Vote on protocol parameters (base APY, fees, new yield sources)
3. **Fee Discounts** — Hold STRK to reduce withdrawal fees
4. **Streak Insurance** — Stake STRK tokens to protect streak from 1 missed day

### Distribution (Proposed)
```
Community Rewards:  40%  ████████████████
Team & Advisors:    20%  ████████
Protocol Treasury:  20%  ████████
Ecosystem Fund:     15%  ██████
Early Backers:       5%  ██
```

---

## 💸 Revenue Model

| Revenue Stream | Description | Rate |
|---|---|---|
| **Yield Spread** | Protocol keeps a portion of generated yield | 10–15% of yield |
| **Withdrawal Fee** | Small fee on withdrawals | 0.3% |
| **Premium NFTs** | Exclusive cosmetic badge upgrades | Variable |
| **Streak Insurance** | STRK token burn model | Market-driven |
| **NFT Marketplace** | Fee on badge trades | 2.5% |

---

## 🎯 Target Users

| Segment | Profile | Benefit |
|---|---|---|
| **Gen Z Crypto Users** | 18–30, mobile-first, gamification native | XP, NFTs, leaderboards |
| **African Retail Savers** | First-time DeFi users, daily micro-savers | Low barrier, streak discipline |
| **DeFi Beginners** | Curious about crypto yield | Simple UX, guaranteed yield |
| **Salary Earners** | Want savings discipline | Behavioral commitment device |
| **Web3 Power Users** | Enjoy on-chain interaction | Advanced yield, governance |

---

## 📈 Key Metrics (KPIs)

| Metric | Description | Target (3 months) |
|---|---|---|
| **TVL** | Total Value Locked in vaults | $500,000 |
| **Active Streaks** | Users with active streak > 1 | 5,000 |
| **Avg Streak Length** | Average days per active user | 14 days |
| **Retention Rate** | 30-day user retention | 60% |
| **Yield Distributed** | Total yield paid to users | $15,000 |
| **Referral Growth Rate** | % of new users from referrals | 30% |
| **NPS Score** | Net Promoter Score | 50+ |

---

## 🚀 Getting Started

### Prerequisites

- [Rust](https://www.rust-lang.org/tools/install) (stable toolchain)
- [Soroban CLI](https://soroban.stellar.org/docs/getting-started/setup) v22+
- [Node.js](https://nodejs.org/) v18+ and npm/yarn
- [Freighter Wallet](https://freighter.app/) (browser extension)

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/Vaultora.git
cd Vaultora
```

### 2. Set Up Soroban CLI

```bash
# Install Soroban CLI
cargo install --locked soroban-cli

# Configure for Testnet
soroban network add testnet \
  --rpc-url https://soroban-testnet.stellar.org \
  --network-passphrase "Test SDF Network ; September 2015"

# Generate a test keypair
soroban keys generate --global alice --network testnet

# Fund the account via Friendbot
curl "https://friendbot.stellar.org?addr=$(soroban keys address alice)"
```

### 3. Build & Deploy Contracts

```bash
cd contract/soroban-hello-world

# Build all contracts
cargo build --target wasm32-unknown-unknown --release

# Deploy SavingsVault
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/savings_vault.wasm \
  --source alice \
  --network testnet

# Deploy StreakEngine
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/streak_engine.wasm \
  --source alice \
  --network testnet

# Deploy RewardsNFT
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/rewards_nft.wasm \
  --source alice \
  --network testnet
```

### 4. Run Contract Tests

```bash
cd contract/soroban-hello-world
cargo test
```

---

## 🖥️ Frontend

The frontend is a modern React SPA built with **Vite** and **TailwindCSS**, offering a polished gamified dashboard experience.

### Setup

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env.local` file in the `frontend/` directory:

```env
VITE_SAVINGS_VAULT_CONTRACT_ID=CXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_STREAK_ENGINE_CONTRACT_ID=CXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_REWARDS_NFT_CONTRACT_ID=CXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_STELLAR_NETWORK=testnet
VITE_STELLAR_RPC_URL=https://soroban-testnet.stellar.org
VITE_HORIZON_URL=https://horizon-testnet.stellar.org
```

### Run Development Server

```bash
npm run dev
# Opens at http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

### Frontend Features

| Feature | Description |
|---|---|
| **Wallet Connect** | Freighter, Lobstr, xBull via Stellar Wallets Kit |
| **Savings Dashboard** | Balance, yield earned, current streak display |
| **Streak Visualization** | Animated streak counter with days breakdown |
| **XP & Level Progress** | Progress bars, level badges, XP history |
| **NFT Badge Gallery** | Visual gallery of earned achievement NFTs |
| **Leaderboard** | Top streaks, TVL contributed, XP rankings |
| **Deposit Flow** | One-click deposit with streak reminder |
| **Responsive Design** | Mobile-first, works on all screen sizes |

---

## 🗺️ Roadmap

### Phase 1 — MVP (Hackathon) ✅
- [x] Basic savings vault contract
- [x] Daily streak tracking engine
- [x] 7-day reward multiplier
- [x] Simple UI dashboard
- [x] Leaderboard

### Phase 2 — Beta Launch
- [ ] Full streak insurance mechanism (STRK staking)
- [ ] RewardsNFT contract + badge minting
- [ ] XP system and level progression
- [ ] Referral program with on-chain tracking
- [ ] STRK token launch on Stellar

### Phase 3 — Growth
- [ ] Multiple yield sources (lending pools, RWA vaults)
- [ ] Mobile app (React Native)
- [ ] Social features (streak challenges, friend comparison)
- [ ] Governance portal for STRK holders
- [ ] Cross-chain bridge exploration

### Phase 4 — Mainnet
- [ ] Security audit of all smart contracts
- [ ] Mainnet deployment with gradual TVL caps
- [ ] Institutional yield partnerships
- [ ] DAO transition for protocol governance

---

## 🔐 Security

- Smart contracts are written in **Rust** with Soroban's memory-safe environment
- All user funds are non-custodial — the protocol never has unilateral withdrawal ability
- Integer arithmetic uses checked operations to prevent overflow/underflow
- Access control enforced on all admin functions
- Pending: Full third-party security audit before Mainnet launch

**Report vulnerabilities** to: security@stellarstreak.xyz

---

## 🤝 Contributing

We welcome contributions from the community! Please read our contribution guidelines before submitting.

```bash
# Fork and clone the repo
git clone https://github.com/your-org/Vaultora.git

# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes and test
cargo test                    # Smart contracts
cd frontend && npm test       # Frontend

# Submit a Pull Request
```

### Contribution Areas
- 🦀 **Smart Contract improvements** — Optimize gas, add features
- ⚛️ **Frontend enhancements** — UI/UX polish, new components
- 📖 **Documentation** — Tutorials, guides, translations
- 🧪 **Tests** — Increase contract and frontend test coverage
- 🐛 **Bug reports** — Open a GitHub Issue

---

## 📚 Resources

| Resource | Link |
|---|---|
| Stellar Developer Docs | [docs.stellar.org](https://docs.stellar.org) |
| Soroban Smart Contracts | [soroban.stellar.org](https://soroban.stellar.org) |
| Soroban Rust SDK | [docs.rs/soroban-sdk](https://docs.rs/soroban-sdk) |
| Stellar Testnet Explorer | [stellar.expert/explorer/testnet](https://stellar.expert/explorer/testnet) |
| Freighter Wallet | [freighter.app](https://freighter.app) |
| Stellar Wallets Kit | [github.com/Creit-Tech/stellar-wallets-kit](https://github.com/Creit-Tech/stellar-wallets-kit) |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Built with ❤️ on [Stellar](https://stellar.org) · Powered by [Soroban](https://soroban.stellar.org)

⭐ **Star this repo if you believe saving should be fun!** ⭐

</div>
# Vaultora
