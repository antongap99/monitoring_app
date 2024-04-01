import cn from 'classnames';
import {
    Component, ReactNode, ErrorInfo, Suspense,
} from 'react';
import { PageError } from 'widgets/PageError';
import style from './ErrorBoundary.module.css';

interface ErrorBoundaryProps {
    className?: string;
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error: Error) {
        console.log('error', error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log('error', error, info);
    }

    render() {
        const { hasError } = this.state;
        const { className, children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback="...loading">
                    <PageError />
                </Suspense>
            );
        }

        return <div className={cn(style.ErrorBoundary, className)}>{children}</div>;
    }
}
