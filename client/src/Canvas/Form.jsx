import React, { useState } from "react";
import loadingImage from "/loading.gif";
import demo from '/giphy.gif';
const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    textInput: "",
  });
  const [image,setImage]=useState(demo);

  const handleInputChange = (e) => {
    setFormData({ ...formData, textInput: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!formData.textInput) return;

    const response = await fetch('http://localhost:3000/send-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: formData.textInput }),
    });

    const data = await response.json();
    setIsLoading(false);
    setImage(data.text);
    console.log(image);
    // Simulate loading for a few seconds
    // setTimeout(() => {
    //   setIsLoading(false);
    //   console.log("Form submitted:", formData);
    // }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 rounded">
      <div className="mb-8 w-50">
        {isLoading ? (
          <img src={loadingImage} alt="Loading" className="w-48 h-48 " />
        ) : (
          <img src={image} alt="Display" className="w-48 h-48" />
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded shadow-md p-8 max-w-md w-full"
      >
        <label className="block font-bold mb-2" htmlFor="textInput">
          Text Input
        </label>
        <input
          type="text"
          id="textInput"
          value={formData.textInput}
          onChange={handleInputChange}
          className="w-full p-2 border rounded shadow-md "
        />
        <button
          type="submit"
          className="mt-4 bg-cyan-400 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
