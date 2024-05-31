'use client'

const ShareFooter = () => {
  const handleTweetButtonClick = () => {
    const currentUrl = window.location.href
    const tweetText = encodeURIComponent(`Check out this page: ${currentUrl}.`)
    const twitterIntentUrl = `https://x.com/intent/post?text=${tweetText}`
    window.open(twitterIntentUrl, '_blank')
  }

  const handleEmailButtonClick = () => {
    const currentUrl = window.location.href
    const subject = encodeURIComponent('Check out this page')
    const body = encodeURIComponent(`I found this interesting page: ${currentUrl}`)
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`
    window.location.href = mailtoUrl
  }

  const handleCopyButtonClick = async () => {
    const currentUrl = window.location.href
    try {
      await navigator.clipboard.writeText(currentUrl)
      alert('URL copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
      alert('Failed to copy URL to clipboard')
    }
  }

  return (
    <>
      <button onClick={handleTweetButtonClick}>Discuss on Twitter</button>
      {` • `}
      <button onClick={handleEmailButtonClick}>Email this page</button>
      {` • `}
      <button onClick={handleCopyButtonClick}>Copy URL to Clipboard</button>
    </>
  )
}

export default ShareFooter
