
'use client'

import { useSession } from '@/hooks/use-auth'
import Dashboard from '@/components/dashboard'

export default function Home() {
  const { status } = useSession()

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return <Dashboard />
}
