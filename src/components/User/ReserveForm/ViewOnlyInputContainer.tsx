import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const ViewOnlyInputContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <div></div>;
};

export default ViewOnlyInputContainer;
