#!/bin/bash
echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building Vite project with TypeScript config..."
npx vite build --config vite.config.ts
