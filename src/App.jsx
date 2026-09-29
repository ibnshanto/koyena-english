import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { LanguageProvider } from './i18n.js'
import AuthModal from './components/AuthModal.jsx'
import LoginPage from './components/LoginPage.jsx'
import HomePage from './components/HomePage.jsx'
import TopicList from './components/TopicList.jsx'
import TopicLesson from './components/TopicLesson.jsx'
import ExamHub from './components/ExamHub.jsx'
import TakeExam from './components/TakeExam.jsx'
import Profile from './components/Profile.jsx'
import ProgressPage from './components/ProgressPage.jsx'
import SettingsPage from './components/SettingsPage.jsx'
import NavBar from './components/NavBar.jsx'
import ThinkAnswerList from './components/ThinkAnswerList.jsx'
import ThinkAnswerExam from './components/ThinkAnswerExam.jsx'
import IeltsHub from './components/IeltsHub.jsx'
import IeltsReading from './components/IeltsReading.jsx'
import IeltsListening from './components/IeltsListening.jsx'
import IeltsWriting from './components/IeltsWriting.jsx'
import IeltsSpeaking from './components/IeltsSpeaking.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <HashRouter>
          <NavBar />
          <main className="page">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/grammar" element={<TopicList />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/topic/:topicId" element={<TopicLesson />} />
              <Route path="/topic/:topicId/exams" element={<ExamHub />} />
              <Route path="/topic/:topicId/exam/:examNumber" element={<TakeExam />} />
              <Route path="/think-answer" element={<ThinkAnswerList />} />
              <Route path="/think-answer/:setId" element={<ThinkAnswerExam />} />
              <Route path="/ielts" element={<IeltsHub />} />
              <Route path="/ielts/reading" element={<IeltsReading />} />
              <Route path="/ielts/reading/:testId" element={<IeltsReading />} />
              <Route path="/ielts/listening" element={<IeltsListening />} />
              <Route path="/ielts/listening/:testId" element={<IeltsListening />} />
              <Route path="/ielts/writing" element={<IeltsWriting />} />
              <Route path="/ielts/writing/:testId" element={<IeltsWriting />} />
              <Route path="/ielts/speaking" element={<IeltsSpeaking />} />
              <Route path="/ielts/speaking/:testId" element={<IeltsSpeaking />} />
            </Routes>
          </main>
          <AuthModal />
        </HashRouter>
      </AuthProvider>
    </LanguageProvider>
  )
}
