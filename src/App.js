import "./App.css";
import Card from "./components/Card";
import IconBar from "./components/IconBar";
import Searchbar from "./components/SearchBar";
import Topbar from "./components/Topbar";

function App() {

  const cardsData = [
    {
      title:"CS Centre",
      curriculamName: 'CS Curriculam',
      combo: 'CS Combo',
      streamName: '',
      intakeName: 'CS INTAKE 1',
      resultReleased: 'Yes',
      releaseDate: 'N/A',
      studentCount: '5',
    },
    {
      title:"CS Centre",
      curriculamName: 'CS Curriculam',
      combo: 'CS Combo',
      streamName: '',
      intakeName: 'CS INTAKE 2',
      resultReleased: 'Yes',
      releaseDate: 'N/A',
      studentCount: '5',
    },
    {
      title:"CS Centre",
      curriculamName: 'CS Curriculam',
      combo: 'CS Combo',
      streamName: '',
      intakeName: 'CS INTAKE 3',
      resultReleased: 'No',
      releaseDate: 'N/A',
      studentCount: '5',
    },
    {
      title:"CS Centre",
      curriculamName: 'CS Curriculam',
      combo: 'CS Combo',
      streamName: '',
      intakeName: 'CS INTAKE 4',
      resultReleased: 'Yes',
      releaseDate: 'N/A',
      studentCount: '5',
    },
    
  ];
   
  return (
    <div className="main-card">
      <Topbar />
      <Searchbar />
      <IconBar />
      {cardsData.map((cardData, index) => (
        <Card key={index} data={cardData} />
      ))}
    </div>
  );
}

export default App;
