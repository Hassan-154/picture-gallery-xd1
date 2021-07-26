import './App.css';
import ImageGrid from './comonents/jsFiles/ImageGrid';
import Title from './comonents/jsFiles/Title';
import UploadForm from './comonents/jsFiles/UploadForm';

function App() {
  return (
    <div className="App">
     <Title/>
     <UploadForm/>
     <ImageGrid/>
    </div>
  );
}

export default App;
