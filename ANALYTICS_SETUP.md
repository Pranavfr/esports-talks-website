# 📊 Analytics Setup Guide

## 🗄️ Database Options for Analytics Storage

### Option 1: Supabase (Recommended - Free & Easy)

#### Step 1: Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project

#### Step 2: Create Analytics Table
Run this SQL in your Supabase SQL editor:

```sql
-- Create analytics_events table
CREATE TABLE analytics_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
  user_agent TEXT NOT NULL,
  referrer TEXT,
  screen_size TEXT NOT NULL,
  timezone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (for analytics analytics)
CREATE POLICY "Allow all operations" ON analytics_events FOR ALL USING (true);
```

#### Step 3: Get Your Supabase Credentials
1. Go to your Supabase project dashboard
2. Navigate to Settings → API
3. Copy your:
   - **Project URL** (starts with `https://`)
   - **anon public key** (starts with `eyJ`)

#### Step 4: Add Environment Variables
Create `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Option 2: MongoDB (Alternative)

#### Step 1: Create MongoDB Atlas Account
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free account
3. Create a new cluster

#### Step 2: Install MongoDB
```bash
npm install mongodb
```

#### Step 3: Create MongoDB Connection
Create `lib/mongodb.ts`:

```typescript
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || 'your-mongodb-uri'
const client = new MongoClient(uri)

export async function connectDB() {
  if (!client.connect()) {
    await client.connect()
  }
  return client.db('analytics')
}

export async function insertAnalyticsEvent(event: any) {
  const db = await connectDB()
  return db.collection('events').insertOne(event)
}

export async function getAnalyticsEvents() {
  const db = await connectDB()
  return db.collection('events').find({}).sort({ timestamp: -1 }).toArray()
}
```

### Option 3: Local JSON File (Simple)

#### Step 1: Create Local Storage
Create `lib/localAnalytics.ts`:

```typescript
import fs from 'fs'
import path from 'path'

const dataFile = path.join(process.cwd(), 'data', 'analytics.json')

export async function saveAnalyticsEvent(event: any) {
  try {
    const data = fs.existsSync(dataFile) 
      ? JSON.parse(fs.readFileSync(dataFile, 'utf8'))
      : []
    
    data.push({ ...event, id: Date.now().toString() })
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error saving analytics:', error)
  }
}

export async function getAnalyticsEvents() {
  try {
    if (!fs.existsSync(dataFile)) return []
    return JSON.parse(fs.readFileSync(dataFile, 'utf8'))
  } catch (error) {
    console.error('Error reading analytics:', error)
    return []
  }
}
```

## 🚀 How to Use

### 1. Supabase (Recommended)
- ✅ **Free tier**: 500MB database, 50,000 monthly active users
- ✅ **Real-time**: Automatic updates
- ✅ **Easy setup**: Just add environment variables
- ✅ **Scalable**: Can upgrade as needed

### 2. MongoDB Atlas
- ✅ **Free tier**: 512MB storage
- ✅ **Flexible**: Document-based storage
- ✅ **Scalable**: Easy to upgrade

### 3. Local JSON
- ✅ **Simple**: No external dependencies
- ✅ **Free**: No costs
- ❌ **Limited**: Not suitable for production

## 📊 What Data is Stored

Each analytics event includes:
- **Page**: Which page was visited
- **Timestamp**: When the visit occurred
- **User Agent**: Browser/device information
- **Referrer**: Where the user came from
- **Screen Size**: Device screen dimensions
- **Timezone**: User's timezone

## 🔧 Current Implementation

The analytics system is already set up to:
1. **Track page views** automatically
2. **Store data** in Supabase (when configured)
3. **Fallback** to API endpoint if Supabase fails
4. **Display data** in the admin dashboard

## 🎯 Next Steps

1. **Choose your database** (Supabase recommended)
2. **Set up environment variables**
3. **Test the analytics** by visiting your site
4. **View real data** in `/admin/analytics`

The system will automatically start storing real visitor data once you configure the database! 