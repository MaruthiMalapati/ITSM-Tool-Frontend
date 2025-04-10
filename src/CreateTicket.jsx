import { useState } from "react";
function CreateTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // const submitTicket = async () => {
  //   await fetch("http://localhost:3001/tickets", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title, description }),
  //   });
  //   alert("Ticket submitted!");
  // };

  const submitTicket = async () => {
    await fetch("https://itsm-tool-backend-production.up.railway.app/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    alert("Ticket submitted!");
  };
  return (
    <div>
      <h2>Create Ticket</h2>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={submitTicket}>Submit</button>
    </div>
  );
}
export default CreateTicket;
