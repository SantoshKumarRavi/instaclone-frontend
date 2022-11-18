import React, { useState, useEffect } from "react";

const PostForm = () => {
  const [state, setState] = useState({
    name: "",
    Location: "",
    Description: "",
    files: null,
  });
  const initialState = {
    name: "",
    Location: "",
    Description: "",
    files: null,
  };
  const [disabled, setDisabled] = useState(true);
  const[uploading,setUploading]=useState(false)
  function onChangeSetState(e) {
    if (e.target.name !== "files") {
      let updated = { ...state };
      updated[e.target.name] = e.target.value;
      setState(updated);
    }
    if (e.target.name === "files") {
      let updated = { ...state };
      updated[e.target.name] = e.target.files;
      setState(updated);
    }
  }
  useEffect(() => {
    let setCondtion = false;
    for (let i of Object.keys(state)) {
      if (state[i] === "" || state[i] === null) {
        setCondtion = false;
        setDisabled(() => true);
        break;
      } else {
        setCondtion = true;
      }
    }
    if (setCondtion) {
      setDisabled(() => false);
    }
  }, [state]);

  function postToServer(e) {
    setUploading(true)
    e.preventDefault();
    const formData = new FormData();
    formData.append("images", state.files[0]);

    for (let i of Object.keys(state)) {
      if (i !== "files") {
        formData.append(i, state[i]);
      }
    }

    fetch("http://localhost:8081/posts", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        setUploading(false)
        return response.json();
      })
      .then(() => {
        // console.log("data in front end", data);
        setState(initialState);
        window.location.href = "/Postview";
      });
  }
  const { name, Location, Description } = state;
  return (
    <div className="">
    {uploading && <div>uploading................. pls wait</div>}
      <form onSubmit={postToServer}>
        <input type="file" onChange={(e) => onChangeSetState(e)} name="files" />
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeSetState(e)}
          placeholder="Author"
          name="name"
        />
        <input
          type="text"
          value={Location}
          onChange={(e) => onChangeSetState(e)}
          placeholder="Location"
          name="Location"
        />
        <input
          type="text"
          value={Description}
          onChange={(e) => onChangeSetState(e)}
          placeholder="Description"
          name="Description"
        />
        <button disabled={disabled}>Post</button>
      </form>
    </div>
  );
};

export default PostForm;
