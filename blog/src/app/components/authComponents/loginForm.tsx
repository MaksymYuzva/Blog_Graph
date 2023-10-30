"use client";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/context/authContext";
import { useForm } from "@/app/utils/hooks";
import { useMutation } from "@apollo/client";
import { GraphQLError } from "graphql";

import { LOGIN_USER } from "@/app/api/graphql/mutations/registerMutations";

import { Form, Input, Checkbox, Button, notification } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import styles from "@/app/components/authComponents/Auth.module.scss";
import { LoginFormDTO } from "@/app/api/dto/auth.dto";
import { setCookie } from "nookies";

import * as Api from "@/app/api";
import error from "next/error";

export const LoginForm = () => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState<readonly GraphQLError[]>([]);
  function loginUserCallback() {
    console.log("Callback hit");
    loginUser();
  }

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
  });
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, { data: { loginUser: userData } }) {
      context.login(userData);
      location.href = "/";
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { loginInput: values },
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
          >
            Login
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
