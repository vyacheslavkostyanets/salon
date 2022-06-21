import sliser01 from "../assets/img/slider01.jpg";
import sliser02 from "../assets/img/slider02.jpg";
import sliser03 from "../assets/img/slider03.jpg";

const DataServices = () => {
  const DataDescArr = [
    { img: sliser01, description: "1 Lorem ipsum dolor sit amet.", price: 100 },
    { img: sliser02, description: "2 Lorem ipsum dolor sit amet.", price: 200 },
    { img: sliser03, description: "3 Lorem ipsum dolor sit amet.", price: 300 },
  ];
  return DataDescArr;
};

export { DataServices };
