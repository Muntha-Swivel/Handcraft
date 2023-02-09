import * as yup from "yup";

const AddProductFormSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup
    .string()
    .required("Please enter a description")
    .min(10, "Description should be at least 10 characters long"),
  price: yup.number().required("Please give a price"),
  image: yup
    .string()
    .matches(/(\.png|\.jpg|\.jpeg)$/, {
      message: "File extension must be .png, .jpg, or .jpeg",
      excludeEmptyString: true,
    })
    .required(),
});

export { AddProductFormSchema };
