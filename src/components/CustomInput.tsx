import { Input } from "@/components/ui/input";

const CustomInput = ({
  type,
  placeholder,
  isHidden,
}: {
  type: string;
  placeholder: string;
  isHidden: boolean;
}) => {
  return <Input type={type} placeholder={placeholder} isHidden={isHidden} />;
};

export default CustomInput;
