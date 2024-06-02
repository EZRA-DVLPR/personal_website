'use client'

import React, { useRef, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import SongList from '@/components/SongList'

const MusicLayout = ({ children }) => {
  const songsWithRef = ['1', '5', '10', '25', '50', '100']
  const scrollToSong = useRef<((songId: string) => void) | null>(null)

  //loads the scrollToSong var upon mounting the layout
  useEffect(() => {
    scrollToSong.current = (songId) => {
      const songElement = document.getElementById(`song-${songId}`)
      if (songElement) {
        songElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  console.log(scrollToSong)

  return (
    <>
      <div className="flex">
        <Sidebar songsWithRef={songsWithRef} scrollToSong={scrollToSong} />
        <div className="ml-32 w-full">{children}</div>
      </div>
      <div className="flex justify-center">
        <SongList songsWithRef={songsWithRef} scrollToSong={scrollToSong} />
      </div>
    </>
  )
}

export default MusicLayout
