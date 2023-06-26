import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error: unknown = useRouteError();

    return (
        <div>
            <h1 style={{fontSize: '3rem', fontWeight: '700', textAlign: 'center'}}>Error Page</h1>
            <p>
            <i>
            {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
            </i>
            </p>
        </div>
    );
}

