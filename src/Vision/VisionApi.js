/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./VisionApi.css";
import FileBase64 from "react-file-base64";
import DataExtraction from "./DataExtraction";

class VisionApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      key: [],
    };

    this.submitToGoogle = this.submitToGoogle.bind(this);
  }

  getFiles(files) {
    this.setState({ files: files });
    this.submitToGoogle();
  }
  submitToGoogle = async () => {
    try {
      let image = this.state.files[0].base64;
      let split = image.split(",");
      let img = split[1];
      let body = JSON.stringify({
        requests: [
          {
            features: [
              { type: "LABEL_DETECTION", maxResults: 10 },
              { type: "LOGO_DETECTION", maxResults: 5 },
              { type: "TEXT_DETECTION", maxResults: 10 },
              { type: "DOCUMENT_TEXT_DETECTION", maxResults: 10 },
            ],
            image: {
              content: img,
            },
          },
        ],
      });
      let response = await fetch(
        "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDcx3crXgdsgwdr0OGEBHkX-ZNw-Ggvuk8",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Content-Length": "size",
          },
          method: "POST",
          body: body,
        }
      );
      let responseJson = await response.json();
      console.log(responseJson);
      let processed = responseJson.responses[0].textAnnotations[0].description.split('\n');
      console.log(processed);
      this.setState({ key: processed} )
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="text-center">Vision API </h1>
          <div className="text-center mt-25">
            <p className="text-center">Upload Some Image~</p>
            <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
          </div>
          <div className="text-center">
            {
              this.state.files.map((file, i) => {
                // eslint-disable-next-line jsx-a11y/alt-text
                return (
                  <img key={i} src={file.base64} width="100px" height="100px" />
                );
              })
              // eslint-disable-next-line react/jsx-no-comment-textnodes
            }
            <img src="" />
            {/* <DataExtraction /> */}
            {/* <DataExtraction 
            arr={this.state.key} 
            handleAdd={this.props.handleAdd}/> */}
          </div>
          <div className="text-center">
          {console.log("key is" + this.state.key)}
            <DataExtraction 
            arr={this.state.key} 
            handleAdd={this.props.handleAdd}/>
          </div>
          

        </div>
      </div>
    );
  }
}
// eslint-disable-next-line no-undef

export default VisionApi;
