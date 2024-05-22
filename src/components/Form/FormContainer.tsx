import { ReactNode } from "react";

interface FormContainerProps {
    children: ReactNode;
}

export default function FormContainer({ children }: FormContainerProps) {
    return (
        <form action="" className="form-container">
            { children }
        </form>
    );
}