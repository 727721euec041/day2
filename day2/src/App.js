import './App.css';
import Armors from './pages/component';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <section id="header">
    <nav>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">About</a></li>
                    <li><a href="#header4">Contact</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1>JOHN CONSTANTINE ELECTRONICS</h1>
    <br/><br/><br/><br/>
    <a href="https:/www.google.com" target="_blank" >CLICK HERE!</a>
</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h3>
                 welcome to the city  of ELECTRONICS
                </h3><br/>
                
                <br/>
          
        </div>
    </nav>
</section>
    <Armors/>    
    <Contact/>
    </div>
  );
}

export default App;
