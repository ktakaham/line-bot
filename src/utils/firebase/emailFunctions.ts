import type { FirebaseError } from "@firebase/app";

import { fireAuth } from "./config";

type Props = {
  email: string;
  password: string;
};

type EmailUpdateProps = {
  email: string;
};

type passwordUpdateProps = {
  password: string;
};

export const emailSignup = async ({ email, password }: Props) => {
  return await fireAuth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      return { user: res.user, error: undefined };
    })
    .catch((err: FirebaseError) => {
      return { user: undefined, error: err };
    });
};

export const emailLogin = async ({ email, password }: Props) => {
  return await fireAuth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      return { user: res.user, error: undefined };
    })
    .catch((err: FirebaseError) => {
      return { user: undefined, error: err };
    });
};

export const emailUpdate = async ({ email }: EmailUpdateProps) => {
  if (fireAuth.currentUser?.email !== email) {
    await fireAuth.currentUser?.updateEmail(email);
  }
};

export const passwordUpdate = async ({ password }: passwordUpdateProps) => {
  return await fireAuth
    .currentUser?.updatePassword(password);
};