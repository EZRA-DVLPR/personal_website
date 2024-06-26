'use client'

import React from 'react'

const Sidebar = ({ songsWithRef, scrollToSong }) => {
  const handleSongClick = (songId) => {
    if (scrollToSong.current) {
      scrollToSong.current(songId)
    }
  }

  return (
    <>
      <div className="fixed left-0 top-1/2 flex h-auto w-auto -translate-y-1/2 transform flex-col justify-between rounded-md bg-slate-300 text-white dark:bg-gray-800 sm:w-32">
        <div className="flex flex-col space-y-4 p-4">
          {songsWithRef.map((songId) => (
            <button
              key={songId}
              onClick={() => handleSongClick(songId)}
              className="rounded bg-slate-500 p-2 hover:bg-slate-700 dark:bg-gray-700 dark:hover:bg-gray-500"
            >
              <span className="sm:hidden">{songId}</span>
              <span className="hidden sm:inline">{`Go to Song ${songId}`}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar
