import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../supabaseClient.js'

const AuthContext = createContext({
  user: null,
  profile: null,
  loading: true,
  signUpWithEmail: async () => {},
  signInWithEmail: async () => {},
  signOut: async () => {},
  refreshProfile: async () => {},
  updateProfile: async () => {},
  authModalOpen: false,
  openAuthModal: () => {},
  closeAuthModal: () => {}
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authModalOpen, setAuthModalOpen] = useState(false)

  // Fetches profile from public.profiles with single retry fallback
  const fetchProfile = async (currentUser, isRetry = false) => {
    if (!currentUser) {
      setProfile(null)
      return null
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', currentUser.id)
        .maybeSingle()

      if (data && data.username) {
        const prof = { username: data.username }
        setProfile(prof)
        return prof
      }

      // If missing and this is the first attempt right after signup/login, retry once after 800ms
      if (!isRetry) {
        setTimeout(async () => {
          await fetchProfile(currentUser, true)
        }, 800)
      } else {
        // Fallback to the part of the email before the @
        const fallbackName = currentUser.email ? currentUser.email.split('@')[0] : 'student'
        const fallbackProfile = { username: fallbackName }
        setProfile(fallbackProfile)
        return fallbackProfile
      }
    } catch (err) {
      console.warn('Profile fetch error:', err)
      const fallbackName = currentUser.email ? currentUser.email.split('@')[0] : 'student'
      const fallbackProfile = { username: fallbackName }
      setProfile(fallbackProfile)
      return fallbackProfile
    }
  }

  useEffect(() => {
    // 1. Initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null
      setUser(currentUser)
      if (currentUser) {
        fetchProfile(currentUser)
      } else {
        setProfile(null)
      }
      setLoading(false)
    })

    // 2. Auth state subscription
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      const currentUser = session?.user ?? null
      setUser(currentUser)
      if (currentUser) {
        await fetchProfile(currentUser)
      } else {
        setProfile(null)
      }
      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const openAuthModal = () => setAuthModalOpen(true)
  const closeAuthModal = () => setAuthModalOpen(false)

  const signUpWithEmail = async (email, password) => {
    // Trigger in DB will insert into public.profiles
    const res = await supabase.auth.signUp({
      email: email.trim(),
      password
    })
    return res
  }

  const signInWithEmail = async (email, password) => {
    const res = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password
    })
    return res
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
  }

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user, true)
    }
  }

  const updateProfile = async ({ username }) => {
    if (!user) return { success: false, error: 'Not authenticated' }
    try {
      const cleanUsername = (username || '').trim().slice(0, 30)
      if (!cleanUsername) {
        return { success: false, error: 'Display name cannot be blank.' }
      }

      const { data, error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          username: cleanUsername
        })

      if (error) throw error

      setProfile({ username: cleanUsername })
      return { success: true }
    } catch (err) {
      console.error('Update profile error:', err)
      return { success: false, error: err.message || 'Failed to update profile.' }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signUpWithEmail,
        signInWithEmail,
        signOut,
        refreshProfile,
        updateProfile,
        authModalOpen,
        openAuthModal,
        closeAuthModal
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
