import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
      // console.log("Uppercase was clicked: "  +  text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = ()=> {
      // console.log("Uppercase was clicked: "  +  text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase", "success");
    }

    const handleCopy = ()=> {
      console.log("I am copy");
      var text = document.getElementById("myBox")
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard", "success");

    }

    const handleClearClick = ()=> {
      // console.log("Uppercase was clicked: "  +  text);
      let newText = '';
      setText(newText)
      props.showAlert("Text Cleared", "success")
    }

    const handleOnChange =(event)=> {
      // console.log("On change");
      setText(event.target.value);
    }
    

    const [text, setText] = useState('Enter text here2');
    return (
      <>
      <div className='container my-2' style={{Color: props.mode==='dark'? 'white' : 'black'}}>
         <h2 className="mb-2">{props.heading}</h2>  
         <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey' : 'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
         </div>
         <button disabled={text.length===0}className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
         <button disabled={text.length===0}className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
         <button disabled={text.length===0}className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
         <button disabled={text.length===0}className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
        
      </div>
      <div className="container my-3" style={{Color: props.mode==='dark'? 'white' : '#042743'}}>
         <h2>Your text summary</h2>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length } Minutes read</p>
         <h3>Preview</h3>
         <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
      </>
  )
}
