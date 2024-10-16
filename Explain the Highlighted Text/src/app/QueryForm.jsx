import React from 'react';

function QueryForm({ handleChange }) {
  return (
    <div className='flex flex-col gap-2 mt-10'>
      <label htmlFor='queryInput'>Explain?</label>
      <input
        type='text'
        id='queryInput'
        placeholder='Enter your Query Content'
        className='border border-gray-300 rounded p-2 text-black'
        onChange={handleChange}
      />
    </div>
  );
}

export default QueryForm;
