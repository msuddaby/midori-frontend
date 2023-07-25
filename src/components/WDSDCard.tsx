import { Avatar, Box, Card, Divider, Typography } from "@mui/joy";

export default function WDSDCard() {
    return (
        <>
        <Card variant="outlined">
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 1,
              width: "300px",
              minHeight: "300px",
            }}>
              <Avatar src="https://via.placeholder.com/256" sx={{
                width: "72px",
                height: "72px",
              }} />
              <Divider sx={{m: 2}} />
              <Typography level="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis atque voluptatibus laudantium dicta aliquam
                dolores vero officia dolor quibusdam ad iste provident
                quisquam blanditiis ipsum quasi, delectus eligendi dolorem
                numquam.
              </Typography>
            </Box>
          </Card>
        </>
    )
}