import { Box } from "@mui/material";

function Tags({ items, align = "flex-start" }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        justifyContent: align,
      }}
    >
      {items.map((item, i) => (
        <Box
          key={i}
          sx={{
            px: 2,
            py: 1,
            borderRadius: 6,
            borderColor: "divider",
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "text.secondary",
            backgroundColor: "background.contrast",
            whiteSpace: "nowrap",
          }}
        >
          {item}
        </Box>
      ))}
    </Box>
  );
}

export default Tags;
