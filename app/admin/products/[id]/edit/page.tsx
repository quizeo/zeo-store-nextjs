import {
  fetchAdminProductsDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/action";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Button";
import CheckboxInput from "@/components/form/CheckboxInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";

const EditProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await fetchAdminProductsDetails(id);
  const { name, company, price, description, featured } = product;
  return (
    <section>
      <h1 className="text-2x font-semibold mb-8 capitalize">Update Product</h1>
      <div className="border p-8 rounded">
        {/* Image input Container */}
        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          image={product.image}
          text="update  image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>

        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              label="product Name"
              name="name"
              defaultValue={name}
              placeholder="Product Name"
            />
            <FormInput
              type="text"
              name="company"
              defaultValue={company}
              placeholder="Product Name"
            />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            defaultValue={description}
            labelText="product description"
          />
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              defaultChecked={featured}
              label="featured"
            />
          </div>
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default EditProductPage;
