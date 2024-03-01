const Resume = () => {
    return (
        <div className="resume-container">
            <h1>Resume</h1>
            <p> Download my <a href="../../images/Resume.pdf" download>resume</a></p>
            <h2>Front End Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h2>Back End Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
}

export default Resume;