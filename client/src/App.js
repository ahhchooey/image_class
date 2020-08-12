import React from 'react';
import './App.css';
import * as axios from "axios";

import {Upload, message, Tooltip, Button, Input} from "antd";
import {UploadOutlined} from "@ant-design/icons";

function App() {

  const [classification, setClassification] = React.useState();
  const [url, setUrl] = React.useState();

  const handleUrlRequest = (e) => {
    axios.post("/image-from-url", {url: url}).then((response) => {
      setClassification(response.data.classification);
    });
  }

  return (
    <div className="App">
      {classification ? <div>
          <div>
            I'm {classification[0].probability * 100}% sure that this is:
          </div>
          <div style={{fontWeigt: "bold", fontSize: "2em"}}>
            {classification[0].className}
          </div>
          {classification[1] ? <span>
            <div>
              Although it may also be...
            </div>
            <div>
              {classification[1].className}
            </div>
          </span> : null}
        </div> : 
        <div>
          <Upload
            name={"upload"}
            showUploadList={false}
            action={"/image"}
            onChange={info => {
              if (info.file.status === "done") {
                setClassification(info.file.response.classification);
              } else if (info.file.status === "error") {
                message.error(info.file.response);
              }
            }}
          >
            <Tooltip title={"Upload an image"}>
              <Button icon={<UploadOutlined />} />
            </Tooltip>
          </Upload>
          <div style={{textAlign: "center"}}>
            or
          </div>
          <Input onChange={e => setUrl(e.target.value)} placeholder={"Or paste a link..."} />
          <Button onClick={() => handleUrlRequest()}>Go</Button>
      </div>
    }
  </div>
  );
}

export default App;
