

'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { User } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const router = useRouter();


  const [jwt, setJwt] = useState(null);

  useEffect(() => {
    // Initial check for JWT
    const checkJwt = () => {
      const storedJwt = localStorage.getItem('jwt')
      setJwt(storedJwt)
    }
    checkJwt()

    // Listen for changes to localStorage
    const handleStorageChange = () => {
      checkJwt()
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

    const handleProfileClick = () => {
      if (jwt) {
        router.push('/userPage') // Navigate to userPage if logged in
      } else {
        //alert('You must be logged in to access this page.')
        router.push('/registerSociety') // Navigate to registerSociety if not logged in
      }
    }

  return (
    <header className="fixed top-0 left-0 w-full fixed relative isolate shadow-md z-10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            CAIAC
          </Link>
          <div className="flex items-center space-x-4">
            <Link 
              href="/societies" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/societies' 
                  ? 'bg-gray-200 text-gray-900' 
                  : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              Societies
            </Link>
            <Link 
              href="/events" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/events' 
                  ? 'bg-gray-200 text-gray-900' 
                  : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              Events
            </Link>
            <div 
              onClick={handleProfileClick} 
              className="p-2 rounded-full hover:bg-gray-200 cursor-pointer" 
              aria-label="User Profile"
            >
              <User className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
