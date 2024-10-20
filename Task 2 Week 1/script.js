function TeacherName(subject) {
    const teacher = {
        'THEORY OF AUTOMATA': '<b>Shubham Shukla</b> - shubham_shukla@gla.ac.in<br><br>Room: AB9 006, Contact: 1234567890',
        'DATA STRUCTURES AND ALGORITHM': '<b>Sohil Khan</b> - sohil_khan@gla.ac.in<br><br>Room: AB9 006, Contact: 1234567890',
        'AGILE SOFTWARE DEVELOPMENT': '<b>Madhu Sudan Kumar</b> - madhusudan_kumar@gla.ac.in<br><br>Room: AB9 006, Contact: 1234567890',
        'MACHINE LEARNING': '<b>Jagjeet Kumar</b> - jagjeet_kumar@gla.ac.in<br><br>Room: AB9 006, Contact: 1234567890',
        'FULL STACK': '<b>Shiv Kumar Verma</b> - shivkumar_verma@gla.ac.in<br><br>Room: AB9 006, Contact: 1234567890',
        'COMPETITIVE PROGRAMMING': '<b>Suresh Pratap Singh</b> - sureshpratap_singh@gla.ac.in<br><br>Room: AB1 413, Contact: 1234567890',
        'LOGICAL REASONING': '<b>Ayush Gupta</b> - ayush_gupta@gla.ac.in<br><br>Room: AB9 006, Contact: 1234567890',
        'QUANT AND APTITUDE': '<b>Ayush Gupta</b> - ayush_gupta@gla.ac.in<br><br>Room: AB9 407, Contact: 1234567890',
        'GROUP DISCUSSION': '<b>Dr. Anjali Mehra</b> - sayantan_sinha@gla.ac.in<br><br>Room: AB9 407, Contact: 1234567890',
        'MACHINE LEARNING LAB': '<b>Sayantan Sinha</b> - sayantan_sinha@gla.ac.in<br><br>Room: AB1 223, Contact: 1234567890',
    };

    document.getElementById('details').innerHTML = teacher[subject];
    document.getElementById('teacher').style.display = 'flex';
}

function closeMode() {
    document.getElementById('teacher').style.display = 'none';
}

window.onclick = function(event) {
    const mode = document.getElementById('teacher');
    if (event.target == modal) {
        mode.style.display = 'none';
    }
}
