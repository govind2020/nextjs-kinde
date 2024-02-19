import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="container">
      <div>
        <LoginLink>Login in</LoginLink>
      </div>
      <div>
        <RegisterLink>Sign up</RegisterLink>
      </div>
    </div>
  );
}
