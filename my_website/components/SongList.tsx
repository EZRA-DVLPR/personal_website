'use client'

import React, { useRef, useEffect } from 'react'
import top100Data from '@/data/top100Data'

const SongList = ({ songsWithRef, scrollToSong }) => {
  // Define refs inside the component
  const songRefs = useRef({})

  // Initialize refs
  useEffect(() => {
    songRefs.current = top100Data.reduce((acc, song) => {
      acc[song.rank] = acc[song.rank] || React.createRef()
      return acc
    }, {})
  }, [])

  // Function to scroll to the specific song
  const handleScrollToSong = (songId) => {
    const ref = songRefs.current[songId]
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Pass handleScrollToSong to parent component
  useEffect(() => {
    scrollToSong.current = handleScrollToSong
  }, [scrollToSong])

  return (
    <div className="max-w-screen/2 w-full">
      {top100Data.map((song, index) => (
        <div
          key={index}
          className="flex flex-col items-center"
          id={`song-${song.rank}`}
          ref={songRefs.current[song.rank]} // Attach ref to the element with the respective rank
        >
          <div className="mb-4 rounded bg-slate-200 p-4 dark:bg-slate-700" style={{ width: '60%' }}>
            <div className="flex justify-between">
              <h2
                className={`font-bold ${
                  song.rank === 1
                    ? 'text-3xl md:text-5xl lg:text-7xl'
                    : song.rank === 2
                      ? 'text-2xl sm:text-4xl md:text-6xl'
                      : song.rank === 3
                        ? 'text-xl sm:text-3xl md:text-5xl'
                        : song.rank === 4
                          ? 'text-2xl md:text-4xl'
                          : 'text-xl md:text-3xl'
                }`}
              >
                {song.rank}.
              </h2>
              <h2 className="font-bold sm:text-xl md:text-3xl"> {song.name}</h2>
            </div>
            <p className="md:text-2xl">Artist: {song.artist}</p>
            <p className="">Description: {song.description}</p>
            <div className="mt-4 flex items-center justify-center">
              <div className="flex w-1/3 items-center justify-center rounded-md bg-primary-500 text-white hover:bg-primary-600 dark:hover:bg-primary-400">
                <a
                  href={song.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center"
                >
                  YouTube Video
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SongList
