import React, { useState } from 'react';
import axios from 'axios';

//const express = require('express');
//const app = express();
//const vision = require('@google-cloud/vision');
//const client = new vision.ImageAnnotatorClient({
//    keyFilename: './APIEnv.json'
//});

const ImageUpload = (props) => {

//state

    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose An Image');

//required functions
    
    const onChange = event => {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
    } // function sets selected file name/file when browse is clicked

    const onSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append({file});
    } // function sets formdata ready for sending when upload is clicked

    return (
        <form>
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" onChange={onChange} />
                <label class="custom-file-label" htmlFor="customFile">{fileName}</label>
            </div>
            <input type="submit" value="Upload" className="btn btn-primary mt-4" onSubmit={onSubmit} />
        </form>
        )
}

export default ImageUpload;