import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import IconOptions from "@/assets/icons/options-vertical.svg";

const Card = styled(Box)`
  padding: 20px;
  border-radius: 7px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const Name = styled(Typography)`
  font-size: 16px !important;
`;

const Date = styled(Typography)`
  color: #727f88;
  font-size: 11px !important;
  margin-bottom: 10px !important;
`;

const Description = styled(Typography)`
  font-size: 13px !important;
`;

const Index = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <Grid container alignItems="center" justifyContent="space-between" mt={0}>
        <Grid item xs={11.6}>
          <Name>Snacks</Name>
        </Grid>
        <Grid item xs={0.4}>
          <IconButton onClick={handleClick}>
            <Image
              width={16}
              height={16}
              priority
              src={IconOptions}
              alt="icon-options"
            />
          </IconButton>
          {/* Menu */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem sx={{ fontSize: "12.5px" }} onClick={handleClose}>
              Realizada
            </MenuItem>
            <MenuItem sx={{ fontSize: "12.5px" }} onClick={handleClose}>
              Eliminar
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Date>27 Diciembre 2023</Date>
      <Description>Tratar de comer 5 galletas pedigree al dia</Description>
    </Card>
  );
};

export default Index;
