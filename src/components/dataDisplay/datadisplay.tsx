import { Box, Divider, Paper, Stack, Typography } from "@mui/material";

function DisplayData(prop: any) {
  if (prop['data']) {
    return (
      <>
        {prop["data"][0]["meanings"].map((val: any) => (
          <Box sx={{ m: 2 }}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box>
                <Stack sx={{ p: 1 }}>
                  <Typography variant="h3">
                    {prop["data"][0]["word"]}
                  </Typography>
                </Stack>
                <Divider></Divider>
                <Stack
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <Typography>{prop["data"][0]["phonetic"]}</Typography>
                  <Typography variant="h6">{val["partOfSpeech"]}</Typography>
                </Stack>
                <Stack sx={{ p: 1 }}>
                  <Typography>{val["definitions"][0]["definition"]}</Typography>
                </Stack>
                <Stack sx={{ p: 1 }}>
                  <Typography>{val["definitions"][0]["example"]}</Typography>
                </Stack>
              </Box>
            </Paper>
          </Box>
        ))}
      </>
    );
  }
}

export default DisplayData;
