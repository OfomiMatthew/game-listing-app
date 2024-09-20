import { useEffect } from 'react'

const GenreId = ({gameList,selectedGenresName}) => {
  useEffect(()=>{
console.log(gameList)
  })
  return (
    <div className='mt-10 p-5'>
    <h2 className='text-[30px] dark:text-white font-bold'>Popular Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4 '>
    
    {gameList.map((game,index)=>  (
      <div key={index} className='dark:text-white bg-gray-600 rounded-xl p-3 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>
<img src={game.background_image} className='w-full h-[80%] rounded-xl object-cover mt-3'/>
<div className='font-bold'>
<h2>{game.name}<span className='bg-green-300 ml-2 px-1 rounded-sm text-[12px]'> {game.metacritic}</span></h2>
<h2 className='mb-5'>⭐{game.rating} 💬 {game.reviews_count} 🔥{game.suggestions_count}</h2>
</div>
      </div>
    ))}
    </div>
    </div>
  )
}

export default GenreId