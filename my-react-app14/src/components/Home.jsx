import React, { useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addtopaste, updatetopaste } from '../Redux/Pasteslice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteid = searchParams.get('pasteid');

  const dispatch = useDispatch();
  const allpastes=useSelector((state)=>state.paste.pastes);
     useEffect(()=>{
      if(pasteid){
        const paste=allpastes.find((p)=>p._id==pasteid);
        setTitle(paste.title);
        setValue(paste.content);
      }

    },[pasteid])

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteid || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
 

    if (pasteid) {
      dispatch(updatetopaste(paste));
    } else {
      dispatch(addtopaste(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div>
      <input
        className="p-2 rounded-2xl mt-2 w-[60%] pl-5"
        type="text"
        placeholder="Enter the title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={createPaste}>
        {pasteid ? 'Update My Paste' : 'Create My Paste'}
      </button>

      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-2xl p-4"
          value={value}
          placeholder="Enter the content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;