from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from searcher import search
load_dotenv()
app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY') or 'abcd1234'

@app.route('/search/', methods = ['GET'])
def home():
    result = ""
    try:
        result = search(request.args.get("query"))
    except Exception as e:
        print(e)
    
    return jsonify({
        "result": result
    })




if __name__ == "__main__":
    app.run(debug=True)