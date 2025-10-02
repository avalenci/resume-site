export default function SideNav({ title, skills}: { title: string, skills: any[] }) {
    return (
    <div className="sidenav">
        <div className="sidenav-header">
        <img
            className="profile"
            src="https://cdn.glitch.com/c1177601-db20-4b0d-92ab-fc98e38fed6b%2Fwcu_pr.jpg?v=1571000683820"
        />
        <h2 className="name">Andrew Valenci</h2>
        <i className="title">{title}</i>
        <div className="icons-space">
            <a
            href="https://www.linkedin.com/in/andrew-valenci-4b2286173/"
            target="_blank"
            >
            <img
                className="icon"
                title="LinkedIn"
                alt="LinkedIn"
                src="https://cdn.glitch.global/89129f4a-7afd-4317-a6a3-c18fbd348bd7/icons8-linkedin.svg?v=1729883668803"
            />
            </a>
            <a href="https://github.com/avalenci" target="_blank">
            <img
                className="icon"
                title="GitHub"
                alt="GitHub"
                src="https://cdn.glitch.global/89129f4a-7afd-4317-a6a3-c18fbd348bd7/icons8-github.svg?v=1729886883245"
            />
            </a>
            <a href= "mailto: andrew.valenci98@gmail.com"> 
            <img
                className="icon"
                title="Send Email"
                alt="Send Email"
                src="https://cdn.glitch.global/89129f4a-7afd-4317-a6a3-c18fbd348bd7/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?v=1730063262159"
            />
            </a>
        </div>
        </div>
        <h2 id="skills-header"><i>SKILLS</i></h2>
        <div id="skills">
        {
            skills.map((item) => (
            <div key={item.type}>
                <h3>{item.type}</h3>
                <ul className="skills-list">
                {item.list.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
                </ul>
            </div>
            ))
        }
        </div>
    </div>
    );
}