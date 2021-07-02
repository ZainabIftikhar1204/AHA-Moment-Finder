from flask import Flask
from flask import request
from flask import jsonify
import os


app = Flask(__name__)
@app.route('/api/', methods=['POST', 'GET'])
def api_post():
    if request.method == 'POST':
        print('post app')
        req = request.json
        print(req)
        return jsonify(name='john')

