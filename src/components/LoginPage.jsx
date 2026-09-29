import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function LoginPage() {
  const { openAuthModal } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    openAuthModal()
    navigate('/', { replace: true })
  }, [openAuthModal, navigate])

  return null
}
