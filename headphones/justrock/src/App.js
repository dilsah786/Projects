import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Heading >I am a Heading</Heading>
      <Navbar/> */}
      <Box
        mt={"35px"}
        ml={"20px"}
        height={"91vh"}
        w={"350px"}
        border={"1px solid grey"}
        borderRadius={"30px"}
      >
        <Box display={"flex"} mb={"50px"} mt={"20px"} ml={"30px"}>
          <Container
            fontWeight={"600"}
            fontSize={"2xl"}
            _hover={{
              border: "0.1px solid #28e98c",
              borderRadius: "10px",
              backgroundColor: "#1f1f1f",
              color: "#28e98c",
            }}
          >
            DILNAWAZ
          </Container>
          <Container
            pt={"0px"}
            fontWeight={"400"}
            fontSize={"2xl"}
            _hover={{
              border: "0.1px solid #28e98c",
              borderRadius: "10px",
              backgroundColor: "#1f1f1f",
              color: "#28e98c",
            }}
          >
            SAHILA
          </Container>
        </Box>
        <Container
          position={"relative"}
          display={"inline-block"}
          className="image-container"
        >
          <Image
            className="original-image"
            borderRadius="25px"
            m={"auto"}
            height={"250px"}
            width={"250px"}
            _hover={{
              transform: "scale(1)",
              cursor: "pointer",
              transition: "opacity 2s ease-in-out",
            }}
            src="https://lh3.googleusercontent.com/pw/AP1GczNdMTQtLtxsaBfM3XDgmRZOlu60Dr0oSk0PZWg9bO0Rf1bnJCHlrzDiQXCmFJMzvBcMNeiytd_yysFMjmgb5J13ewMzmfNxelZ_Z6dWtXn37Nfix2sBzNGajCN3JwucwxPfAYnAgq4BSUVXYjB5O8i4wFdN8fdnEnd0r-CBikqCrsFb2OcEsBsgD-VRXCEv9PDHKidaQGTM9ApGmKJFW7SEhQYIebzx5DqN1UnHmC9KAL4ngFizxZGm-0OIH5pPOONbPdhPW_tj_4l66EZ9ns5CmfoHN6ZXR2W-rE54GtmE8w0QkDlELVo2ncxJ_m3AOi8-fbBrXj3T7Bjlt3EMUImJMUB9GuqbtJzQIKIaFYd1XzzP_ZSyeNFHEdLW6mJDKh-1ZnLqcKkd1kvX0rOtZ-FOcybaxM0Nj9kQtGySSjndzVbp7cD62OuWBzoYglQbJO26usLCyQuOND9Pe1wVh0KyRomhcO1Y8zXEP6zn9Xj-jwvPXOEaWzlDBEvVu73l6Oxb2x5_fk4nRDA2ySTvSdQcmH5vvGB7U1tAf-5N5Vnkl8dhmAUAl7zXWTIfVcPRBWg9txxUsQZR6fvkkyfSvypHOTgpqKIpfoNt-7gRR-4M1vmsWvgoS_06EYoeohRCCO_R7HrgiOAPFYrQ7aSXL3YFfidTmCZyqF_68-5FjKcn3Iua7Y6CazZBhW615BRHo7rV5II3Xd8ADwq6FelVHZjL-cDmD09hmC7PSjkrIkvpVcpuL9BPb_82xIsmByLXPgK6Cdk-2-_zu4w7DFgScOxeF0CKS1HypuKxNr-0kqE4eOI6-g1Lc5MDrarTsPkN8ewDAMSkrx_v6S04sv-dLFLhIRvN6LEFEgynEEQTf7R4131w2P_CdM1y6mMLtGc8pjetbE7CAN14e1TJo3_8olZ6EVJnMjIFM_5tTUECPt0dCdhoC_mSGAZwHoFN-rH9jVVV3SaP_AmaLliMGkQbdeUsOkUVdRucZdCT4jbE8qfuGkaFlHqUvJ_CmIrBJKWfN5qddq0HuDy2a6WI3Zaku4DDGh2dtIiQmgGxrA=w612-h612-s-no-gm?authuser=0"
            alt="profile"
          />

          <Image
            className="hover-image"
            opacity={"0"}
            m={"auto"}
            mt="-250px"
            height={"250px"}
            width={"250px"}
            borderRadius={"30px"}
            src="https://lh3.googleusercontent.com/pw/AP1GczMA2YT5HFvD0ihEc7EfvNPaNEaZx2WjKlW9oAf2cgipkHnsCVCJKxLpJZtQWR18C2tzUawBpN-Csi6LwDcD5gF0NiYrI23EkT89AIgikTGkjJYK7pFq716J3QTb_l0l-vHsnhO7OftEMr_mRdGouW7owMIxkp5av2TMB6al3bFhSfFFl5MgMIWUNoMtXKI4LwdMIJB4WZxXynyX77q9G5dlV7pe_-cJjUXybHuuWZeceG-1Tz6pHk-ef6GYSiEhAp6J92n13iQTs_Tckw7mgtqG3yKSEFoQAxCSDYwUaj7PHACJogsSSTfPPORFJ0XNZ6S-FPv_RUaYWfj28mCn6tZoq4vAAU0un_av99KYNM14D8UUPjZOS1-Yhbof663q4h5jUWJ3fOUypjUTGvcid7afTv0tnHVPxn0zsayW-PId99ZLm-CtjvQbmh_O1vyXIUSVAx3kL97PKLeiQdwUbqmJpj7-REVyjzZ6MFCHe8jC9ZhIMuyWcLWB2eTJA6Kmuu-HRMJu0CiDl6TecPBwnHyoYsS1STNjqAuYt-2WI8ekDCKiZqzUkhu9s3DOmlWZrEXymlMzFfAVcvPsuK4Y6vMHTkykjSyMOAOJvDmBonZsvgekcl7dPk70uV8LjOq7wrwNAVM66-f1VSJWMUs5-nz-tEhpoJuOY1JFsDoeeA7CFx2rMz2Ol_UjpcuditaV_rg0Kx1e1g1wjxWGPJZJ335Qf-93ifZmn9stMa-ikW3w8cgcTwNoHJDMja22dI4fCuuapdXkQayJdj9ad5A4a7doqfOTpLzjNM3aJn2raTPvUZVlR8xoDr1hYiSp9U-spjl-S5T7ZEktkE4BTsAbqVCHAHX6U_DSezYn_d3uvdvEN-HXbp8Ryr_B3Q_9_BWeGG1UThGjnmUVi1bdy08Zab1EMaGnamJ1VgZZyURdtYZekdZC7seE-N5OOQVDNoGWHSU96hczwcUdYx3La2Vp0vNHcBMLsKUdHVQLhBncZU2WLhBxPvlw5M8NwBaSDpYsLAQMIpEA4Y2NHJlHvxU6_WVdNHUyCmSgT6G45nc=w514-h913-s-no-gm?authuser=0"
            alt="sahila"
          />
        </Container>

        <Box
          fontSize={"20px"}
          display={"flex"}
          flexDir={"column"}
          ml={"1%"}
          mt={"20px"}
        >
          <Text>mddilnawazalam7739@gmail.com</Text>
          <Text>Rajgir, Nalanda (India)</Text>
        </Box>
        <Text m={"20px"}>© 2024 Dilsah. All Rights Reserved</Text>
        <Box>
          <Container display={"flex"} gap={"10px"}>
            <Box
              border={"1px solid white"}
              borderRadius={"50px"}
              w={"50px"}
              h={"50px"}
              p={"3"}
              _hover={{
                border: "1px solid #28e98c",
                backgroundColor: "#1f1f1f",
                color: "#28e98c",
              }}
            >
              D
            </Box>
            <Box
              border={"1px solid white"}
              borderRadius={"50px"}
              w={"50px"}
              h={"50px"}
              p={"3"}
              _hover={{
                border: "1px solid #28e98c",
                backgroundColor: "#1f1f1f",
                color: "#28e98c",
              }}
            >
              I
            </Box>
            <Box
              border={"1px solid white"}
              borderRadius={"50px"}
              w={"50px"}
              h={"50px"}
              p={"3"}
              _hover={{
                border: "1px solid #28e98c",
                backgroundColor: "#1f1f1f",
                color: "#28e98c",
              }}
            >
              L
            </Box>
            <Box
              border={"1px solid white"}
              borderRadius={"50px"}
              w={"50px"}
              h={"50px"}
              p={"3"}
              _hover={{
                border: "1px solid #28e98c",
                backgroundColor: "#1f1f1f",
                color: "#28e98c",
              }}
            >
              S
            </Box>
            <Box
              border={"1px solid white"}
              borderRadius={"50px"}
              w={"50px"}
              h={"50px"}
              p={"3"}
              _hover={{
                border: "1px solid #28e98c",
                backgroundColor: "#1f1f1f",
                color: "#28e98c",
              }}
            >
              A
            </Box>
            <Box
              border={"1px solid white"}
              borderRadius={"50px"}
              w={"50px"}
              h={"50px"}
              p={"3"}
              _hover={{
                border: "1px solid #28e98c",
                backgroundColor: "#1f1f1f",
                color: "#28e98c",
              }}
            >
              H
            </Box>
          </Container>
          <Button
            border={"none"}
            color={"black"}
            backgroundColor={"#28e98c"}
            width={"90%"}
            mt={"30px"}
            fontWeight={"200"}
            borderRadius={"20px"}
            _hover={{
              border: "1px solid #28e98c",
              backgroundColor: "#1f1f1f",
              color: "#28e98c",
            }}
          >
            I LOVE YOU SAAHO!
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
