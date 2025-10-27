import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6 text-slate-300 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Game
          </Button>
        </Link>

        <Card className="bg-slate-900/90 border-slate-800 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-slate-300">
              Exciting new features on the way!
            </p>
            <p className="text-slate-400">
              We're building something special just for you. Check back soon for the latest updates!
            </p>
            <div className="pt-4">
              <Link to="/">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Return to Game
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComingSoon2;
