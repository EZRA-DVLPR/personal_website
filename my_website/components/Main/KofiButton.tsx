'use client'
import { useEffect } from 'react'

// overlay with opts
interface KofiWidgetOverlay {
  draw: (
    username: string, 
    options: {
      type: string
      [key: string]: string | number | boolean
    }
  ) => void
}

//  prettier didnt like any type so we create an interface 
interface WindowWithKofi extends Window {
  kofiWidgetOverlay?: KofiWidgetOverlay
}

const KofiButton = () => {
  useEffect(() => {
    if (document.getElementById('kofi-script')) return
    
    const script = document.createElement('script')
    script.id = 'kofi-script'
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'
    script.async = true
    
    script.onload = () => {
      // timeout to wait for widget to load
      setTimeout(() => {
        const windowWithKofi = window as WindowWithKofi
        
        if (windowWithKofi.kofiWidgetOverlay) {
          windowWithKofi.kofiWidgetOverlay.draw('ezra_dvlpr', {
            type: 'floating-chat',
            'floating-chat.donateButton.text': 'Tip Me',
            'floating-chat.donateButton.background-color': '#00b9fe',
            'floating-chat.donateButton.text-color': '#fff',
          })
        }
      }, 100)
    }
    
    document.body.appendChild(script)
    
    return () => {
      const scriptElement = document.getElementById('kofi-script')
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement)
      }
    }
  }, [])
  
  // nothing rendered as html as its a pure script
  return null
}

export default KofiButton
