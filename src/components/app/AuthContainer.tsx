import { ReactNode } from "react";

interface AuthContainerProps {
    children?: ReactNode;
}

export default function AuthContainer({
    children
}: AuthContainerProps) {
    return (
        <div className="auth-container">
            { children }
        </div>
    );
}