import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://social-media-api-v62t.onrender.com/assets/${image}`}
        // src={`http://localhost:3007/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;