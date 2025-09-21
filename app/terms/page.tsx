import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Terms of Use</h1>
          <p className="text-muted-foreground">Last updated: 21-09-2025</p>
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>
                These Terms of Use ("Terms") govern your use of the T2client – MongoDB client application ("App"). By
                using the App, you agree to these Terms. If you do not agree, please do not use the App.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">1. Use of the App</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>You may use the App solely for connecting to and managing your own MongoDB databases.</p>
              <p>
                You are responsible for ensuring you have the necessary rights to access any database you connect to
                through the App.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">2. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>You are responsible for maintaining the security of your MongoDB servers and credentials.</p>
              <p>
                We are not responsible for any data loss, leaks, or unauthorized access resulting from your use of the
                App.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">3. No Warranty</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>The App is provided "as is" and without warranties of any kind.</p>
              <p>
                We do not guarantee uninterrupted operation, error-free performance, or compatibility with all MongoDB
                versions or server setups.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">4. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>
                To the fullest extent permitted by law, we are not liable for any damages arising from your use or
                inability to use the App, including but not limited to data loss, business interruption, or security
                breaches.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">5. Third-Party Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>
                T2client is an independent tool. It is not affiliated with, endorsed by, or sponsored by MongoDB, Inc.
              </p>
              <p>
                "MongoDB" is a registered trademark of MongoDB, Inc. and is used solely to describe the functionality of
                the App.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">6. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>We may update these Terms from time to time.</p>
              <p>Continued use of the App after changes constitutes acceptance of the new Terms.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">7. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>These Terms are governed by and construed in accordance with the laws of [Your Country/Region].</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p className="font-mono text-sm bg-muted p-2 rounded">📧 tech2cool123@gmail.com</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
