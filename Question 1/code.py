from flask import Flask, request, jsonify
import requests

app = Flask(_name_)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')

    result = []

    for url in urls:
        try:
            response = requests.get(url)
            data = response.json()
            numbers = data.get('numbers', [])
            result.extend(numbers)
        except Exception as e:
            print(f"Error fetching data from URL {url}: {e}")

    return jsonify({'numbers': list(set(result))})

if _name_ == '_main_':
    app.run(host='0.0.0.0', port=8008)
