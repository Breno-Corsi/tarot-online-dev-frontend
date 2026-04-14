# 🔮 [playtarot.io](https://playtarot.io) – Frontend 🔮

A responsive frontend built with React and Vite for the PlayTarot.io experience.

The application allows the querent to enter a question, trigger an animated tarot flow, draw cards, and receive an AI-generated mystical interpretation from the backend API.

---

Check out the live project below:
### 🔮 [playtarot.io](https://playtarot.io)

---

## ✨ Features

- 🔮 Interactive Tarot reading flow
- 🃏 Animated deck, loading, and card reveal experience
- 🤖 AI-generated Tarot interpretation through the backend API
- 📱 Responsive design across mobile, tablet, desktop, QHD, and 4K
- 🏗️ Clean component-based frontend structure

---

## 🛠️ Technologies Used


| Technology | Version |
|-----------|---------|
| Node.js | **24.14.1** |
| npm | **11.11.0+** |

---

## 📦 Project Structure

    src
    │   App.jsx
    │   main.jsx
    │
    ├── assets
    │   ├── icons
    │   │       close_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.svg
    │   │       loading_icon.svg
    │   │       tarot_online_logo.svg
    │   │
    │   ├── images
    │   │   │   card-back.svg
    │   │   │   card-deck.svg
    │   │   │
    │   │   └── cards
    │   │       └── ... (all tarot cards)
    │   │
    │   └── videos
    │           Tarot_smoke.mp4
    │
    ├── components
    │   │   Background.jsx
    │   │   Cards.jsx
    │   │   Deck.jsx
    │   │   Form.jsx
    │   │   Header.jsx
    │   │   index.js
    │   │   InitialContainer.jsx
    │   │   Loading.jsx
    │   │   Response.jsx
    │   │
    │   └── modals
    │           Alert.jsx
    │
    └── style
    │   background.css
    │   cards.css
    │   deck.css
    │   form.css
    │   header.css
    │   index.css
    │   initialContainer.css
    │   loading.css
    │   response.css
    │
    └── modals
            alert.css

---

## ⚙️ Requirements

Before running the project, make sure you have:

- Node.js installed
- npm installed
- The backend running locally

Current local versions used:

    node -v
    v24.14.1

    npm -v
    11.11.0

---

## 🔗 Backend Requirement

This frontend depends on the [backend API](https://github.com/janning-owns-it/tarot-online):

    https://github.com/janning-owns-it/tarot-online

The backend is a Spring Boot API that generates Tarot readings using OpenAI and exposes the `GET /tarot-online` endpoint with the `querentsQuestion` parameter. :contentReference[oaicite:1]{index=1}

Follow the [backend repository](https://github.com/janning-owns-it/tarot-online) instructions to start it before running this frontend. The backend README documents Docker and Maven startup options.

---

## 🚀 How to Run the Project

### 1. Clone the repository

    git clone https://github.com/janning-owns-it/tarot-online-frontend.git
    cd tarot-online-frontend

### 2. Install dependencies

    npm install

### 3. Start the backend

Make sure the [tarot-online-backend](https://github.com/janning-owns-it/tarot-online) is already running:

    git clone https://github.com/janning-owns-it/tarot-online

### 4. Run the frontend

    npm run dev

### 5. Open the application

By default, Vite will start the frontend locally at:

    http://localhost:5173

---

## 🌐 How It Works

1. The querent types a question
2. The frontend validates the input
3. The deck animation starts
4. The frontend sends the question to the backend API
5. The backend returns:
    - `arcaneResponse`
    - `sortedCardsInOrder`
6. The frontend reveals the selected cards and displays the cards and the full interpretation

---

## 📱 Responsive Design

The interface is adjusted for the following test breakpoints:

- 320 × 568 — mobile small
- 360 × 640 — android small
- 390 × 844 — iphone base
- 412 × 915 — android large
- 430 × 932 — iphone pro max
- 768 × 1024 — tablet
- 1024 × 1366 — tablet landscape
- 1366 × 768 — notebook common
- 1440 × 900 — desktop
- 1920 × 1080 — full hd
- 2560 × 1440 — qhd
- 3840 × 2160 — 4k

---

## 📄 License

MIT — feel free to use and adapt.
