import React,{useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { removefrompastes } from '../Redux/Pasteslice';
import toast from 'react-hot-toast';

const Paste = () => {
  const pastes=useSelector((state)=>state.paste.pastes);
  const[searchterm,setsearchterm]=useState('');
  const dispatch=useDispatch();
  const filteredData=pastes.filter((paste)=>paste.title.toLowerCase().includes(searchterm.toLowerCase()));
  function handledelete(pasteid){
    dispatch(removefrompastes(pasteid));
  }

  return (
    <div>
      <input 
      className='p-2 rounded-2xl min-w-2xl mt-5'
      type='search'
      placeholder='search here'
      value={searchterm}
      onChange={(e)=>setsearchterm(e.target.value)}
      />
      <div className='flex flex-col gap-5'>
        {
          filteredData.length>0 &&
          filteredData.map(
            (paste)=>{
              return(
                <div className='border' key={paste?._id}>
                 <div>
                  {paste.title}
                 </div>
                 <div>
                  {paste.content}
                 </div>
                 <div className='flex flex-row gap-4 place-content-evenly'>
                  <button>
                     <a href={`/?pasteid=${paste?._id}`}>edit</a>
                    
                  </button>
                
                    <a href={`/pastes/${paste?._id}`}>
                    <button>
                    view
                  </button>
                  </a>
                  <button onClick={()=>handledelete(paste?._id)}>
                    delete
                  </button>
                  <button onClick={()=>{
                    navigator.clipboard.writeText(paste?.content)
                    toast.success('copied')
                  }}>
                    copy
                  </button>
                  <button>
                    share
                  </button>
                 </div>
                 <div>
                  {paste.createdAt}
                 </div>

                </div>
              )
            }
          )
        }

      </div>

      
    </div>
  )
}

export default Paste
