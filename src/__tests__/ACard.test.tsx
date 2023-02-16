import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ACard } from "../components/molecules";
const product = {
  _id: "xyz",
  title: "Diamond Ring",
  price: 200,
  description: "An imported Ring",
  sold: 20,
  image: "https://images.news18.com/ibnlive/uploads/2022/12/ranveer-singh.jpg",
};
describe("Card", () => {
  it("should render firstName, lastName, email, phone", () => {
    const { getByText } = render(
      <ACard
        _id={product._id}
        title={product.title}
        price={product.price}
        image={product.image}
        description={product.description}
        sold={product.sold}
      />
    );

    const title: any = getByText(product.title);
    const price: any = getByText(`$${product.price}`);

    expect(title).toBeVisible();
    expect(price).toBeVisible();
  });
});
