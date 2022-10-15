import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as yup from "yup";

import { LoadingIcon } from "@/components/elements/Loading/LoadingIcon";
import { emailLogin } from "@/utils/firebase";
import { useGetCreatorCredential } from "@/utils/globalState/credential";
import { pagesPath } from "@/utils/pathpida/$path";

type FormType = {
  mail: string;
  password: string;
};

const schema = yup.object({
  mail: yup.string().required("必須です"),
  password: yup.string().required("必須です"),
});

const SUCCESS_LOGIN = "ログインに成功しました";
const LOGIN_FAILED = "ログインに失敗しました";
const INVALID_EMAIL = "有効な電子メールアドレスを入力してください";
const USER_DISABLED = "利用できないアカウントです";
const USER_NOT_FOUND = "登録されていないアカウントです";
const WRONG_PASSWORD = "パスワードが間違っています";

export const LoginPageComponent = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { uid, loading } = useGetCreatorCredential();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ resolver: yupResolver(schema) });

  const handleLogin = handleSubmit(async (values) => {
    setSubmitting(true);
    const { error } = await emailLogin({
      email: values.mail,
      password: values.password,
    });

    if (error) {
      if (error.code == "auth/invalid-email") {
        toast.error(INVALID_EMAIL);
      } else if (error.code == "auth/user-disabled") {
        toast.error(USER_DISABLED);
      } else if (error.code == "auth/user-not-found") {
        toast.error(USER_NOT_FOUND);
      } else if (error.code == "auth/wrong-password") {
        toast.error(WRONG_PASSWORD);
      } else {
        toast.error(LOGIN_FAILED);
      }
      console.error(error?.message);
      setSubmitting(false);
      return;
    } else {
      toast.success(SUCCESS_LOGIN);
      router.push(pagesPath.line.$url());
    }
    setSubmitting(false);
  });

  useEffect(() => {
    if (uid) {
      router.push(pagesPath.line.$url());
    }
  }, [uid, router]);

  if (loading) return <LoadingIcon center height={126} />;

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 64px)"
    >
      <Grid item sx={{ marginBottom: 18, textAlign: "center" }}>
        <form>
          <Card variant="outlined" >
            <CardHeader title="ログイン" titleTypographyProps={{ variant: "h4", textAlign: 'center' }} />
            <CardContent>
              <TextField
                fullWidth
                label="mail"
                type="email"
                margin="normal"
                {...register("mail")}
                error={"mail" in errors}
                helperText={errors.mail?.message}
              />
              <TextField
                fullWidth
                label="password"
                type="password"
                margin="normal"
                {...register("password")}
                error={"password" in errors}
                helperText={errors.password?.message}
              />
            </CardContent>
            <CardActions>
              <LoadingButton
                variant="contained"
                size="large"
                loading={submitting}
                onClick={handleLogin}>
                ログイン
              </LoadingButton>
            </CardActions>
          </Card>
        </form >
        <Box sx={{ marginTop: 12 }}>
        </Box>
      </Grid>
    </Grid>
  );
};