import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
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
              Terms & Conditions
            </CardTitle>
            <p className="text-sm text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="space-y-6 text-white">
            <section>
              <h2 className="text-2xl font-bold mb-3">Acceptance of Terms</h2>
              <p className="text-slate-300">
                By accessing and playing Candy Crush Match-3 Puzzle Game, you accept and agree to be bound by these
                Terms and Conditions. If you do not agree to these terms, please do not use the game.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Eligibility</h2>
              <p className="text-slate-300">
                The game is available to users of all ages. Users under 13 must have parental or guardian consent to
                play. By using this game, you represent that you meet these eligibility requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Game Rules and Conduct</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4">
                <li>Play fairly and respect the game mechanics</li>
                <li>Do not attempt to manipulate or hack the game</li>
                <li>Do not use automated tools or bots</li>
                <li>Report any bugs or issues responsibly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Virtual Items and In-Game Purchases</h2>
              <p className="text-slate-300 mb-2">
                The game features virtual coins and power-ups that can be earned through gameplay. These items:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4">
                <li>Have no real-world monetary value</li>
                <li>Cannot be transferred between users</li>
                <li>Cannot be exchanged for real currency</li>
                <li>May be lost if you clear browser data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Intellectual Property Rights</h2>
              <p className="text-slate-300">
                All game content, including graphics, code, designs, and mechanics, are protected by intellectual
                property laws. You may not copy, modify, distribute, or create derivative works without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Disclaimers</h2>
              <p className="text-slate-300 mb-2">
                The game is provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4">
                <li>Uninterrupted or error-free operation</li>
                <li>Preservation of game data</li>
                <li>Compatibility with all devices</li>
                <li>Future availability of features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Limitation of Liability</h2>
              <p className="text-slate-300">
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special,
                or consequential damages arising from your use of the game, including loss of data or game progress.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Indemnification</h2>
              <p className="text-slate-300">
                You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your
                violation of these Terms or your use of the game.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Modifications to the Game</h2>
              <p className="text-slate-300">
                We reserve the right to modify, suspend, or discontinue any aspect of the game at any time without
                notice. We may also update these Terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Termination</h2>
              <p className="text-slate-300">
                We may terminate or suspend your access to the game at any time, without notice, for conduct that we
                believe violates these Terms or is harmful to other users or the game.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Governing Law</h2>
              <p className="text-slate-300">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to
                conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Dispute Resolution</h2>
              <p className="text-slate-300">
                Any disputes arising from these Terms or your use of the game shall be resolved through binding
                arbitration, except where prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Severability</h2>
              <p className="text-slate-300">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue
                in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
              <p className="text-slate-300">
                For questions about these Terms & Conditions, please use the game's feedback system or contact us
                through the provided channels.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
