import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Card({children}): ReactElement {
    return <div className={'card'}>
        {children}
        <style jsx>{`
            .card {
                transform: translateY(10px);
                box-shadow: 0 1rem 3rem rgba(0,0,0,.2);
                transition: transform 240ms ease-in-out;
                background-color: #FFF;
                border-radius: 1.5rem;
            }

            .card:hover {
                transform: translateY(0px);
            }
        `}</style>
    </div>
}