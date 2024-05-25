import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [val, setVal] = useState("_________");
  const [filename, setFilename] = useState("No file Uploaded");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State to store image preview URL

  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.message);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      axios.post("/upload", formData).then((res) => {
        console.log(res.data.message);
        setVal(res.data.message);
      });
      alert("File uploaded successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFilename(file.name);

    // Create a temporary URL for image preview
    setImagePreview(URL.createObjectURL(file));

    setFile(file);
  };

  return (
    <>
      <center>
        <h1 className=" mt-[5rem] mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text text-white">
            Machine Learning Model to
          </span>
          <br /> Detect Cats & Dogs
        </h1>
      </center>
      <center>
        <p className="text-lg font-normal text-white lg:text-xl">
          Upload the image file to detect.
        </p>
      </center>
      <form style={{ marginTop: "-50px" }} onSubmit={handleSubmit}>
        <div className="flex w-full items-start justify-center bg-grey-lighter mb-5 mt-[5rem] ">
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-600">
            <svg
              className="w-8 h-8"
              fill="blue"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input
              type="file"
              name="file"
              className="hidden"
              onChange={(e) => {
                handleFileUpload(e);
              }}
            />
          </label>
        </div>
        <center>
          <span className="text-white">File Uploaded : {filename}</span>
        </center>
        {imagePreview && ( // Display image preview if available
          <div className="flex items-center justify-center mt-5">
            <img src={imagePreview} alt="Uploaded" className="max-w-full max-h-60" />
          </div>
        )}
        <div className="flex items-center justify-center mt-5">
          <button
            className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            PREDICT
          </button>
        </div>
      </form>

      <div style={{ marginTop: "20px" }} className=" mt-[5rem] mb-4 text-2xl">
        <center>
          <span className="text-transparent text-white font-black">
            Detected image is : {val}
          </span>
        </center>
      </div>
    </>
  );
}

export default App;
