import { Volume2, VolumeX, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface HeaderProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
}

export const Header = ({ isPlaying, onToggleMusic }: HeaderProps) => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 w-full max-w-2xl mx-auto px-4 sm:px-6 mb-4 sm:mb-6">
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse-glow">
        Candy Crush
      </h1>
      
      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          onClick={onToggleMusic}
          variant="outline"
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
        >
          {isPlaying ? (
            <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
          ) : (
            <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" />
          )}
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
            >
              <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link to="/shop" className="cursor-pointer">
                🛒 Power Shop
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/coming-soon-1" className="cursor-pointer">
                🚀 Coming Soon 1
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/coming-soon-2" className="cursor-pointer">
                ✨ Coming Soon 2
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/privacy" className="cursor-pointer">
                🔒 Privacy Policy
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/terms" className="cursor-pointer">
                📜 Terms & Conditions
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
