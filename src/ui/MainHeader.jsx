import { debounce } from 'debounce';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';

export default function MainLayout() {
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState(null);

  const handleSearchName = debounce(async (event) => {
    if (event.target.value == '') {
      setItems([]);
      return;
    }

    setIsSearching(true);

    try {
      const response = await fetch(
        `/api/products/search-by-name/${event.target.value}`,
      );
      const result = await response.json();

      if (result) {
        setItems(result);
        setIsSearching(false);
        return;
      }
      setItems([]);
      setIsSearching(false);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, 500);

  return (
    <>
      <div id="MainHeader" className="border-b">
        <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
          <div className="flex w-full items-center bg-white">
            <div className="mx-auto flex w-full max-w-[1150px] justify-between gap-10 px-3 py-5 lg:justify-start">
              <Link
                to="/men"
                className="flex items-center text-lg font-bold sm:mb-4"
              >
                <p className="font-satisfy ">ndula</p>
                <span>Xclusive</span>
              </Link>

              <div className="w-full">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="relative flex w-full items-center border-2 border-gray-900 p-2">
                      <button className="flex items-center">
                        <AiOutlineSearch size={22} />
                      </button>

                      <input
                        className="
                                                    w-full
                                                    pl-3
                                                    text-sm
                                                    placeholder-gray-400
                                                    focus:outline-none
                                                "
                        onChange={handleSearchName}
                        placeholder="Search for anything"
                        type="text"
                      />

                      {isSearching ? (
                        <BiLoaderCircle
                          className="mr-2 animate-spin"
                          size={22}
                        />
                      ) : null}

                      {items.length > 0 ? (
                        <div className="absolute left-0 top-12 z-20 h-auto w-full max-w-[910px] border bg-white p-1">
                          {items.map((item) => (
                            <div className="p-1" key={item.id}>
                              <Link
                                href={`/product/${item?.id}`}
                                className="flex w-full cursor-pointer items-center justify-between p-1 px-2 hover:bg-gray-200"
                              >
                                <div className="flex items-center">
                                  <img
                                    className="rounded-md"
                                    width="40"
                                    src={item?.url + '/40'}
                                  />
                                  <div className="ml-2 truncate">
                                    {item?.title}
                                  </div>
                                </div>
                                <div className="truncate">
                                  £{(item?.price / 100).toFixed(2)}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <button className="ml-2 flex items-center bg-blue-600 p-[11px] px-14 text-sm font-semibold text-white">
                      Search
                    </button>

                    <div className="cursor-pointer px-2 text-xs hover:text-blue-500">
                      Advanced
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
