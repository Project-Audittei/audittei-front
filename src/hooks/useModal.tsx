import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export default function useModal() {
    const context = useContext(ModalContext);

    return context;
}