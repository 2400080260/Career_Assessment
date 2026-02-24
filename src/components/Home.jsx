import '../styles/Home.css'

export default function Home({ onStart }) {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="hero-section">
          <h1 className="hero-title">Career Assessment</h1>
          <p className="hero-subtitle">Discover your ideal career path in India based on your strengths and preferences</p>
        </div>

        <div className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Personalized Analysis</h3>
              <p>Get insights tailored to Indian job market and your unique strengths</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Career Recommendations</h3>
              <p>Discover in-demand careers in India that align with your profile</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Quick Assessment</h3>
              <p>Complete the assessment in just 5-10 minutes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Salary & Career Info</h3>
              <p>Get salary ranges in INR and job outlook in Indian market</p>
            </div>
          </div>
        </div>

        <div className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Answer Questions</h4>
              <p>Respond to 8 thoughtful questions about your work preferences and strengths</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Get Analyzed</h4>
              <p>Our assessment analyzes your answers for 5 popular Indian careers</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>View Results</h4>
              <p>Receive personalized career recommendations with salary details in rupees</p>
            </div>
          </div>
        </div>

        <button className="start-button" onClick={onStart}>
          Start Assessment
        </button>
      </div>
    </div>
  )
}
