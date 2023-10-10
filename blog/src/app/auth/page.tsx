"use client";
import React from "react";
import { RegisterForm } from "@/app/components/authComponents/registerForm";
import { LoginForm } from "@/app/components/authComponents/loginForm";
import { Tabs } from "antd";

const AuthPage: React.FC = () => {
  return (
    <main style={{ width: 400, margin: "30px auto" }}>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Registration" key="1">
          <RegisterForm />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Login" key="2">
          <LoginForm />
        </Tabs.TabPane>
      </Tabs>
    </main>
  );
};

export default AuthPage;
