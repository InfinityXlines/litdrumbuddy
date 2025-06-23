
'use client'

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { getUserProfile, getSyncCode, getDeviceId } from '@/lib/local-storage'

export interface UserSession {
  user: {
    name: string
    deviceId: string
    syncCode: string
  }
}

interface UserContextType {
  data: UserSession | null
  status: 'loading' | 'ready'
  syncCode: string
  refreshData: () => void
}

const UserContext = createContext<UserContextType>({
  data: null,
  status: 'loading',
  syncCode: '',
  refreshData: () => {}
})

export function UserProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<UserSession | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready'>('loading')
  const [syncCode, setSyncCode] = useState('')

  const refreshData = () => {
    const profile = getUserProfile()
    const code = getSyncCode()
    const deviceId = getDeviceId()
    
    setSession({
      user: {
        name: profile.name,
        deviceId: profile.deviceId || deviceId,
        syncCode: code
      }
    })
    setSyncCode(code)
    setStatus('ready')
  }

  useEffect(() => {
    // Initialize user data
    refreshData()
  }, [])

  return (
    <UserContext.Provider value={{ data: session, status, syncCode, refreshData }}>
      {children}
    </UserContext.Provider>
  )
}

export function useSession() {
  return useContext(UserContext)
}

export function useAuth() {
  return useSession()
}


