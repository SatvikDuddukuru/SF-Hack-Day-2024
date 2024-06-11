from main import run
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

most_recent_file = ""

@app.route('/upload-file', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        f.save(f.filename)
        global most_recent_file
        most_recent_file = f.filename
    return ""

@app.route('/get-feedback', methods=['GET'])
def get_feedback():
    return run(most_recent_file)


if __name__ == '__main__':
    app.run(debug=False)
