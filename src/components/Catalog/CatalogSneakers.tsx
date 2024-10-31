// import VIS from "../../../public/Смотреть товар.png";
// import BASKET from "../../../public/Добавить в корзину.png";
// import React, {  useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSneakers } from '../../slices/sneakersSlice'; // Импортируем thunk для загрузки данных
// import { RootState } from '../../store'; // Импортируем тип корневого состояния
// import { AppDispatch } from '../../store';
// import s from "./style.module.css";
// import ButtonRed from '../Buttons/btn_red/buttonRed';


// const Catalog: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>(); // Получаем dispatch из Redux
//   const sneakers = useSelector((state: RootState) => state.sneakers.data); // Получаем массив кроссовок из состояния
//   const [visibleCount, setVisibleCount] = useState(6); // Состояние для отслеживания количества видимых кроссовок

//   React.useEffect(() => {
//     const fetchData = async () => {
//         try {
//           await dispatch(fetchSneakers({
//       priceFrom: 0,
//       priceTo: 30000,
//       gender: "",
//       sizes: [],

//     })); // Загружаем кроссовки при монтировании компонента
//   }catch (error) {
//     console.error('Failed to fetch data:', error);
//   }
// };
//   fetchData(); // Вызываем функцию для получения данных о кроссовках
// }, [dispatch]); // Зависимости: выполняем эффект при изменении dispatch, gender или limit

//   // Функция для увеличения количества видимых кроссовок
//   const handleShowMore = () => {
//     setVisibleCount((prevCount) => prevCount + 6); // Увеличиваем количество видимых кроссовок на 6
//   };

//   return (
//     <section>
//       <h2>Каталог кроссовок</h2>
//       <div className={s.sneakers_grid}>
//       {sneakers.slice(0, visibleCount).map((sneaker) => (
//         <div key={sneaker.id} className={s.sneaker_card}>
//           <div className={s.image_container}>
//             <img src={sneaker.imgUrl} className={s.sneaker_img} alt={sneaker.title} />
//             <div className={s.hover_buttons}>
//                  {/* <button><img src={VIS} alt="Смотреть товар" className={s.vis} /></button>
//               <button><img src={BASKET} alt="Добавить в корзину" className={s.basket} /></button> */}
//             </div>
//           </div>
//           <p className="paragraph">{sneaker.title}</p>
//           <p>Цена: {sneaker.price} руб.</p>
//         </div>
//       ))}
//     </div>
//     {visibleCount < sneakers.length && (
//         <ButtonRed onClick={handleShowMore} text='Показать еще' />
//       )}
//     </section>
//   );
// };

// export default Catalog; 
