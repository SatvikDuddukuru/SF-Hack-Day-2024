import Form from 'react-bootstrap/Form';
import '../upload.css'
import Button from 'react-bootstrap/Button';
import React, {useState, useRef} from 'react';

function FormInput() {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleClearFile = () => {
        setFile(null);
        fileInputRef.current.value = null;
    }

    return (
        <div className="flex justify-center min-h-screen items-start">
        <div className="w-2/5 position-one-third mt-12">
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Please enter a .pptx file</Form.Label>
            <div className="flex items-center">
              <Form.Control
                type="file"
                size="lg"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <Button variant="secondary" className="ml-3" onClick={handleClearFile}>
                Clear
              </Button>
            </div>
          </Form.Group>
        </div>
      </div>
      );
}

export default FormInput;