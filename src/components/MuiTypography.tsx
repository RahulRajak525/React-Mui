import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading </Typography>
      <Typography variant="h2">h2 heading </Typography>
      <Typography variant="h3">h3 heading </Typography>
      <Typography variant="h4"component='h1' gutterBottom >h4 heading </Typography>
      <Typography variant="h5">h5 heading </Typography>
      <Typography variant="h6">h6 heading </Typography>

      <Typography variant="subtitle1"> subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2 </Typography>

      <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta molestias omnis reiciendis consectetur explicabo modi, vel labore unde quod deleniti nemo culpa perferendis? Repellat, sit? Accusamus ut mollitia nesciunt. </Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis qui delectus possimus adipisci dolorum nulla incidunt, aliquam eveniet accusantium, nostrum dignissimos asperiores vitae architecto eius recusandae hic laboriosam eaque? </Typography>
    </div>
  );
}
