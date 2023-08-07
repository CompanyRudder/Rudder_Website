import { Link as RouterLink, useNavigate } from "react-router-dom";
//@mui
import { alpha } from "@mui/material/styles";
import {
  Link,
  Stack,
  Drawer,
  Avatar,
  Divider,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
//hooks
import useResponsive from "../../hooks/useResponsive";
import useActiveLink from "../../hooks/useActiveLink";
//config
import { NAV } from "../../config-global";
//box
import Iconify from "../../box/iconify/Iconify";
import TextMaxLine from "../../box/text-max-line/TextMaxLine";

//navigations
const navigations = [
  {
    title: "포폴 작성(KR)",
    path: "/auth/write_kr",
    icon: <Iconify icon="carbon:edit" />,
  },
  {
    title: "포폴 리스트(KR)",
    path: "/auth/delete_kr",
    icon: <Iconify icon="carbon:list" />,
  },
  {
    title: "포폴 작성(EN)",
    path: "/auth/write_en",
    icon: <Iconify icon="carbon:edit" />,
  },
  {
    title: "포폴 리스트(EN)",
    path: "/auth/delete_en",
    icon: <Iconify icon="carbon:list" />,
  },
  {
    title: "실시간 방문자 확인",
    path: "/auth/visit",
    icon: <Iconify icon="carbon:document" />,
  },
];
export default function SideMenu({ open, onClose }) {
  const isMdUp = useResponsive("up", "md");
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("id");
    alert("로그아웃 되었습니다! 남의자리에서 사용할땐 꼭 로그아웃을 하자!");
    navigate("/");
  };
  const renderContent = (
    <Stack
      sx={{
        flexShrink: 0,
        borderRadius: 2,
        width: 1,
        ...(isMdUp && {
          width: NAV.W_DRAWER,
          border: (theme) =>
            `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        }),
      }}
    >
      <Stack spacing={2} sx={{ p: 3, pb: 2 }}>
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar src="" sx={{ width: 64, height: 64 }} />
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              typography: "caption",
              cursor: "pointer",
              "&:hover": { opacity: 0.72 },
            }}
          >
            <Iconify icon="carbon:edit" sx={{ mr: 1 }} />
            Change photo
          </Stack>
        </Stack>

        <Stack spacing={0.5}>
          <TextMaxLine variant="subtitle1" line={1}>
            automanix
          </TextMaxLine>
          <TextMaxLine
            variant="body2"
            line={1}
            sx={{ color: "text.secondary" }}
          >
            amx_biz@auto-manix.com
          </TextMaxLine>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack sx={{ my: 1, px: 2 }}>
        {navigations.map((item) => (
          <MenuItem key={item.title} item={item} />
        ))}
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack sx={{ my: 1, px: 2 }}>
        <ListItemButton
          sx={{
            px: 1,
            height: 44,
            borderRadius: 1,
          }}
        >
          <ListItemIcon>
            <Iconify icon="carbon:logout" />
          </ListItemIcon>
          <ListItemText
            primary="Go Home"
            primaryTypographyProps={{
              typography: "body2",
            }}
            onClick={() => navigate("/")}
          />
        </ListItemButton>
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />
      <Stack sx={{ my: 1, px: 2 }}>
        <ListItemButton
          sx={{
            px: 1,
            height: 44,
            borderRadius: 1,
          }}
        >
          <ListItemIcon>
            <Iconify icon="carbon:logout" />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              typography: "body2",
            }}
            onClick={logout}
          />
        </ListItemButton>
      </Stack>
    </Stack>
  );
  return (
    <>
      {isMdUp ? (
        renderContent
      ) : (
        <Drawer
          open={open}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              width: NAV.W_DRAWER,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

function MenuItem({ item }) {
  const { active } = useActiveLink(item.path);

  return (
    <Link
      component={RouterLink}
      key={item.title}
      to={item.path}
      color={active ? "primary" : "inherit"}
      underline="none"
    >
      <ListItemButton
        sx={{
          px: 1,
          height: 44,
          borderRadius: 1,
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          primary={item.title}
          primaryTypographyProps={{
            typography: "body2",
            ...(active && {
              typography: "subtitle2",
            }),
          }}
        />
      </ListItemButton>
    </Link>
  );
}
