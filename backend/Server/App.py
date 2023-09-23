from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from flask_pymongo import PyMongo

app = Flask(__name__)


app.config['MONGO_URI'] = 'mongodb://localhost:27017/database_name'
mongo = PyMongo(app)

# @app.route('/get_topics_and_subtopics', methods=['GET'])
# def get_topics_and_subtopics():
#     collection = mongo.db.collection_name
    
#     cursor = collection.find({}, {'_id': 0, 'topic 1': ['Subtopic 1.1', 'Subtopic 1.2', 'Subtopic 1.3', 'Subtopic 1.4']})
    
#     syllabus = {
#     'Topic 1': ['Subtopic 1.1', 'Subtopic 1.2', 'Subtopic 1.3', 'Subtopic 1.4'],
#     'Topic 2': ['Subtopic 2.1', 'Subtopic 2.2', 'Subtopic 2.3'],
#     'Topic 3': ['Subtopic 3.1', 'Subtopic 3.2', 'Subtopic 3.3', 'Subtopic 3.4', 'Subtopic 3.5'],
# }

#     response = {
#         'topics': topics,
#         'subtopics': subtopics
#     }
    
#     return jsonify(response)

@app.route('/recommend_module/<user_id>/<state>', methods=['GET'])
def recommend_module_endpoint(user_id, state):
    recommended_module = recommend_module(user_id, state)
    return jsonify({'recommended_module': recommended_module})

syllabus = {
    'Topic 1': ['Subtopic 1.1', 'Subtopic 1.2', 'Subtopic 1.3', 'Subtopic 1.4'],
    'Topic 2': ['Subtopic 2.1', 'Subtopic 2.2', 'Subtopic 2.3'],
    'Topic 3': ['Subtopic 3.1', 'Subtopic 3.2', 'Subtopic 3.3', 'Subtopic 3.4', 'Subtopic 3.5'],
}

states = list(syllabus.keys())  
num_actions = len(syllabus[states[0]])  

q_table = np.zeros((len(states), num_actions))

learning_rate = 0.1
discount_factor = 0.9
exploration_prob = 0.3

def update_q_table(state, action, reward, next_state):
    best_next_action = np.argmax(q_table[next_state])
    q_table[state][action] = (1 - learning_rate) * q_table[state][action] + \
                            learning_rate * (reward + discount_factor * q_table[next_state][best_next_action])

def determine_next_subtopics(current_topic, q_table):
    state = states.index(current_topic)
    action = np.argmax(q_table[state])
    next_subtopic = syllabus[current_topic][action]
    
    return current_topic, next_subtopic

current_topic = 'Topic 1'  
num_episodes = 1000  

@app.route('/get_next_subtopic/<current_topic>', methods=['GET'])
def get_next_subtopic(current_topic):
    if current_topic not in states:
        return jsonify({"message": "Invalid topic"}), 400

    current_topic, next_subtopic = determine_next_subtopics(current_topic, q_table)

    if next_subtopic:
        return jsonify({"next_subtopic": next_subtopic}), 200
    else:
        return jsonify({"message": "Syllabus is complete"}), 200

app = Flask(__name__)
CORS(app)

if __name__ == '__main__':
    app.run(debug=True, port=9009) #Running on http://127.0.0.1:9009