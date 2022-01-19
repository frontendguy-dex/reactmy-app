import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpclick = () => {
        // console.log("UpperCase was clicked" + text );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    }
    const handleLOclick = () => {
        // console.log("UpperCase was clicked" + text );
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearclick = () => {
        let newText = ('');
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("")
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example text area</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows='8'></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpclick}>Convert to uppercase </button>
                <button className='btn btn-primary mx-1' onClick={handleLOclick}>Convert to lowercase </button>
                <button className='btn btn-primary mx-1' onClick={handleClearclick}>Clear text </button>
            </div>
            <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>your summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} time to read the above text</p> 
            </div>
        </>
    )
}
