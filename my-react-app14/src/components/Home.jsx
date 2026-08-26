import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtopaste, updatetopaste } from '../Redux/Pasteslice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteid = searchParams.get('pasteid');

  const dispatch = useDispatch();

  const allpastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteid) {
      const paste = allpastes.find((p) => p._id === pasteid);

      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteid, allpastes]);

  function createPaste() {
    if (!title.trim() || !value.trim()) {
      return;
    }

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
    <div className="min-h-screen px-4 py-10">

      {/* Hero Section */}
      <div className="mx-auto max-w-5xl text-center">

        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            CopyPaste
          </span>
          <span className="ml-3">🚀</span>
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          Store your text. Copy anytime. Share everywhere.
        </p>

      </div>

      {/* Main Card */}
      <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-2xl md:p-8">

        {/* Title + Button */}
        <div className="flex flex-col gap-4 md:flex-row">

          <input
            className="flex-1 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-lg text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
            type="text"
            placeholder="Enter the title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            onClick={createPaste}
            className="rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30 active:translate-y-0"
          >
            {pasteid ? 'Update My Paste ✨' : 'Create My Paste 🚀'}
          </button>

        </div>

        {/* Textarea Section */}
        <div className="mt-6">

          <textarea
            className="min-h-[500px] w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-5 text-base leading-7 text-gray-200 outline-none transition placeholder:text-gray-500 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20"
            value={value}
            placeholder="Enter your content here..."
            onChange={(e) => setValue(e.target.value)}
            rows={20}
          />

        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">

          <span className="text-sm text-gray-500">
            {value.length} characters
          </span>

          <span className="text-sm text-gray-500">
            {value.split(/\s+/).filter(Boolean).length} words
          </span>

        </div>

      </div>

    </div>
  );
};

export default Home;