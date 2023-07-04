import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Button, COLORS, Input, Loading, Notification } from "../atoms";
import { useForm, SubmitHandler } from "react-hook-form";
import { userApi } from "../apis";
import { useToken } from "../hooks";

type FormValues = {
  fullName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  className: string;
  password: string;
};

export const Signup: React.FC = () => {
  const { t } = useTranslation();
  const [showNoti, setShowNoti] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { setToken } = useToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    userApi
      .signup(data)
      .then((userInfo) => {
        setToken && setToken(userInfo.token);
        // Optionally, you can also set the user details in the state or context

        // Redirect the user to the desired page after signup
        // For example, navigate("/user/dashboard");
      })
      .catch((error: Error | "Error") => {
        console.log(error);
        if (error?) {
          setErrorMessage(t("An Error Occurred"));
        } else setErrorMessage(t("An Error Occurred. Please Try Again"));
        setShowNoti(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Loading isLoading={loading}>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            label={t("Full Name")}
            type="text"
            variant="box"
            {...register("fullName", { required: true })}
            errorMessage={
              errors?.fullName?.type === "required"
                ? t("This Is a Required Field")
                : undefined
            }
          />
          <StyledInput
            label={t("Date of Birth")}
            type="text"
            variant="box"
            {...register("dateOfBirth", { required: true })}
            errorMessage={
              errors?.dateOfBirth?.type === "required"
                ? t("This Is a Required Field")
                : undefined
            }
          />
          <StyledInput
            label={t("Email")}
            type="text"
            variant="box"
            {...register("email", { required: true })}
            errorMessage={
              errors?.email?.type === "required"
                ? t("This Is a Required Field")
                : undefined
            }
          />
          <StyledInput
            label={t("Phone Number")}
            type="text"
            variant="box"
            {...register("phoneNumber", { required: true })}
            errorMessage={
              errors?.phoneNumber?.type === "required"
                ? t("This Is a Required Field")
                : undefined
            }
          />
          <StyledInput
            label={t("Class Name")}
            type="text"
            variant="box"
            {...register("className", { required: true })}
            errorMessage={
              errors?.className?.type === "required"
                ? t("This Is a Required Field")
                : undefined
            }
          />
          <StyledInput
            label={t("Password")}
            type="password"
            variant="box"
            {...register("password", { required: true })}
            errorMessage={
              errors?.password?.type === "required"
                ? t("This Is a Required Field")
                : undefined
            }
          />
          <div style={{ padding: "12px 0 32px 0" }}>
            <Button block type="submit">
              {t("Signup")}
            </Button>
          </div>
        </Form>
        <Notification
          type="error"
          show={showNoti}
          onClose={() => setShowNoti(false)}
          title={t("Error")}
          message={errorMessage}
        />
      </Wrapper>
    </Loading>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.primary100};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 65%;
  margin-top: 48px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 32px;
`;
