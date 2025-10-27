import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Sparkles, Target, Plus, Palette, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const powerUps = [
  {
    id: 'speed-boost',
    name: 'Speed Boost',
    description: 'Complete matches faster and earn bonus points for quick moves',
    cost: 50,
    icon: Zap,
  },
  {
    id: 'candy-burst',
    name: 'Candy Burst',
    description: 'Clears all candies of the same color in one powerful move',
    cost: 75,
    icon: Sparkles,
  },
  {
    id: 'double-points',
    name: 'Double Points',
    description: 'Earn 2x points for the next 5 moves',
    cost: 100,
    icon: Target,
  },
  {
    id: 'extra-moves',
    name: 'Extra Moves',
    description: 'Get 10 additional moves to keep playing',
    cost: 60,
    icon: Plus,
  },
  {
    id: 'rainbow-candy',
    name: 'Rainbow Candy',
    description: 'Special candy that matches with any color',
    cost: 150,
    icon: Palette,
  },
];

const Shop = () => {
  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem('candyCoins');
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('candyCoins', coins.toString());
  }, [coins]);

  const handlePurchase = (powerUp: typeof powerUps[0]) => {
    if (coins >= powerUp.cost) {
      setCoins(prev => prev - powerUp.cost);
      toast.success(`${powerUp.name} purchased!`, {
        description: 'Power-up added to your inventory',
      });
    } else {
      toast.error('Not enough coins!', {
        description: `You need ${powerUp.cost - coins} more coins`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/">
            <Button variant="outline" size="icon" className="rounded-full border-slate-700 hover:bg-slate-800">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          
          <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-slate-800">
            <Coins className="h-6 w-6 text-yellow-400" />
            <span className="text-2xl font-bold text-yellow-400">{coins}</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Power Shop
        </h1>
        <p className="text-center text-slate-300 mb-8">
          Enhance your game with powerful upgrades!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {powerUps.map((powerUp) => {
            const Icon = powerUp.icon;
            const canAfford = coins >= powerUp.cost;
            
            return (
              <Card key={powerUp.id} className="relative overflow-hidden bg-slate-900/90 border-slate-800">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant={canAfford ? "default" : "secondary"} className="text-base">
                      <Coins className="h-4 w-4 mr-1" />
                      {powerUp.cost}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white">{powerUp.name}</CardTitle>
                  <CardDescription className="text-slate-400">{powerUp.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    onClick={() => handlePurchase(powerUp)}
                    disabled={!canAfford}
                    className="w-full"
                  >
                    {canAfford ? 'Purchase' : 'Not Enough Coins'}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <Card className="bg-slate-900/90 backdrop-blur-sm border-slate-800">
          <CardHeader>
            <CardTitle className="text-2xl text-white">How to Earn Coins</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-lg">+1</Badge>
              <p className="text-slate-300">Match 3 candies</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-lg">+3</Badge>
              <p className="text-slate-300">Match 4 candies</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-lg">+5</Badge>
              <p className="text-slate-300">Match 5 or more candies</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Shop;
