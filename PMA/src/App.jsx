import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState, setProjectState] = useState(
    {
      selectedProjectId: undefined, // nothing is selected
      projects: []
    }
  );

  const handleStartAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null // adding is going on
      }
    })
  }

  const addProject = (projectData) => {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Number(Math.random() * 1000) + new Date()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const cancelProject = () => [
    setProjectState(prevState => {
      return {
        ...prevState,
         selectedProjectId: undefined
      }
    })
  ]

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddingNewProject={addProject} cancelProject={cancelProject}/>;
  }
  else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddingNewProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onAddingNewProject={handleStartAddProject}
        projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
