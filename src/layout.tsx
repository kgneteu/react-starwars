import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './components/layout/header/header';
import StarParallax from './components/UI/starParallax/starParallax';
import Footer from './components/layout/footer/footer';

type TransitionType = 'FadeIn' | 'FadeOut';

interface LayoutProps {
    transitionStage: string;
    onTransitionEnd: () => void;
}

export function Layout({ transitionStage, onTransitionEnd }: LayoutProps) {
    const animationClass = transitionStage === 'fadeOut' ? 'LayoutFadeOut' : '';
    return (
        <>
            <StarParallax />
            <div className={'flex flex-col h-screen'}>
                <Header />
                <main className={'flex-grow ' + animationClass} onAnimationEnd={onTransitionEnd}>
                    <Outlet />
                </main>
                <Footer />
            </div>
            {/*<Toasts/>*/}
        </>
    );
}
