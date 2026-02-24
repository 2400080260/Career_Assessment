import { useState } from 'react'
import '../styles/Assessment.css'

const ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    category: 'Technical Skills',
    question: 'How comfortable are you with technical concepts and coding?',
    options: [
      { text: 'Very comfortable, love building software', score: 95, career: 'Software Developer' },
      { text: 'Comfortable with basics', score: 70, career: 'Civil Engineer' },
      { text: 'Prefer creative over technical', score: 85, career: 'Graphic Designer' },
      { text: 'Numbers and analysis appeal more', score: 80, career: 'Chartered Accountant' }
    ]
  },
  {
    id: 2,
    category: 'Work Environment',
    question: 'What type of work environment appeals to you most?',
    options: [
      { text: 'Modern tech company with innovation focus', score: 95, career: 'Software Developer' },
      { text: 'Hospital or healthcare setting', score: 100, career: 'Doctor' },
      { text: 'Corporate office with structured environment', score: 90, career: 'Chartered Accountant' },
      { text: 'Creative studio with artistic freedom', score: 95, career: 'Graphic Designer' }
    ]
  },
  {
    id: 3,
    category: 'Problem Solving',
    question: 'How do you prefer to solve problems?',
    options: [
      { text: 'Write code and test solutions', score: 95, career: 'Software Developer' },
      { text: 'Diagnose and treat patients', score: 100, career: 'Doctor' },
      { text: 'Design and build structures', score: 90, career: 'Civil Engineer' },
      { text: 'Analyze numbers and financial data', score: 85, career: 'Chartered Accountant' }
    ]
  },
  {
    id: 4,
    category: 'Creative Ability',
    question: 'How important is creativity in your ideal career?',
    options: [
      { text: 'Extremely important - visual design drives me', score: 100, career: 'Graphic Designer' },
      { text: 'Very important for software solutions', score: 90, career: 'Software Developer' },
      { text: 'Somewhat important for designs', score: 85, career: 'Civil Engineer' },
      { text: 'Less important, accuracy is key', score: 75, career: 'Chartered Accountant' }
    ]
  },
  {
    id: 5,
    category: 'People Interaction',
    question: 'How much direct human interaction do you want in your work?',
    options: [
      { text: 'Direct patient care is essential', score: 100, career: 'Doctor' },
      { text: 'Client consulting and presentations', score: 85, career: 'Chartered Accountant' },
      { text: 'Collaborating with team members', score: 80, career: 'Software Developer' },
      { text: 'Minimal interaction, focus on work', score: 90, career: 'Graphic Designer' }
    ]
  },
  {
    id: 6,
    category: 'Physical Work',
    question: 'Do you prefer physical or mental work?',
    options: [
      { text: 'Physical work on-site, building things', score: 100, career: 'Civil Engineer' },
      { text: 'Mental work at computer', score: 95, career: 'Software Developer' },
      { text: 'Mix of both - hands-on and creative', score: 85, career: 'Graphic Designer' },
      { text: 'Purely mental - analysis and thinking', score: 90, career: 'Chartered Accountant' }
    ]
  },
  {
    id: 7,
    category: 'Impact & Purpose',
    question: 'What impact matters most to your career choice?',
    options: [
      { text: 'Saving lives and helping patients', score: 100, career: 'Doctor' },
      { text: 'Building technology that changes the world', score: 95, career: 'Software Developer' },
      { text: 'Creating infrastructure and buildings', score: 90, career: 'Civil Engineer' },
      { text: 'Creating beautiful visual experiences', score: 95, career: 'Graphic Designer' }
    ]
  },
  {
    id: 8,
    category: 'Financial Management',
    question: 'How interested are you in financial matters?',
    options: [
      { text: 'Extremely interested in numbers and finances', score: 100, career: 'Chartered Accountant' },
      { text: 'Interested but not primary focus', score: 70, career: 'Doctor' },
      { text: 'Interested in tech business side', score: 75, career: 'Software Developer' },
      { text: 'Concerned about project budgets', score: 70, career: 'Civil Engineer' }
    ]
  }
]

export default function Assessment({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [scores, setScores] = useState({})

  const handleAnswer = (score, career) => {
    const selectedOption = ASSESSMENT_QUESTIONS[currentQuestion].options.find(opt => opt.score === score)
    const newAnswers = [...answers, selectedOption.text]
    setAnswers(newAnswers)

    setScores({
      ...scores,
      [career]: (scores[career] || 0) + score
    })

    if (currentQuestion < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      onComplete(scores)
    }
  }

  const progress = ((currentQuestion + 1) / ASSESSMENT_QUESTIONS.length) * 100

  return (
    <div className="assessment-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-text">Question {currentQuestion + 1} of {ASSESSMENT_QUESTIONS.length}</div>

      <div className="question-card">
        <h2>{ASSESSMENT_QUESTIONS[currentQuestion].question}</h2>
        <div className="category-badge">{ASSESSMENT_QUESTIONS[currentQuestion].category}</div>

        <div className="options">
          {ASSESSMENT_QUESTIONS[currentQuestion].options.map((option, idx) => (
            <button
              key={idx}
              className="option-button"
              onClick={() => handleAnswer(option.score, option.career)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
