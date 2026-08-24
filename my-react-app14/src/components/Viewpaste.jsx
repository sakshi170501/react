import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Viewpaste = () => {
  const { id } = useParams();

  const allpastes = useSelector((state) => state.paste.pastes);

  const paste = allpastes.find((p) => p._id === id);

  return (
    <div>
      <input
        className="p-2 rounded-2xl mt-2 w-[60%] pl-5"
        type="text"
        placeholder="Enter the title here"
        value={paste?.title || ''}
        disabled
      />

      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-2xl p-4"
          value={paste?.content || ''}
          placeholder="Enter the content here"
          disabled
          rows={20}
        />
      </div>
    </div>
  );
};

export default Viewpaste;