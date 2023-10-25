import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const theme = createTheme({
    palette : {
        primary : {
            main : purple[500],
        },
        secondary : {
            main : purple[300],
        }
    },
    breakpoints : {
        values : {
            xs: 0,
            sm : 650,
            md : 950,
            lg : 1200,
            xl : 1536
        }
    }

})