import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export enum Mode {
  SingleProduct = "singleProduct",
  CartItem = "cartItem",
}

type SelectProductAmountProps = {
  mode: Mode.SingleProduct;
  amount: number;
  setAmount: (value: number) => void;
};

type SelectCartItemAmountProps = {
  mode: Mode.CartItem;
  amount: number;
  setAmount: (value: number) => Promise<void>;
  isLoading: boolean;
};

const SelectProductAmount = (
  props: SelectProductAmountProps | SelectCartItemAmountProps
) => {
  const { mode, amount, setAmount } = props;

  const cartItemMode = mode === Mode.CartItem;

  return (
    <>
      <h4 className="mb-2"> Amount :</h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(Number(value))}
        disabled={cartItemMode ? props.isLoading : false}
      >
        <SelectTrigger className={cartItemMode ? "w-[100px]" : "w-[150px]"}>
          <SelectValue placeholder={amount} />
        </SelectTrigger>
        <SelectContent className="max-h-[300px] overflow-y-auto">
          {Array.from({ length: 20 }, (_, i) => {
            const selectValue = (i + 1).toString();

            return (
              <SelectItem key={selectValue} value={selectValue}>
                {selectValue}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectProductAmount;
