import React from 'react'

const Header = ({username}) => {
  return (
    <div className={'bg-white w-full'}>
        <div className="max-w-screen-2xl mx-auto bg-red-400 text-white">
            <div className="w-full flex justify-between items-center p-8">
                <p className="text-4xl">
                    Notesy 👋
                </p>
                <p>
                    {username}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Header