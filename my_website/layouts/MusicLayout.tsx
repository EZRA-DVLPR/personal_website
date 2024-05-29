'use client'

import React, { useRef } from 'react'
import Sidebar from '@/components/Sidebar'
import top100Data from '@/data/top100Data'

const MusicLayout = ({ children }) => {
  // Precaution to sort the songs in case they aren't sorted
  const sortedSongs = top100Data.sort((a, b) => a.rank - b.rank)

  const songsWithRef = ['1', '5', '10', '25', '50', '100']

  // Create refs for the songs specified in the array
  const songRefs = songsWithRef.reduce((acc, songId) => {
    acc[songId] = useRef<HTMLDivElement>(null)
    return acc
  }, {})

  // Function to scroll to the specific song
  const scrollToSong = (songId) => {
    const ref = songRefs[songId]
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="flex">
        <Sidebar songsWithRef={songsWithRef} scrollToSong={scrollToSong} />
        <div className="ml-32 w-full">{children}</div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-screen/2 w-full">
          {sortedSongs.map((song, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              id={`song-${song.rank}`}
              ref={songRefs[song.rank]} // Attach ref to the element with the respective rank
            >
              <div
                className="mb-4 rounded bg-slate-100 p-4 dark:bg-slate-700"
                style={{ width: '60%' }}
              >
                <div className="flex justify-between">
                  <h2 className="font-bold sm:text-xl md:text-3xl">{song.rank}.</h2>
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
      </div>
    </>
  )
}

export default MusicLayout
