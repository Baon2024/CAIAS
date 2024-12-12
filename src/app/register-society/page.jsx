'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

export default function RegisterSociety() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [passwordRecovery, setPasswordRecovery] = useState(false)
  const [emailForRecovery, setEmailForRecovery] = useState('')

  async function loginSocietyHandler(e) {
    e.preventDefault()
    const dataToSend = { identifier: email, password }
    const user = await loginUser(dataToSend)
    handleAuthResponse(user)
  }

  async function registerSocietyHandler(e) {
    e.preventDefault()
    const dataToSend = { username, email, password }
    const user = await signUpUser(dataToSend)
    handleAuthResponse(user)
  }

  function handleAuthResponse(user) {
    if (user) {
      setMessage(`Welcome, ${user.user.username}!`)
      localStorage.setItem('jwt', user.jwt)
      localStorage.setItem('user', JSON.stringify(user.user))
      router.push('/userPage')
    } else {
      setMessage('Authentication failed. Please try again.')
    }
  }

  const loginUser = async (dataToSend) => {
    try {
      const response = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      })
      if (!response.ok) throw new Error('Failed to log in')
      return await response.json();
    } catch (error) {
      console.error("Login Error:", error)
      return null
    }
  }

  const signUpUser = async (dataToSend) => {
    try {
      const response = await fetch('http://localhost:1337/api/auth/local/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      })
      if (!response.ok) throw new Error('Failed to register')
      return await response.json();
    } catch (error) {
      console.error("Registration Error:", error)
      return null
    }
  }

  function passwordRecoveryDisplayHandler() {
    setPasswordRecovery(prev => !prev)
  }

  async function sendEmailCodeHandler() {
    try {
      const response = await fetch('http://localhost:1337/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailForRecovery }),
      })
      if (!response.ok) throw new Error('Failed to send recovery email')
      setMessage('If your email is registered, you will receive a recovery code shortly.')
    } catch (error) {
      console.error("Recovery Email Error:", error)
      setMessage('Failed to send recovery email. Please try again.')
    }
  }

  return (
    (<div
      className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Society Portal</CardTitle>
          <CardDescription>Register or log in to your society account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={loginSocietyHandler} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                </div>
                <Button type="submit" className="w-full">Log In</Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={registerSocietyHandler} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">Society Name</Label>
                  <Input
                    id="register-name"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input
                    id="register-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input
                    id="register-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                </div>
                <Button type="submit" className="w-full">Register Society</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Button variant="link" onClick={passwordRecoveryDisplayHandler}>
            Forgot password?
          </Button>
          {passwordRecovery && (
            <div className="mt-4 w-full space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recovery-email">Recovery Email</Label>
                <Input
                  id="recovery-email"
                  type="email"
                  value={emailForRecovery}
                  onChange={(e) => setEmailForRecovery(e.target.value)}
                  placeholder="Enter your registered email" />
              </div>
              <Button onClick={sendEmailCodeHandler} className="w-full">
                Send Recovery Code
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
      {message && (
        <Alert variant="default" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </div>)
  );
}

