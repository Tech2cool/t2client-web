import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: [Insert Date]</p>
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>
                T2client ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we handle
                information when you use our application T2client – MongoDB client ("App").
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">1. Information We Do Not Collect</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>We do not collect, store, or share any personal information from users.</p>
              <p>We do not require account registration.</p>
              <p>We do not track your activity or usage outside of the App.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">2. Database Connections</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>The App allows you to connect to your own MongoDB databases.</p>
              <p>
                All database credentials (e.g., host, username, password) are stored locally on your device and never
                transmitted to us.
              </p>
              <p>We do not access or view your database content.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">3. Permissions</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>
                The App may request certain permissions (such as network access) strictly to enable connections to your
                MongoDB server.
              </p>
              <p>These permissions are not used for any other purpose.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">4. Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>The App does not use third-party analytics, advertising, or tracking tools.</p>
              <p>Any connection you make is directly between your device and your MongoDB server.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">5. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>Your connection data is stored locally and securely on your device.</p>
              <p>
                We recommend using strong passwords and secure connections (SSL/TLS) when connecting to your MongoDB
                database.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">6. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>Our App is not directed to children under 13.</p>
              <p>We do not knowingly collect any information from children.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">7. Disclaimer on MongoDB Trademark</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>
                T2client is an independent, third-party application and is not affiliated with, endorsed by, or
                sponsored by MongoDB, Inc.
              </p>
              <p>
                "MongoDB" is a registered trademark of MongoDB, Inc. All rights related to the MongoDB name and
                trademarks belong to MongoDB, Inc.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">8. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>We may update this Privacy Policy from time to time.</p>
              <p>Updates will be posted within the App or on our official website.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">9. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground space-y-4">
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="font-mono text-sm bg-muted p-2 rounded">📧 tech2cool123@gmail.com</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
