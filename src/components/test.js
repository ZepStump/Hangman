import React from 'react';

const test = ({ closeModal }) => {
  return (
    <div className='modal'>
      <div className='modal-header'>
        <h2 onClick={() => {closeModal(false)}}>X</h2>
      </div>
      <div className='modal-body'>
        <h2>This is a modal</h2>
      </div>
    </div>
  )
}

export default test;
