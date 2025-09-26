import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function Services() {
  return (
    <div>
      <h2 className="text-center">Our Services</h2>
      <p className="text-muted text-center">
        This is the Services page where we describe our offerings.
      </p>
    </div>
  );
}

function Home() {
  return (
    <div className="text-center">
      <h2 className="mb-4">Welcome to the Home Page</h2>

      <p>
        <a href="https://react.dev" target="_blank" rel="noreferrer" className="btn btn-primary">
          Go to React Docs
        </a>
      </p>

      <p>
        <a href="/files/guide.pdf" download className="btn btn-success">
          Download Guide (PDF)
        </a>
      </p>


      <p>
        <a href="/files/manual.docx" target="_blank" className="btn btn-info">
          Download Manual (DOCX)
        </a>
      </p>

      <p>
        <a href="#section1" className="btn btn-warning">Jump to Section 1</a>
        <a href="#section2" className="btn btn-danger ms-2">Jump to Section 2</a>
      </p>

      <div style={{ marginTop: "200px" }} id="section1" className="alert alert-primary">
        <h3>Section 1</h3>
        <p>This is a specific point in the page.</p>
      </div>

      <div style={{ marginTop: "200px" }} id="section2" className="alert alert-success">
        <h3>Section 2</h3>
        <p>This is another section you can jump to.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">My React Lab</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
