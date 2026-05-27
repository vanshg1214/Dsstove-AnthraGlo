import React from 'react'

export default function App() {
  const modelUrl = '/Anthra-Glo.glb'

  return (
    <div className="app-container">
      <h1 className="title">Dsstove AnthraGlo</h1>
      
      <div className="viewer-wrapper">
        <model-viewer
          src={modelUrl}
          ar
          ar-modes="scene-viewer webxr quick-look"
          ar-scale="auto"
          ar-placement="floor"
          camera-controls
          interaction-prompt="auto"
          shadow-intensity="1"
          environment-image="neutral"
          alt="A 3D model of Anthra GLO"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
          }}
        >
          <button slot="ar-button" id="ar-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ar-icon">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            View in AR
          </button>
        </model-viewer>
      </div>

      <div className="controls-text">
        <span className="highlight">AR Mobile Controls:</span>{' '}
        <span className="actions">
          👆 One finger to move | 🔄 Two fingers to rotate | ↔️ Pinch to scale
        </span>
      </div>
    </div>
  )
}


