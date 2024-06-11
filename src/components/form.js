import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../upload.css'
import Button from 'react-bootstrap/Button';
import React, {useState, useRef} from 'react';

function FormInput() {
    const [file, setFile] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [jsonData, setJsonData] = useState(null);
    const fileInputRef = useRef();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleClearFile = () => {
        setFile(null);
        fileInputRef.current.value = null;
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://127.0.0.1:5000/upload-file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data);
  
      } catch (error) {
        console.error('Error:', error);
      }

      getFeedback();
      
    }

    const getFeedback = async () => {
      console.log("shirley");
      try {
        const response = await axios.get('http://127.0.0.1:5000/get-feedback');
        setJsonData(response.data);
        setFeedback(response.data.feedback);
        console.log(response.data);
        console.log("test");
  
      } catch (error) {
        console.error('Error:', error);
      }
    }

    return (
        <>
          <div className="flex flex-col items-center min-h-screen p-4">
            <div className="w-full max-w-2xl mt-12">
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Please enter a .pptx file</Form.Label>
                <div className="flex items-center">
                  <Form.Control
                    type="file"
                    size="lg"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className = "flex-grow"
                  />
                  <Button variant="secondary" className="ml-3" onClick={handleClearFile}>
                    Clear
                  </Button>
                  <Button variant="secondary" className="ml-3" onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              </Form.Group>
            </div>
            <div className="w-full max-w-4xl mt-12 p-4 border-2 border-red-500 text-center h-80">
              {feedback[0]}
            </div>
          </div>
        </>

      );
}

export default FormInput;