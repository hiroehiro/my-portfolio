import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import "devicon";

export default function InsetDividers() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "6px 60px" }}>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" align="center">
          フロントエンド
        </Typography>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Next.js" src="/icons/nextjs.svg" />
          </ListItemAvatar>
          <ListItemText
            primary="Next.js ★☆☆☆☆"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  使用期間 1ヶ月
                </Typography>
                {
                  " — フロントエンドの勉強のためにNext.jsでこのポートフォリオサイトを作りました"
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Typescript" src="/icons/typescript.svg" />
          </ListItemAvatar>
          <ListItemText
            primary="Typescript ★☆☆☆☆"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  使用期間 1ヶ月
                </Typography>
                {" — Typescriptでこのポートフォリオサイトは書かれています."}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" align="center">
          バックエンド
        </Typography>
        <ListItemButton onClick={handleClick}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="python" src="/icons/python.svg" />
            </ListItemAvatar>
            <ListItemText
              primary="Python ★★★★★"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    使用期間 5年
                  </Typography>
                  {
                    " — 普段使っている言語です．業務，コンペ，研究，個人開発等で用いています"
                  }
                </React.Fragment>
              }
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </ListItemButton>
        <Divider variant="inset" component="li" />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 8 }} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="pandas" src="/icons/pandas.svg" />
              </ListItemAvatar>
              <ListItemText
                primary="Pandas ★★★★☆"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      使用期間 3年
                    </Typography>
                    {" — 業務，データ分析コンペで用いています"}
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider variant="inset" component="li" />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 8 }} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="matplotlib" src="/icons/matplotlib.svg" />
              </ListItemAvatar>
              <ListItemText
                primary="Matplotlib ★★★★☆"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      使用期間 3年
                    </Typography>
                    {" — 業務，研究活動で用いています"}
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider variant="inset" component="li" />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 8 }} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="selenium" src="/icons/selenium.svg" />
              </ListItemAvatar>
              <ListItemText
                primary="Selenium ★★★★☆"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      使用期間 2年
                    </Typography>
                    {" — 個人開発でよく用います"}
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider variant="inset" component="li" />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 8 }} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="pytorch" src="/icons/pytorch.svg" />
              </ListItemAvatar>
              <ListItemText
                primary="PyTorch ★★☆☆☆"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      使用期間 2年
                    </Typography>
                    {
                      " — あまり使う機会はありませんでしたが，データ分析コンペ，研究活動で用いています"
                    }
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" align="center">
          ツール
        </Typography>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="github" src="/icons/github.svg" />
          </ListItemAvatar>
          <ListItemText
            primary="Git, Github ★★★☆☆"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  使用期間 2年
                </Typography>
                {" — チーム開発業務で用いています"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Docker" src="/icons/docker.svg" />
          </ListItemAvatar>
          <ListItemText
            primary="Docker ★★★☆☆"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  使用期間 2年
                </Typography>
                {" — 基本的に全ての作業はDockerで環境を立てるようにしています"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="slack" src="/icons/slack.svg" />
          </ListItemAvatar>
          <ListItemText
            primary="Slack API ★★★☆☆"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  使用期間 6ヶ月
                </Typography>
                {" — 個人開発で通知用に利用しました"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
}
