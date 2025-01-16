import { createContext, useState } from 'react';
import ViewOnlyInPut from './ViewOnlyInPut';
import CustomCalendar from '../Calendar/CustomCalender';
import DropDown from '../DropDown/DropDown';

interface ContextType {
  isOpen: boolean;
  handleIsOpen: () => void;
}

interface InputProps {
  children: React.ReactNode;
}

export const ViewOnlyInputContext = createContext<ContextType | null>(null);

const ViewOnlyInputContainer = ({ children }: InputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ViewOnlyInputContext.Provider value={{ isOpen, handleIsOpen }}>
      <div
        className={`${isOpen ? `max-h-[500px]` : `max-h-[75px]`} transition-all duration-300 overflow-hidden`}
      >
        {children}
      </div>
    </ViewOnlyInputContext.Provider>
  );
};

ViewOnlyInputContainer.Input = ViewOnlyInPut;
ViewOnlyInputContainer.Calendar = CustomCalendar;
ViewOnlyInputContainer.DropDown = DropDown;

export default ViewOnlyInputContainer;
