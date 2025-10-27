import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" size="icon" className="rounded-full border-slate-700 hover:bg-slate-800">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        <Card className="bg-slate-900/90 backdrop-blur-sm border-slate-800">
          <CardHeader>
            <CardTitle className="text-4xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Privacy Policy
            </CardTitle>
            <p className="text-sm text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="space-y-6 text-white">
            <section>
              <h2 className="text-2xl font-bold mb-3">Introduction</h2>
              <p className="text-slate-300">
                Welcome to Candy Crush Match-3 Puzzle Game. We are committed to protecting your privacy and ensuring
                the security of your personal information. This Privacy Policy explains how we collect, use, and
                safeguard your data when you use our game.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-2">Information You Provide</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4">
                <li>Game progress and scores</li>
                <li>In-game purchases and coin balance</li>
                <li>Power-up inventory</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4">
                <li>Device information (type, operating system)</li>
                <li>Game usage statistics</li>
                <li>Browser information</li>
                <li>Local storage data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4">
                <li>To provide and maintain the game service</li>
                <li>To save your game progress and preferences</li>
                <li>To manage in-game currency and purchases</li>
                <li>To improve game features and user experience</li>
                <li>To detect and prevent technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Data Storage</h2>
              <p className="text-slate-300">
                Your game data is stored locally on your device using browser localStorage. This includes your coin
                balance, scores, and game progress. We do not collect or transmit this information to external servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Cookies and Similar Technologies</h2>
              <p className="text-slate-300">
                We use localStorage technology to enhance your gaming experience by saving your progress. You can clear
                this data through your browser settings at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Data Security</h2>
              <p className="text-slate-300">
                We implement appropriate technical measures to protect your data from unauthorized access, alteration,
                or destruction. All data is stored locally on your device and secured by your browser's security features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Children's Privacy</h2>
              <p className="text-slate-300">
                Our game is suitable for all ages. We do not knowingly collect personal information from children under
                13. If you are a parent or guardian and believe your child has provided us with personal information,
                please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Your Rights</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4">
                <li>Access your stored game data</li>
                <li>Delete your game data (by clearing browser storage)</li>
                <li>Opt-out of data collection (may affect game functionality)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Changes to This Policy</h2>
              <p className="text-slate-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
              <p className="text-slate-300">
                If you have questions about this Privacy Policy, please contact us through the game's feedback system.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
