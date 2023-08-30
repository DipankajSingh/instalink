import HomePage from './HomePage'

export default function Home() {
  return (
    <>
      <div className='h-full w-full max-w-[480px] relative m-auto '>
      {true ? <HomePage />:""}
      </div>
    </>
  )
}
