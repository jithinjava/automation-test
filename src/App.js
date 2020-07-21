import React, {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'

function App() {

    const [showTest, setShowTest] = useState(false)

    function showTestPage() {
        setShowTest(true)
    }

  return (
      <>
          <h2>Welcome to DNB Automation coding Test</h2>
          <p>
              <h3>Instructions</h3>
              <ul><li>
                 Here we have a list of simple cypress coding Tasks
              </li>
                  <li>
                     Please read the Question and you may go back to the code editor and start writing tests or modifying tests
                  </li>
                  <li>
                     You may click on "Show Task" inorder to proceed further.
                  </li>
              </ul>
          </p>
          <Button className="showTasks" variant="contained" color="primary" onClick={() => { showTestPage() }}>
              Show Tasks
          </Button>
          {showTest &&
          <div>
            <ul><li>
                <strong>#Q1:</strong>Write a cypress test to verify following button with property className="Hello" Exists on this page?
                <br/><br/>
                <Button id="HelloId" variant="contained" className="Hello" color="secondary">Hello</Button>
                <br/><br/>
            </li>
            <li>
                 <strong>#Q2:</strong>Write a cypress test to verify following link will navigate to "https://www.dnb.no" on click?
                 <br/><br/>
                <Link href="https://www.dnb.no" onClick=""> Go to DNB Netbanking </Link>
            </li>
            </ul>
          </div>
        }
      </>

  );
}

export default App;
