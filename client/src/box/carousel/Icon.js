import Iconify from "../iconify";

// ----------------------------------------------------------------------

export function LeftIcon({ icon = "carbon:chevron-right", isRTL }) {
  return (
    <Iconify
      icon={icon}
      width={24}
      sx={{
        transform: " scaleX(-1)",
        ...(isRTL && {
          transform: " scaleX(1)",
        }),
      }}
    />
  );
}

export function RightIcon({ icon = "carbon:chevron-right", isRTL }) {
  return (
    <Iconify
      icon={icon}
      width={24}
      sx={{
        ...(isRTL && {
          transform: " scaleX(-1)",
        }),
      }}
    />
  );
}
