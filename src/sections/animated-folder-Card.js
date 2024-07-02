import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

const ImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  '&:hover img': {
    transform: 'scale(1.3)',
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: 150,
  height: 'auto',
  transition: 'transform 0.3s ease-in-out',
}));

export default function FolderCard({ title, subheader }) {
  return (
    <Card sx={{ width:"100%"}}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link href="https://se.chaudharyanshul.com/" target="_blank">
              <ImageBox>
                <Image src="assets/folders/snowflake-datawarehousing.png" alt="Image 1"/>
              </ImageBox>
            </Link>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link href="https://de.chaudharyanshul.com/" target="_blank">
              <ImageBox>
                <Image src="assets/folders/data-pipeline-folder.png" alt="Image 2"/>
              </ImageBox>
            </Link>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link href="https://da.chaudharyanshul.com/" target="_blank">
              <ImageBox>
                <Image src="assets/folders/analysis-folder.png" alt="Image 3"/>
              </ImageBox>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

FolderCard.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string,
};