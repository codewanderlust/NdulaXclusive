// import { useSelector } from 'react-redux';
// import { getFavorites } from './favoritesSlice';
// import LinkButton from '../../ui/LinkButton';
// import FavouriteItem from '../../pages/FavouriteItem';

// function FavouritesList() {
//   const favorite = useSelector(getFavorites);
//   if (!favorite.length) return <p>No favorites added yet</p>;

//   return (
//     <div className=" px-4 py-3">
//       <LinkButton to="/">&larr; Back to menu</LinkButton>
//       <div className="gap-6 sm:flex sm:justify-between">
//         <div>
//           <ul className="mt-3 divide-y divide-stone-200 border-b">
//             {favorite?.map((item, i) => (
//               <FavouriteItem item={item} key={i} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FavouritesList;
