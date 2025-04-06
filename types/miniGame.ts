// types/miniGame.ts
export interface MiniGameResults {
    answers: {
      challenge1?: { answer: string; isCorrect: boolean };
      challenge2?: { answer: string; isCorrect: boolean };
      challenge3?: { answer: string; isCorrect: boolean };
    };
    startTime: number | null;
    endTime: number | null;
  }
  