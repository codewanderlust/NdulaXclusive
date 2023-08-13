// import PropTypes from 'prop-types';
// import { formatCurrency } from '../../utils/helpers';

// function OrderItem({ item }) {
//   const { quantity, name, totalPrice } = item;

//   return (
//     <li className="space-y-1 py-3">
//       <div className="flex items-center justify-between gap-4 text-sm">
//         <p>
//           <span className="font-bold ">{quantity}&times;</span> {name}
//         </p>
//         <p className="font-bold">{formatCurrency(totalPrice)}</p>
//       </div>
//       {/* in this space we displayed the loading state and the list of ingredients */}
//       {/* <p className="text-sm  capitalize italic text-stone-500">
//         {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')} */}
//       {/* </p> */}
//     </li>
//   );
// }

// export default OrderItem;

// OrderItem.propTypes = {
//   item: PropTypes.shape({
//     quantity: PropTypes.number,
//     name: PropTypes.string,
//     totalPrice: PropTypes.number,
//   }),
// };
