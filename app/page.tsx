import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Database, Shield, Zap, Code, Server, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-lg bg-secondary flex items-center justify-center">
              {/* <Database className="h-10 w-10 text-secondary-foreground" /> */}
              <Image
                src={"/app-icon-1.png"}
                alt="icon"
                width={80}
                height={80}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
            T2client - MongoDB Client
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            A professional MongoDB database management client designed for
            developers who need reliable, secure, and efficient database
            operations.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Download T2client
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-card-foreground" />
              </div>
              <CardTitle className="text-card-foreground">
                Direct Database Connection
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Connect directly to your MongoDB servers with full control over
                your data
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-card-foreground" />
              </div>
              <CardTitle className="text-card-foreground">
                Privacy First
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                All credentials stored locally on your device. We never access
                your data
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-card-foreground" />
              </div>
              <CardTitle className="text-card-foreground">
                Fast & Lightweight
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Optimized for performance with minimal resource usage
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-card-foreground" />
              </div>
              <CardTitle className="text-card-foreground">
                Developer Friendly
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Built by developers, for developers with intuitive interface
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-card-foreground" />
              </div>
              <CardTitle className="text-card-foreground">
                No Account Required
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Start using immediately without registration or sign-up
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-card-foreground" />
              </div>
              <CardTitle className="text-card-foreground">
                Secure Connections
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Support for SSL/TLS encryption and secure authentication
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* About Section */}
        <div className="bg-muted rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            About T2client
          </h2>
          <p className="text-muted-foreground mb-4">
            T2client is an independent MongoDB client application designed to
            provide developers with a reliable and secure way to manage their
            MongoDB databases. Our tool focuses on simplicity, privacy, and
            performance.
          </p>
          <p className="text-muted-foreground mb-4">
            <strong>Important:</strong> T2client is an independent, third-party
            application and is not affiliated with, endorsed by, or sponsored by
            MongoDB, Inc. "MongoDB" is a registered trademark of MongoDB, Inc.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-6">
            Download T2client and start managing your MongoDB databases today.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Download Now
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-6 w-6 rounded bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xs">
                  T2
                </span>
              </div>
              <span className="text-foreground font-semibold">T2client</span>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
