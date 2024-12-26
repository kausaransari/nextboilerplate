"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./styles.scss";
import { montserrat } from "@/app/fonts";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("./api/login-action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        router.push("/admin"); // Redirect after successful login
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen login-container">
      <div className="w-1/2 p-4 pr-[130px] flex items-center justify-end">
        <Image
          src="/images/login_left_img.svg"
          alt="Next.js logo"
          sizes="(max-width:768px) 200px, 200px,(max-width:1200px) 500px, 500px"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="w-1/2 p4 pl-[130px]  flex items-center bg-white">
        <div className="w-[95%] max-w-[400px]">
          <h1 className={`logintitle ${montserrat.style.fontFamily}`}>Login</h1>
          <p className="text-primarycolor mb-2">Welcome back!</p>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input"
                style={{ display: "block", width: "100%", padding: "0.5rem" }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                className="input"
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ display: "block", width: "100%", padding: "0.5rem" }}
              />
            </div>
            <Button
              variant="default"
              size="lg"
              disabled={loading}
              className="mt-2"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
