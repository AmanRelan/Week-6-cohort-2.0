/*
You have to create a simple React App which has a reusable Card Component which has the following
 - Ability to pass in props to the Component
 - The Card must show a person's
    - Name
    - A short description
    - LinkedIn, Twitter and other Social Media Handle buttons
    - Interests Section
 - You can assume that this is kind of an e-business card and feel free to put in your creativity
 - Additional & Slightly advanced:
    - Create a page where you can add these kind of Cards by taking input from the user
    - Create a backend server where these cards get stored in a DB and can handle basic CRUD operations
    - Give the feature to perform CRUD operations from the frontend (Can be restricted to the admin only as well)
*/

const BusinessCard = () => {
  return (
    <div
      style={{
        border: "2px solid #EDE9E8",
        borderRadius: 25,
        width: "30%",
        boxShadow: "5px 5px 5px 5px #EDE9E8",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", marginBottom: 0 }}
      >
        <h1 style={{ paddingLeft: "15px", marginBottom: 0 }}>Aman Relan</h1>
        <p style={{ paddingLeft: "15px", marginTop: 0, marginBottom: "5px" }}>
          Node.js Developer with 4+ years of Experience
        </p>
      </div>
      <div>
        <h3 style={{ margin: 0, paddingLeft: "15px", marginBottom: 0 }}>
          Interests
        </h3>
        <p
          style={{
            margin: 0,
            paddingLeft: "15px",
            marginBottom: "4px",
            marginTop: "4px",
          }}
        >
          Web Dev
        </p>
        <p
          style={{
            margin: 0,
            paddingLeft: "15px",
            marginBottom: "4px",
            marginTop: "4px",
          }}
        >
          React
        </p>
        <p
          style={{
            margin: 0,
            paddingLeft: "15px",
            marginBottom: "4px",
            marginTop: "4px",
          }}
        >
          Node
        </p>
      </div>
      <div
        style={{
          display: "flex",
          marginBottom: "30px",
          paddingLeft: "15px",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <button
          style={{
            backgroundColor: "#24a0ed",
            color: "#ffffff",
            padding: "15px",
            textAlign: "center",
            borderColor: "#24a0ed",
            borderRadius: "5px",
            fontSize: "15px",
            fontWeight: "normal",
          }}
        >
          Linkedin
        </button>
        <button
          style={{
            backgroundColor: "#24a0ed",
            color: "#ffffff",
            padding: "15px",
            textAlign: "center",
            borderColor: "#24a0ed",
            borderRadius: "5px",
            fontSize: "15px",
            fontWeight: "normal",
          }}
        >
          Github
        </button>
        <button
          style={{
            backgroundColor: "#24a0ed",
            color: "#ffffff",
            padding: "15px",
            textAlign: "center",
            borderColor: "#24a0ed",
            borderRadius: "5px",
            fontSize: "15px",
            fontWeight: "normal",
          }}
        >
          Twitter
        </button>
      </div>
    </div>
  );
};

export default BusinessCard;
