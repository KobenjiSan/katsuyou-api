---
# Katsuyou-API

This is the backend API for the KotoKatsuyou project — a Japanese verb conjugation learning tool.

The API uses **Node.js**, **Express**, and **MongoDB (via Mongoose)** to serve verb data and support frontend conjugation features.

---

# Features

- RESTful endpoint to retrieve verb data by hiragana or kanji
- Integrated MongoDB for storing structured verb entries
- Modular controller/router structure
- Seed script for preloading the database
- Ready for deployment with environment variable config

---

## Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/yourname/katsuyou-api.git
cd katsuyou-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root of the project using the provided .env.example:
```bash
cp .env.example .env
```

Edit your .env file to point to your local MongoDB or MongoDB Atlas instance:
```env
MONGO_URI=mongodb://localhost:27017/katsuyou-db
PORT=5000
```

### 4. Seeding the Database
To load predefined verb data into MongoDB:
```bash
node scripts/seed.js
```

This will:
- Connect to MongoDB
- Delete existing verb entries
- Insert all entries from data/verbs.json

---
## API Routes
GET /api/katsuyou/verb/:word
Returns a single verb entry matching either hiragana or kanji.
Example:
```http
GET /api/katsuyou/verb/たべる
```

Response:
```json
{
  "hiragana": "たべる",
  "kanji": "食べる",
  "meaning": "to eat",
  "type": "ichidan",
  "exampleTemplate": "ごはんを",
  "exampleMeaning": "I [verb] rice."
}
```

---
## Related Project
[Frontend Repo (KotoKatsuyou)](https://github.com/KobenjiSan/kotokatsuyou) — React-based UI that consumes this API

---
## License
License: [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

This project is for **personal, non-commercial use only**.  
You may **not redistribute, modify, or republish** this code without explicit permission from the author.

---