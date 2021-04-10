from flask import Flask, request, jsonify
import os
# from dotenv import load_dotenv
import spacy
# load_dotenv()
app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY') or 'abcd1234'

@app.route('/api/', methods = ['GET', 'POST'])
def home():
    nlp = spacy.load("en_core_web_md")
    doc = nlp(request.args.get("report"))
    disease = nlp("disease symptoms diabetes sugar")
    threshold = 0.40
    result = [token.text for token in doc if token.pos_ =="PROPN" or token.pos_ =="NOUN"]
    result = [i for i in result if disease.similarity(nlp(i)) > threshold]

    return jsonify({"result":result})




if __name__ == "__main__":
    app.run(debug=True)