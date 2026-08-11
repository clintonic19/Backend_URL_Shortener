# URL Shortener

A Node.js and MongoDB URL-shortening API. It creates a unique short code for a long URL and stores the mapping in MongoDB.

## Tech stack

- Node.js with Express
- MongoDB with Mongoose
- `shortid` for short-code generation
- CORS and dotenv

## Prerequisites

- Node.js 18 or later
- A MongoDB database (local or Atlas)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/url-shortener
   BASE_URL=http://localhost:5000/api
   PORT=5000
   ```

   Set `MONGO_URI` to your MongoDB connection string. `PORT` is optional and defaults to `5000`.

3. Start the server:

   ```bash
   npm run dev
   ```

   For a regular start, use `npm start`.

## API

All API routes are prefixed with `/api`.

### Create a short URL

`POST /api/shorten`

Request body:

```json
{
  "originalUrl": "https://example.com/a/very/long/url"
}
```

Successful response (`201 Created`):

```json
{
  "success": true,
  "shortUrl": "http://localhost:5000/api/abc123"
}
```

Submitting a URL that already exists returns its existing short URL.

### Look up a short code

`GET /api/:shortCode`

Example:

```bash
curl http://localhost:5000/api/abc123
```

The endpoint returns the stored URL document. If the code does not exist, it returns `404 Not Found`.

> Note: the current implementation performs a lookup and returns JSON; it does not redirect the visitor to the original URL.

## Project structure

```text
src/
  controllers/UrlShortener.controller.js  # URL creation and lookup logic
  database/db.js                          # MongoDB connection
  models/Url.model.js                     # URL schema
  routes/Url.route.js                     # API routes
  server.js                               # Express application entry point
frontend/                                 # Basic browser UI files
```

## Available scripts

```bash
npm start  # Start the server
npm run dev # Start with nodemon
```
