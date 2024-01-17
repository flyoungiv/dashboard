import * as React from 'react';
import './style.css'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { lightGreen, green, red, orange, grey } from '@mui/material/colors';

interface CountryData {
  countryCode: string;
  amount: string;
  country: string;
  color: any;
  positive: boolean;
  percent: string;
  sales: string;
}

const listItems: CountryData[] = [
  {
    countryCode: 'US',
    amount: '8,656',
    country: 'USA',
    color: green,
    positive: true,
    percent: '25.8',
    sales: '894'
  },
  {
    countryCode: 'UK',
    amount: '2,415',
    country: 'UK',
    color: red,
    positive: false,
    percent: '6.2',
    sales: '894'
  },
  {
    countryCode: 'IN',
    amount: '865',
    country: 'India',
    color: orange,
    positive: true,
    percent: '12.4',
    sales: '148'
  },
  {
    countryCode: 'JA',
    amount: '745',
    country: 'Japan',
    color: grey,
    positive: false,
    percent: '11.9',
    sales: '86'
  },
  {
    countryCode: 'KO',
    amount: '45',
    country: 'Korea',
    color: red,
    positive: true,
    percent: '16.2',
    sales: '42'
  },
]

const primaryListText = (item: CountryData) => (
  <div className="list-text-primary">
    <Typography variant="h6" component="h6">${item.amount}k</Typography>
    {item.positive ? <KeyboardArrowUpIcon sx={{ color: green['500'] }} /> : <KeyboardArrowDownIcon sx={{ color: red['500'] }} />}
    <Typography
      sx={{ color: item.positive ? green['500'] : red['500']}}
      variant="subtitle2" component="p">
        {item.percent}%
    </Typography>
  </div>
)

const secondaryListText = (country: any) => (
  <div className="list-text-secondary">{country}</div>
)

export default function TestList() {
  return <List sx={{ width: '100%' }}>
    {listItems.map((item => (
      <ListItem disableGutters className="box-header">
        <div className="box-header-title">
          <ListItemAvatar>
            <Avatar sx={{ color: item.color[500], bgcolor: item.color[100] }} >{item.countryCode}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={primaryListText(item)} secondary={secondaryListText(item.country)} />
        </div>
        <div>x</div>
      </ListItem>
    )))}
  </List>
}