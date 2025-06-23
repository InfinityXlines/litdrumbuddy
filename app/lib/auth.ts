
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export interface User {
  id: string
  email: string
  name: string
}

export interface AuthSession {
  user: User
}

export async function getSession(): Promise<AuthSession | null> {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      console.log('🔍 No auth token found in cookies')
      return null
    }

    console.log('🔍 Auth token found, validating...')

    const secret = process.env.NEXTAUTH_SECRET || 'fallback-secret-for-development'
    
    try {
      const decoded = jwt.verify(token, secret) as any
      console.log('✅ JWT token valid:', { userId: decoded.userId, email: decoded.email })

      return {
        user: {
          id: decoded.userId,
          email: decoded.email,
          name: decoded.name
        }
      }
    } catch (jwtError) {
      console.log('❌ JWT validation failed:', jwtError)
      return null
    }
  } catch (error) {
    console.error('🔴 Session validation error:', error)
    return null
  }
}

export async function requireAuth() {
  const session = await getSession()
  if (!session) {
    throw new Error('Authentication required')
  }
  return session
}
