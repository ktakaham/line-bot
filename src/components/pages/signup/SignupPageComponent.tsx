import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as yup from "yup";

import { LoadingIcon } from "@/components/elements/Loading/LoadingIcon";
// import { useInsertProjectOwnerMutation } from "@/utils/apollo/generated";
import { checkAuthToken, emailSignup } from "@/utils/firebase";
import { useSetCreatorAccount } from "@/utils/globalState/";
import { useGetCreatorCredential } from "@/utils/globalState/";
import { pagesPath } from "@/utils/pathpida/$path";

const SIGNUP_ERROR = "サインアップに失敗しました";
const ALREADY_SIGNED_UP = "すでに登録されているメールアドレスです";
const INVALID_EMAIL = "有効な電子メールアドレスを入力してください";
const WEAK_PASSWORD = "パスワード要件を満たしていません"; //文言改善要
const SUCCESS_SIGNUP = "サインアップに成功しました";

type FormType = {
  name: string;
  mail: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  mail: yup.string().required("必須です"),
  password: yup.string().required("必須です"),
  confirmPassword: yup
    .string()
    .required("必須です")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const SignupPageComponent = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState<boolean>(false);
  // const [registerCreator] = useInsertProjectOwnerMutation();
  const setCreator = useSetCreatorAccount();
  const { uid, loading } = useGetCreatorCredential();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ resolver: yupResolver(schema) });

  const handleSignup = handleSubmit(async (values) => {
    setSubmitting(true);
    const { user, error } = await emailSignup({
      email: values.mail,
      password: values.password,
    });

    if (error) {
      if (error.code == "auth/email-already-in-use") {
        toast.error(ALREADY_SIGNED_UP);
      } else if (error.code == "auth/invalid-email") {
        toast.error(INVALID_EMAIL);
      } else if (error.code == "auth/operation-not-allowed") {
        toast.error(WEAK_PASSWORD);
      } else if (error.code == "auth/weak-password") {
        toast.error(SIGNUP_ERROR);
      } else {
        toast.error(SIGNUP_ERROR);
      }
      console.error(error?.message);
      setSubmitting(false);
      return;
    }

    if (!user?.uid) {
      toast.error(SIGNUP_ERROR);
      setSubmitting(false);
      return;
    }

    //jwtトークン生成確認待機
    await checkAuthToken(user.uid);

    // registerCreator({
    //   variables: {
    //     projectOwnerId: user.uid,
    //     projectOwnerName: values.name,
    //     mail: values.mail,
    //     projectId: user.uid,
    //     projectName: values.name
    //   },
    //   onCompleted: ({ insertProjectOwnersOne }) => {
    //     setSubmitting(false);
    //     setCreator({
    //       projectOwner: insertProjectOwnersOne,
    //       loading: false,
    //       error: undefined,
    //     });
    //     toast.success(SUCCESS_SIGNUP);
    //   },
    //   onError: (error) => {
    //     console.error(error);
    //     toast.error(SIGNUP_ERROR);
    //     setSubmitting(false);
    //   },
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
        <FormControl>
          <Card variant="outlined">
            <CardHeader
              title="ようこそ"
              titleTypographyProps={{ variant: "h3", textAlign: "center" }}
            />
            <CardContent>
              <TextField
                label="mail"
                type="email"
                margin="normal"
                fullWidth
                {...register("mail")}
                error={"mail" in errors}
                helperText={errors.mail?.message}
              />
              <TextField
                label="password"
                type="password"
                margin="normal"
                fullWidth
                {...register("password")}
                error={"password" in errors}
                helperText={errors.password?.message}
              />
              <TextField
                label="password confirm"
                type="password"
                margin="normal"
                fullWidth
                {...register("confirmPassword")}
                error={"confirmPassword" in errors}
                helperText={errors.confirmPassword?.message}
              />
            </CardContent>
            <CardActions>
              <LoadingButton
                variant="contained"
                loading={submitting}
                onClick={handleSignup}
                size="large"
              >
                サインアップ
              </LoadingButton>
            </CardActions>
          </Card>
        </FormControl>
      </Grid>
    </Grid>
  );
};
