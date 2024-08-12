import React from 'react'
import useGitAPI from '../hooks/useGitAPI'

export default function Card({username}) {
    console.log(username)

    const data = useGitAPI(username)

  return (
    <div className='flex flex-col justify-center items-center p-4 bg-white rounded-2xl'>
      <img className='rounded-full w-24 h-24 mb-4' src={data["avatar_url"]} alt={`${data["name"]}'s Avatar`} />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{data["name"]}</h2>
      <p className='text-gray-600 text-center font-medium'>
        Followers : {data["followers"]}
      </p>
    </div>
  )
}
