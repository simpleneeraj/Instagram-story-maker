import { Box } from "@chakra-ui/layout";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";
import React from "react";
import { Font_Size_Icon, Font_Weight_Icon } from "../Constent/Icons";
import { useClickOutside } from "../Hooks/useClick";
import usePortable from "../Hooks/usePortable";
import css from "./style/TextModel.module.scss";
const TextModel = () => {
  const {
    textEditModelHandler,
    textEditModel,
    fontSizeHandler,
    fontWeightHandler,
    fontSize,
    fontWeight,
  } = usePortable();
  const ref = useClickOutside(() => textEditModelHandler(false));
  return (
    <div className={css.TextModel}>
      <div ref={textEditModel ? ref : null} className={css.TextModelItem}>
        <div className={css.TextModelSlider}>
          <p>
            Size : <span>{fontSize}</span>
          </p>
          <SliderComponent
            Icon={<Font_Size_Icon size="15px" color="#fff" />}
            min={10}
            max={25}
            defaultValue={20}
            step={0.5}
            onChange={(value) => fontSizeHandler(value)}
          />
        </div>
        <div className={css.TextModelSlider}>
          <p>
            Weight : <span>{fontWeight}</span>
          </p>
          <SliderComponent
            Icon={<Font_Weight_Icon size="15px" color="#fff" />}
            min={100}
            max={900}
            defaultValue={500}
            step={100}
            onChange={(value) => fontWeightHandler(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default TextModel;

const SliderComponent = ({ defaultValue, min, max, step, Icon, onChange }) => {
  return (
    <Slider
      onChange={onChange}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
    >
      <SliderTrack bg="#ddd">
        <Box position="relative" />
        <SliderFilledTrack bg={"#555"} />
      </SliderTrack>
      <SliderThumb bg={"#555"} boxSize={6}>
        <Box>{Icon}</Box>
      </SliderThumb>
    </Slider>
  );
};
