"use client";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "@/app/context/authContext";
import { useForm } from "@/app/utils/hooks";
import { useMutation } from "@apollo/client";
import { GraphQLError } from "graphql";

import {
  LOGIN_USER,
  REGISTER_USER,
} from "@/app/api/graphql/mutations/registerMutations";
import { Form, Input, Checkbox, Button, notification } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import styles from "@/app/components/authComponents/Auth.module.scss";
import { LoginResponseDTO, RegisterFormDTO } from "@/app/api/dto/auth.dto";
import * as Api from "@/app/api";
import { setCookie } from "nookies";
export const RegisterForm = () => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState<readonly GraphQLError[]>([]);
  function registerUserCallback() {
    console.log("Callback hit");
    registerUser();
  }

  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, { data: { registerUser: userData } }) {
      console.log(userData);
      context.login(userData);
      location.href = "/";
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { registerInput: values },
  });

  const errorNotifications = errors.map((error, index) => (
    <div key={index}>
      <>{notification.error({ message: error.message })}</>
    </div>
  ));

  return (
    <div className={styles.formBlock}>
      <Form name="basic" labelCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            name="email"
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            name="username"
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: "Please input your Confirm Password!" },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="confirmPassword"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onSubmit={onSubmit}
          >
            Register in
          </Button>
          {errorNotifications}
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
