import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { toast } from "react-hot-toast";

// import { useProjectOwnerByIdQuery } from "@/utils/apollo/generated";
import { fireAuth } from "@/utils/firebase";

const SUCCESS_LOGOUT = "ログアウトに成功しました";

//memo: 今ある処理は全て、開発で使うためだけの関数。後で消す。
export const Header = () => {
  const handleLogout = () => {
    fireAuth.signOut();
    toast.success(SUCCESS_LOGOUT);
  };

  // useProjectOwnerByIdQuery({
  //   variables: { projectOwnerId: uid || "" },
  //   skip: !uid,
  //   // onCompleted: ({ projectOwnersByPk }) => {
  //   //   console.dir(projectOwnersByPk);
  //   // }
  // });

  return (
    <AppBar elevation={0} color="inherit" position="static">
      <Toolbar>
        <div>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>

        <div style={{ flexGrow: 1 }}></div>
        <div>
          <>
            <IconButton onClick={handleLogout}>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </IconButton>
          </>
        </div>
      </Toolbar>
    </AppBar>
  );
};
