import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Rocket } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ComingSoon1 = () => {
  useEffect(() => {
    document.title = "Coming Soon - Candy Crush";
    const metaTag = document.createElement("meta");
    metaTag.name = "robots";
    metaTag.content = "noindex, nofollow";
    document.head.appendChild(metaTag);
    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);
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
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
                <Rocket className="h-12 w-12 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-slate-300">
              We're working on something amazing!
            </p>
            <p className="text-slate-400">
              This feature is under development and will be available soon. Stay tuned for exciting updates!
            </p>
            <div className="pt-4">
              <Link to="/">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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

export default ComingSoon1;
