import style from "./FormInputs.module.scss";

import { Input, Radio, Checkbox } from "@nextui-org/react";
import { EventCategory } from "../../Data/data";

export const FormInput = (props: any) => {
  return (
    <Input
      underlined
      labelPlaceholder={props.label || ""}
      label={props.overlabel || ""}
      type={props.type || ""}
      color="default"
      width="300px"
      size="xl"
    />
  );
};

export const FormSelect = () => {
  return (
    <div className={style.container}>
      <select>
        {EventCategory.map((item) => {
          return <option key={item.key}>{item.name}</option>;
        })}
      </select>
    </div>
  );
};

export const FormRadio = (props: any) => {
  return (
    <div className={style.container}>
      <Radio.Group label={props.label} defaultValue="Nie">
        <Radio value="Tak">Tak</Radio>
        <Radio value="Nie">Nie</Radio>
      </Radio.Group>
    </div>
  );
};

export const FormCheckbox = (props: any) => {
  return (
    <Checkbox.Group label={props.label}>
      <Checkbox value="fotograf">Fotograf</Checkbox>
      <Checkbox value="zdjecia">Wasze wydrukowane zdjęcia</Checkbox>
      <Checkbox value="list">Twój list do ukochanej/go</Checkbox>
    </Checkbox.Group>
  );
};
