import React from 'react'

export default function App() {
  const modelUrl = '/Anthra-Glo.glb'

  return (
    <div className="app-container">
      <h1 className="title">Dsstove-AnthraGlo</h1>
      
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


