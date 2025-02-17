import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'

import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";

import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Notes App",
    link: "",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Supplier Design",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,

    link: "",
  },
  {
    id: 3,
    name: "Shopping cart design",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

export default function Portfolio() {
  const [filterId, setFilterId] = React.useState(1);

  const handleFilter = (currentId) => () => {
    setFilterId(currentId);
  };

  const filtredItems = filterId === 1 ? portfolioData : portfolioData.filter((item) => item.id === filterId)
  console.log(filtredItems);
  

  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent headerText='Mon Portfolio'
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='portfolio__content'>
        <ul className='portfolio__content__filter'>
          {filterData.map((item) => (
            <li onClick={handleFilter(item.filterId)} key={item.filterId}>
              {item.label}
            </li>
          ))}
        </ul>
        <div className='portfolio__content__cards'>
          {
            portfolioData.map((item) => (
              <div key={item.name.trim()} className='portfolio__content__cards__item'>
                <div className='portfolio__content__cards__item__img-wrapper'>
                  <a href={item.link}>
                    <img src={item.image} alt={item.name} />
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
