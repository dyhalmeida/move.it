import React from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface CountdownProviderProps {
    children: React.ReactNode;
}

export const CountdownContext = React.createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider ({ children }: CountdownProviderProps) {

    const { startNewChallenge } = React.useContext(ChallengesContext)

    const [time, setTime] = React.useState(25 * 60);
    const [isActive, setIsActive] = React.useState(false);
    const [hasFinished, setHasFinished] = React.useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    React.useEffect(() => {

        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }

    }, [isActive, time]);

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(25 * 60);
    }

    const valueProvider = {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown,
    }

    return (
        <CountdownContext.Provider value={valueProvider}>
            { children }
        </CountdownContext.Provider>
    );
}