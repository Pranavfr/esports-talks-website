import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Analytics table interface
export interface AnalyticsEvent {
  id?: string
  page: string
  timestamp: string
  userAgent: string
  referrer: string
  screenSize: string
  timezone: string
  created_at?: string
}

// Functions for analytics
export const analyticsApi = {
  // Insert a new analytics event
  async insertEvent(event: Omit<AnalyticsEvent, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('analytics_events')
      .insert([event])
      .select()
    
    if (error) {
      console.error('Error inserting analytics event:', error)
      throw error
    }
    
    return data
  },

  // Get all analytics events
  async getAllEvents() {
    const { data, error } = await supabase
      .from('analytics_events')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching analytics events:', error)
      throw error
    }
    
    return data
  },

  // Get analytics summary
  async getAnalyticsSummary() {
    const { data, error } = await supabase
      .from('analytics_events')
      .select('*')
    
    if (error) {
      console.error('Error fetching analytics summary:', error)
      throw error
    }
    
    return data
  }
}

