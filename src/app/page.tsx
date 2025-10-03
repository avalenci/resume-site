import { Skill } from "./lib/Skill";
import SideNav from "./ui/side-nav";

const skills: Skill[] = [
  {
    type: "Frontend",
    list: [
      "Angular",
      ".NET",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "NextJS",
      "NodeJS",
    ].sort()
  },
  {
    type: "Backend",
    list: [
      "C",
      "C#",
      "Java",
      "Python",
      "RESTful Design"
    ].sort()
  },
  {
    type: "DevOps",
    list: [
      "Helm",
      "GitLab",
      "GitHub",
      "Git",
      "Kubernetes",
      "Docker",
      "CI/CD",
      "Jira"
    ].sort()
  },
  {
    type: "Databases",
    list: [
      "DynamoDB",
      "MySQL",
      "PostgreSQL"
    ].sort()
  }
]

const angular =
  "https://cdn.glitch.global/89129f4a-7afd-4317-a6a3-c18fbd348bd7/icons8-angular.svg?v=1729893459270";
const java =
  "https://cdn.glitch.global/89129f4a-7afd-4317-a6a3-c18fbd348bd7/icons8-java.svg?v=1729893464132";
const postgres =
  "https://cdn.glitch.global/89129f4a-7afd-4317-a6a3-c18fbd348bd7/icons8-postgres.svg?v=1729893473940";
const node =
  "https://cdn.glitch.global/89129f4a-7afd-4317-a6a3-c18fbd348bd7/icons8-nodejs.svg?v=1729893469237";
const react =
  "https://cdn.glitch.global/89129f4a-7afd-4317-a6a3-c18fbd348bd7/icons8-react.svg?v=1729893479434";
const ts =
  "https://cdn.glitch.global/89129f4a-7afd-4317-a6a3-c18fbd348bd7/icons8-typescript.svg?v=1729893483939";

const title = "Software Engineer";

const resume = {
  prof: [
    {
      company: "Lockheed Martin",
      location: "Remote, US",
      title: "Software Engineer",
      start: "Feb 2021",
      details: [
        "Created a map visualization tool for viewing and modifying warfare simulations — Angular, TypeScript, NodeJS, Java, PostgreSQL, Geoserver",
        "Co-founded a design system consisting of universally compatible UI components and styling standards — TypeScript, Lit.dev, Style Dictionary, Angular, React",
        "Spearheaded the development of a UI for connecting RESTful microservices, streamlining the creation of sensor processing tasks — Angular, NodeJS, Java, PostgreSQL",
        "Managed various pipelines to deploy containerized applications — GitLab, CI/CD, Helm, Kubernetes",
      ],
    },
    {
      company: "West Chester University",
      location: "West Chester, PA",
      title: "Web Specialist Intern",
      start: "Jan 2020",
      end: "Dec 2020",
      details: [
        "Maintained dynamic forms on the University website for students and staff — .NET, JQuery, C#, MySQL",
        "Wrote and implemented page specifications for requested forms",
      ],
    },
    {
      company: "Amazon",
      location: "Remote, US",
      title: "SDE Intern",
      start: "Jun 2020",
      end: "Aug 2020",
      details: [
        "Developed a search page for retail offers to increase workflows and move away from a deprecated page — Angular, NodeJS, Java, DynamoDB",
        "Created and scheduled automated tests for UI behavior — Java, Selenium",
      ],
    },
  ],
  proj: [
    {
      name: "Geospatial Dashboard",
      company: "Lockheed Martin",
      start: "2023",
      icons: [angular, node, java, postgres],
      details: [
        "Developed a geospatial UI to support data lineage, path detection, and various ISR capabilities",
        "Implemented a timeline to view and filter detected objects by time",
        "Architected UI components with mockup diagrams",
        "Coded RESTful microservices to simulate various satellite detections",
        "Worked with associated teams to prepare for demos with live bug fixes and performance optimization",
      ],
    },
    {
      name: "Design System",
      company: "Lockheed Martin",
      start: "2022",
      end: "2023",
      icons: [ts, angular, react],
      details: [
        "Developed framework flexible web components for use across Lockheed Martin",
        "Implemented design tokens to create a unifying language for style variables; making theme switching much easier for end-users",
        "Pitched to various teams and recruited early adopters for testing and collaboration",
      ],
    },
    {
      name: "Pipeline Submission Service",
      company: "Lockheed Martin",
      start: "2021",
      end: "2023",
      icons: [angular, node, java, postgres],
      details: [
        "Created a dashboard for viewing, deploying, and connecting microservice apps, providing a wide array of algorithmic solutions for sensor processing needs",
        "Provided end-users with the ability to rapidly and intuitively create analytic pipelines without having to wait on engineers to create them",
      ],
    },
    {
      name: "This Website",
      code: "https://glitch.com/edit/#!/andrew-valenci",
      company: "Personal",
      start: "2024",
      icons: [react],
      details: [
        "Created a static resume site with React and Next.js",
        "Deployed with Vercel, the creator of Next.js",
      ],
    },
  ],
  edu: {
    name: "West Chester University",
    location: "West Chester, PA",
    degree: "Bachelor of Science",
    major: "Computer Science",
    start: "Aug 2017",
    end: "Dec 2020",
    details: ["Computer Security Certificate", "Math minor", "GPA: 3.8"],
  },
};

export default function Home() {
  return (
    <div className="home-container">
      <SideNav title={title} skills={skills}></SideNav>
      <div className="main">
        <div id="experience">
          <h1>PROFESSIONAL EXPERIENCE</h1>
          {resume.prof.map((exp) => (
            <div key={exp.company}>
              <div className="space-between">
                <h2>
                  {exp.company}, {exp.location}
                </h2>
                <h3>
                  {exp.start} - {exp.end ?? "Present"}
                </h3>
              </div>
              <h3>
                <i>{exp.title}</i>
              </h3>
              <ul className="point-list">
                {exp.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div id="projects">
          <h1>PROJECTS</h1>
          {resume.proj.map((exp) => (
            <div key={exp.name}>
              <div className="space-between">
                <h2>
                  {exp.name}, {exp.company}
                </h2>
                <h3>
                  {exp.start} - {exp.end ?? "Present"}
                </h3>
              </div>
              <div className="flex">
                {exp.icons.map((ic, index) => (
                  <img key={index} className="icon" src={ic} />
                ))}
              </div>
              <ul className="point-list">
                {exp.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div id="education">
          <h1>EDUCATION</h1>
          <div>
            <div className="space-between">
              <h2>
                {resume.edu.name}, {resume.edu.location}
              </h2>
              <h3>
                {resume.edu.start} - {resume.edu.end ?? "Present"}
              </h3>
            </div>
            <h3>
              {resume.edu.degree} - {resume.edu.major}
            </h3>
            <ul className="point-list">
              {resume.edu.details.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="dogs">
          <img
            alt="Hi! I'm Oliver"
            title="woof"
            src="https://cdn.glitch.global/89129f4a-7afd-4317-a6a3-c18fbd348bd7/IMG_2731.png?v=1730420477037"
          />
          <img
            alt="Hi! I'm Mira"
            title="arf"
            src="https://cdn.glitch.global/89129f4a-7afd-4317-a6a3-c18fbd348bd7/IMG_3267.png?v=1730420483648"
          />
        </div>
      </div>
    </div>
  );
}
