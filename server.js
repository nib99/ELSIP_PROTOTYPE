// ELSIP Backend - Minimal starter
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const QRCode = require('qrcode');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL || 'postgres://elsip:elsip123@db:5432/elsip' });

app.get('/health', (req, res) => res.json({status: 'ok'}));

// Register worker
app.post('/api/register', async (req, res) => {
  const { fullName, phone, region, skills } = req.body;
  const result = await pool.query(
    'INSERT INTO users (phone, skills) VALUES ($1,$2) RETURNING id',
    [phone, JSON.stringify(skills || [])]
  );
  res.json({ success: true, id: result.rows[0].id });
});

// Simple job match by overlap (demo)
app.post('/api/match-jobs', async (req, res) => {
  const { userSkills, location } = req.body;
  const jobs = await pool.query('SELECT * FROM jobs LIMIT 10');
  res.json({ matches: jobs.rows });
});

// Generate QR Skills ID (mock: creates QR data and returns PNG data URL)
app.post('/api/skills-id', async (req, res) => {
  const { userId, skills } = req.body;
  const payload = `elsip:${userId}:${Date.now()}`;
  const png = await QRCode.toDataURL(payload);
  await pool.query('UPDATE users SET qr_token=$1 WHERE id=$2', [payload, userId]);
  res.json({ qrData: payload, qrPng: png });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('ELSIP API running on port', PORT));
