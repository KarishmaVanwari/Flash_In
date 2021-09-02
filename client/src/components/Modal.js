import React from 'react';

const Modal = ({selectedImg, setSelectedImg}) =>{

    const handleClick = (e) =>{
        if(e.target.nodeName == 'DIV'){
            setSelectedImg(null)
        }
        console.log(e.target.nodeName)
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged img"></img>
        </div>
    );
}

export default Modal;