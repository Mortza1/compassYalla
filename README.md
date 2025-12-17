# CompassYalla - Interactive Esports Quiz Platform

<div align="center">

**🏆 Top 5 Finalist - Yalla Compass Red Bull Hackathon 2024**
*Arena42, Abu Dhabi*

**Team: Wasted Potential**

---

*Revolutionizing esports engagement through AI-powered live stream quizzes and blockchain rewards*

</div>

---

## 📋 Table of Contents
- [Overview](#overview)
- [The Problem](#the-problem)
- [Our Solution](#our-solution)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Implementation Details](#implementation-details)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Team](#team)

---

## 🎯 Overview

**CompassYalla** is an innovative esports tournament platform that transforms passive stream watching into an interactive, rewarding experience. Built during the Yalla Compass Red Bull Hackathon at Arena42 in Abu Dhabi, our platform uses AI to generate real-time quizzes from live Twitch streams and rewards viewers with cryptocurrency for correct answers.

### Hackathon Achievement
- **Event**: Yalla Compass Red Bull Hackathon 2024
- **Location**: Arena42, Abu Dhabi
- **Result**: Top 5 Finalist
- **Team**: Wasted Potential

---

## 💡 The Problem

The esports industry faces challenges with viewer engagement:
- **Passive viewing experience** - Viewers watch streams without meaningful interaction
- **No tangible rewards** for engaged viewers
- **Limited monetization** opportunities for casual esports fans
- **Barrier to entry** for understanding competitive gameplay

---

## ✨ Our Solution

CompassYalla bridges Web3 technology, AI, and live streaming to create an interactive esports experience:

1. **AI-Powered Quiz Generation**: Real-time audio transcription from Twitch streams is processed by Llama 3 8B to generate contextual quiz questions
2. **Blockchain Rewards**: Smart contracts automatically mint and distribute cryptocurrency tokens for correct answers
3. **In-Game Marketplace**: Viewers spend earned tokens on gun skins and character cosmetics
4. **Multilingual Support**: Full English and Arabic localization for MENA region accessibility

---

## 🚀 Key Features

### 🎮 Live Stream Integration
- Embedded Twitch player for Counter-Strike 2 tournaments
- Real-time stream synchronization
- Seamless viewer experience

### 🤖 AI Quiz Generation
- **Audio Transcription**: AssemblyAI WebSocket API captures live stream audio
- **LLM Processing**: Llama 3 8B Instruct model analyzes transcripts
- **Smart Question Generation**: Context-aware multiple-choice questions every 3 minutes
- **Auto-Summarization**: 30-second refresh summaries of gameplay highlights

### 💰 Blockchain Rewards System
- **MetaMask Integration**: One-click wallet connection
- **Smart Contract**: Solidity-based token minting and distribution
- **Instant Rewards**: Automatic cryptocurrency distribution for correct answers
- **Balance Tracking**: Real-time token balance display

### 🛒 In-Game Marketplace
- Browse gun skins and character cosmetics
- Purchase items using earned tokens
- BitSkins integration for skin marketplace
- Price range: 100-300 tokens per item

### 🌍 Internationalization
- Complete English and Arabic translations
- RTL (Right-to-Left) support for Arabic
- Persistent language preference via localStorage

### ⏱️ Interactive Timer System
- 10-minute quiz countdown
- Visual alerts when time < 60 seconds
- Animated border warnings

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI framework |
| **React Router DOM** | 6.22.3 | Client-side routing |
| **Tailwind CSS** | 3.4.1 | Utility-first styling |
| **DaisyUI** | 4.7.3 | Component library |
| **Ethers.js** | 5.7.2 | Ethereum blockchain interaction |
| **i18next** | 23.10.1 | Internationalization |
| **React Hot Toast** | 2.4.1 | Notifications |
| **React Player** | 2.16.0 | Video streaming |
| **Axios** | 1.6.8 | HTTP client |

### Backend
| Technology | Purpose |
|------------|---------|
| **Python 3** | Backend runtime |
| **Llama 3 8B Instruct** | LLM for quiz generation |
| **Transformers (Hugging Face)** | ML model toolkit |
| **PyAudio** | Audio streaming |
| **Websockets** | Real-time communication |
| **aiohttp** | Async HTTP server |

### Blockchain
| Technology | Purpose |
|------------|---------|
| **Solidity** | Smart contract development |
| **Ethereum** | Primary blockchain network |
| **Solana Web3.js** | Alternative blockchain support |
| **MetaMask** | Wallet integration |

### AI/ML Services
- **AssemblyAI**: Real-time audio transcription
- **Llama 3 8B Instruct**: Quiz generation and summarization

### Infrastructure
- **GitHub Actions**: CI/CD pipeline
- **GitHub Pages**: Static site deployment
- **Node.js**: JavaScript runtime

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                        │
│                     (React + Tailwind)                       │
└───────────────┬──────────────────────────┬──────────────────┘
                │                          │
        ┌───────▼────────┐        ┌────────▼─────────┐
        │  Twitch Stream │        │  MetaMask Wallet │
        │   (Embedded)   │        │   (Web3 Auth)    │
        └───────┬────────┘        └────────┬─────────┘
                │                          │
                │                          │
┌───────────────▼──────────────────────────▼──────────────────┐
│                     BACKEND SERVICES                         │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────┐         ┌─────────────────────┐    │
│  │  Audio Transcriber │         │   Smart Contract    │    │
│  │   (Python + AI)    │         │    (Solidity)       │    │
│  │                    │         │                     │    │
│  │  1. Capture Audio  │         │  - Mint Tokens      │    │
│  │  2. Transcribe     │         │  - Track Balances   │    │
│  │  3. Generate Quiz  │         │  - Process Purchases│    │
│  │  4. Create Summary │         │                     │    │
│  └────────────────────┘         └─────────────────────┘    │
│           │                                  │               │
│           ▼                                  ▼               │
│  ┌─────────────────┐            ┌──────────────────────┐   │
│  │  Llama 3 8B     │            │  Ethereum Network    │   │
│  │  (HuggingFace)  │            │  (Blockchain)        │   │
│  └─────────────────┘            └──────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **Stream Capture** → Twitch broadcasts CS2 tournament
2. **Audio Processing** → Python backend captures audio via AssemblyAI WebSocket
3. **Transcription** → Real-time speech-to-text conversion
4. **AI Analysis** → Llama 3 8B processes transcript to:
   - Generate contextual quiz questions
   - Create gameplay summaries
5. **Quiz Delivery** → Frontend displays questions every 3 minutes
6. **User Response** → Viewer submits answer
7. **Blockchain Transaction** → Smart contract:
   - Verifies correct answer
   - Mints reward tokens
   - Updates user balance
8. **Marketplace** → Users spend tokens on skins

---

## 💻 Implementation Details

### AI Quiz Generation Pipeline

**File**: `pythonBack/videoTranscriber.py`

```python
# 1. Audio Stream Capture
WebSocket → AssemblyAI API → Real-time transcription

# 2. Transcript Processing
Llama 3 8B Instruct Model → Context analysis

# 3. Quiz Generation
LLM Prompt Engineering → Multiple-choice questions

# 4. Automatic Summarization
Every 30 seconds → Gameplay highlights
```

**Key Implementation:**
- WebSocket connection to AssemblyAI for low-latency transcription
- Buffered transcript storage (5-minute sliding window)
- Llama 3 prompt engineering for question quality
- Error handling and fallback mechanisms

### Smart Contract Logic

**File**: `pythonBack/contract.sol`

```solidity
// Core Functions:
- mintCoins(address user, uint256 amount)  // Reward correct answers
- purchaseSkin(uint256 skinId, uint256 price)  // Marketplace transactions
- getBalance(address user)  // Query user balance
```

**Features:**
- Gas-optimized token minting
- Balance verification before purchases
- Event logging for transactions
- Owner-only admin functions

### Frontend Quiz System

**File**: `UI-WEB/frontend/src/components/LiveStreamPlayer.jsx`

**Key Features:**
- 600-second (10-minute) countdown timer
- Auto-refresh quiz questions every 3 minutes
- Border animation when time < 60 seconds
- Real-time summary display (30-second updates)
- Responsive layout with Tailwind CSS

### Web3 Wallet Integration

**File**: `UI-WEB/frontend/src/components/NavBar.jsx`

```javascript
// MetaMask Connection Flow:
1. Detect MetaMask extension
2. Request account access
3. Connect to Ethereum network
4. Display wallet address (truncated)
5. Show token balance
6. Handle network switching
```

### Internationalization Setup

**Files**:
- `UI-WEB/frontend/src/il8n.js` (config)
- `UI-WEB/frontend/src/translations/en.json`
- `UI-WEB/frontend/src/translations/ar.json`

**Implementation:**
- i18next with react-i18next hooks
- localStorage persistence
- Language switcher in NavBar
- Complete UI translations (500+ strings)
- RTL layout support for Arabic

---

## 🚦 Getting Started

### Prerequisites

```bash
- Node.js (v14+)
- npm or yarn
- Python 3.8+
- MetaMask browser extension
- Git
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/compassYalla.git
cd compassYalla
```

2. **Install frontend dependencies**
```bash
cd UI-WEB/frontend
npm install
# or
yarn install
```

3. **Install Python backend dependencies**
```bash
cd ../../pythonBack
pip install -r requirements.txt
```

4. **Set up environment variables**

Create `.env` in `UI-WEB/frontend/`:
```env
BACKEND_URL=http://localhost:8080
MYFATOORAH_SCRIPT=your_payment_gateway_script
CALENDRY_URL=your_calendly_url
```

5. **Start the development servers**

**Frontend:**
```bash
cd UI-WEB/frontend
npm start
# Runs on http://localhost:3000
```

**Backend:**
```bash
cd pythonBack
python videoTranscriber.py
# Runs on http://localhost:8080
```

6. **Connect MetaMask**
- Install MetaMask extension
- Create/import wallet
- Connect to Ethereum testnet (Goerli/Sepolia)
- Get test ETH from faucet

### Building for Production

```bash
cd UI-WEB/frontend
npm run build
```

Builds optimized production bundle to `build/` folder.

---

## 📁 Project Structure

```
compassYalla/
├── UI-WEB/
│   └── frontend/
│       ├── public/                    # Static assets
│       │   ├── index.html
│       │   ├── service images/        # Service icons
│       │   └── images/                # General images
│       ├── src/
│       │   ├── index.js              # App entry point
│       │   ├── App.js                # Main router
│       │   ├── index.css             # Global styles
│       │   ├── il8n.js               # i18n config
│       │   │
│       │   ├── pages/                # Page components
│       │   │   ├── Home.jsx          # Landing page
│       │   │   ├── livestream.jsx    # Main quiz interface
│       │   │   ├── About.jsx         # About page
│       │   │   └── Shop.jsx          # Marketplace
│       │   │
│       │   ├── components/           # Reusable components
│       │   │   ├── NavBar.jsx        # Navigation + Web3
│       │   │   ├── LiveStreamPlayer.jsx  # Stream + Quiz
│       │   │   ├── Cards.jsx         # Prize display
│       │   │   ├── ShopPage.jsx      # Shop interface
│       │   │   ├── Schedule.jsx      # Event schedule
│       │   │   ├── Sponsors.jsx      # Sponsor showcase
│       │   │   ├── Stream.jsx        # Stream component
│       │   │   ├── TopVid.jsx        # Featured video
│       │   │   └── ...
│       │   │
│       │   ├── Images/               # Image assets
│       │   ├── fonts/                # Custom fonts
│       │   └── translations/         # i18n files
│       │       ├── en.json
│       │       └── ar.json
│       │
│       ├── package.json              # Dependencies
│       ├── tailwind.config.js        # Tailwind config
│       └── .env                      # Environment vars
│
├── pythonBack/                        # Backend services
│   ├── contract.sol                  # Smart contract
│   ├── contractLogic.js              # Web3 interface
│   ├── videoTranscriber.py           # AI quiz generator
│   └── requirements.txt              # Python deps
│
├── .github/
│   └── workflows/
│       └── static.yml                # GitHub Actions CI/CD
│
├── package.json                      # Root dependencies
└── README.md                         # This file
```

---

## 🎓 Key Learnings

### Technical Challenges Solved

1. **Real-Time Audio Processing**
   - Challenge: Low-latency transcription from live streams
   - Solution: WebSocket connection to AssemblyAI with buffered processing

2. **LLM Prompt Engineering**
   - Challenge: Generating relevant, difficulty-appropriate quiz questions
   - Solution: Custom prompts with context window and few-shot examples

3. **Blockchain Integration**
   - Challenge: Gas-efficient token distribution at scale
   - Solution: Batch minting and optimized smart contract functions

4. **State Synchronization**
   - Challenge: Keeping quiz, timer, and blockchain state synchronized
   - Solution: React Context API with useEffect hooks

### Hackathon Insights

- **Rapid Prototyping**: Built full-stack dApp in 48 hours
- **Team Collaboration**: Clear separation of frontend/backend/smart contract work
- **User-Centric Design**: Focus on seamless Web3 UX for non-crypto users
- **Scalability Considerations**: Designed for 1000+ concurrent viewers

---

## 👥 Team - Wasted Potential

- **Frontend Development**: React, Tailwind CSS, Web3 integration
- **Backend Development**: Python, AI/ML pipeline, API design
- **Smart Contract Development**: Solidity, Ethereum integration
- **UI/UX Design**: User experience, visual design, internationalization

---

## 🔮 Future Roadmap

- [ ] Multi-stream support (YouTube, Facebook Gaming)
- [ ] Leaderboard system with NFT badges
- [ ] Mobile app (React Native)
- [ ] Advanced AI (GPT-4 integration)
- [ ] Tournament bracket predictions
- [ ] Social features (chat, friend challenges)
- [ ] Skin trading marketplace
- [ ] Sponsor integration platform

---

## 📄 License

This project was developed for the Yalla Compass Red Bull Hackathon 2024.

---

## 🙏 Acknowledgments

- **Yalla Compass & Red Bull** for organizing the hackathon
- **Arena42, Abu Dhabi** for hosting
- **Judges and Mentors** for guidance and feedback
- **Open Source Community** for amazing tools and libraries

---

## 📞 Contact

For questions or collaboration opportunities, please reach out through GitHub Issues.

---

<div align="center">

**Built with ❤️ by Team Wasted Potential**

*Transforming esports engagement, one quiz at a time*

</div>
