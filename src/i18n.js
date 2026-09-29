import { createContext, useContext, useState, useEffect, createElement } from 'react'

export const translations = {
  en: {
    // Navbar
    brand: 'Koyena English',
    grammar: 'Grammar',
    thinkAnswer: 'Think & Answer',
    signIn: 'Sign In',
    myProfile: 'My Profile',
    myProgress: 'My Progress',
    settings: 'Settings',
    logOut: 'Log Out',
    soon: 'Soon',

    // Home Page Explainer
    homeBadge: 'STRUCTURED ENGLISH MASTERY',
    homeHeroTitle: 'Grammar, mastered one topic at a time.',
    homeHeroSubtitle: 'Read the lesson, then test yourself with 50 real practice exams — complete with structured golden-rule explanations for every answer.',
    homeCtaStart: 'Explore Grammar Topics ↓',
    homeCtaThink: 'Try Think & Answer →',
    homeCtaAccount: 'Create Free Account',
    howItWorksTitle: 'How Koyena English Works',
    howItWorksSubtitle: 'A structured, practice-first methodology designed to turn rules into second nature.',
    step1Title: '1. Learn with Golden Rules',
    step1Desc: 'Concise, practical lessons without confusing jargon. Every topic outlines exact formulas and common pitfalls.',
    step2Title: '2. 50 Progressive Exams',
    step2Desc: 'Practice over 1,000 real questions per curriculum. Receive immediate grading and a 3-part explanation for every answer.',
    step3Title: '3. Think & Answer Practice',
    step3Desc: 'Move beyond rigid memorization: formulate real-world English answers to build spontaneous fluency.',
    step4Title: '4. Cloud Progress Sync',
    step4Desc: 'Sign in to sync your completed exams, average scores, and accuracy analytics across all your devices with Supabase.',
    curriculumHeading: 'Grammar Curriculum',
    curriculumSubtitle: 'Select a topic below to read the lesson and begin your practice exams.',

    // Auth Card
    portalBadge: 'KOYENA STUDENT PORTAL',
    signInTab: 'Sign In',
    createAccountTab: 'Create Account',
    welcomeBack: 'Welcome Back',
    signInSubtitle: 'Sign in to access your cloud progress, scores, and student profile.',
    createAccountTitle: 'Create Student Account',
    createAccountSubtitle: 'Join Koyena English to sync your 50 exams per topic across your devices.',
    emailLabel: 'Email Address',
    emailPlaceholder: 'student@example.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    passwordHelper: 'Must be at least 6 characters',
    btnSignIn: 'Sign In to Account',
    btnCreateAccount: 'Create Account & Sync',
    pleaseWait: 'Please wait...',
    accountCreatedSuccess: 'Account created! You can sign in now.',
    haveAccountPrompt: 'Already registered?',
    signInHere: 'Sign in here',
    noAccountPrompt: "Don't have an account?",
    signUpFree: 'Sign up free',

    // Guest Mode & Exams
    guestProgressPrompt: 'Sign in to see your progress',
    guestExamBanner: 'Sign in to save your result and track your progress.',
    guestProfilePrompt: 'Please sign in to view and edit your profile.',

    // Profile Page
    profileTitle: 'My Profile',
    emailReadOnlyLabel: 'Email (read-only)',
    displayNameLabel: 'Display name',
    displayNamePlaceholder: 'Your display name',
    saveChanges: 'Save changes',
    savedSuccess: 'Saved!',
    saving: 'Saving...',

    // Settings Page
    settingsTitle: 'Settings',
    appearanceSection: 'Appearance',
    themeLight: 'Light',
    themeDark: 'Dark',
    languageSection: 'Language',
    langEnglish: 'English',
    langBengali: 'বাংলা (Bengali)',
    profileSection: 'Profile',
    goToProfileBtn: 'Edit My Profile →',

    // Progress Page
    overallAccuracy: 'Overall accuracy',
    examsCompleted: 'Exams completed',
    topicsInProgress: 'Topics in progress',
    topicBreakdown: 'Topic breakdown',
    recommendedFocus: 'Recommended focus',
    notStarted: 'Not started',
    exams: 'exams',
    avg: 'avg',
    weakestTopicText: 'weakest topic',
    loadingProgress: 'Loading progress...'
  },
  bn: {
    // Navbar
    brand: 'কয়েনা ইংলিশ',
    grammar: 'ব্যাকরণ',
    thinkAnswer: 'ভাবুন ও উত্তর দিন',
    signIn: 'লগ ইন করুন',
    myProfile: 'আমার প্রোফাইল',
    myProgress: 'আমার অগ্রগতি',
    settings: 'সেটিংস',
    logOut: 'লগ আউট',
    soon: 'শীঘ্রই',

    // Home Page Explainer
    homeBadge: 'পরিকল্পিত ইংরেজি শিক্ষা',
    homeHeroTitle: 'ধাপে ধাপে ব্যাকরণ আয়ত্ত করার সঠিক মাধ্যম।',
    homeHeroSubtitle: 'পাঠটি পড়ুন, তারপর প্রতিটি বিষয়ের ৫০টি ব্যবহারিক পরীক্ষায় অংশ নিন — প্রতিটি উত্তরের সুস্পষ্ট ব্যাখ্যাসহ।',
    homeCtaStart: 'ব্যাকরণ বিষয়গুলো দেখুন ↓',
    homeCtaThink: 'ভাবুন ও উত্তর দিন →',
    homeCtaAccount: 'বিনামূল্যে অ্যাকাউন্ট খুলুন',
    howItWorksTitle: 'কয়েনা ইংলিশ যেভাবে কাজ করে',
    howItWorksSubtitle: 'অনুশীলন-ভিত্তিক পদ্ধতি যা ব্যাকরণের নিয়মগুলোকে আপনার সহজাত দক্ষতায় পরিণত করে।',
    step1Title: '১. মূল নিয়মসহ সহজ পাঠ',
    step1Desc: 'কঠিন পরিভাষা ছাড়া সহজ উপস্থাপনা। প্রতিটি বিষয়ের মূল সূত্র ও সাধারণ ভুলগুলো স্পষ্ট করে তুলে ধরা হয়েছে।',
    step2Title: '২. বিষয়ভিত্তিক ৫০টি পরীক্ষা',
    step2Desc: 'সহজ থেকে জটিল স্তরের ১,০০০-এর বেশি প্রশ্ন। প্রতিটি উত্তরের সাথে রয়েছে সুস্পষ্ট ৩-ধাপের নিয়ম বিশ্লেষণ।',
    step3Title: '৩. ভাবুন ও উত্তর দিন (Think & Answer)',
    step3Desc: 'শুধু মুখস্থ নয়: বাস্তব জীবনের পরিস্থিতিতে নিজের ভাষায় বাক্য গঠন করে স্বতঃস্ফূর্ত ইংরেজি চর্চা করুন।',
    step4Title: '৪. ক্লাউডে অগ্রগতি সংরক্ষণ',
    step4Desc: 'ইমেইল দিয়ে লগ ইন করে যেকোনো ডিভাইসে আপনার পরীক্ষার স্কোর ও সামগ্রিক নির্ভুলতা ক্লাউডে সিঙ্ক করুন।',
    curriculumHeading: 'ব্যাকরণ পাঠ্যক্রম',
    curriculumSubtitle: 'পাঠ পড়তে এবং পরীক্ষা শুরু করতে নিচের যে কোনো বিষয় নির্বাচন করুন।',

    // Auth Card
    portalBadge: 'কয়েনা স্টুডেন্ট পোর্টাল',
    signInTab: 'লগ ইন',
    createAccountTab: 'অ্যাকাউন্ট খুলুন',
    welcomeBack: 'স্বাগতম',
    signInSubtitle: 'আপনার ক্লাউড অগ্রগতি, স্কোর এবং প্রোফাইল পেতে লগ ইন করুন।',
    createAccountTitle: 'স্টুডেন্ট অ্যাকাউন্ট খুলুন',
    createAccountSubtitle: 'সব ডিভাইসে আপনার পরীক্ষার অগ্রগতি সিঙ্ক করতে কয়েনা ইংলিশে যুক্ত হন।',
    emailLabel: 'ইমেইল ঠিকানা',
    emailPlaceholder: 'student@example.com',
    passwordLabel: 'পাসওয়ার্ড',
    passwordPlaceholder: '••••••••',
    passwordHelper: 'কমপক্ষে ৬ অক্ষরের হতে হবে',
    btnSignIn: 'অ্যাকাউন্টে লগ ইন করুন',
    btnCreateAccount: 'অ্যাকাউন্ট খুলুন ও সিঙ্ক করুন',
    pleaseWait: 'অনুগ্রহ করে অপেক্ষা করুন...',
    accountCreatedSuccess: 'অ্যাকাউন্ট তৈরি হয়েছে! এখন লগ ইন করতে পারেন।',
    haveAccountPrompt: 'ইতিমধ্যে অ্যাকাউন্ট আছে?',
    signInHere: 'এখানে লগ ইন করুন',
    noAccountPrompt: 'অ্যাকাউন্ট নেই?',
    signUpFree: 'বিনামূল্যে যুক্ত হন',

    // Guest Mode & Exams
    guestProgressPrompt: 'আপনার অগ্রগতি দেখতে লগ ইন করুন',
    guestExamBanner: 'আপনার পরীক্ষার ফলাফল সংরক্ষণ এবং অগ্রগতি ট্র্যাক করতে লগ ইন করুন।',
    guestProfilePrompt: 'আপনার প্রোফাইল দেখতে এবং পরিবর্তন করতে অনুগ্রহ করে লগ ইন করুন।',

    // Profile Page
    profileTitle: 'আমার প্রোফাইল',
    emailReadOnlyLabel: 'ইমেইল (শুধু পড়ার জন্য)',
    displayNameLabel: 'প্রদর্শন নাম (Display Name)',
    displayNamePlaceholder: 'আপনার নাম লিখুন',
    saveChanges: 'পরিবর্তন সংরক্ষণ করুন',
    savedSuccess: 'সংরক্ষিত হয়েছে!',
    saving: 'সংরক্ষণ হচ্ছে...',

    // Settings Page
    settingsTitle: 'সেটিংস',
    appearanceSection: 'চেহারা ও থিম',
    themeLight: 'লাইট (Light)',
    themeDark: 'ডার্ক (Dark)',
    languageSection: 'ভাষা (Language)',
    langEnglish: 'English',
    langBengali: 'বাংলা (Bengali)',
    profileSection: 'প্রোফাইল',
    goToProfileBtn: 'আমার প্রোফাইল পরিবর্তন করুন →',

    // Progress Page
    overallAccuracy: 'সামগ্রিক নির্ভুলতা',
    examsCompleted: 'সম্পন্ন পরীক্ষা',
    topicsInProgress: 'চলমান টপিক',
    topicBreakdown: 'টপিকভিত্তিক বিবরণ',
    recommendedFocus: 'বিশেষ নজর প্রয়োজন',
    notStarted: 'শুরু হয়নি',
    exams: 'টি পরীক্ষা',
    avg: 'গড়',
    weakestTopicText: 'সবচেয়ে দুর্বল টপিক',
    loadingProgress: 'অগ্রগতি লোড হচ্ছে...'
  }
}

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
  theme: 'light',
  setTheme: () => {}
})

export function LanguageProvider({ children }) {
  const lang = 'en'

  useEffect(() => {
    try {
      localStorage.removeItem('koyena-lang')
    } catch {}
  }, [])

  const [theme, setThemeState] = useState(() => {
    try {
      return localStorage.getItem('koyena-theme') || 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('koyena-theme', theme)
    } catch (err) {
      console.warn('Failed to set theme:', err)
    }
  }, [theme])

  const setLang = () => {}

  const setTheme = (newTheme) => {
    setThemeState(newTheme)
  }

  const t = (key) => {
    return translations.en[key] || key
  }

  return createElement(
    LanguageContext.Provider,
    { value: { lang: 'en', setLang, t, theme, setTheme } },
    children
  )
}

export function useT() {
  const ctx = useContext(LanguageContext)
  return ctx
}
