import React from 'react';

interface RegisterProps {
  children: React.ReactNode;
}

const Title = ({ children }: RegisterProps) => {
  return (
    <>
      <p className="text-[34px] font-bold mb-9">{children}</p>
    </>
  );
};

export default Title;
