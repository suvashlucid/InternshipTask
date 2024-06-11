import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import "./Clients.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Clients() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, such as sending the data to a server
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container maxWidth="xl" className="clientContainer">
      <div className="clientdiv">
        <Typography variant="h4">Contact us</Typography>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ backgroundColor: "orange" }}
            sx={{
              "&:hover": {
                backgroundColor: "#FFFF00", // Change to desired hover background color
                boxShadow:
                  "0 0 5px  #FFFF00, 0 0 10px #FFFF00, 0 0 15px #1976D2", // Glow effect
              },
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Clients;
