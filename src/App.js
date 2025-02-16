import './App.css';

import Navbar from './MyComponents/Navbar';
import Form from './MyComponents/Form';
import Footer from './MyComponents/Footer';
function App() {
  return (
    
<>
    <Navbar title="Word App"/>
<div className="container my-20">

<Form heading="Enter your text below to get the desired result"/>
</div>
    
  <Footer />
    </>
  );
}

export default App;
