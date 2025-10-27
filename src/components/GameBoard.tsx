import { useState, useEffect, useCallback } from "react";
import { Candy } from "./Candy";
import { GameStats } from "./GameStats";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { toast } from "sonner";

const BOARD_SIZE = 8;
const CANDY_TYPES = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const INITIAL_MOVES = 30;

type Board = string[][];
type Position = { row: number; col: number };

const createBoard = (): Board => {
  const board: Board = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    board[i] = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      board[i][j] = CANDY_TYPES[Math.floor(Math.random() * CANDY_TYPES.length)];
    }
  }
  return board;
};

export const GameBoard = () => {
  const [board, setBoard] = useState<Board>(createBoard());
  const [selectedCandy, setSelectedCandy] = useState<Position | null>(null);
  const [matchedCandies, setMatchedCandies] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(INITIAL_MOVES);
  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem('candyCoins');
    return saved ? parseInt(saved) : 0;
  });
  const { playSound } = useSoundEffects();

  useEffect(() => {
    localStorage.setItem('candyCoins', coins.toString());
  }, [coins]);

  const findMatches = useCallback((currentBoard: Board): Position[] => {
    const matches: Position[] = [];
    
    // Check horizontal matches
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE - 2; col++) {
        const candy = currentBoard[row][col];
        let matchLength = 1;
        
        while (col + matchLength < BOARD_SIZE && currentBoard[row][col + matchLength] === candy) {
          matchLength++;
        }
        
        if (matchLength >= 3) {
          for (let i = 0; i < matchLength; i++) {
            matches.push({ row, col: col + i });
          }
        }
      }
    }
    
    // Check vertical matches
    for (let col = 0; col < BOARD_SIZE; col++) {
      for (let row = 0; row < BOARD_SIZE - 2; row++) {
        const candy = currentBoard[row][col];
        let matchLength = 1;
        
        while (row + matchLength < BOARD_SIZE && currentBoard[row + matchLength][col] === candy) {
          matchLength++;
        }
        
        if (matchLength >= 3) {
          for (let i = 0; i < matchLength; i++) {
            matches.push({ row: row + i, col });
          }
        }
      }
    }
    
    return matches;
  }, []);

  const removeMatches = useCallback((currentBoard: Board): boolean => {
    const matches = findMatches(currentBoard);
    
    if (matches.length === 0) return false;
    
    const uniqueMatches = Array.from(new Set(matches.map(m => `${m.row}-${m.col}`)));
    setMatchedCandies(new Set(uniqueMatches));
    
    const matchCount = uniqueMatches.length;
    const points = matchCount * 10;
    let coinsEarned = 0;
    
    if (matchCount === 3) coinsEarned = 1;
    else if (matchCount === 4) coinsEarned = 3;
    else if (matchCount >= 5) coinsEarned = 5;
    
    setScore(prev => prev + points);
    setCoins(prev => prev + coinsEarned);
    
    playSound('match');
    
    setTimeout(() => {
      const newBoard = currentBoard.map(row => [...row]);
      
      uniqueMatches.forEach(match => {
        const [row, col] = match.split('-').map(Number);
        newBoard[row][col] = '';
        playSound('pop');
      });
      
      // Drop candies
      for (let col = 0; col < BOARD_SIZE; col++) {
        let emptySpaces = 0;
        for (let row = BOARD_SIZE - 1; row >= 0; row--) {
          if (newBoard[row][col] === '') {
            emptySpaces++;
          } else if (emptySpaces > 0) {
            newBoard[row + emptySpaces][col] = newBoard[row][col];
            newBoard[row][col] = '';
            playSound('fall');
          }
        }
        
        // Fill empty spaces
        for (let row = 0; row < emptySpaces; row++) {
          newBoard[row][col] = CANDY_TYPES[Math.floor(Math.random() * CANDY_TYPES.length)];
        }
      }
      
      setBoard(newBoard);
      setMatchedCandies(new Set());
      
      // Check for cascading matches with the NEW board
      setTimeout(() => {
        removeMatches(newBoard);
      }, 500);
    }, 300);
    
    return true;
  }, [findMatches, playSound]);

  const isAdjacent = (pos1: Position, pos2: Position): boolean => {
    const rowDiff = Math.abs(pos1.row - pos2.row);
    const colDiff = Math.abs(pos1.col - pos2.col);
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
  };

  const handleCandyClick = (row: number, col: number) => {
    if (moves === 0) return;
    
    playSound('click');
    
    if (!selectedCandy) {
      setSelectedCandy({ row, col });
    } else {
      if (selectedCandy.row === row && selectedCandy.col === col) {
        setSelectedCandy(null);
        return;
      }
      
      if (isAdjacent(selectedCandy, { row, col })) {
        const newBoard = board.map(r => [...r]);
        const temp = newBoard[selectedCandy.row][selectedCandy.col];
        newBoard[selectedCandy.row][selectedCandy.col] = newBoard[row][col];
        newBoard[row][col] = temp;
        
        const matches = findMatches(newBoard);
        
        if (matches.length > 0) {
          setBoard(newBoard);
          setMoves(prev => prev - 1);
          setSelectedCandy(null);
          setTimeout(() => removeMatches(newBoard), 100);
        } else {
          playSound('invalid');
          toast.error("No matches! Try a different move.");
        }
      } else {
        playSound('invalid');
        setSelectedCandy({ row, col });
      }
    }
  };

  const resetGame = () => {
    setBoard(createBoard());
    setSelectedCandy(null);
    setMatchedCandies(new Set());
    setScore(0);
    setMoves(INITIAL_MOVES);
    playSound('click');
    toast.success("Game reset! Good luck!");
  };

  useEffect(() => {
    if (moves === 0) {
      playSound('gameOver');
      toast.error(`Game Over! Final Score: ${score}`);
    }
  }, [moves, score, playSound]);

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 pb-8">
      <GameStats score={score} moves={moves} coins={coins} onReset={resetGame} />
      
      <div className="relative w-[min(98vw,520px)] sm:w-[min(90vw,560px)] bg-slate-900/80 backdrop-blur-sm p-2 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-800">
        <div className="grid grid-cols-8 gap-0.5 sm:gap-1 md:gap-2">
          {board.map((row, rowIndex) =>
            row.map((candy, colIndex) => (
              <Candy
                key={`${rowIndex}-${colIndex}`}
                type={candy}
                isSelected={selectedCandy?.row === rowIndex && selectedCandy?.col === colIndex}
                isMatched={matchedCandies.has(`${rowIndex}-${colIndex}`)}
                onClick={() => handleCandyClick(rowIndex, colIndex)}
              />
            ))
          )}
        </div>
        
        {moves === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl animate-bounce-in border border-slate-800">
            <div className="text-center p-6 sm:p-8">
              <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Game Over!
              </h2>
              <p className="text-xl sm:text-3xl font-bold text-white mb-2">
                Final Score: {score}
              </p>
              <p className="text-base sm:text-xl text-slate-300">
                Coins Earned: {coins}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
