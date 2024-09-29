import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Aboutbot() {
  return (
    <div className="container mt-4">
      <h2 style={{ color: "#007bff", textAlign: "center" }}>
        This is a <span className="badge bg-success">Career Info Bot</span>
      </h2>
      <p className="text-muted" style={{ fontStyle: "italic" }}>Test model for hosting</p>
      <p style={{ fontWeight: "bold", color: "#6c757d" }}>Input key formats:</p>
      <p className="text-primary">Use these formats to test:</p>
      <ul className="list-group">
        <li className="list-group-item list-group-item-info">higherstudies</li>
        <li className="list-group-item">12th</li>
        <li className="list-group-item list-group-item-warning">teachings</li>
        <li className="list-group-item list-group-item-light">freelancer</li>
        <li className="list-group-item list-group-item-danger">competitive exams</li>
        <li className="list-group-item list-group-item-secondary">defence sectors</li>
        <li className="list-group-item list-group-item-primary">research and development</li>
        <li className="list-group-item list-group-item-success">influencer</li>
        <li className="list-group-item list-group-item-dark">digital marketing</li>
        <li className="list-group-item list-group-item-light">entrepreneur</li>
        <li className="list-group-item list-group-item-info">trader</li>
        <li className="list-group-item list-group-item-success">exporter</li>
        <li className="list-group-item list-group-item-warning">bachelor</li>
      </ul>
    </div>
  );
}
