import { HiX } from 'react-icons/hi';
import { createPortal } from 'react-dom';
import Button from './Button';
//these are the styles for the modal that we are going to use in our future projects, especially for the login page.
// const StyledModal = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-lg);
//   box-shadow: var(--shadow-lg);
//   padding: 3.2rem 4rem;
//   transition: all 0.5s;
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: var(--backdrop-color);
//   backdrop-filter: blur(4px);
//   z-index: 1000;
//   transition: all 0.5s;
// `;

// To access the heroicons we used for the HiX and other future icons please head to this page https://react-icons.github.io/react-icons/icons?name=hi
// const Button = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;
//   position: absolute;
//   top: 1.2rem;
//   right: 1.9rem;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     /* Sometimes we need both */
//     /* fill: var(--color-grey-500);
//     stroke: var(--color-grey-500); */
//     color: var(--color-grey-500);
//   }
// `;

//in this space we wrap the createcabinform inside the modal, and by clicking on the modal
// eslint-disable-next-line
function Modal({ children, onClose }) {
  //A react portal is a feature that allows us to render an element outside the parent component DOM structure while still keeping the element in
  //the original position of the component tree. This is used for elements that we want to stay on top of other elements.
  // the createPortal function receives as the first argument, the JSX that we want to render, the second argument a DOM note of where we want to render the JSX
  //by selecting the body element the modal becomes a direct child of the body
  //inside the component tree, the modal is still at the same place, that is why we can still pass props all the props into it
  // the main reason of using createPortal is to avoid conflicts with the CSS property, overflow set to zero.
  return createPortal(
    // overlay
    <div
      className=" fixed left-0 top-0 z-[1000] h-[100vh] w-full rounded-lg bg-white px-16 py-12 blur-sm transition-all duration-500
    "
    >
      {/* styledmodal */}
      <div className="transform-translateModal fixed left-[50%] top-[50%] bg-white px-16 py-12 shadow-lg transition-all duration-500 ">
        <Button
          className="absolute right-8 top-5 translate-x-2 rounded-sm border-0 bg-none p-2 transition-all duration-200 hover:bg-gray-100"
          onClick={onClose}
        >
          <HiX />
        </Button>
        {/* the children props displays the createCabinForm */}
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
