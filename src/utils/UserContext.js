import { createContext } from "react";

const UserContext = createContext({
  user:{
    name: "NAINSY",
    email: "nainsy210@gmail.com",
  },
});

export default UserContext;