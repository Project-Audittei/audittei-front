import { ReactNode, createContext, useState } from "react";

interface ModalContextProviderProps {
    children: ReactNode;
}

interface ModalContextData {
    isModalOpen: boolean;
    modalContent: JSX.Element;
    modalOpen: (content: JSX.Element) => void;
    modalClose:() => void;
}

export const ModalContext = createContext({} as ModalContextData);

export default function ModalContextProvider({ children }: ModalContextProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<JSX.Element>(<></>);
    
    function modalOpen(content: JSX.Element) {
        setModalContent(content);
        setIsModalOpen(true);
    }

    function modalClose() {
        setIsModalOpen(false);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, modalContent, modalOpen, modalClose }}>
            { children }
        </ModalContext.Provider>
    );
}