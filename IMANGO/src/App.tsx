import { useState } from 'react'
import './App.css'

type ExpenseItem = {
  id: number;
  name: string;
  pese: string;
}
function App() {
  const [naame, setnaaame] = useState('')
  const [price, setPrice] = useState('')
  const [list, setlist] = useState<ExpenseItem[]>([])
  function handler(){
    if(!(naame) || !(price)){
      return
    }
    const up: ExpenseItem = {
      id: Date.now(),
      name: naame,
      pese: price,
    }
    setlist([...list, up])
    setnaaame('')
    setPrice('')
  }
  function delo(x: number){
    const nw = list.filter((i)=>{
      return i.id !== x
    })
    setlist(nw)
  }
  const total = list.reduce((sum, i) => sum + Number(i.pese), 0)




  return (
  <>
  <div className='flex h-screen w-screen items-center justify-center bg-[#000000]'>
    <div className='relative flex flex-col items-center h-[593px] w-[535px] bg-[#E4D8C4] pt-[78px]'>
      <h1 className="mb-6 w-[299px] text-left text-3xl font-normal text-gray-800">
            TOTAL COST - {total}$
      </h1>
      <div className='flex w-[299px] h-[72px] bg-[#000000] rounded-2xl items-center justify-center'>
        <div className='flex w-[283.28px] h-[56px] bg-[#E4D8C4] rounded-2xl items-center justify-between px-2'>
          <div className='w-[134px] h-[40px] bg-black rounded-2xl'>
            <input 
            type='text'
            value={naame}
            onChange={(e) => setnaaame(e.target.value)}
            className='w-full bg-transparent text-white text-center outline-none text-sm'
            />
          </div>
          <div className='flex w-[70px] h-[40px] bg-white rounded-2xl items-center justify-center text-xl font-bold'>
            <input 
            type='number'
            placeholder="$"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className=' w-[50px] h-[40px]'
            />
          </div>
          <button onClick={handler} className='flex w-[61px] h-[41px] bg-[#15C05C] rounded-2xl items-center justify-center'>
            <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3677 27.8681L7.00408 20.8196L15.6086 14.0673M7.00408 20.8196L27.3659 21.175C29.166 21.2065 30.9025 20.655 32.1934 19.6419C33.4844 18.6289 34.224 17.2373 34.2495 15.7732L34.4182 6.11266" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div className='bg-[#EBBADC] w-[299px] h-[402px] mt-6 rounded-2xl p-3 flex flex-col gap-3 overflow-y-auto'>
        {list.map((i)=>{
          return (
            <div key={i.id} className="w-[272px] h-[112px] shrink-0 bg-white rounded-4xl flex items-center justify-between p-2">
              <div className="w-[186px] h-[102px] bg-black rounded-3xl flex items-center px-4 justify-between">
                <span className="text-white text-sm truncate">{i.name}</span>
                <span className="text-white text-sm font-bold">{i.pese}$</span>
              </div>
              <button onClick={() => delo(i.id)} className="w-[67px] h-[102px] bg-[#F95C5C] rounded-3xl flex items-center justify-center cursor-pointer active:scale-95 transition-transform">
                <svg width="48" height="62" viewBox="0 0 48 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 54.25C12.9 54.25 11.9583 53.7441 11.175 52.7323C10.3917 51.7205 10 50.5042 10 49.0833V15.5H8V10.3333H18V7.75H30V10.3333H40V15.5H38V49.0833C38 50.5042 37.6083 51.7205 36.825 52.7323C36.0417 53.7441 35.1 54.25 34 54.25H14ZM34 15.5H14V49.0833H34V15.5ZM18 43.9167H22V20.6667H18V43.9167ZM26 43.9167H30V20.6667H26V43.9167Z" fill="#FEF7FF"/>
                </svg>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  </div>
  </>
  )
}

export default App

