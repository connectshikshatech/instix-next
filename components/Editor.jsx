import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});
import "react-quill-new/dist/quill.snow.css";

const Editor = ({ setDescription, description }) => {
  const [modules, setModules] = useState(null);

  useEffect(() => {
    const Quill = require("react-quill-new").Quill;

    const modules = {
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
          ["code-block"],
          [{ align: [] }],
          [{ color: [] }, { background: [] }],
          ["table"],
        ],
      },
    };

    setModules(modules);
  }, []);

  return (
    <div>
      {modules && (
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          modules={modules}
          className="h-auto"
        />
      )}
    </div>
  );
};

export default Editor;
