import "./App.css";
import Card from "./components/Card";
import IconBar from "./components/IconBar";
import Searchbar from "./components/SearchBar";
import Topbar from "./components/Topbar";

function App() {
   
  return (
    <div className="main-card">
      <Topbar />
      <Searchbar />
      <IconBar />
      <Card
        title="CS Centre"
        curriculamName="CS Curriculum"
        combo="CS Combo"
        streamName=""
        intakeName="CS INTAKE 1"
        resultReleased="Yes"
        releaseDate="N/A"
        studentCount="5"
      />
      <Card
        title="CS Centre"
        curriculamName="CS Curriculum"
        combo="CS Combo"
        streamName=""
        intakeName="CS INTAKE 1"
        resultReleased="Yes"
        releaseDate="N/A"
        studentCount="5"
      />
      <Card
        title="CS Centre"
        curriculamName="CS Curriculum"
        combo="CS Combo"
        streamName=""
        intakeName="CS INTAKE 1"
        resultReleased="No"
        releaseDate="N/A"
        studentCount="5"
      />
    </div>
  );
}

export default App;
