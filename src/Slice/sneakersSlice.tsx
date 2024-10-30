// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface Sneaker {
//     color: string;        // Цвет кроссовок
//     compound: string;     // Материал верха
//     country: string;      // Страна производства
//     description: string;  // Описание кроссовок
//     gender: string;       // Пол (мужской/женский)
//     id: number;           // Уникальный идентификатор
//     imgUrl: string;       // URL изображения
//     inStock: number;      // Количество на складе
//     oldPrice: number;     // Старая цена
//     price: number;        // Текущая цена
//     sizes: number[];      // Доступные размеры
//     stars: number;        // Рейтинг (звезды)
//     title: string;        // Название модели
//     vendorСode: string;   // Код производителя
// }

// interface SneakersState {
//   sneakers: Sneaker[];
//   loading: boolean;
//   error:string | null;
// }

// const initialState: SneakersState = {
//   sneakers: [],
//   loading: false,
//   error: null,
// };

// export const fetchSneakers = createAsyncThunk<Sneaker[]>('sneakers/fetchSneakers', async () => {
//   const response = await axios.get('https://54ef24412019575e.mokky.dev/Catalog_Cards');
//   return response.data;
// });

// const sneakersSlice = createSlice({
//   name: 'sneakers',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSneakers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchSneakers.fulfilled, (state, action: PayloadAction<Sneaker[]>) => {
//         state.sneakers = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchSneakers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Произошла ошибка при загрузке данных';

//       });
//   },
// });

// export default sneakersSlice.reducer;