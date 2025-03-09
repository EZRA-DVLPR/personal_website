'use client'

const LiberapayButton = () => {
  // no script needed so no react shenanigans
  return (
    <>
      <a href="https://liberapay.com/EZRA-DVLPR/donate" target="_blank">
        <img
          alt="Donate using Liberapay"
          src="https://liberapay.com/assets/widgets/donate.svg"
          width="300"
        />
      </a>
    </>
  )
}

export default LiberapayButton
