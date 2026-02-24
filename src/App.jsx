import { useState } from 'react'
import Home from './components/Home'
import Assessment from './components/Assessment'
import Results from './components/Results'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [assessmentScores, setAssessmentScores] = useState(null)

  const handleStartAssessment = () => {
    setCurrentPage('assessment')
  }

  const handleCompleteAssessment = (scores) => {
    setAssessmentScores(scores)
    setCurrentPage('results')
  }

  const handleRestart = () => {
    setAssessmentScores(null)
    setCurrentPage('home')
  }

  return (
    <div className="app">
      {currentPage === 'home' && <Home onStart={handleStartAssessment} />}
      {currentPage === 'assessment' && <Assessment onComplete={handleCompleteAssessment} />}
      {currentPage === 'results' && <Results scores={assessmentScores} onRestart={handleRestart} />}
    </div>
  )
}

export default App
