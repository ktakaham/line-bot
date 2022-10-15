import { useState } from "react";
import {
  Card,
  FormControl,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Stack,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { Upload } from "../upload";
import axios from "axios";

type FormType = {
  text: string;
};

const LINE_SUCCESS = "送信完了しました✨";

const schema = yup.object({
  text: yup.string().required("必須です"),
});

export const LinePageComponent = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ resolver: yupResolver(schema) });

  const sendLine = handleSubmit(async (values) => {
    setSubmitting(true);
    axios
      .post("/api/post", {
        message: values.text
      })
      .then((response) => {
        console.log(response.data);
        setSubmitting(false);
      });
  });
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 64px)"
    >
      <Grid item sx={{ textAlign: "center" }}>
        <Stack spacing={4}>
          <Upload campaignId="test" setImgUrl={setImgUrl} />
          <FormControl>
            <Card variant="outlined">
              <CardHeader
                title="LINE 送信"
                titleTypographyProps={{ variant: "h4", textAlign: "center" }}
              />
              <CardContent>
                <TextField
                  fullWidth
                  label="text"
                  type="text"
                  margin="normal"
                  value={imgUrl}
                  {...register("text",{value:imgUrl})}
                  error={"text" in errors}
                  helperText={errors.text?.message}
                />
              </CardContent>
              <CardActions>
                <LoadingButton
                  fullWidth
                  variant="contained"
                  size="large"
                  loading={submitting}
                  onClick={sendLine}
                >
                  送信
                </LoadingButton>
              </CardActions>
            </Card>
          </FormControl>
        </Stack>
      </Grid>
    </Grid>
  );
};
