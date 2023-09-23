import numpy as np

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

def determine_next_subtopics(current_topic, q_table, test_results, response_time):
    state = states.index(current_topic)
    action = np.argmax(q_table[state])
    next_subtopic = syllabus[current_topic][action]
    
    if (
        test_results[current_topic][next_subtopic] < 70
        or response_time[current_topic][next_subtopic] > 30
    ):
        
        next_subtopics = [next_subtopic]
    else:
        
        current_subtopic_index = syllabus[current_topic].index(next_subtopic)
        num_subtopics_to_teach = min(7, max(4, len(syllabus[current_topic]) - current_subtopic_index))
        next_subtopics = syllabus[current_topic][current_subtopic_index:current_subtopic_index+num_subtopics_to_teach]

    return current_topic, next_subtopics

current_topic = 'Topic 1'  # starting topic
num_episodes = 1000  # No of training episodes

for episode in range(num_episodes):
    while current_topic:
        current_topic, next_subtopics = determine_next_subtopics(current_topic, q_table, test_results, response_time) # Determining the next subtopic based on Q-values
        
        for next_subtopic in next_subtopics:
            reward = simulate_learning(current_topic, next_subtopic)
            
            next_state = states.index(current_topic)
            update_q_table(states.index(current_topic), states.index(next_subtopic), reward, next_state)
            
        if current_topic not in states:
            current_topic = None
