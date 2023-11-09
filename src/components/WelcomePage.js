function WelcomePage(props){
    return(
        <div>
            <h1>Welcome to {props.courseName}</h1>
            <h2>{props.exerciseName}</h2>
            <p>{props.studentId}</p>
            <p>{props.name}</p>
            <p>{props.college}</p>
        </div>
    )
}

export default WelcomePage