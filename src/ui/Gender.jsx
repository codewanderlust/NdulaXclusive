import { NavLink } from 'react-router-dom';
function Gender() {
  return (
    <ul className="flex cursor-pointer justify-center gap-8 text-base font-semibold">
      <NavLink to="/">Men</NavLink>
      <NavLink to="/kids">Kids</NavLink>
      <NavLink to="/women">Women</NavLink>
      <NavLink to="/accessories">Accessories</NavLink>
      <NavLink to="/sales">Sale</NavLink>
    </ul>
  );
}

export default Gender;
