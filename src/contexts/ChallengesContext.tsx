import { createContext, ReactNode, useState } from "react";

import challengesJSON from "../../challenges.json";

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentXP: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge:  () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {

  const [level, setLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challengesJSON.length)
    const challenge = challengesJSON[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentXP,
      challengesCompleted,
      levelUp,
      startNewChallenge,
      activeChallenge,
    }}>
      {children}
    </ChallengesContext.Provider>
  )

};