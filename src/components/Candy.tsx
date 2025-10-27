import { cn } from "@/lib/utils";

interface CandyProps {
  type: string;
  isSelected: boolean;
  isMatched: boolean;
  onClick: () => void;
}

const candyTypes: Record<string, { emoji: string; gradient: string }> = {
  red: { emoji: '🍓', gradient: 'from-red-400 to-red-600' },
  orange: { emoji: '🍊', gradient: 'from-orange-400 to-orange-600' },
  yellow: { emoji: '🍋', gradient: 'from-yellow-400 to-yellow-600' },
  green: { emoji: '🍏', gradient: 'from-green-400 to-green-600' },
  blue: { emoji: '🫐', gradient: 'from-blue-400 to-blue-600' },
  purple: { emoji: '🍇', gradient: 'from-purple-400 to-purple-600' },
};

export const Candy = ({ type, isSelected, isMatched, onClick }: CandyProps) => {
  const candy = candyTypes[type];
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full aspect-square rounded-lg sm:rounded-xl",
        "bg-gradient-to-br shadow-lg",
        "transition-all duration-200",
        "hover:scale-105 active:scale-95",
        "flex items-center justify-center",
        "text-xl sm:text-2xl md:text-3xl",
        candy.gradient,
        isSelected && "ring-2 sm:ring-4 ring-primary ring-offset-2 ring-offset-background scale-105 sm:scale-110",
        isMatched && "animate-pop opacity-0"
      )}
    >
      {candy.emoji}
    </button>
  );
};
