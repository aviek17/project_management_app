import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState(
    {
      selectedProjectId: undefined, // nothing is selected
      projects: [],
      tasks : []
    }
  );

  const [selectedProject, setSelectedProject] = useState(null);

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

  const cancelProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  const handleSelectedProject = (id) => {
    const project = projectState.projects.find(project => project.id === id);
    setSelectedProject(project);
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  const handleDeleteProject = () => {
    const newProjects = projectState.projects.filter(project => project.id !== selectedProject.id);
    setSelectedProject(null);
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: newProjects
      }
    })
  }

  const handleAddTask = (task) => {
    setProjectState(prevState => {
      const newTask = {
        task : task,
        id: Number(Math.random() * 1000) + new Date(),
        projectId : selectedProject.id
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  const handleDeleteTask = (id) => {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(item => item.id !== id)
      }
    })
  }

  let content = <SelectedProject
    project={selectedProject}
    onDeleteingProject={handleDeleteProject}
    handleAddTask={handleAddTask}
    handleDeleteTask={handleDeleteTask}
    tasks={projectState.tasks.filter(item=> item.projectId === selectedProject.id)}
  />;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddingNewProject={addProject} cancelProject={cancelProject} />;
  }
  else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddingNewProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onAddingNewProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectingProject={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
