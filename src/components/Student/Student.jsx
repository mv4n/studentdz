import './Student.css'

import Mark from '../Mark/Mark.jsx'

function Student({student}) {
    const {id, first_name, last_name, marks, photo} = student

    return (
        <div className="student-item">
            <div className="student-photo-wrapper">
                <img className="student-photo" src={photo} alt={`${first_name} ${last_name}`}/>
            </div>
            <div className="student-info">
                <h2>
                    <p>{first_name}</p>
                    <p>{last_name}</p>
                </h2>
            </div>
            <div className="student-marks">
                {marks.map((mark, i) => <Mark key={i} mark={mark} />)}
            </div>
            <div className="student-add-mark">
                <Mark />
                <button ></button>
            </div>
        </div>
    )
}

export default Student