import { ReactNode, createContext, useState } from "react";

interface ModalContextProviderProps {
    children: ReactNode;
}

interface ModalContextData {
    isModalOpen: boolean;
    modalContent: JSX.Element;
    modalTitle: string;
    setModalTitle: React.Dispatch<React.SetStateAction<string>>;
    modalOpen: (content: JSX.Element) => void;
    modalClose:() => void;
}

export const ModalContext = createContext({} as ModalContextData);

export default function ModalContextProvider({ children }: ModalContextProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<JSX.Element>(<></>);
    const [modalTitle, setModalTitle] = useState<string>('');
    
    function modalOpen(content: JSX.Element) {
        setModalContent(content);
        setIsModalOpen(true);
    }

    function modalClose() {
        setIsModalOpen(false);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, modalContent, modalOpen, modalClose, modalTitle, setModalTitle }}>
            { children }
        </ModalContext.Provider>
    );
}