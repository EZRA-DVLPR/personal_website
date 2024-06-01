'use client'

import React, { useRef } from 'react'
import Sidebar from '@/components/Sidebar'
import SongList from '@/components/SongList'

const MusicLayout = ({ children }) => {
  const songsWithRef = ['1', '5', '10', '25', '50', '100']
  const scrollToSong = useRef(null)

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
