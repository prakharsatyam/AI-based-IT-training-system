syllabus = {
    'Topic 1': ['Subtopic 1.1', 'Subtopic 1.2', 'Subtopic 1.3', 'Subtopic 1.4'],
    'Topic 2': ['Subtopic 2.1', 'Subtopic 2.2', 'Subtopic 2.3'],
    'Topic 3': ['Subtopic 3.1', 'Subtopic 3.2', 'Subtopic 3.3', 'Subtopic 3.4', 'Subtopic 3.5'],
}

def determine_next_subtopics(test_results, response_time, current_topic, current_subtopic):

    passing_score_threshold = 70

    max_response_time = 30

    if (
        test_results[current_topic][current_subtopic] >= passing_score_threshold
        and response_time[current_topic][current_subtopic] <= max_response_time
    ):

        subtopics = syllabus[current_topic]
        current_subtopic_index = subtopics.index(current_subtopic)

        num_subtopics_to_teach = min(7, max(4, len(subtopics) - current_subtopic_index))

        next_subtopics = []
        for i in range(num_subtopics_to_teach):
            next_subtopics.append(subtopics[current_subtopic_index + i])

        return current_topic, next_subtopics
    else:
        return current_topic, [current_subtopic]

test_results = {
    'Topic 1': {
        'Subtopic 1.1': 80,
        'Subtopic 1.2': 60,
        'Subtopic 1.3': 75,
        'Subtopic 1.4': 90,
    },
    'Topic 2': {
        'Subtopic 2.1': 70,
        'Subtopic 2.2': 85,
        'Subtopic 2.3': 78,
    },
   
}

response_time = {
    'Topic 1': {
        'Subtopic 1.1': 25,  # Response time in min
        'Subtopic 1.2': 40,
        'Subtopic 1.3': 22,
        'Subtopic 1.4': 28,
    },
    'Topic 2': {
        'Subtopic 2.1': 32,
        'Subtopic 2.2': 27,
        'Subtopic 2.3': 35,
    },
    
}

current_topic = 'Topic 1'
current_subtopic = 'Subtopic 1.1'

next_topic, next_subtopics = determine_next_subtopics(test_results, response_time, current_topic, current_subtopic) # Determining the next subtopics 

if next_topic and next_subtopics:
    print(f"Teach subtopics {', '.join(next_subtopics)} in '{next_topic}'.")
else:
    print("Syllabus is complete.")