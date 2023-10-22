"use client";
import {
  LOGIN_MUTATION,
  REGISTER_MUTATION,
} from "@/app/api/graphql/mutations/registerMutations";
import { Form, Input, Checkbox, Button, notification } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import styles from "@/app/components/authComponents/Auth.module.scss";
import { LoginResponseDTO, RegisterFormDTO } from "@/app/api/dto/auth.dto";
import * as Api from "@/app/api";
import { setCookie } from "nookies";
import { useMutation } from "@apollo/client";

export const RegisterForm = () => {
  const [registerUser] = useMutation(REGISTER_MUTATION);
  const onSubmit = async (values: RegisterFormDTO) => {
    try {
      const { data } = await registerUser({
        variables: {
          email: values.email,
          username: values.username,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
      });
      location.href = "/";
    } catch (error) {
      console.error("Registration form", error);
    }
  };

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
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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
            Register in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
