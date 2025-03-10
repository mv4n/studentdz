import './App.css'

import StudentsJSON from './assets/StudentsJSON.jsx';
import StudentList from "./components/StudentList/StudentList.jsx";
import Student from "./components/Student/Student.jsx";

const students = JSON.parse(StudentsJSON);

function App() {

    return (
        <StudentList>
            {
                students.map((student) => {
                    return (
                        <Student key={student.id} student={student} />
                    )
                })
            }
        </ StudentList>
    )
}


export default App
