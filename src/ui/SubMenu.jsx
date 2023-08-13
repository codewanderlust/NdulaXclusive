export default function SubMenu() {
  // when we are dealing with static data, we can use the following approach to render the menu items
  const menuItems = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Favourites' },
    { id: 3, name: 'Men' },
    { id: 4, name: 'Women' },
    { id: 5, name: 'Kids' },
    { id: 6, name: 'Accessories' },
    { id: 7, name: 'Sports' },
    { id: 8, name: 'Health & Beauty' },
    { id: 9, name: 'Industrial Equipment' },
    { id: 10, name: 'Home & Garden' },
    { id: 11, name: 'Sell' },
  ];

  return (
    <>
      <div id="SubMenu" className="border-b">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
          <ul
            id="TopMenuLeft"
            className="
                            flex 
                            h-8 
                            items-center 
                            px-2
                            text-[13px] 
                            text-[#333333]
                        "
          >
            {menuItems.map((item) => (
              <li key={item.id} className="cursor-pointer px-3 hover:underline">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
