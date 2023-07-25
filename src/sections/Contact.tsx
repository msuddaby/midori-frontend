import { Box, Typography } from "@mui/joy";

export default function Contact() {
    return (
        <>
            <Box sx={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Typography level="h1" sx={{
                }}>
                    Talk to Midori
                </Typography>

            </Box>
        </>
    )
}