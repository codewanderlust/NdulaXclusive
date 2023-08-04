import { useSneakers } from '../features/sneakers/useSneakers';

import EditorsPickItem from './EditorsPickItem';
import Loader from './Loader';

function EditorsPickList() {
  const { sneakers, isLoading } = useSneakers();
  const editorsPickSneakers = sneakers?.slice(0, 5);

  if (isLoading) return <Loader />;
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">Editors&apos; Pick</h1>
      <ul className="flex gap-2">
        {editorsPickSneakers?.map((sneaker, i) => (
          <EditorsPickItem key={i} sneaker={sneaker} />
        ))}
      </ul>
    </div>
  );
}

export default EditorsPickList;
