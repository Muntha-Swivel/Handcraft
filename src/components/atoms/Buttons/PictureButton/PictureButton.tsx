import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IPictureButton } from "./PictureButton.interface";
const PictureButton = ({ icon, onClick }: IPictureButton) => {
  return (
    <IconButton color="secondary" onClick={onClick}>
      {icon}
    </IconButton>
  );
};

export { PictureButton };
