import { Img } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Img
          w={"100px"}
          h={"100px"}
          borderRadius={"50%"}
          cursor={"pointer"}
          src="https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D"
          alt="headphoes"
        />
        Justrock
      </nav>
    </div>
  );
};

export default Navbar;
