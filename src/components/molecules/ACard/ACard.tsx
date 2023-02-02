import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PrimaryButton } from "../../atoms";
import styles from "./ACard.module.css";
import { IACard } from "./ACard.interface";

const ACard = ({ children }: IACard) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={`https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2374&q=80`}
        title="green iguana"
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          Engagement Ring
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $700.00
        </Typography>
      </CardContent>
      <CardActions className={styles.actionsContainer}>{children}</CardActions>
    </Card>
  );
};

export { ACard };
