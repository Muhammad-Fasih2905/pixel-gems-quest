import { Coins, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GameStatsProps {
  score: number;
  moves: number;
  coins: number;
  onReset: () => void;
}

export const GameStats = ({ score, moves, coins, onReset }: GameStatsProps) => {
  return (
    <div className="w-[min(98vw,520px)] sm:w-[min(90vw,560px)] mb-4 flex gap-2 sm:gap-3">
      <div className="flex-1 bg-slate-900/90 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-slate-800 text-center">
        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Score</p>
        <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {score}
        </p>
      </div>
      
      <div className="flex-1 bg-slate-900/90 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-slate-800 text-center">
        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Moves</p>
        <p className={cn(
          "text-lg sm:text-2xl font-bold",
          moves <= 5 ? "text-red-400 animate-pulse" : "text-white"
        )}>
          {moves}
        </p>
      </div>
      
      <div className="flex-1 bg-slate-900/90 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-slate-800 text-center">
        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
          <Coins className="h-3 w-3 text-yellow-400" />
          Coins
        </p>
        <p className="text-lg sm:text-2xl font-bold text-yellow-400">
          {coins}
        </p>
      </div>
      
      <Button
        onClick={onReset}
        size="icon"
        className="bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-xl hover:rotate-180 transition-transform duration-500"
        title="Reset Game"
      >
        <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300" />
      </Button>
    </div>
  );
};
