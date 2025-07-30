import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16' // Use the latest API version
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { amount, orderDetails } = body

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        orderId: `order_${Date.now()}`,
        customerName: `${orderDetails.firstName} ${orderDetails.lastName}`,
        customerEmail: orderDetails.email,
        jerseySize: orderDetails.size,
        jerseyName: orderDetails.playerName,
        jerseyNumber: orderDetails.jerseyNumber
      }
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    // Error creating payment intent handled
    return NextResponse.json(
      { error: 'Error creating payment intent' },
      { status: 500 }
    )
  }
}
