import { GameBoard } from "@/components/GameBoard";
import { Header } from "@/components/Header";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";

const Index = () => {
  const { isPlaying, toggleMusic } = useBackgroundMusic();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-4 sm:py-8">
      <Header isPlaying={isPlaying} onToggleMusic={toggleMusic} />
      <GameBoard />
    </div>
  );
};

export default Index;
