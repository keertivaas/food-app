import { Box, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TextFieldSearchBar = () => {
  return (
    <Box
      className="App"
      sx={{
        width: 400,
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
      }}
    >
      <Typography variant="h4" component={"h1"}>
        Search for food you want!
      </Typography>

      <form style={{ display: "flex", alignItems: "center" }}>
        <TextField
          id="search-bar"
          className="text"
          label="Search title"
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{
            width: 350,
            margin: "10px auto"
          }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>
    </Box>
  );
};

export default TextFieldSearchBar;