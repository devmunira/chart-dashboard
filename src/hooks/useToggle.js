import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState({isOpen : false , type : ''});
  return{
    toggle,
    setToggle
  }
}

export default useToggle;