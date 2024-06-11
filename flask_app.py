from flask import Flask, request

app = Flask(__name__)

@app.route('/upload-file', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        f.save(f.filename)
    return ""

@app.route('/get-feedback', methods=['GET'])
def get_feedback():
    return "abc"

if __name__ == '__main__':
    app.run(debug=False)
