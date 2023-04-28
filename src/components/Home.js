import React from 'react';
import Header from './Header';
import { useState } from "react";
import CustomGame from "./CustomGame";
import { ReactDimmer } from 'react-dimmer'
  
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function HomePage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isMenuOpen, setMenuOpen] = useState(false)
// eslint-disable-next-line no-undef

  return (
    
    <div className='home-container'>
         <ReactDimmer isOpen={isMenuOpen} exitDimmer={setMenuOpen} />
       <center>

    {/* <Header /> */}
    <h1 className='home-title'>Welcome to Hangman</h1>
    <div className="homepage-btn">
        <div className="btn-wrapper">
          <div className="btn-wrapper__container">
            <div className="btn-inner">
              <a className="btn-inner__text" href="/leaderboard">
                Leaderboard
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="homepage-btn">
        <div className="btn-wrapper">
          <div className="btn-wrapper__container">
            <div className="btn-inner">
              <a className="btn-inner__text" href="/Hangman">
                Start Game
              </a>
            </div>
          </div>
        </div>
      </div>



      <div className="homepage-btn">
        <div className="btn-wrapper">
          <div className="btn-wrapper__container">
            <div className="btn-inner">
   
            <a className="btn-inner__text" onClick={handleShow}>
            Custom Game
            </a>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title className='modal-title'>Custom Game</Modal.Title>
                <Modal.Body className='modal-body'> <CustomGame /></Modal.Body>
                <Button className='model-body' variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Header>
               
                <Modal.Footer>
               

                </Modal.Footer>
            </Modal>
           
            </div>
          </div>
        </div>
      </div>
    </center>
    
    </div>

    
  );
}
export default HomePage;



