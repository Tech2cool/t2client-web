"use client";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Database, Shield, Zap, Code, Server, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState<string | number>("");

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbz5EdD0bmjCVGbE28fZmR15-_qKnY2uTB8GjRudj4pUmyYQVBDlaQV80i5O33kdXofI/exec";
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch(scriptUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
    } catch (error) {
      console.log(error);
    }
    alert("Thanks for joining! You’ll get an email confirmation soon.");
  };

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
          <Card className="max-w-md mx-auto bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">
                Request Beta Access
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Join our beta testing program. Enter your Play Store Gmail ID to
                get early access.
              </CardDescription>
              <form className="space-y-4 mt-4" onSubmit={onSubmit}>
                <div>
                  <Label htmlFor="gmail" className="text-card-foreground">
                    Play Store Gmail ID
                  </Label>
                  <Input
                    id="gmail"
                    type="email"
                    name="email"
                    placeholder="your.email@gmail.com"
                    className="mt-1"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Request Access
                </Button>
              </form>
            </CardHeader>
          </Card>
          <br />
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            OR
          </p>

          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            <Link href="https://play.google.com/apps/testing/com.t2c.mongo_compas">
              Download T2client
            </Link>
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

        {/* App Screenshots Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              See T2client in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience the clean, intuitive mobile interface designed for
              efficient MongoDB database management on Android
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Main Dashboard Screenshot */}
            <div className="flex flex-col items-center">
              <Card className="bg-card border-border overflow-hidden w-full max-w-[280px]">
                <div className="aspect-[9/16] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <img
                    src="/8.jpg"
                    alt="T2client Android app main dashboard"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-card-foreground text-sm">
                    Main Dashboard
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xs">
                    Manage all your MongoDB connections on your Android device
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Database Explorer Screenshot */}
            <div className="flex flex-col items-center">
              <Card className="bg-card border-border overflow-hidden w-full max-w-[280px]">
                <div className="aspect-[9/16] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <img
                    src="/7.jpg"
                    alt="Database explorer mobile interface"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-card-foreground text-sm">
                    Database Explorer
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xs">
                    Navigate databases and collections with touch-friendly
                    interface
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Query Editor Screenshot */}
            <div className="flex flex-col items-center">
              <Card className="bg-card border-border overflow-hidden w-full max-w-[280px]">
                <div className="aspect-[9/16] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <img
                    src="/13.jpg"
                    alt="Mobile query editor with syntax highlighting"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-card-foreground text-sm">
                    Query Editor
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xs">
                    Write MongoDB queries with mobile-optimized editor
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Document Viewer Screenshot */}
            <div className="flex flex-col items-center">
              <Card className="bg-card border-border overflow-hidden w-full max-w-[280px]">
                <div className="aspect-[9/16] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <img
                    src="/9.jpg"
                    alt="Mobile document viewer showing JSON structure"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-card-foreground text-sm">
                    Document Viewer
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xs">
                    View and edit documents with mobile-friendly JSON interface
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            {/* Edit Document Screenshot */}
            <div className="flex flex-col items-center">
              <Card className="bg-card border-border overflow-hidden w-full max-w-[280px]">
                <div className="aspect-[9/16] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <img
                    src="/11.jpg"
                    alt="Mobile document viewer showing JSON structure"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-card-foreground text-sm">
                    Edit Document
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xs">
                    View and edit documents with mobile-friendly JSON interface
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            {/* Edit Document Screenshot */}
            <div className="flex flex-col items-center">
              <Card className="bg-card border-border overflow-hidden w-full max-w-[280px]">
                <div className="aspect-[9/16] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <img
                    src="/12.jpg"
                    alt="Mobile document viewer showing JSON structure"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-card-foreground text-sm">
                    Theme Support
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xs">
                    Light / Dark / System theme supported
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* dark mode screenshots */}
          </div>
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
            <Link href="https://play.google.com/apps/testing/com.t2c.mongo_compas">
              Download Now
            </Link>
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
