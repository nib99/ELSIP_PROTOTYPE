# ELSIP Prototype (Production-Ready Starter)
This repository contains a production-ready prototype of the Ethiopia Labor & Skills Innovation Platform (ELSIP).
It is designed for fast deployment (Docker Compose) for Ministry demos and pilots.

## Quick start (1-click)
1. Copy `.env.example` to `.env` and fill credentials.
2. docker-compose up --build -d
3. Visit http://localhost:8080 (frontend) and http://localhost:3000 (api)

## Contents
- backend/: Node.js API
- frontend/: React Native PWA (web)
- ai/: Rasa + OpenAI bridge
- ussd/: Africa's Talking integration
- blockchain/: Solidity contract + deploy script
- docs/: Proposal, architecture, budget
- database/: init sql (sample jobs)
