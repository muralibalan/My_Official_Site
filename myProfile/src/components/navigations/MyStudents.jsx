// src/components/MyStudents.jsx

import React from 'react';

// Example: public/students/student1.jpg, student2.jpg, ...
const students = [
  { name: "Adhithya", photo: "students/Adhithya.jpeg" },
  { name: "Arunaja", photo: "students/Arunaja.jpeg" },
  { name: "BarbeenReegan", photo: "students/BarbeenReegan.jpeg" },
  { name: "Dhatshayani", photo: "students/dhatshayani.jpeg" },
  { name: "Dhinesh", photo: "students/Dhinesh.jpeg" },
  { name: "Diwakar", photo: "students/Diwakar.jpeg" },
  { name: "Gogulan", photo: "students/Gogulan.jpeg" },
  { name: "Harinishree", photo: "students/Harinishree.jpeg" },
  { name: "Jeevan", photo: "students/Jeevan.jpeg" },
  { name: "Jyotsana", photo: "students/Jyotsana.jpeg" },
  { name: "Kalai Selvi", photo: "students/KalaiSelvi.jpeg" },
  { name: "Karthika", photo: "students/Karthika.jpeg" },
  { name: "Kathiravan", photo: "students/Kathiravan.jpeg" },
  { name: "Keerthika", photo: "students/Keerthika.jpeg" },
  { name: "Logaraman", photo: "students/Logaraman.jpeg" },
  { name: "MadhuPriya", photo: "students/MadhuPriya.jpeg" },
  { name: "MaryAncita", photo: "students/MaryAncita.jpeg" },
  { name: "MuhamaduMushraf", photo: "students/MuhamaduMushraf.jpeg" },
  { name: "Naveen", photo: "students/Naveen.jpeg" },
  { name: "NaveenKumar", photo: "students/Naveenkumar.jpeg" },
  { name: "princeanbuselvan", photo: "students/princeanbuselvan.jpeg" },
  { name: "Prusothaman", photo: "students/Prusothaman.jpeg" },
  { name: "Rahul", photo: "students/Rahul.jpeg" },
  { name: "Sajitha", photo: "students/Sajitha.jpeg" },
  { name: "Samual", photo: "students/Samual.jpeg" },
  { name: "Sanjay", photo: "students/Sanjay.jpeg" },
  { name: "SaqipNihal", photo: "students/SaqipNihal.jpeg" },
  { name: "Saranya", photo: "students/Saranya.jpeg" },
  { name: "Saraswathi", photo: "students/Saraswathi.jpeg" },
  { name: "SarathKumar", photo: "students/SarathKumar.jpeg" },
  { name: "Siddharthan", photo: "students/Siddharthan.jpeg" },
  { name: "Sudharshan", photo: "students/Sudharshan.jpeg" },
  { name: "Tamil", photo: "students/Tamil.jpeg" },
  { name: "Thulasi", photo: "students/Thulasi.jpeg" },
  { name: "Vignesh", photo: "students/Vignesh.jpeg" },
  { name: "Vigneshwaran", photo: "students/Vigneshwaran.jpeg" },
  { name: "Yamuna", photo: "students/yamuna.jpeg" },
  
];

function MyStudents() {
  return (
    <div style={{ padding: "24px" }}>
      <h2>My Students</h2>
      <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "24px",
        }}
      >
        {students.map((student, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #eee",
              borderRadius: "12px",
              padding: "16px 8px",
              textAlign: "center",
              background: "#3f3f9fff",
              boxShadow: "0 1px 4px #eee",

            }}
          >
            <img
              src={student.photo}
              alt={student.name}
              width="290"
              height="290"
              style={{ objectFit: "cover", borderRadius: "10%" }}
            />
            <div style={{ marginTop: "12px", fontWeight: "600" }}>{student.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyStudents;
