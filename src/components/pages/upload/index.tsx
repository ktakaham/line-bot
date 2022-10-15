import { LoadingButton } from "@mui/lab";
import { Button, Typography } from "@mui/material/";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FirebaseError } from "@firebase/util";
import { toast } from "react-hot-toast";

import firebase, { storage } from "@/utils/firebase/config";
import { staticPath } from "@/utils/pathpida/$path";

interface UploadProps {
  campaignId?: string;
  setImgUrl?: any
}

const UPLOAD_SUCCESS = "アップロードが完了しました✨";

export const Upload = (props: UploadProps) => {
  const [myFiles, setMyFiles] = useState<File[]>([]);
  const [clickable, setClickable] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [src, setSrc] = useState("/dropimg.jpeg");

  const imgPath = (): string => {
    if (process.env.NEXT_PUBLIC_ENV === "production") {
      return `test_img`;
    } else {
      return `test_img`;
    }
  };

  if (props.campaignId) {
    const firebaseStorage = getStorage();
    const reference = ref(firebaseStorage, imgPath());
    getDownloadURL(reference)
      .then((src) => {
        setSrc(src);
      })
      .catch(() => {
        setSrc(staticPath.dropimg_jpeg);
      });
  }

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles[0]) return;

    try {
      setMyFiles([...acceptedFiles]);
      setClickable(true);
      handlePreview(acceptedFiles);
    } catch (error) {
      alert(error);
    }
  }, []);

  const onDropRejected = () => {
    alert("画像のみ受け付けることができます。");
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    onDropRejected,
  });

  const handleUpload = async () => {
    try {
      // アップロード処理
      setUploading(true);
      const uploadTask: any = storage.ref(imgPath()).put(myFiles[0]);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        null,
        (error: FirebaseError) => {
          setUploading(false);
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              console.error("許可がありません");
              break;

            case "storage/canceled":
              console.error("アップロードがキャンセルされました　");
              // User canceled the upload
              break;

            case "storage/unknown":
              console.error("予期せぬエラーが発生しました");
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        }, //エラー時
        () => {
          setUploading(false);
          toast.success(UPLOAD_SUCCESS);
          uploadTask.snapshot.ref
            .getDownloadURL()
            .then(function (downloadURL: string) {
              console.log("ダウンロードしたURL" + downloadURL);
              props.setImgUrl(downloadURL);
            });
        }
      ); //完了時
    } catch (error) {
      console.log("エラーキャッチ", error);
    }
  };

  const handlePreview = (files: any) => {
    if (files === null) {
      return;
    }
    const file = files[0];
    if (file === null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSrc(reader.result as string);
    };
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Upload your image</Typography>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div
            style={{ position: "relative", width: "400px", height: "300px" }}
          >
            {!myFiles || myFiles.length === 0 ? (
              //ローカルファイルがない場合
              <Image src={src} alt="banner" layout="fill" objectFit="contain" />
            ) : (
              <Image
                src={URL.createObjectURL(myFiles[0])}
                alt="banner"
                layout="fill"
                objectFit="contain"
              />
            )}
          </div>
        </div>
        <Button
          disabled={clickable}
          fullWidth
          type="button"
          onClick={open}
          style={{ marginTop: "16px" }}
          variant="contained"
          color="primary"
        >
          Select files
        </Button>
        <LoadingButton
          disabled={!clickable}
          loading={uploading}
          // type="submit"
          variant="contained"
          fullWidth
          style={{ marginTop: "16px" }}
          onClick={() => handleUpload()}
          color="primary"
        >
          UPLOAD
        </LoadingButton>
      </CardContent>
    </Card>
  );
};
